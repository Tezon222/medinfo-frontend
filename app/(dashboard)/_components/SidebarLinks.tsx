import CommunityIcon from "@/components/icons/CommunityIcon";
import DashboardIcon from "@/components/icons/DashboardIcon";
import MessageIcon from "@/components/icons/MessageIcon";
import ProfileIcon from "@/components/icons/ProfileIcon";
import SettingsIcon from "@/components/icons/SettingsIcon";


// // TODO: Complete Sidebar urls
// export const APP_URLS = {
//   SERVICING: '/dashboard/gac/servicing',
//   DRIVE_NOW_PAY_LATER: "'/dashboard/gac/drive-now-pay-later'",
//   UPGRADE_RIDE: '/dashboard/gac/ride-upgrade',
//   CONTACT_US: '/dashboard/gac/contact-us',
//   TEST_DRIVE: '/dashboard/gac/test-drive',
// } as const;

export const menuItems = [
  {
    href: '/doctor',
    title: 'Dashboard',
    icon: DashboardIcon,
  },
  {
    href: '/doctor/messages',
    title: 'Messages',
    icon: MessageIcon,
  },
  {
	href: '/doctor/community',
	title: 'Community',
	icon: CommunityIcon,
 },
 {
	href: '/doctor/profile',
	title: 'Profile',
	icon: ProfileIcon,
 },
 {
	href: '/doctor/settings',
	title: 'Settings',
	icon: SettingsIcon,
 },
];