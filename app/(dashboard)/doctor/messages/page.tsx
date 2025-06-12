"use client";
import { useState } from "react";
import MainMessageBox from "./_components/MainMessageBox";
import SideMessageBox from "./_components/SideMessageBox";
import type { chatListUserType } from "./_components/types";

function Page() {
	// const [chatListUsers, setUsers] = useState<user[]>([]);
	const [selectedUser, setSelectedUser] = useState<chatListUserType | null>(null);

	const chatListUsers: chatListUserType[] = [
		{
			id: "1",
			firstname: "Chidiebere",
			lastName: "Anagu",
			picture: "http://picture",
			time: "12:00",
			lastMessage: "Whats good",
		},
		{
			id: "2",
			firstname: "Zayne",
			lastName: "Anagu",
			picture: "http://picture",
			time: "2:00",
			lastMessage: "Whats good",
		},
		{
			id: "3",
			firstname: "Ferdinand",
			lastName: "Anagu",
			picture: "http://picture",
			time: "12:00",
			lastMessage: "Whats good",
		},
		{
			id: "4",
			firstname: "Max",
			lastName: "Anagu",
			picture: "http://picture",
			time: "2:00",
			lastMessage: "Whats good",
		},
		{
			id: "5",
			firstname: "Johnpaul",
			lastName: "Anagu",
			picture: "http://picture",
			time: "12:00",
			lastMessage: "Whats good",
		},
		{
			id: "6",
			firstname: "Uloma",
			lastName: "Anagu",
			picture: "http://picture",
			time: "2:00",
			lastMessage: "Whats good",
		},
		{
			id: "7",
			firstname: "Charles Mary",
			lastName: "Anagu",
			picture: "http://picture",
			time: "2:00",
			lastMessage: "Whats good",
		},
		{
			id: "8",
			firstname: "Jeff",
			lastName: "Anagu",
			picture: "http://picture",
			time: "2:00",
			lastMessage: "Whats good",
		},
		{
			id: "9",
			firstname: "User9",
			lastName: "Anagu",
			picture: "http://picture",
			time: "2:00",
			lastMessage: "Whats good",
		},
	];

	console.warn(selectedUser);

	return (
		<div className="static top-[85px] flex gap-[30px] px-0 lg:sticky lg:w-full lg:px-[24px] lg:py-[20px]">
			<SideMessageBox chatListUsers={chatListUsers} setSelectedUser={setSelectedUser} />
			<MainMessageBox selectedUser={selectedUser} />
		</div>
	);
}

export default Page;
