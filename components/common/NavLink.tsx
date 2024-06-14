"use client";

import type { InferProps } from "@/lib/type-helpers";
import { cnMerge } from "@/lib/utils/cn";
import { useRouter } from "next-nprogress-bar";
import Link from "next/link";

function NavLink(props: InferProps<typeof Link> & { type?: "NavBar" | "Regular" }) {
	const { children, className, onClick, type = "Regular", ...restOfProps } = props;

	const router = useRouter();

	return (
		<Link
			className={cnMerge(type === "NavBar" && "navLink-transition relative", className)}
			onClick={(event) => {
				event.preventDefault();

				router.push(event.currentTarget.href);

				onClick?.(event);
			}}
			{...restOfProps}
		>
			{children}
		</Link>
	);
}

export default NavLink;
