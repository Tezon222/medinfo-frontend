import { type MotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { useAnimationInterval } from "./useAnimationInterval/useAnimationInterval";

const getRandomNumber = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

const useProgress = () => {
	const [state, setState] = useState<"initial" | "in-progress" | "completing" | "complete">("initial");

	const motionValues = useSpring(0, {
		damping: 25,
		mass: 0.5,
		stiffness: 300,
		restDelta: 0.1,
	}) as MotionValue<number>;

	useAnimationInterval({
		callbackFn: () => {
			// If we start progress but the bar is currently complete, reset it first.
			if (motionValues.get() === 100) {
				motionValues.jump(0);
			}

			const currentValue = motionValues.get();

			if (currentValue === 0) {
				const difference = 15;

				motionValues.set(Math.min(currentValue + difference, 99));

				return;
			}

			if (currentValue < 50) {
				const difference = getRandomNumber(1, 10);

				motionValues.set(Math.min(currentValue + difference, 99));

				return;
			}

			const difference = getRandomNumber(1, 5);

			motionValues.set(Math.min(currentValue + difference, 99));
		},

		intervalDuration: state === "in-progress" ? 750 : null,
	});

	useEffect(() => {
		if (state === "initial") {
			motionValues.jump(0);
		}

		if (state === "completing") {
			motionValues.set(100);
		}

		const cleanup = motionValues.on("change", (latest) => latest === 100 && setState("complete"));

		return cleanup;
	}, [motionValues, state]);

	return {
		progressState: state,

		motionValues,

		start: () => setState("in-progress"),

		done: () => {
			const newState = state === "initial" || state === "in-progress" ? "completing" : state;

			setState(newState);
		},

		reset: () => setState("initial"),
	};
};

export { useProgress };
