import { type SuccessContext, definePlugin } from "@zayne-labs/callapi";
import { toast } from "sonner";

const toastPlugin = definePlugin(() => ({
	id: "toast",
	name: "toastPlugin",

	hooks: {
		onError: (ctx) => {
			const toastMeta = ctx.options.meta?.toast;

			if (!toastMeta?.error || toastMeta.errorsToSkip?.includes(ctx.error.name)) return;

			const errorMessage = ctx.error.message;

			errorMessage && toast.error(errorMessage);
		},

		onSuccess: (ctx: SuccessContext<{ message: string }>) => {
			const successMessage = ctx.data.message;

			const shouldDisplayToast = Boolean(successMessage) && ctx.options.meta?.toast?.success;

			if (!shouldDisplayToast) return;

			toast.success(successMessage);
		},
	},
}));

export { toastPlugin };
