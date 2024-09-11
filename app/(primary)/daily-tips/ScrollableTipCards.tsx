"use client";

import { getElementList } from "@/components/common";
import { cnJoin } from "@/lib/utils/cn";
import { fetchAllTips } from "@/lib/utils/fetchTips";
import { useDragScroll } from "@zayne-labs/toolkit/react";
import { use } from "react";
import DailyTipCard from "./DailyTipCard";

function ScrollableTipCards() {
	const [CardList] = getElementList();

	const { dragScrollProps, dragContainerClasses, dragItemClasses } = useDragScroll<HTMLUListElement>();

	const { data, error } = use(fetchAllTips());

	if (error) {
		console.error(error.errorData);
		return null;
	}

	const { data: tips } = data;

	return (
		<CardList
			{...dragScrollProps}
			className={cnJoin("mt-6 select-none gap-5 md:mt-14 md:justify-between", dragContainerClasses)}
			each={tips}
			render={(tip) => (
				<DailyTipCard
					key={tip.id}
					id={tip.id}
					imageUrl={tip.imageUrl}
					title={tip.title}
					className={dragItemClasses}
				/>
			)}
		/>
	);
}

export default ScrollableTipCards;
