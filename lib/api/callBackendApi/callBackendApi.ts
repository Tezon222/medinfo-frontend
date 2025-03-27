import { type CallApiParameters, type ResultModeUnion, createFetchClient } from "@zayne-labs/callapi";

const BASE_BACKEND_URL = "https://medinfo-backend-xie7.onrender.com";

export const sharedFetchClient = createFetchClient({
	baseURL: BASE_BACKEND_URL,
	dedupeStrategy: "cancel",
	credentials: "include",
});

export const callBackendApi = <
	TData = unknown,
	TError = unknown,
	TResultMode extends ResultModeUnion = ResultModeUnion,
>(
	...args: CallApiParameters<TData, TError, TResultMode>
) => {
	const [initUrl, config] = args;

	return sharedFetchClient(initUrl, config);
};

export const callBackendApiForQuery = <TData = unknown>(
	...args: CallApiParameters<TData, false | undefined>
) => {
	const [initUrl, config] = args;

	return sharedFetchClient(initUrl, {
		resultMode: "onlySuccessWithException",
		throwOnError: true,
		...config,
	});
};
