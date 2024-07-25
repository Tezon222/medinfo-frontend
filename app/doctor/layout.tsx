"use client";

import { Logo } from "@/components/common";
import LogoutIcon from "@/components/icons/LogoutIcon";
import Sidebar from "../(dashboard)/_components/Sidebar";
import { menuItems } from "../(dashboard)/_components/SidebarLinks";
import { useState } from "react";
import Header from "../(dashboard)/_components/Header";
import EmojiHandIcon from "@/components/icons/EmojiHandIcon";

function DashboardLayout({ children }: { children: React.ReactNode }) {
	const [activeTitle, setActiveTitle] = useState(menuItems[0].title);

	return (
		<div className="font-opensans flex h-screen overflow-hidden bg-[#FAFCFB]">
			<aside
				className="text-secondary 2xl:w-[220px] mx-auto w-[220px] bg-[#FFFFFF] py-[32px] shadow-md
					lg:block"
			>
				<Logo className="mx-auto" />
				<div className="flex h-[92%] flex-col justify-between overflow-y-hidden py-6">
					<Sidebar setActiveTitle={setActiveTitle} />
					<div className="px-6">
						<hr className="w-full" />
					</div>
					<div className="flex flex-col px-6 gap-[32px]">
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
			<main className="hide-scrollbar flex flex-1 flex-col overflow-y-scroll">
				<Header activeTitle={activeTitle} />
				<div className="py-3 ">{children}</div>
			</main>
		</div>
	);
}

export default DashboardLayout;
