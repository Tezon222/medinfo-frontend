"use client";

import { AppProgressBar } from "next-nprogress-bar";

function ProgressBar() {
	return (
		<AppProgressBar
			height="2.5px"
			color="hsl(150,21%,17%)"
			options={{ showSpinner: true }}
			shallowRouting={true}
		/>
	);
}

export default ProgressBar;
