"use client";

import type { ForwardedRefType, Prettify } from "@/lib/type-helpers/global-type-helpers";
import { forwardRef } from "react";
import { type VariantProps, tv } from "tailwind-variants";
import { Slot } from "../common/Slot";

// prettier-ignore
export type ButtonProps = Prettify<{
	/**
	 * Whether the button should be rendered as a child of another element
	 */
	asChild?: boolean;
	unstyled?: boolean;
} & VariantProps<typeof button> & React.ComponentPropsWithoutRef<"button">>

const button = tv(
	{
		base: "flex items-center justify-center rounded-[8px]",

		variants: {
			theme: {
				primary: "bg-medinfo-primary-main text-white",
				outline: "border-2 border-medinfo-primary-main bg-transparent text-medinfo-primary-main",
				"outline-inverted": "border-2 border-white bg-transparent text-white",
			},
			size: {
				small: "size-12 md:size-16",
				medium: "px-6 py-3 text-base md:px-8 md:py-[18px] md:text-[20px]",
			},
		},

		defaultVariants: {
			theme: "primary",
			size: "medium",
		},
	},
	{
		responsiveVariants: ["md", "lg"],
	}
);

function Button(props: ButtonProps, ref: ForwardedRefType<HTMLButtonElement>) {
	const {
		asChild,
		children,
		unstyled,
		className,
		type = "button",
		theme,
		size,
		...otherValidBtnProps
	} = props;

	const Component = asChild ? Slot : "button";

	const BTN_CLASSES = !unstyled ? button({ theme, size, className }) : className;

	return (
		<Component ref={ref} type={type} className={BTN_CLASSES} {...otherValidBtnProps}>
			{children}
		</Component>
	);
}

export default forwardRef(Button);
