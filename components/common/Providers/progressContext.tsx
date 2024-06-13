"use client";

import { createCustomContext, useProgress } from "@/lib/hooks";
import { type MotionValue, useMotionTemplate } from "framer-motion";

type ProgressValues = ReturnType<typeof useProgress> & { width: MotionValue<string> };

const [ProgressProvider, useProgressContext] = createCustomContext<ProgressValues>({
	providerName: "ProgressProvider",
	hookName: "useProgressContext",
	defaultValue: {} as ProgressValues,
});

export function ProgressBarProvider({ children }: { children: React.ReactNode }) {
	const progressValues = useProgress();

	const width = useMotionTemplate`${progressValues.motionValues}%`;

	return <ProgressProvider value={{ ...progressValues, width }}>{children}</ProgressProvider>;
}

export { useProgressContext };
