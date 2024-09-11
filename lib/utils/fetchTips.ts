import { cache } from "react";
import { callBackendApi } from "./callBackendApi";

type TipsArrayType = Array<{ id: string; title: string; imageUrl: string }>;

type SingleTip = {
	imageAlt: string;
	imageUrl: string;
	lastUpdated: string;
	mainBody: Array<{
		Title: string;
		Description: string;
		Content: string;
	}>;
};

export const fetchAllTips = cache(() =>
	callBackendApi<{ data: TipsArrayType }>("/dailyTips/tips", { cache: "force-cache" })
);

export const fetchSingleTip = cache((id: string) =>
	callBackendApi<SingleTip>(`/dailyTips/tip/${id}`, { cache: "force-cache" })
);
