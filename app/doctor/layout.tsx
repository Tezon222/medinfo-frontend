"use client";

import { Logo } from "@/components/common";
import EmojiHandIcon from "@/components/icons/EmojiHandIcon";
import LogoutIcon from "@/components/icons/LogoutIcon";
import { useState } from "react";
import Header from "../(dashboard)/_components/Header";
import Sidebar from "../(dashboard)/_components/Sidebar";
import { menuItems } from "../(dashboard)/_components/SidebarLinks";

function DashboardLayout({ children }: { children: React.ReactNode }) {
	const [activeTitle, setActiveTitle] = useState(menuItems[0]?.title as string);

	return (
		<div className="flex h-full lg:bg-medinfo-light-4">
			<aside
				className="sticky top-0 hidden h-[92%] w-[220px] shrink-0 self-start bg-white py-[32px]
					shadow-md lg:block"
			>
				<Logo className="mx-auto" />
				<div className="flex h-full flex-col justify-between py-6">
					<Sidebar setActiveTitle={setActiveTitle} />
					<div className="px-6">
						<hr className="w-full" />
					</div>
					<div className="flex flex-col gap-[32px] px-6">
						<div className="flex items-center gap-[2px]">
							<h1 className="text-[18px]">Hello, John</h1>
							<span>
								<EmojiHandIcon />
							</span>
						</div>
						<div className="flex items-center gap-2">
							<LogoutIcon />
							<h1 className="text-[18px] text-[#323232]">Log out</h1>
						</div>
					</div>
				</div>
			</aside>

			<main className="flex w-full flex-col">
				<Header activeTitle={activeTitle} />
				{children}
			</main>
		</div>
	);
}

export default DashboardLayout;
