"use client";

import type { InferProps } from "@/lib/type-helpers";
import { cnMerge } from "@/lib/utils/cn";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { startTransition } from "react";
import { useProgressContext } from "./Providers/progressContext";

function NavLink(props: InferProps<typeof Link> & { type?: "NavBar" | "Regular" }) {
	const { children, className, onClick, type = "Regular", ...restOfProps } = props;

	const router = useRouter();

	const { start, done } = useProgressContext();

	return (
		<Link
			className={cnMerge(type === "NavBar" && "navLink-transition relative", className)}
			onClick={(event) => {
				event.preventDefault();

				start();

				startTransition(() => {
					router.push(event.currentTarget.href);
					done();
				});

				onClick?.(event);
			}}
			{...restOfProps}
		>
			{children}
		</Link>
	);
}

export default NavLink;
