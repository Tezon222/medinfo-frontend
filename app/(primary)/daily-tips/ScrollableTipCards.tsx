"use client";

import { getElementList } from "@/components/common";
import { useDragScroll } from "@/lib/hooks";
import { cnJoin } from "@/lib/utils/cn";
import DailyTipCard from "./DailyTipCard";

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
			render={(item) => <DailyTipCard key={item} id={item} className={dragItemClasses} />}
		/>
	);
}

export default ScrollableTipCards;
