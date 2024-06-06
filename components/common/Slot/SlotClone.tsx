import { Children, cloneElement, isValidElement } from "react";
import { type PossibleRef, composeRefs } from "./composeRefs";
import { type UnknownProps, mergeProps } from "./mergeProps";

type SlotCloneProps = {
	children: React.ReactNode;
	ref?: React.RefObject<HTMLElement>;
};

function SlotClone(props: SlotCloneProps) {
	const { children, ref: forwardedRef, ...restOfSlotProps } = props;

	if (isValidElement(children)) {
		const unknownChildren = children as unknown as UnknownProps;

		const clonedProps = {
			...mergeProps(restOfSlotProps, children.props as UnknownProps),
			ref: forwardedRef
				? composeRefs(forwardedRef, unknownChildren.ref as PossibleRef<unknown>)
				: unknownChildren.ref,
		};

		return cloneElement(children, clonedProps);
	}

	return Children.count(children) > 1 ? Children.only(null) : null;
}

export default SlotClone;
