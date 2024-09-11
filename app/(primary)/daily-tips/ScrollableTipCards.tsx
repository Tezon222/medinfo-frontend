"use client";

import { getElementList } from "@/components/common";
import { cnJoin } from "@/lib/utils/cn";
import { useDragScroll } from "@zayne-labs/toolkit/react";
import DailyTipCard from "./DailyTipCard";
import { useEffect, useState } from "react";
import { callBackendApi } from "@/lib/utils/callBackendApi";

function ScrollableTipCards() {
	const [CardList] = getElementList();

	const { dragScrollProps, dragContainerClasses, dragItemClasses } = useDragScroll<HTMLUListElement>();
	const [diseases, setDiseases] = useState<Array<{ id: string; title: string; imageUrl: string }>>([]);

	useEffect(() => {
		const getDiseases = async () => {
			const { data } = await callBackendApi<{
				data: Array<{ id: string; title: string; imageUrl: string }>;
			}>("/dailyTips/tips");
			setDiseases(data?.data ?? []);
		};
		void getDiseases();
	}, []);
	return (
		<CardList
			{...dragScrollProps}
			className={cnJoin(
				"mt-6 select-none gap-5 [align-items:safe_center] md:mt-14 md:justify-between",
				dragContainerClasses
			)}
			each={diseases}
			render={({ id, imageUrl, title }) => (
				<DailyTipCard key={id} id={id} imageUrl={imageUrl} title={title} className={dragItemClasses} />
			)}
		/>
	);
}

export default ScrollableTipCards;
