"use client";

import { getElementList } from "@/components/common";
import { cnJoin } from "@/lib/utils/cn";
import { useDragScroll } from "@zayne-labs/toolkit/react";
import DailyTipCard from "./DailyTipCard";

function ScrollableTipCards() {
	const [CardList] = getElementList();

	const { dragScrollProps, dragContainerClasses, dragItemClasses } = useDragScroll<HTMLUListElement>();

	return (
		<CardList
			{...dragScrollProps}
			className={cnJoin(
				"mt-6 select-none gap-5 [align-items:safe_center] md:mt-14 md:justify-between",
				dragContainerClasses
			)}
			each={[...Array(4).keys()]}
			render={(item) => <DailyTipCard key={item} id={item} className={dragItemClasses} />}
		/>
	);
}

export default ScrollableTipCards;
