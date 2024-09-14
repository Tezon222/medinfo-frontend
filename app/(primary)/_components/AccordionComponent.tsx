"use client";
// FIXME - Change accordions component to another suitable one and then remove use client from this page`

import { getElementList } from "@/components/common";
import { ChevronDownIcon } from "@/components/icons";
import { Accordion } from "@/components/ui";

const FAQs = [
	{
		question: "What is MedInfo Nigeria?",
		answer:
			"MedInfo Nigeria is an online platform that provides access to reliable health information and connects users with certified doctors for consultations.",
	},
	{
		question: "Is the platform free to use?",
		answer:
			"Yes, accessing our health information library is free. However, consultations with healthcare professionals may require payment.",
	},
	{
		question: "How do I consult a doctor?",
		answer:
			"Simply sign up, select a specialist or sub-specialist, and book a virtual consultation through our platform.",
	},
	{
		question: "Can I use MedInfo Nigeria at any time?",
		answer:
			"Absolutely! Our platform is available 24/7, so you can access health information or consult a doctor whenever you need.",
	},
	{
		question: "Are the doctors on the platform certified?",
		answer:
			"Yes, all doctors and healthcare professionals on MedInfo Nigeria are verified and certified to ensure you receive trustworthy advice.",
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
