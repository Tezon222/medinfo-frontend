"use client";
import { useState } from "react";
import MainMessageBox from "./_components/MainMessageBox";
import SideMessageBox from "./_components/SideMessageBox";
import type { selectedUserType, user } from "./_components/types";

function Page() {
	const [users, setUsers] = useState<user[]>([]);
	const [selectedUser, setSelectedUser] = useState<selectedUserType>({
		senderId: "",
		receiverId: "",
	});

	const getUsers = () => {
		setUsers([
			{ id: 1, name: "Chidiebere", time: "12:00", recentMessage: "Whats good" },
			{ id: 2, name: "Zayne", time: "2:00", recentMessage: "Whats good" },
			{ id: 3, name: "Ferdinand", time: "12:00", recentMessage: "Whats good" },
			{ id: 4, name: "Max", time: "2:00", recentMessage: "Whats good" },
			{ id: 5, name: "Johnpaul", time: "12:00", recentMessage: "Whats good" },
			{ id: 6, name: "Uloma", time: "2:00", recentMessage: "Whats good" },
			{ id: 7, name: "Charles Mary", time: "2:00", recentMessage: "Whats good" },
			{ id: 8, name: "Jeff", time: "2:00", recentMessage: "Whats good" },
			{ id: 9, name: "Nigga", time: "2:00", recentMessage: "Whats good" },
		]);
	};
	getUsers();
	return (
		<div className="static top-[85px] flex gap-[30px] px-0 lg:sticky lg:w-full lg:px-[24px] lg:py-[20px]">
			<SideMessageBox users={users} setSelectedUser={() => setSelectedUser} />
			<MainMessageBox selectedUser={selectedUser} />
		</div>
	);
}

export default Page;
