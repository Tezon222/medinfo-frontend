import { type MatchDoctorsResponse, callBackendApiForQuery } from "@/lib/api/callBackendApi";
import { queryOptions } from "@tanstack/react-query";
import type { CallApiExtraOptions } from "@zayne-labs/callapi";

export const matchDoctorsQuery = (options?: { formData?: Record<string, unknown> | null }) => {
	const { formData } = options ?? {};

	return queryOptions({
		enabled: Boolean(formData),
		queryKey: ["appointments", "match-doctors", formData],
		queryFn: () => {
			return callBackendApiForQuery<MatchDoctorsResponse>("/appointments/match-doctors", {
				method: "POST",
				body: formData,
			});
		},
		retry: false,
		staleTime: Infinity,
	});
};

export const bookAppointmentQuery = (
	options?: Pick<CallApiExtraOptions, "onSuccess"> & { doctorId?: string }
) => {
	const { doctorId = "", onSuccess } = options ?? {};

	return queryOptions({
		enabled: Boolean(doctorId),
		// eslint-disable-next-line tanstack-query/exhaustive-deps
		queryKey: ["appointments", "book-appointment", doctorId],
		queryFn: () => {
			return callBackendApiForQuery("/appointments/:doctorId", {
				method: "POST",
				params: { doctorId },
				onSuccess,
			});
		},
		retry: false,
		staleTime: Infinity,
	});
};
