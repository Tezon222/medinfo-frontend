import Image from "next/image";
import MessageImage from "@/public/assets/images/message.png";

function Page() {
	return (
		<div className="px-[28px] py-[56px] lg:p-[40px]">
			<div
				className="flex flex-col-reverse gap-[32px] rounded-[16px] p-[16px] shadow-md lg:flex-row
					lg:gap-[77px] lg:p-[32px]"
			>
				<div className="w-full space-y-[12px]">
					<div
						className="flex flex-col gap-[16px] rounded-[8px] border border-solid
							border-medinfo-light-1 p-[16px] lg:flex-row lg:justify-between"
					>
						<div className="flex gap-[12px]">
							<Image src={MessageImage} alt="profile" className="size-[48px]" />
							<div>
								<h2 className="text-[20px]">Malaria parasites</h2>
								<p>Lorem ipsum dolor sit amet consectetur. Eget vivamus.</p>
							</div>
						</div>
						<div className="flex">
							<div className="rounded-[24px] bg-[#06C270] p-[6px] text-white">
								<p className="font-normal">2 new comments</p>
							</div>
						</div>
					</div>
					<div
						className="flex flex-col gap-[16px] rounded-[8px] border border-solid
							border-medinfo-primary-lighter p-[16px] lg:flex-row lg:justify-between"
					>
						<div className="flex gap-[12px]">
							<Image src={MessageImage} alt="profile" className="size-[48px]" />
							<div>
								<h2 className="text-[20px]">Malaria parasites</h2>
								<p>Lorem ipsum dolor sit amet consectetur. Eget vivamus.</p>
							</div>
						</div>
						<div className="flex">
							<div className="rounded-[24px] bg-[#06C270] p-[6px] text-white">
								<p>2 new comments</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Page;
