"use client";

import { cnMerge } from "@/lib/utils/cn";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import type { InferProps } from "@zayne-labs/toolkit/react";
import { isValidElement } from "react";
import { IconBox } from "../common/IconBox";

function AccordionItem(props: InferProps<typeof AccordionPrimitive.Item>) {
	const { className, ...restOfProps } = props;

	return <AccordionPrimitive.Item className={className} {...restOfProps} />;
}

function AccordionTrigger(
	props: Omit<InferProps<typeof AccordionPrimitive.Trigger>, "className"> & {
		icon?: string | React.JSX.Element;
		classNames?: { base?: string; icon?: string };
	}
) {
	const { classNames, children, icon, ...restOfProps } = props;

	return (
		<AccordionPrimitive.Header className="flex">
			<AccordionPrimitive.Trigger
				className={cnMerge(
					`flex flex-1 items-center justify-between py-4 text-[14px] font-medium transition-all
					[&[data-state=open]>svg]:rotate-180`,
					classNames?.base
				)}
				{...restOfProps}
			>
				{children}

				{isValidElement(icon) && icon}

				{!isValidElement(icon) && (
					<IconBox
						icon={(icon as string | undefined) ?? "radix-icons:chevron-down"}
						className={cnMerge(
							"size-4 shrink-0 transition-transform duration-200",
							classNames?.icon
						)}
					/>
				)}
			</AccordionPrimitive.Trigger>
		</AccordionPrimitive.Header>
	);
}

function AccordionContent(props: InferProps<typeof AccordionPrimitive.Content>) {
	const { className, children, ...restOfProps } = props;

	return (
		<AccordionPrimitive.Content
			className={cnMerge(
				`overflow-hidden py-4 text-[14px] data-[state=closed]:animate-accordion-up
				data-[state=open]:animate-accordion-down`,
				className
			)}
			{...restOfProps}
		>
			{children}
		</AccordionPrimitive.Content>
	);
}

// eslint-disable-next-line react-refresh/only-export-components
export const { Root } = AccordionPrimitive;
export const Item = AccordionItem;
export const Trigger = AccordionTrigger;
export const Content = AccordionContent;
