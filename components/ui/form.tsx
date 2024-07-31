"use client";

import { createCustomContext, useElementList, useSlot, useToggle } from "@/lib/hooks";
import type { PolymorphicPropsWithRef } from "@/lib/type-helpers";
import { cnMerge } from "@/lib/utils/cn";
import React, { useEffect, useId, useMemo, useRef } from "react";
import {
	type Control,
	type FieldValues,
	FormProvider as HookFormProvider,
	type UseFormReturn,
	useFormContext as useHookFormContext,
} from "react-hook-form";
import { IconBox, Show } from "../common";
import Button from "./button";
import InputPrimitive, { type InputProps } from "./input";

type FormRootProps<TValues extends FieldValues> = React.ComponentPropsWithoutRef<"form"> & {
	methods: UseFormReturn<TValues>;
	children: React.ReactNode;
};

type FormItemProps<TValues extends FieldValues> = {
	control?: Control<TValues>; // == Here for type inference of name prop for the time being
	name: keyof TValues;
	children: React.ReactNode;
	className?: string;
};

type FormErrorMessageProps<TValues extends FieldValues> =
	| {
			type: "regular";
			className?: string;
			control: Control<TValues>;
			errorField: keyof TValues;
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

function FormItem<TValues extends FieldValues>(props: FormItemProps<TValues>) {
	const { children, className, name } = props;

	const uniqueId = useId();

	const value = useMemo(
		() => ({ name: name as string, id: `${String(name)}-(${uniqueId})` }),
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
	const InputSlot = useSlot(children, FormInput);
	const LeftItemSlot = useSlot(children, FormInputLeftItem);
	const RightItemSlot = useSlot(children, FormInputRightItem);

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
	}
) {
	const { id, name } = useFormItemContext();
	const { register, formState } = useHookFormContext();

	const [isPasswordVisible, toggleVisibility] = useToggle(false);

	const { className, errorClassName, ref, type, withEyeIcon = true, ...restOfProps } = props;

	const shouldHaveEyeIcon = withEyeIcon && type === "password";

	const Element = shouldHaveEyeIcon ? FormInputGroup : React.Fragment;

	// TODO - Had to do this unsafe type coercion to shut TS up about props mismatch for now, figure out a better solution later
	const InputPrimitiveCoerced = InputPrimitive as unknown as string;

	return (
		<Element className="w-full">
			<InputPrimitiveCoerced
				id={id}
				type={type === "password" && isPasswordVisible ? "text" : type}
				className={cnMerge(name && formState.errors[name] && errorClassName, className)}
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

function FormErrorMessage<TStepData extends FieldValues>(props: FormErrorMessageProps<TStepData>) {
	const { className, errorField, type } = props;

	const { formState } = useHookFormContext();

	const [ErrorMessageList] = useElementList();

	const paragraphRef = useRef<HTMLParagraphElement>(null);

	useEffect(() => {
		if (!paragraphRef.current) return;

		if (paragraphRef.current.classList.contains("animate-shake")) return;

		paragraphRef.current.classList.add("animate-shake");
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
					ref={paragraphRef}
					className={cnMerge(paragraphClasses, className)}
					onAnimationEnd={() => paragraphRef.current?.classList.remove("animate-shake")}
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

export { Controller } from "react-hook-form";
