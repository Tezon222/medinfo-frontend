"use client";

import { IconBox } from "@/components/common";
import { Card } from "@/components/ui";
import libraryPlaceholder from "@/public/assets/images/library.svg";
import Image from "next/image";
import Link from "next/link";

function TipCard() {
	return (
		<Card className="w-[161px]">
			<Card.Header>
				<Image
					className="h-[176px] rounded-[7px] object-cover"
					src={libraryPlaceholder as string}
					alt=""
					priority={true}
					draggable={false}
					width={161}
					height={176}
				/>
			</Card.Header>

			<Card.Footer
				className="relative z-[1] ml-auto mt-[calc(-95px/2)] grid h-[95px] w-max justify-between
					rounded-[16px] border-2 border-medinfo-primary-main bg-white pl-2 pt-2"
			>
				<h4 className="text-[18px] font-medium text-medinfo-primary-main">Title</h4>

				<Link href="/" className="inline-flex items-center gap-[14px] text-medinfo-primary-main">
					See more
					<IconBox icon="lucide:chevron-right" className="size-5" />
				</Link>
			</Card.Footer>
		</Card>
	);
}

export default TipCard;
