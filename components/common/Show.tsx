"use client";

import { useGetOtherChildren, useSlot } from "@/lib/hooks";

type ShowProps = {
	when: boolean;
	children: React.ReactNode;
	fallback?: React.ReactNode;
};

function Show({ when, children, fallback }: ShowProps) {
	const fallBackSlot = useSlot(children, ShowFallback, {
		throwOnMultipleMatch: true,
		errorMessage: "Only one <Show.Default> component is allowed",
	});

	const otherChildren = useGetOtherChildren(children, ShowFallback);

	if (fallBackSlot && fallback) {
		throw new Error(`
			Both fallback mechanisms cannot be used at the same time.
			Either the "fallback" prop is used or "<Show.Fallback>" component is used
		`);
	}

	return when ? otherChildren : fallBackSlot ?? fallback;
}

function ShowFallback({ children }: Pick<ShowProps, "children">) {
	return children;
}
ShowFallback.slot = Symbol.for("fallback");

Show.Fallback = ShowFallback;

export default Show;
