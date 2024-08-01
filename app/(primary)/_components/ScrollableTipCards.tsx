"use client";

import { IconBox, getElementList } from "@/components/common";
import { Card } from "@/components/ui";
import { useDragScroll } from "@/lib/hooks";
import { cnJoin } from "@/lib/utils/cn";
import { tipPlaceHolder } from "@/public/assets/images/landing-page";
import Image from "next/image";
import Link from "next/link";

function ScrollableTipCards() {
	const [CardList] = getElementList();

	const { dragScrollProps, dragContainerClasses, dragItemClasses } = useDragScroll<HTMLUListElement>();

	return (
		<CardList
			{...dragScrollProps}
			className={cnJoin(
				"mt-6 select-none gap-5 [align-items:safe_center] md:mt-14",
				dragContainerClasses
			)}
			each={[...Array(4).keys()]}
			render={(item) => (
				<Card
					as="li"
					key={item}
					className={cnJoin(
						`w-[161px] shrink-0 space-y-3 rounded-[16px] border-[1.4px] border-medinfo-light-1 pb-3
						md:w-[276px]`,
						dragItemClasses
					)}
				>
					<Card.Header>
						<Image
							className="min-h-[117px] rounded-t-[16px] object-cover md:max-h-[176px]"
							src={tipPlaceHolder as string}
							alt=""
							draggable={false}
							width={161}
							height={117}
						/>
					</Card.Header>

					<Card.Content className="px-3">Lorem ipsum dolor sit amet consectetur.</Card.Content>

					<Card.Footer className="px-3" asChild={true}>
						<Link href="/" className="flex items-center gap-4">
							Learn More
							<IconBox icon="material-symbols:play-arrow" className="text-[20px]" />
						</Link>
					</Card.Footer>
				</Card>
			)}
		/>
	);
}

export default ScrollableTipCards;
