"use client";

import { type InferProps, isString } from "@/lib/type-helpers";
import { cnMerge } from "@/lib/utils/cn";
import { useRouter } from "next-nprogress-bar";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLink(
	props: InferProps<typeof Link> & {
		transitionType?: "Navbar" | "Regular" | "No-Transition";
		relative?: boolean;
	}
) {
	const { children, className, onClick, transitionType = "No-Transition", href, ...restOfProps } = props;

	const router = useRouter();
	const pathname = usePathname();

	const isRelativeLink = (value: typeof href | undefined | null): value is string => {
		return isString(value) && !value.startsWith("/");
	};


	if (!isString(href) && isRelativeLink(href.pathname)) {
		Reflect.set(href, "pathname", `${pathname}/${href.pathname}`);
	}

	return (
		<Link
			href={isRelativeLink(href) ? `${pathname}/${href.replaceAll(" ", "")}` : href}
			className={cnMerge(
				transitionType !== "No-Transition" && "navLink-transition relative",
				transitionType === "Navbar" && "nav-mobile",
				className
			)}
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
