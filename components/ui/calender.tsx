/* eslint-disable react/no-nested-component-definitions */
"use client";

import { cnMerge } from "@/lib/utils/cn";
import type { InferProps } from "@zayne-labs/toolkit-react/utils";
import type { ExtractUnion } from "@zayne-labs/toolkit-type-helpers";
import { useEffect, useRef } from "react";
import { DayButton, DayPicker, getDefaultClassNames } from "react-day-picker";
import { IconBox } from "../common";
import { shadcnButtonVariants } from "./constants";



export function Calendar(props: InferProps<typeof DayPicker> & {
	buttonVariant?: ExtractUnion<typeof shadcnButtonVariants["variants"]["variant"], "keys">;
	classNames?: InferProps<typeof DayPicker>["classNames"] & { base?: string; };
}) {
	const {
		buttonVariant = "ghost",
		captionLayout = "label",
		className,
		classNames,
		components,
		formatters,
		showOutsideDays = true,
		...restOfProps
	} = props;

	const defaultClassNames = getDefaultClassNames();

	return (
		<DayPicker
			showOutsideDays={showOutsideDays}
			className={cnMerge(
				"bg-shadcn-background group/calendar p-3 [--cell-size:--spacing(8)] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent",
				String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
				String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
				className,
				classNames?.base,
			)}
			captionLayout={captionLayout}
			formatters={{
				formatMonthDropdown: (date) =>
					date.toLocaleString("default", { month: "short" }),
				...formatters,
			}}
			classNames={{
				...classNames,

				root: cnMerge("w-fit", defaultClassNames.root, classNames?.root),
				button_next: cnMerge(
					shadcnButtonVariants({ variant: buttonVariant }),
					"size-(--cell-size) aria-disabled:opacity-50 p-0 select-none",
					defaultClassNames.button_next,
					classNames?.button_next,
				),
				button_previous: cnMerge(
					shadcnButtonVariants({ variant: buttonVariant }),
					"size-(--cell-size) aria-disabled:opacity-50 p-0 select-none",
					defaultClassNames.button_previous,
					classNames?.button_previous,
				),
				caption_label: cnMerge(
					"select-none font-medium",
					captionLayout === "label"
						? "text-sm"
						: "rounded-md pl-2 pr-1 flex items-center gap-1 text-sm h-8 [&>svg]:text-shadcn-muted-foreground [&>svg]:size-3.5",
					defaultClassNames.caption_label,
					classNames?.caption_label,
				),
				day: cnMerge(
					"relative w-full h-full p-0 text-center [&:first-child[data-selected=true]_button]:rounded-l-md [&:last-child[data-selected=true]_button]:rounded-r-md group/day aspect-square select-none",
					defaultClassNames.day,
					classNames?.day,
				),
				disabled: cnMerge(
					"text-shadcn-muted-foreground opacity-50",
					defaultClassNames.disabled,
					classNames?.disabled,
				),
				dropdown: cnMerge("absolute inset-0 opacity-0", defaultClassNames.dropdown, classNames?.dropdown),
				dropdown_root: cnMerge(
					"relative has-focus:border-ring border border-shadcn-input shadow-xs has-focus:ring-shadcn-ring/50 has-focus:ring-[3px] rounded-md",
					defaultClassNames.dropdown_root,
					classNames?.dropdown_root,
				),
				dropdowns: cnMerge(
					"w-full flex items-center text-sm font-medium justify-center h-(--cell-size) gap-1.5",
					defaultClassNames.dropdowns,
					classNames?.dropdowns,
				),
				hidden: cnMerge("invisible", defaultClassNames.hidden, classNames?.hidden),
				month: cnMerge("flex flex-col w-full gap-4", defaultClassNames.month, classNames?.month),
				month_caption: cnMerge(
					"flex items-center justify-center h-(--cell-size) w-full px-(--cell-size)",
					defaultClassNames.month_caption,
					classNames?.month_caption,
				),
				months: cnMerge(
					"flex gap-4 flex-col md:flex-row relative",
					defaultClassNames.months,
					classNames?.months,
				),
				nav: cnMerge(
					"flex items-center gap-1 w-full absolute top-0 inset-x-0 justify-between",
					defaultClassNames.nav,
					classNames?.nav,
				),
				outside: cnMerge(
					"text-shadcn-muted-foreground aria-selected:text-shadcn-muted-foreground",
					defaultClassNames.outside,
					classNames?.outside,
				),
				range_end: cnMerge("rounded-r-md bg-shadcn-accent", defaultClassNames.range_end, classNames?.range_end),
				range_middle: cnMerge("rounded-none", defaultClassNames.range_middle, classNames?.range_middle),
				range_start: cnMerge(
					"rounded-l-md bg-shadcn-accent",
					defaultClassNames.range_start,
					classNames?.range_start,
				),
				today: cnMerge(
					"bg-shadcn-accent text-shadcn-primary-foreground rounded-md data-[selected=true]:rounded-none",
					defaultClassNames.today,
					classNames?.today,
				),
				week: cnMerge("flex w-full mt-2", defaultClassNames.week, classNames?.week),
				week_number: cnMerge(
					"text-[12.8px] select-none text-shadcn-muted-foreground",
					defaultClassNames.week_number,
					classNames?.week_number,
				),
				week_number_header: cnMerge(
					"select-none w-(--cell-size)",
					defaultClassNames.week_number_header,
					classNames?.week_number_header,
				),
				weekday: cnMerge(
					"text-shadcn-muted-foreground rounded-md flex-1 font-normal text-[12.8px] select-none",
					defaultClassNames.weekday,
					classNames?.weekday,
				),
				weekdays: cnMerge("flex", defaultClassNames.weekdays, classNames?.weekdays),
			}}
			components={{
				Chevron: ({ className: innerClassName, orientation, ...innerRestOfProps }) => {
					if (orientation === "left") {
						return (
							<IconBox icon="lucide:chevron-left" className={cnMerge("size-4", innerClassName)} {...innerRestOfProps} />
						);
					}

					if (orientation === "right") {
						return (
							<IconBox
								icon="lucide:chevron-right"
								className={cnMerge("size-4", innerClassName)}
								{...innerRestOfProps}
							/>
						);
					}

					return (
						<IconBox icon="lucide:chevron-down" className={cnMerge("size-4", innerClassName)} {...innerRestOfProps} />
					);
				},

				DayButton: CalendarDayButton,

				Root: ({ className: innerClassName, rootRef, ...innerRestOfProps }) => {
					return (
						<div
							data-slot="calendar"
							ref={rootRef}
							className={cnMerge(innerClassName)}
							{...innerRestOfProps}
						/>
					);
				},

				WeekNumber: ({ children, ...innerRestOfProps }) => {
					return (
						<td {...innerRestOfProps}>
							<div className="flex size-(--cell-size) items-center justify-center text-center">
								{children}
							</div>
						</td>
					);
				},

				...components,
			}}

			{...restOfProps}
		/>
	);
}

export function CalendarDayButton(props: InferProps<typeof DayButton>) {
	const { className, day, modifiers, ...restOfProps } = props;

	const defaultClassNames = getDefaultClassNames();

	const ref = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		if (!modifiers.focused) return;

		ref.current?.focus();
	}, [modifiers.focused]);

	return (
		<button
			type="button"
			ref={ref}
			data-day={day.date.toLocaleDateString()}
			data-selected-single={
				modifiers.selected &&
				!modifiers.range_start &&
				!modifiers.range_end &&
				!modifiers.range_middle
			}
			data-range-start={modifiers.range_start}
			data-range-end={modifiers.range_end}
			data-range-middle={modifiers.range_middle}
			className={cnMerge(
				"data-[selected-single=true]:bg-shadcn-primary data-[selected-single=true]:text-shadcn-primary-foreground data-[range-middle=true]:bg-shadcn-accent data-[range-middle=true]:text-shadcn-primary-foreground data-[range-start=true]:bg-shadcn-primary data-[range-start=true]:text-shadcn-primary-foreground data-[range-end=true]:bg-shadcn-primary data-[range-end=true]:text-shadcn-primary-foreground  group-data-[focused=true]/day:ring-shadcn-ring/30 dark:hover:text-shadcn-primary-foreground flex aspect-square size-auto w-full min-w-(--cell-size) flex-col gap-1 leading-none font-normal group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:ring-[3px] data-[range-end=true]:rounded-md data-[range-end=true]:rounded-r-md data-[range-middle=true]:rounded-none data-[range-start=true]:rounded-md data-[range-start=true]:rounded-l-md [&>span]:text-xs [&>span]:opacity-70",
				defaultClassNames.day,
				shadcnButtonVariants({ size: "icon", variant: "ghost" }),
				className
			)}
			{...restOfProps}
		/>
	);
}

