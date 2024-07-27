"use client";

import { type InferProps, isString } from "@/lib/type-helpers";
import { cnMerge } from "@/lib/utils/cn";
import { useRouter } from "next-nprogress-bar";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLink(
	props: InferProps<typeof Link> & { type?: "Navbar" | "Regular" | "No-Transition"; relative?: boolean }
) {
	const { children, className, onClick, type = "Regular", href, ...restOfProps } = props;

	const router = useRouter();
	const pathname = usePathname();

	const isRelativeLink = isString(href) ? !href.startsWith("/") : !href.pathname?.startsWith("/");

	if (isRelativeLink && !isString(href)) {
		Reflect.set(href, "pathname", `${pathname}/${href.pathname}`);
	}

	return (
		<Link
			href={isRelativeLink && isString(href) ? `${pathname}/${href}` : href}
			className={cnMerge(
				type !== "No-Transition" && "navLink-transition relative",
				type === "Navbar" && "nav-mobile",
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
