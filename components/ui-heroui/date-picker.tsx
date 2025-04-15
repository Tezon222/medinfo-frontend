import { DatePicker as DatePickerPrimitive, type DatePickerProps } from "@heroui/date-picker";

export function DatePicker(props: DatePickerProps) {
	return <DatePickerPrimitive {...props} />;
}

/* <DatePicker
												aria-label="Date of appointment"
												hideTimeZone={true}
												selectorIcon={
													<IconBox icon="solar:calendar-outline" className="size-5" />
												}
												firstDayOfWeek="sun"
												showMonthAndYearPickers={true}
												variant="bordered"
												classNames={{
													input: `font-roboto text-[14px] font-medium text-medinfo-dark-4
													uppercase md:text-base`,
													inputWrapper: `h-[48px] gap-4 rounded-[8px] border-[1.4px]
													border-medinfo-primary-main px-4 py-3 md:h-[64px] md:py-5`,
												}}
												granularity="minute"
												// value={getDateFromString(field.value)}
												// eslint-disable-next-line ts-eslint/no-unnecessary-condition
												value={field.value ? parseZonedDateTime(field.value) : undefined}
												placeholderValue={now(getLocalTimeZone())}
												onChange={(date) => {
													if (!date) return;

													field.onChange(formatter.format(date.toDate(getLocalTimeZone())));
												}}
											/> */
