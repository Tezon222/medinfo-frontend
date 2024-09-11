"use client";

import { fetchSingleTip } from "@/lib/utils/fetchTips";
import Image from "next/image";
import { use } from "react";
import { Main } from "../../_components";
import ScrollableTipCards from "../ScrollableTipCards";

function TipExpandedPage({ params }: { params: { id: string } }) {
	const { data, error } = use(fetchSingleTip(params.id));

	if (error) {
		console.error(error.errorData);
		return null;
	}

	return (
		<Main className="flex w-full flex-col max-md:max-w-[400px]">
			<section className="h-[190px] w-[297px] lg:h-[410px] lg:w-[644px]">
				<Image
					src={data.imageUrl}
					className="size-full"
					priority={true}
					width={297}
					height={190}
					alt={data.imageAlt}
				/>
			</section>

			<section className="mt-8 flex flex-col gap-6 lg:mt-10 lg:gap-8">
				<h1 className="text-[32px] font-bold text-medinfo-primary-main lg:text-[60px]">
					Lice Spread Through Head-to-Head Contact
				</h1>

				<article className="flex flex-col gap-8 lg:flex-row lg:gap-[92px]">
					<div className="flex flex-col gap-4 lg:min-w-[616px] lg:gap-7">
						<h4
							className="text-[18px] font-medium text-medinfo-primary-main lg:text-[24px]
								lg:font-semibold"
						>
							Did You Know?
						</h4>
						<p>
							Lorem ipsum dolor sit amet consectetur. Ornare enim scelerisque enim fusce quam.
							Senectus pulvinar porttitor nec mauris neque faucibus amet ut. Egestas at libero
							egestas interdum malesuada. Eu nunc nascetur pharetra scelerisque cursus. Lectus vel
							lorem phasellus sit imperdiet eros. Senectus vitae sodales netus pellentesque duis
							adipiscing cursus.
						</p>
					</div>

					<div className="flex flex-col gap-4 lg:gap-7">
						<h4
							className="text-[18px] font-medium text-medinfo-primary-main lg:text-[24px]
								lg:font-semibold"
						>
							Preventive Measures
						</h4>
						<p>
							Lorem ipsum dolor sit amet consectetur. Ornare enim scelerisque enim fusce quam.
							Senectus pulvinar porttitor nec mauris neque faucibus amet ut. Egestas at libero
							egestas interdum malesuada. Eu nunc nascetur pharetra scelerisque cursus. Lectus vel
							lorem phasellus sit imperdiet eros. Senectus vitae sodales netus pellentesque duis
							adipiscing cursus.
						</p>
					</div>
				</article>
			</section>

			<section className="mt-14 flex flex-col items-center lg:mt-[92px]">
				<h2 className="text-center text-[28px] font-bold text-medinfo-primary-main lg:text-[52px]">
					Checkout Other Tips
				</h2>

				<ScrollableTipCards />
			</section>
		</Main>
	);
}
export default TipExpandedPage;
