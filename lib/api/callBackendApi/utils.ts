import { callBackendApi } from "./callBackendApi";
import type { TipsResponse } from "./types";

export const getTipsResponse = () => {
	return callBackendApi<TipsResponse>("/dailyTips/tips", {
		// == Necessary to avoid RSC errors due to the non-serializable response object
		resultMode: "allWithoutResponse",
	});
};
