import {
	type CallApiParameters,
	type CallApiResultErrorVariant,
	type ResultModeUnion,
	createFetchClient,
} from "@zayne-labs/callapi";
import { toastPlugin } from "./plugins";

type GlobalMeta = {
	skipAuthHeaderAddition?: boolean;
	skipSessionCheck?: boolean;
	toast?: {
		error?: boolean;
		errorMessageField?: string;
		errorsToSkip?: Array<CallApiResultErrorVariant<unknown>["error"]["name"]>;
		errorsToSkipCondition?: (error: CallApiResultErrorVariant<unknown>["error"]) => boolean;
		success?: boolean;
	};
};

declare module "@zayne-labs/callapi" {
	// eslint-disable-next-line ts-eslint/consistent-type-definitions
	interface Register {
		meta: GlobalMeta;
	}
}

const BASE_BACKEND_URL = "https://medinfo-backend-xie7.onrender.com";

// const BACKEND_PROXY =
// 	process.env.NODE_ENV === "development"
// 		? "http://localhost:8000/backend-api"
// 		: "https://medical-info.vercel.app/backend-api";

export const sharedFetchClient = createFetchClient((ctx) => ({
	baseURL: BASE_BACKEND_URL,
	dedupeStrategy: "cancel",
	credentials: "include",
	plugins: [toastPlugin()],
	mergeMainOptionsManuallyFromBase: true,
	...ctx.options,

	meta: {
		...ctx.options.meta,
		toast: {
			error: true,
			errorsToSkip: ["AbortError"],
			...ctx.options.meta?.toast,
		},
	},
}));

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
