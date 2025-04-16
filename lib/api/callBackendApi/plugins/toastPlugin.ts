import { type SuccessContext, definePlugin } from "@zayne-labs/callapi";
import { isBrowser } from "@zayne-labs/toolkit-core";
import { toast } from "sonner";

const toastPlugin = definePlugin(() => ({
	id: "toast",
	name: "toastPlugin",

	hooks: {
		onError: (ctx) => {
			const toastMeta = ctx.options.meta?.toast;

			const shouldSkipError =
				!toastMeta?.error
				|| toastMeta.errorsToSkip?.includes(ctx.error.name) // eslint-disable-next-line ts-eslint/prefer-nullish-coalescing
				|| toastMeta.errorsToSkipCondition?.(ctx.error);

			if (shouldSkipError) return;

			const errorMessage = ctx.error.message;

			if (!errorMessage) return;

			isBrowser() && toast.error(errorMessage);
		},

		onSuccess: (ctx: SuccessContext<{ message: string }>) => {
			const toastMeta = ctx.options.meta?.toast;

			const shouldSkipSuccess = !toastMeta?.success;

			if (shouldSkipSuccess) return;

			const successMessage = ctx.data.message;

			if (!successMessage) return;

			isBrowser() && toast.success(successMessage);
		},
	},
}));

export { toastPlugin };
