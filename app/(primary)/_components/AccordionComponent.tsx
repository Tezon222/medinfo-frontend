"use client";
// FIXME - Change accordions component to another suitable one and then remove use client from this page`

import { getElementList } from "@/components/common";
import { ChevronDownIcon } from "@/components/icons";
import { Accordion } from "@/components/ui";

const FAQs = [
	{
		question: "Question 1",
		answer:
			"Lorem ipsum dolor sit amet consectetur. Proin tortor tortor varius tincidunt in commodo sagittis quam. Neque eget non urna pellentesque erat. Dui mus integer vitae cras libero dapibus adipiscing. Gravida ultrices tempor.",
	},
	{
		question: "Question 2",
		answer:
			"Lorem ipsum dolor sit amet consectetur. Proin tortor tortor varius tincidunt in commodo sagittis quam. Neque eget non urna pellentesque erat. Dui mus integer vitae cras libero dapibus adipiscing",
	},
	{
		question: "Question 3",
		answer:
			"Lorem ipsum dolor sit amet consectetur. Proin tortor torto tincidunt in commodo sagittis quam. Neque eget non urna pellentesque erat. Dui mus integer vitae cras libero dapibus adipiscing. Gravida ultrices tempor.",
	},
	{
		question: "Question 4",
		answer:
			"Lorem ipsum dolor sit ame Proin tortor tortor varius tincidunt in commodo sagittis quam. Neque eget non urna pellentesque erat. Dui mus integer vitae cras libero dapibus adipiscing",
	},
	{
		question: "Question 5",
		answer:
			"Lorem ipsum dolor sit amet consectetur tortor tortor varius tincidunt in commodo sagittis quam. Neque eget non urna pellentesque erat. Dui mus integer vitae cras libero dapibus adipiscing. Gravida ultrices tempor.",
	},
];


function AccordionComponent() {
	const [FAQList] = getElementList();

	return (
		<Accordion.Root type="single" collapsible={true} asChild={true}>
			<FAQList
				className="mt-6 grid w-full gap-2 md:mt-14 md:gap-4"
				each={FAQs}
				render={(FAQ) => (
					<Accordion.Item key={FAQ.question} value={FAQ.answer} asChild={true}>
						<li>
							<Accordion.Trigger
								icon={
									<span
										className="flex items-center justify-center rounded-full
											bg-medinfo-primary-main p-[10px] md:p-4"
									>
										<ChevronDownIcon className="size-4 md:size-6" />
									</span>
								}
								classNames={{
									base: `min-h-[68px] rounded-t-[16px] border-x border-t
									border-medinfo-primary-darker px-6 py-[15px] text-[22px]
									text-medinfo-primary-main data-[state=closed]:rounded-b-[16px]
									data-[state=closed]:border-b md:p-6 md:text-[32px] md:font-semibold`,
								}}
							>
								{FAQ.question}
							</Accordion.Trigger>
							<Accordion.Content
								className="rounded-b-[16px] border-x border-b border-medinfo-primary-darker px-6
									pb-6 pt-0"
							>
								<hr className="mb-4 h-[2px] bg-medinfo-secondary-main" />
								{FAQ.answer}
							</Accordion.Content>
						</li>
					</Accordion.Item>
				)}
			/>
		</Accordion.Root>
	);
}

export default AccordionComponent;
