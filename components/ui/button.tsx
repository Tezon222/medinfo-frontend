"use client";

import type { Prettify } from "@/lib/type-helpers/global-type-helpers";
import { type VariantProps, tv } from "tailwind-variants";
import { Slot } from "../common";

// prettier-ignore
export type ButtonProps = Prettify<{
	asChild?: boolean;
	unstyled?: boolean;
} & VariantProps<typeof button> & React.ComponentPropsWithRef<"button">>;

const button = tv(
	{
		base: `flex items-center justify-center rounded-[8px] [transition:border-radius_250ms_ease]
		hover:shadow-[0_4px_4px_0_hsl(0,0%,0%,0.12)]`,

		variants: {
			theme: {
				primary: `bg-medinfo-primary-main text-white hover:bg-medinfo-primary-darker
				active:bg-medinfo-primary-lighter`,

				"primary-inverted": "bg-white text-medinfo-primary-main",

				secondary: `border-2 border-medinfo-primary-main bg-transparent text-medinfo-primary-main
				hover:border-medinfo-primary-darker active:border-medinfo-primary-lighter
				active:text-medinfo-primary-lighter`,

				"secondary-inverted": "border-2 border-white bg-transparent text-white",
			},

			size: {
				icon: "size-12 md:size-16",
				medium: `h-[48px] w-[105px] text-base md:h-[64px] md:w-[135px] md:text-[20px]
				md:font-medium`,
				large: "h-[48px] w-full text-base",
			},

			disabled: {
				true: `cursor-not-allowed border-2 border-medinfo-dark-4 bg-medinfo-disabled
				text-medinfo-dark-4`,
			},
		},

		compoundVariants: [
			{
				size: "medium",
				className: "hover:rounded-[16px]",
			},
			{
				size: "icon",
				className: "hover:rounded-[50%]",
			},
		],

		defaultVariants: {
			theme: "primary",
			size: "medium",
		},
	},
	{
		responsiveVariants: ["md", "lg"],
	}
);

function Button(props: ButtonProps) {
	const {
		asChild,
		children,
		unstyled,
		className,
		type = "button",
		theme,
		size,
		...extraButtonProps
	} = props;

	const Component = asChild ? Slot : "button";

	const BTN_CLASSES = !unstyled
		? button({ theme, size, className, disabled: extraButtonProps.disabled })
		: className;

	return (
		<Component type={type} className={BTN_CLASSES} {...extraButtonProps}>
			{children}
		</Component>
	);
}

export default Button;
