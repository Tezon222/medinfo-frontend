import { SearchIcon } from "@/components/icons";
import AttachmentIcon from "@/components/icons/AttachmentIcon";
import EmojiIcon from "@/components/icons/EmojiIcon";
import MenuIcon from "@/components/icons/MenuIcon";
import SendIcon from "@/components/icons/SendIcon";
import { format } from "date-fns";
import React from "react";

type messageType = { id: string; senderId: number; receiverId: number; message: string; time: string };
const formatTime = (time: string): string => {
	const newDate = new Date(time).getTime();
	return format(newDate, "HH:mm");
};
const MainMessageBox = () => {
	const messages = [
		{
			id: "a",
			senderId: 1,
			receiverId: 2,
			message: "Hello, how's it going",
			time: "2025-03-25T09:35:02.799+00:00",
		},
		{
			id: "b",
			senderId: 2,
			receiverId: 1,
			message: "Not good, been having slight discomfort in my belly",
			time: "2025-03-25T09:35:02.799+00:00",
		},
		{
			id: "c",
			senderId: 1,
			receiverId: 2,
			message: "Can you describe it in more details and when did it start?",
			time: "2025-03-25T09:35:02.799+00:00",
		},
		{
			id: "d",
			senderId: 2,
			receiverId: 1,
			message: "It all started....",
			time: "2025-03-29T09:35:02.799+00:00",
		},
		{
			id: "e",
			senderId: 2,
			receiverId: 1,
			message: "It all started....",
			time: "2025-03-29T09:35:02.799+00:00",
		},
		{
			id: "f",
			senderId: 2,
			receiverId: 1,
			message: "It all started....",
			time: "2025-03-29T09:35:02.799+00:00",
		},
		{
			id: "g",
			senderId: 2,
			receiverId: 1,
			message: "It all started....",
			time: "2025-03-29T09:35:02.799+00:00",
		},
	];

	const groupedMessages: { [key: string]: messageType[] } = {};
	messages.forEach((message) => {
		const createdAtDate = format(new Date(message.time), "MM-dd-yyyy");

		groupedMessages[createdAtDate] ??= [];
		groupedMessages[createdAtDate].push(message);
	});

	return (
		<div
			className="relative hidden h-[450px] w-full flex-col overflow-y-scroll rounded-[16px] border
				border-solid border-medinfo-primary-lighter lg:flex"
		>
			<div
				className="sticky top-0 left-0 z-10 flex h-[15%] w-full items-center justify-between border-b
					border-solid bg-white px-8 py-2"
			>
				<div className="flex gap-3">
					<div
						className="relative size-[48px] rounded-full border-[1.4px] border-medinfo-primary-main
							bg-gray-300 lg:size-[48px]"
					/>
					<div>
						<p className="font-[500]">Mary Doe</p>
						<p className="rounded-full bg-[#FDED72] text-center">Inactive</p>
					</div>
				</div>
				<div className="flex gap-5">
					<SearchIcon type="green" />
					<MenuIcon />
				</div>
			</div>
			{Object.entries(groupedMessages).map(([dateKey, conversation]) => {
				return (
					<div key={dateKey} className="mt-9 flex flex-col gap-6 px-12 py-8">
						<p className={"pb-2 text-center"}>{dateKey}</p>
						{conversation.map(({ id, message, time, senderId }) => {
							return (
								<div
									key={id}
									className={`flex w-full flex-col
									${senderId === 1 ? "items-start" : "items-end"}`}
								>
									<div className="relative w-[45%]">
										<p
											className={`w-full rounded-sm
											${senderId === 1 ? "bg-[#FAFCFB]" : "bg-[#CBF8E1]"} p-3`}
										>
											{message}
										</p>
										<div
											className={`absolute bottom-0 h-0 w-0 border-r-10 border-b-22 border-l-10
											border-r-transparent ${
											senderId === 1
													? "left-[-10px] border-b-[#FAFCFB]"
													: "right-[-10px] border-b-[#CBF8E1]"
											} border-l-transparent`}
										/>
										<p
											className={`absolute ${senderId === 1 ? "left-[-10px]" : "right-[-10px]"}
											text-[14px]`}
										>
											{formatTime(time)}
										</p>
									</div>
								</div>
							);
						})}
					</div>
				);
			})}
			<div
				className="sticky bottom-0 z-10 flex w-full items-center justify-between border-t border-solid
					border-medinfo-primary-lighter bg-white px-5 py-2"
			>
				<div className="flex w-[85%] items-center justify-between gap-3 rounded-lg bg-gray-300 px-3">
					<textarea
						className="scrollbar-hidden w-full resize-none py-3 outline-none"
						rows={1}
						name="message"
						placeholder="Type your message"
						id=""
					/>
					<SendIcon />
				</div>
				<div id="icons" className="flex gap-5">
					<EmojiIcon />
					<AttachmentIcon />
				</div>
			</div>
		</div>
	);
};

export default MainMessageBox;
