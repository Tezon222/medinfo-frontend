"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useProgressContext } from "./Providers/progressContext";
import Show from "./Show";

function ProgressBar() {
	const { progressState, width, reset } = useProgressContext();

	return (
		<AnimatePresence onExitComplete={reset}>
			<Show when={progressState !== "complete"}>
				<motion.div
					style={{ width }}
					exit={{ opacity: 0 }}
					className="absolute inset-x-0 bottom-0 h-[3.5px] rounded-[6px] bg-medinfo-primary-lighter
						shadow-lg shadow-medinfo-primary-subtle"
				/>
			</Show>
		</AnimatePresence>
	);
}

export default ProgressBar;
