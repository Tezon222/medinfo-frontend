"use client";

import { createCustomContext, useToggle } from "@/lib/hooks";
import type { PolymorphicPropsWithRef } from "@/lib/type-helpers";
import { cnMerge } from "@/lib/utils/cn";
import { getSlotElement } from "@/lib/utils/getSlotElement";
import { Fragment as ReactFragment, useEffect, useId, useMemo, useRef } from "react";
import {
	type Control,
	type ControllerFieldState,
	Controller as ControllerPrimitive,
	type ControllerProps,
	type ControllerRenderProps,
	type FieldPath,
	type FormState,
	FormProvider as HookFormProvider,
	type UseFormReturn,
	type UseFormStateReturn,
	useFormState,
	useFormContext as useHookFormContext,
} from "react-hook-form";
import { IconBox, Show, getElementList } from "../common";
import { loadIcons } from "../common/IconBox";
import Button from "./button";

type FieldValues = Record<string, unknown>;

type FormRootProps<TValues extends FieldValues> = React.ComponentPropsWithoutRef<"form"> & {
	methods: UseFormReturn<TValues>;
	children: React.ReactNode;
};

type ContextValue = {
	name: string;
	uniqueId: string;
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

function FormItem<TControl, TFieldValues extends FieldValues = FieldValues>(
	props: FormItemProps<TControl, TFieldValues>
) {
	const { children, className, name } = props;

	const uniqueId = useId();

	const value = useMemo(
		() => ({ name: String(name), uniqueId: `${String(name)}-(${uniqueId})` }),
		[name, uniqueId]
	);

	return (
		<FormItemProvider value={value}>
			<div className={cnMerge("flex flex-col", className)}>{children}</div>
		</FormItemProvider>
	);
}

function FormLabel({ children, className }: { children: string; className?: string }) {
	const { uniqueId } = useFormItemContext();

	return (
		<label htmlFor={uniqueId} className={className}>
			{children}
		</label>
	);
}

function FormInputGroup(props: React.ComponentPropsWithRef<"div"> & { displayOtherChildren?: boolean }) {
	const { children, className, displayOtherChildren, ...restOfProps } = props;
	const InputSlot = getSlotElement(children, FormInput);
	const LeftItemSlot = getSlotElement(children, FormInputLeftItem);
	const RightItemSlot = getSlotElement(children, FormInputRightItem);

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

export type FormInputPrimitiveProps<TFieldValues extends FieldValues = FieldValues> =
	React.ComponentPropsWithRef<"input"> & {
		withEyeIcon?: boolean;
		classNames?: { inputGroup?: string; input?: string };
		name?: keyof TFieldValues;
		errorClassName?: string;
	} & (
			| { control: Control<TFieldValues>; formState?: never }
			| { formState?: FormState<TFieldValues>; control?: never }
		);

const inputTypesWithoutFullWith = new Set<React.HTMLInputTypeAttribute>(["checkbox", "radio"]);

function FormInputPrimitive<TFieldValues extends FieldValues>(
	props: FormInputPrimitiveProps<TFieldValues>
) {
	const {
		className,
		classNames,
		errorClassName,
		ref,
		id: idPrimitive,
		name: namePrimitive,
		type = "text",
		withEyeIcon = true,
		control,
		formState,
		...restOfProps
	} = props;

	const contextValues = useFormItemContext();

	const name = namePrimitive ?? contextValues.name;

	const id = idPrimitive ?? contextValues.uniqueId;

	const getFormState = (control ? useFormState : () => formState) as typeof useFormState;

	const { errors } = (getFormState({ control }) as UseFormStateReturn<TFieldValues> | undefined) ?? {};

	const [isPasswordVisible, toggleVisibility] = useToggle(false);

	const shouldHaveEyeIcon = withEyeIcon && type === "password";

	const WrapperElement = shouldHaveEyeIcon ? FormInputGroup : ReactFragment;

	const WrapperElementProps = shouldHaveEyeIcon && {
		className: cnMerge("w-full", classNames?.inputGroup),
	};

	useEffect(() => {
		loadIcons([
			"material-symbols:visibility-outline-rounded",
			"material-symbols:visibility-off-outline-rounded",
		]);
	}, []);

	return (
		<WrapperElement {...WrapperElementProps}>
			<input
				id={id}
				name={name}
				type={type === "password" && isPasswordVisible ? "text" : type}
				className={cnMerge(
					!inputTypesWithoutFullWith.has(type) && "flex w-full",
					`text-sm file:border-0 file:bg-transparent placeholder:text-shadcn-muted-foreground
					focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50`,
					className,
					classNames?.input,
					name && errors?.[name] && errorClassName
				)}
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
		</WrapperElement>
	);
}

function FormInput(props: Omit<FormInputPrimitiveProps, "id" | "name" | "formState" | "control">) {
	const { name } = useFormItemContext();
	const { register, formState } = useHookFormContext();

	const { ref, ...restOfProps } = props;

	return (
		<FormInputPrimitive
			name={name}
			formState={formState}
			{...(Boolean(name) && register(name))}
			{...(Boolean(ref) && { ref })}
			{...restOfProps}
		/>
	);
}
FormInput.slot = Symbol.for("input");

type FormTextAreaPrimitiveProps<TFieldValues extends FieldValues = FieldValues> =
	React.ComponentPropsWithRef<"textarea"> & {
		name?: keyof TFieldValues;
		errorClassName?: string;
	} & (
			| { control: Control<TFieldValues>; formState?: never }
			| { formState?: FormState<TFieldValues>; control?: never }
		);

function FormTextAreaPrimitive<TFieldValues extends FieldValues>(
	props: FormTextAreaPrimitiveProps<TFieldValues>
) {
	const {
		className,
		errorClassName,
		ref,
		id: idPrimitive,
		name: namePrimitive,
		control,
		formState,
		...restOfProps
	} = props;

	const contextValues = useFormItemContext();

	const name = namePrimitive ?? contextValues.name;

	const id = idPrimitive ?? contextValues.uniqueId;

	const getFormState = (control ? useFormState : () => formState) as typeof useFormState;

	const { errors } = (getFormState({ control }) as UseFormStateReturn<TFieldValues> | undefined) ?? {};

	return (
		<textarea
			id={id}
			name={name}
			className={cnMerge(
				`w-full text-sm placeholder:text-shadcn-muted-foreground focus-visible:outline-none
				disabled:cursor-not-allowed disabled:opacity-50`,
				className,
				name && errors?.[name] && errorClassName
			)}
			{...restOfProps}
		/>
	);
}

function FormTextArea(props: Omit<FormTextAreaPrimitiveProps, "id" | "name" | "formState" | "control">) {
	const { name } = useFormItemContext();

	const { register, formState } = useHookFormContext();

	const { ref, ...restOfProps } = props;

	return (
		<FormTextAreaPrimitive
			name={name}
			formState={formState}
			{...(Boolean(name) && register(name))}
			{...(Boolean(ref) && { ref })}
			{...restOfProps}
		/>
	);
}

type FormControllerProps<TFieldValues> = Omit<
	ControllerProps<FieldValues, FieldPath<FieldValues>>,
	"name" | "control" | "render"
> & {
	render: (props: {
		field: Omit<ControllerRenderProps, "value"> & { value: TFieldValues };
		fieldState: ControllerFieldState;
		formState: UseFormStateReturn<FieldValues>;
	}) => React.ReactElement;
};

function FormController<TFieldValues = never>(props: FormControllerProps<TFieldValues>) {
	const { control } = useHookFormContext<FieldValues, FieldPath<FieldValues>>();
	const { name } = useFormItemContext();

	return (
		<ControllerPrimitive name={name} control={control} {...(props as Omit<ControllerProps, "name">)} />
	);
}

type FormErrorMessageProps<TControl, TFieldValues extends FieldValues> =
	| (TControl extends Control<infer TValues>
			? {
					type: "regular";
					errorField: keyof TValues;
					className?: string;
				}
			: {
					type: "regular";
					control?: Control<TFieldValues>; // == Here for type inference of errorField prop
					errorField: keyof TFieldValues;
					className?: string;
				})
	| {
			type: "root";
			className?: string;
			errorField: string;
	  };

function FormErrorMessage<TControl, TFieldValues extends FieldValues = FieldValues>(
	props: FormErrorMessageProps<TControl, TFieldValues>
) {
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
							"ml-[15px] list-item",
							paragraphClasses,
							className,
							index === 0 && "mt-1"
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

export const InputPrimitive = FormInputPrimitive;

export const InputGroup = FormInputGroup;

export const InputLeftItem = FormInputLeftItem;

export const InputRightItem = FormInputRightItem;

export const TextAreaPrimitive = FormTextAreaPrimitive;

export const TextArea = FormTextArea;

export const Controller = FormController;

export { Controller as ControllerPrimitive } from "react-hook-form";
