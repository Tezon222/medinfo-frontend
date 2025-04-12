import { type CallApiParameters, type ResultModeUnion, createFetchClient } from "@zayne-labs/callapi";
import { toastPlugin } from "./plugins";

type GlobalMeta = {
	toast?: {
		error?: boolean;
		errorsToSkip?: string[];
		success?: boolean;
	};
};

declare module "@zayne-labs/callapi" {
	// eslint-disable-next-line ts-eslint/consistent-type-definitions
	interface Register {
		meta: GlobalMeta;
	}
}

// const BASE_BACKEND_URL = "https://medinfo-backend-xie7.onrender.com";

const HOST =
	process.env.NODE_ENV === "development" ? "http://localhost:8000" : "https://medical-info.vercel.app";

export const sharedFetchClient = createFetchClient({
	baseURL: `${HOST}/backend-api`,
	dedupeStrategy: "cancel",
	credentials: "include",
	plugins: [toastPlugin()],
});

export const callBackendApi = <
	TData = unknown,
	TError = unknown,
	TResultMode extends ResultModeUnion = ResultModeUnion,
>(
	...args: CallApiParameters<TData, TError, TResultMode>
) => {
	const [initUrl, config] = args;

	return sharedFetchClient(initUrl, {
		...config,

		meta: {
			...config?.meta,
			toast: {
				error: true,
				errorsToSkip: ["AbortError"],
				...config?.meta?.toast,
			},
		},
	} as typeof config);
};

export const callBackendApiForQuery = <TData = unknown>(
	...args: CallApiParameters<TData, false | undefined>
) => {
	const [initUrl, config] = args;

	return callBackendApi(initUrl, {
		resultMode: "onlySuccessWithException",
		throwOnError: true,
		...config,
	});
};
