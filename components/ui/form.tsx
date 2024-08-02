"use client";

import { createCustomContext, useGetSlot, useToggle } from "@/lib/hooks";
import type { PolymorphicPropsWithRef } from "@/lib/type-helpers";
import { cnMerge } from "@/lib/utils/cn";
import React, { useEffect, useId, useMemo, useRef } from "react";
import {
	type Control,
	type ControllerFieldState,
	Controller as ControllerPrimitive,
	type ControllerProps,
	type ControllerRenderProps,
	type FieldPath,
	type FieldValues,
	FormProvider as HookFormProvider,
	type UseFormReturn,
	type UseFormStateReturn,
	useFormContext as useHookFormContext,
} from "react-hook-form";
import { IconBox, Show, getElementList } from "../common";
import Button from "./button";
import InputPrimitive, { type InputProps } from "./input";

type FormRootProps<TValues extends FieldValues> = React.ComponentPropsWithoutRef<"form"> & {
	methods: UseFormReturn<TValues>;
	children: React.ReactNode;
};

type FormItemProps<TControl, TFieldValues extends FieldValues> =
	TControl extends Control<infer TValues>
		? {
				name: keyof TValues;
				children: React.ReactNode;
				className?: string;
			}
		: {
				control?: Control<TFieldValues>;
				name: keyof TFieldValues;
				children: React.ReactNode;
				className?: string;
			};

type FormErrorMessageProps<TValues extends FieldValues> =
	| {
			type: "regular";
			control: Control<TValues>; // == Here for type inference of errorField prop
			errorField: keyof TValues;
			className?: string;
	  }
	| {
			type: "root";
			className?: string;
			errorField: string;
	  };

type ContextValue = {
	name: string;
	id: string;
};

const [FormItemProvider, useFormItemContext] = createCustomContext<ContextValue>({
	providerName: "FormItemProvider",
	hookName: "useFormItemContext",
});

function FormRoot<TValues extends FieldValues>(props: FormRootProps<TValues>) {
	const { children, className, methods, ...restOfProps } = props;

	return (
		<HookFormProvider {...methods}>
			<form className={cnMerge("flex flex-col", className)} {...restOfProps}>
				{children}
			</form>
		</HookFormProvider>
	);
}

function FormItem<TControl, TFieldValues extends FieldValues = FieldValues>(
	props: FormItemProps<TControl, TFieldValues>
) {
	const { children, className, name } = props;

	const uniqueId = useId();

	const value = useMemo(
		() => ({ name: String(name), id: `${String(name)}-(${uniqueId})` }),
		[name, uniqueId]
	);

	return (
		<FormItemProvider value={value}>
			<div className={cnMerge("flex flex-col", className)}>{children}</div>
		</FormItemProvider>
	);
}

function FormLabel({ children, className }: { children: string; className?: string }) {
	const { id } = useFormItemContext();

	return (
		<label htmlFor={id} className={className}>
			{children}
		</label>
	);
}

function FormInputGroup(props: React.ComponentPropsWithRef<"div"> & { displayOtherChildren?: boolean }) {
	const { children, className, displayOtherChildren, ...restOfProps } = props;
	const InputSlot = useGetSlot(children, FormInput);
	const LeftItemSlot = useGetSlot(children, FormInputLeftItem);
	const RightItemSlot = useGetSlot(children, FormInputRightItem);

	return (
		<div className={cnMerge("flex items-center justify-between gap-4", className)} {...restOfProps}>
			{LeftItemSlot}
			{!displayOtherChildren ? (InputSlot ?? children) : children}
			{RightItemSlot}
		</div>
	);
}
type FormSideItemProps = {
	children?: React.ReactNode;
	className?: string;
};

function FormInputLeftItem<TElement extends React.ElementType = "span">(
	props: PolymorphicPropsWithRef<TElement, FormSideItemProps>
) {
	const { children, className, ...restOfProps } = props;

	return (
		<span className={cnMerge("inline-block", className)} {...restOfProps}>
			{children}
		</span>
	);
}
FormInputLeftItem.slot = Symbol.for("leftItem");

function FormInputRightItem<TElement extends React.ElementType = "span">(
	props: PolymorphicPropsWithRef<TElement, FormSideItemProps>
) {
	const { as: Element = "span", children, className, ...restOfProps } = props;

	return (
		<Element className={cnMerge("inline-block", className)} {...restOfProps}>
			{children}
		</Element>
	);
}
FormInputRightItem.slot = Symbol.for("rightItem");

function FormInput<TType extends React.HTMLInputTypeAttribute | "textarea">(
	props: Omit<InputProps<TType>, "id" | "name"> & {
		errorClassName?: string;
		withEyeIcon?: boolean;
		classNames?: { inputGroup?: string; input?: string };
	}
) {
	const { id, name } = useFormItemContext();
	const { register, formState } = useHookFormContext();

	const [isPasswordVisible, toggleVisibility] = useToggle(false);

	const { className, classNames, errorClassName, ref, type, withEyeIcon = true, ...restOfProps } = props;

	const shouldHaveEyeIcon = withEyeIcon && type === "password";

	const Element = shouldHaveEyeIcon ? FormInputGroup : React.Fragment;

	// FIXME - Had to do this unsafe type coercion to shut TS up about props mismatch for now, figure out a better solution later
	const InputPrimitiveCoerced = InputPrimitive as unknown as string;

	return (
		<Element {...(shouldHaveEyeIcon && { className: cnMerge("w-full", classNames?.inputGroup) })}>
			<InputPrimitiveCoerced
				id={id}
				type={type === "password" && isPasswordVisible ? "text" : type}
				className={cnMerge(
					name && formState.errors[name] && errorClassName,
					className,
					classNames?.input
				)}
				{...(Boolean(name) && register(name))}
				{...(Boolean(ref) && { ref })}
				{...restOfProps}
			/>

			<Show when={shouldHaveEyeIcon}>
				<FormInputRightItem
					as={Button}
					unstyled={true}
					onClick={toggleVisibility}
					className="size-5 shrink-0 lg:size-6"
				>
					<IconBox
						icon={
							isPasswordVisible
								? "material-symbols:visibility-outline-rounded"
								: "material-symbols:visibility-off-outline-rounded"
						}
						className="size-full"
					/>
				</FormInputRightItem>
			</Show>
		</Element>
	);
}
FormInput.slot = Symbol.for("input");

type FormControllerProps = Omit<
	ControllerProps<FieldValues, FieldPath<FieldValues>>,
	"name" | "control" | "render"
> & {
	render: (props: {
		field: Omit<ControllerRenderProps, "value"> & { value: never };
		fieldState: ControllerFieldState;
		formState: UseFormStateReturn<FieldValues>;
	}) => React.ReactElement;
};

function FormController(props: FormControllerProps) {
	const { control } = useHookFormContext<FieldValues, FieldPath<FieldValues>>();
	const { name } = useFormItemContext();

	return (
		<ControllerPrimitive name={name} control={control} {...(props as Omit<ControllerProps, "name">)} />
	);
}

function FormErrorMessage<TStepData extends FieldValues>(props: FormErrorMessageProps<TStepData>) {
	const { className, errorField, type } = props;

	const { formState } = useHookFormContext();

	const [ErrorMessageList] = getElementList();

	const errorParagraphRef = useRef<HTMLParagraphElement>(null);

	useEffect(() => {
		if (!errorParagraphRef.current) return;

		if (!errorParagraphRef.current.classList.contains("animate-shake")) {
			errorParagraphRef.current.classList.add("animate-shake");
		}

		// Scroll to first error message
		if (Object.keys(formState.errors).indexOf(errorField as string) === 0) {
			errorParagraphRef.current.scrollIntoView({
				behavior: "smooth",
				block: "center",
			});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [formState.submitCount]);

	const message =
		type === "root"
			? formState.errors.root?.[errorField]?.message
			: (formState.errors[errorField]?.message as string | undefined);

	if (!message) {
		return null;
	}

	const paragraphClasses = "animate-shake pt-[0.3rem] text-[1.1rem] text-error";

	const splitterRegex = /, (?=[A-Z])/;

	const messageArray = message.split(splitterRegex);

	return (
		<Show when={splitterRegex.test(message)}>
			<ErrorMessageList
				each={messageArray}
				render={(messageItem, index) => (
					<p
						className={cnMerge(
							"ml-[1.5rem] list-item",
							paragraphClasses,
							className,
							index === 0 && "mt-[0.4rem]"
						)}
					>
						*{messageItem}
					</p>
				)}
			/>

			<Show.Fallback>
				<p
					ref={errorParagraphRef}
					className={cnMerge(paragraphClasses, className)}
					onAnimationEnd={() => errorParagraphRef.current?.classList.remove("animate-shake")}
				>
					*{message}
				</p>
			</Show.Fallback>
		</Show>
	);
}

export const Root = FormRoot;
export const Item = FormItem;
export const Label = FormLabel;
export const ErrorMessage = FormErrorMessage;
export const Input = FormInput;
export const InputGroup = FormInputGroup;
export const InputLeftItem = FormInputLeftItem;
export const InputRightItem = FormInputRightItem;
export const Controller = FormController;
// eslint-disable-next-line unicorn/prefer-export-from
export { ControllerPrimitive };
