import type { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";

function NavLink({ href, children }: { href: Url; children: React.ReactNode }) {
	return (
		<li>
			<Link
				href={href}
				className="hover:border-b-2 hover:border-b-white lg:hover:border-b-medinfo-primary-darker"
			>
				{children}
			</Link>
		</li>
	);
}

export default NavLink;
