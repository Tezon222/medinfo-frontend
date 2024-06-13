import { useEffect } from "react";
import { useCallbackRef } from "../useCallbackRef";
import { useConstant } from "../useConstant";
import { setAnimationInterval } from "./setAnimationInterval";

type AnimationOptions = {
	callbackFn: () => void;
	intervalDuration: number | null;
};

const useAnimationInterval = (options: AnimationOptions) => {
	const { callbackFn, intervalDuration } = options;

	const latestCallback = useCallbackRef(callbackFn);

	// prettier-ignore
	const { start, stop } = useConstant(() => setAnimationInterval(latestCallback, intervalDuration));

	useEffect(() => {
		if (intervalDuration === null) return;

		start();

		return stop;
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [intervalDuration]);

	return { start, stop };
};

export { useAnimationInterval };
