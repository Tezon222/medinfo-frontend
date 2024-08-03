"use client";

import { IconBox, NavLink } from "@/components/common";
import { Button, Card } from "@/components/ui";
import { cnJoin } from "@/lib/utils/cn";
import libraryPlaceholder from "@/public/assets/images/library.svg";
import Image from "next/image";

export type TipCardProps = {
	type: "list" | "grid";
	id: number;
};

export function TipCard({ type, id }: TipCardProps) {
	return (
		<Card
			className={cnJoin(
				type === "grid" && "relative h-full max-lg:max-h-[176px]",
				type === "list" &&
					"flex w-full gap-[44px] rounded-[16px] border-2 border-medinfo-primary-main p-6"
			)}
		>
			<Card.Header>
				<Image
					className={cnJoin(
						"object-cover",
						type === "grid" && "h-full rounded-[7px] lg:max-w-[368px] lg:rounded-[16px]",
						type === "list" && "size-[68px] rounded-[4px] lg:size-[202px] lg:rounded-[12px]"
					)}
					src={libraryPlaceholder as string}
					alt=""
					priority={true}
					width={type === "grid" ? 161 : 68}
					height={type === "grid" ? 176 : 68}
				/>
			</Card.Header>

			<Card.Content
				className={cnJoin(
					"flex flex-col justify-between",
					type === "grid" &&
						`absolute bottom-[calc(-95px/2)] right-0 h-[95px] w-fit rounded-[16px] border-2
						border-medinfo-primary-main bg-white p-2 lg:bottom-[calc((400px-182px)/2)] lg:h-[182px]
						lg:max-w-[229px] lg:p-6`
				)}
			>
				<div>
					<h4
						className={cnJoin(
							"text-[18px] text-medinfo-primary-main",
							type === "grid" && "font-medium lg:text-[22px]",
							type === "list" && "text-[32px] lg:font-bold"
						)}
					>
						Title
					</h4>

					{type === "list" && (
						<p className="mt-[16px] hidden text-sm text-medinfo-dark-1 lg:block">
							A condition in which your blood sugar level is lower than normal
						</p>
					)}
				</div>

				{type === "grid" && (
					<p className="hidden text-sm text-medinfo-dark-1 lg:block">
						A condition in which your blood sugar level is lower than normal
					</p>
				)}

				<NavLink
					href={`tip/${id}`}
					className="inline-flex w-fit items-center gap-[14px] text-medinfo-primary-main lg:gap-4
						lg:text-[20px] lg:font-medium"
				>
					See more
					<IconBox icon="lucide:chevron-right" className="size-5 lg:size-6" />
				</NavLink>
			</Card.Content>
		</Card>
	);
}

export function AlternateTipCard({ id, type }: TipCardProps) {
	return (
		<Card
			className={cnJoin(
				type === "grid" && "max-w-[161px]",
				type === "list" &&
					`flex items-center gap-4 rounded-[16px] bg-medinfo-secondary-subtle p-3
					shadow-[0_4px_4px_hsl(0,0%,0%,0.12)]`
			)}
		>
			<Card.Header>
				<Image
					className={cnJoin(
						"object-cover",
						type === "grid" && "h-[132px] rounded-[7.5px]",
						type === "list" && "size-[92px] rounded-[6px]"
					)}
					src={libraryPlaceholder as string}
					alt=""
					priority={true}
					width={type === "grid" ? 161 : 92}
					height={type === "grid" ? 132 : 92}
				/>
			</Card.Header>

			<Card.Content
				className={cnJoin(
					"flex flex-col justify-between",
					type === "list" && "max-w-[210px] gap-1",
					type === "grid" && "mt-5 gap-2 rounded-[16px]"
				)}
			>
				<div className="flex justify-between">
					<h4 className={cnJoin("text-[18px] font-medium text-medinfo-primary-main")}>Title 1</h4>

					{type === "list" && (
						<Button unstyled={true} className="active:scale-[1.02]">
							<IconBox icon="radix-icons:cross-circled" className="size-5" />
						</Button>
					)}
				</div>

				<p className="text-xs text-medinfo-dark-1">
					Lorem ipsum dolor sit amet consectetur. Consequat sit sit tortor.
				</p>

				{type === "list" ? (
					<NavLink href={`/library/tip/${id}`} className="w-fit">
						<IconBox icon="akar-icons:link-out" className="size-5" />
					</NavLink>
				) : (
					<NavLink
						href={`/library/tip/${id}`}
						className="inline-flex w-fit items-center gap-[14px] text-medinfo-primary-main"
					>
						See more
						<IconBox icon="lucide:chevron-right" className="size-5" />
					</NavLink>
				)}
			</Card.Content>
		</Card>
	);
}
