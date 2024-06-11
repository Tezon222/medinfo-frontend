"use client";

import { Logo } from "@/components/common";
import Overlay from "@/components/common/Overlay";
import { HamburgerIcon, SearchIcon, XIcon } from "@/components/icons";
import { Button } from "@/components/ui";
import { useScrollObserver, useToggle } from "@/lib/hooks";
import { cnJoin, cnMerge } from "@/lib/utils/cn";
import Link from "next/link";
import NavLink from "./NavLink";

function NavBar() {
	const { observedElementRef: headerRef, isScrolled } = useScrollObserver();
	const [isNavShow, toggleNavShow] = useToggle(false);

	return (
		<header
			ref={headerRef}
			className={cnJoin(
				`sticky inset-[0_0_auto_0] z-[500] flex w-full items-center justify-between bg-white px-6
				py-[17px] [transition:box-shadow_0.3s_ease] lg:px-[100px] lg:py-5`,
				isScrolled && "shadow-[0_4px_8px_hsl(150,20%,25%,0.25)]"
			)}
		>
			<Logo className="min-w-fit max-lg:h-[46px] max-lg:w-[60px]" />

			<Overlay isOpen={isNavShow} onClose={toggleNavShow} />

			<DesktopNavigation className="max-lg:hidden" />

			<MobileNavigation isNavShow={isNavShow} className="lg:hidden" />

			<button className="z-10 lg:hidden" onClick={toggleNavShow}>
				{isNavShow ? <XIcon /> : <HamburgerIcon />}
			</button>
		</header>
	);
}

export default NavBar;

function DesktopNavigation({ className }: { className?: string }) {
	return (
		<article className={cnMerge("flex w-full items-center", className)}>
			<nav className="mx-auto">
				<ul className="flex min-w-fit font-medium lg:gap-14 lg:text-[22px]">
					<NavLink href="/">Home</NavLink>
					<NavLink href="/library">Library</NavLink>
					<NavLink href="/about">About us</NavLink>
					<NavLink href="/contact">Contact us</NavLink>
				</ul>
			</nav>

			<div className="flex min-w-fit items-center gap-8">
				<Button size="small" theme="outline">
					<SearchIcon type="green" />
				</Button>

				<Button asChild={true}>
					<Link href={{ pathname: "/signup", query: { type: "patient" } }}>Join Us</Link>
				</Button>
			</div>
		</article>
	);
}

function MobileNavigation({ className, isNavShow }: { className?: string; isNavShow: boolean }) {
	return (
		<article
			className={cnMerge(
				`fixed inset-[0_0_0_auto] flex flex-col items-center gap-7 overflow-hidden
				bg-medinfo-primary-main pt-10 text-white`,
				isNavShow
					? "w-[min(254px,80%)] [transition:width_250ms_ease]"
					: "w-0 [transition:width_500ms_ease]",
				className
			)}
		>
			<Logo type="footer" className="h-[46px] w-[60px]" />

			<nav>
				<ul className="flex flex-col items-center gap-5 text-nowrap font-medium lg:text-[22px]">
					<NavLink href="/">Home</NavLink>
					<NavLink href="/library">Library</NavLink>
					<NavLink href="/about">About us</NavLink>
					<NavLink href="/contact">Contact us</NavLink>
				</ul>
			</nav>

			<div className="flex flex-col items-center gap-4">
				<Button unstyled={true}>
					<SearchIcon type="white" />
				</Button>

				<Button theme="primary-inverted" className="w-[105px] px-0" asChild={true}>
					<Link href={{ pathname: "/signup", query: { type: "patient" } }}>Join Us</Link>
				</Button>
			</div>
		</article>
	);
}
