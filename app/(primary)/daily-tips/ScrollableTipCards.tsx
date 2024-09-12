import type { TipsArrayType } from "@/lib/types";
import { callBackendApi } from "@/lib/utils/callBackendApi";
import { TipsCardList } from "./DailyTipCard";

async function ScrollableTipCards() {
	const { data, error } = await callBackendApi<{ data: TipsArrayType }>("/dailyTips/tips");

	if (error) {
		console.error(error.errorData);
		return null;
	}

	return <TipsCardList tips={data.data} />;
}

export default ScrollableTipCards;
