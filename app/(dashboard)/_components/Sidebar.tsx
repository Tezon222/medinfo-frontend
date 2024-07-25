"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { menuItems } from "./SidebarLinks";
import { cnJoin } from "@/lib/utils/cn";


interface SidebarProps {
	setActiveTitle: (title: string) => void;
}

// TODO: Open dropdown if dropdown item is active, show active state for dropdown if dropdown item is active, state should persist when closed
const Sidebar: React.FC<SidebarProps> = ({ setActiveTitle }) => {
	const pathname = usePathname();

	return (
		<nav className="text-center">
			<ul className="leading-[4rem] mt-[8px]">
				{menuItems.map(({ href, title, icon: Icon }) => {
					const isActive = pathname === href ;
					const iconFill = { fill: isActive ? '#FFFFFF' : '#344E41' };
					return (
						<li className="text-[18px]" key={title} onClick={() => setActiveTitle(title)}>
							<Link
								href={href}
								className={cnJoin("flex items-center px-6  h-[58px]", {
									"bg-medinfo-primary-main text-white": isActive,
									"text-black": !isActive,
								})}
							>
								<Icon style={iconFill} />
								<span className="ml-4 font-normal">{title}</span>
							</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};

export default Sidebar;
