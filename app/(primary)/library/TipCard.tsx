"use client";

import { IconBox } from "@/components/common";
import { Card } from "@/components/ui";
import { cnJoin } from "@/lib/utils/cn";
import libraryPlaceholder from "@/public/assets/images/library.svg";
import Image from "next/image";
import Link from "next/link";

function TipCard({ type }: { type: "list" | "grid" }) {
	return (
		<Card
			className={cnJoin(
				"w-full",
				type === "list" && "flex gap-[44px] rounded-[16px] border-2 border-medinfo-primary-main p-6"
			)}
		>
			<Card.Header>
				<Image
					className={cnJoin(
						"object-cover",
						type === "grid" && "h-[176px] rounded-[7px]",
						type === "list" && "aspect-square w-[68px] rounded-[4px]"
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
					"grid",
					type === "list" && "content-between",
					type === "grid" &&
						`relative z-[1] ml-auto mt-[calc(-95px/2)] h-[95px] w-max justify-between rounded-[16px]
						border-2 border-medinfo-primary-main bg-white pl-2 pt-2`
				)}
			>
				<h4 className="text-[18px] font-medium text-medinfo-primary-main">Title</h4>

				<Link href="/" className="inline-flex items-center gap-[14px] text-medinfo-primary-main">
					See more
					<IconBox icon="lucide:chevron-right" className="size-5" />
				</Link>
			</Card.Content>
		</Card>
	);
}

export default TipCard;
