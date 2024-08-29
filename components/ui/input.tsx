"use client";

import { cnMerge } from "@/lib/utils/cn";

export type InputProps<TType extends React.HTMLInputTypeAttribute | "textarea"> = TType extends "textarea"
	? React.ComponentPropsWithRef<"textarea"> & { type?: TType }
	: Omit<React.ComponentPropsWithRef<"input">, "type"> & { type?: TType };

const inputTypesWithoutFullWith = new Set<React.HTMLInputTypeAttribute>(["checkbox", "radio"]);

function Input<TType extends React.HTMLInputTypeAttribute | "textarea">(props: InputProps<TType>) {
	const { className, type = "text", ...restOfProps } = props;

	const Element = (type === "textarea" ? "textarea" : "input") as string;

	return (
		<Element
			type={type}
			className={cnMerge(
				!inputTypesWithoutFullWith.has(type) && "flex w-full",
				`text-sm file:border-0 file:bg-transparent placeholder:text-shadcn-muted-foreground
				focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50`,
				className
			)}
			{...restOfProps}
		/>
	);
}

export default Input;
