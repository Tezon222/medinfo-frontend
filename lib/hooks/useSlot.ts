import React, { Children, isValidElement, useMemo } from "react";
import { isArray } from "../type-helpers/typeof";

type Noop = () => void;
type WithSlot = { slot?: string };

export const isSlotElement = <TProps>(
	child: React.ReactNode,
	SlotWrapper: React.ComponentType<TProps>
) => {
	if (!isValidElement(child)) {
		return false;
	}

	if ((child.type as WithSlot).slot && (child.type as WithSlot).slot === (SlotWrapper as WithSlot).slot) {
		return true;
	}

	if ((child.type as Noop).name === (SlotWrapper as Noop).name) {
		return true;
	}

	if (child.type === SlotWrapper) {
		return true;
	}

	return child.type.toString() === SlotWrapper.toString();
};

type UseSlotOptions = {
	throwOnMultipleSlotMatch?: boolean;
	errorMessage?: string;
	ChildrenHelper?: typeof Children;
};

export const getSlot = <TProps>(
	children: React.ReactNode,
	SlotWrapper: React.ComponentType<TProps>,
	options: UseSlotOptions = {}
) => {
	const {
		throwOnMultipleSlotMatch = false,
		errorMessage = "Only one instance of the SlotComponent is allowed",
	} = options;

	const childrenArray = isArray<React.ReactNode>(children) ? children : [children];

	const Slot = throwOnMultipleSlotMatch
		? childrenArray.filter((child) => isSlotElement(child, SlotWrapper))
		: childrenArray.find((child) => isSlotElement(child, SlotWrapper));

	if (isArray(Slot) && Slot.length > 1) {
		throw new Error(errorMessage);
	}

	return (isArray(Slot) ? Slot[0] : Slot) as React.ReactElement<TProps> | undefined;
};

export const getOtherChildren = <TProps>(
	children: React.ReactNode,
	SlotWrapperOrWrappers: React.ComponentType<TProps> | Array<React.ComponentType<TProps>>
) => {
	const childrenArray = isArray<React.ReactNode>(children) ? children : [children];

	
	const otherChildren = isArray(SlotWrapperOrWrappers)
		? childrenArray.filter((child) =>
				SlotWrapperOrWrappers.some((slotWrapper) => !isSlotElement(child, slotWrapper))
			)
		: childrenArray.filter((child) => !isSlotElement(child, SlotWrapperOrWrappers));

	return otherChildren;
};

export const useGetSlot = <TProps>(
	children: React.ReactNode,
	SlotWrapper: React.ComponentType<TProps>,
	options?: UseSlotOptions
) => {
	const Slot = useMemo(() => getSlot(children, SlotWrapper, options), [children, SlotWrapper, options]);

	return Slot;
};

export const useGetOtherChildren = <TProps>(
	children: React.ReactNode,
	SlotWrappers: React.ComponentType<TProps> | Array<React.ComponentType<TProps>>
) => {
	const otherChildren = useMemo(() => getOtherChildren(children, SlotWrappers), [children, SlotWrappers]);

	return otherChildren;
};
