import { cnJoin } from "@/lib/utils/cn";
import { useId } from "react";

type OverlayProps = {
	isOpen: boolean;
	onClose: () => void;
	"z-index"?: `z-[${number}]`;
};

function Overlay({ isOpen, onClose, "z-index": zIndex = "z-[0]" }: OverlayProps) {
	const id = useId();

	return (
		<div
			id={`Overlay-(${id})`}
			onClick={onClose}
			className={cnJoin(
				`fixed bg-[hsl(0,0%,0%,0.6)] [backdrop-filter:blur(0.4rem)] [inset:0_0_0_auto] lg:hidden
				${zIndex}`,
				isOpen ? "w-screen" : "w-0"
			)}
		/>
	);
}

export default Overlay;
