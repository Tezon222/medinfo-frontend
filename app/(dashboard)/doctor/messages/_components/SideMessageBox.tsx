import { SearchIcon } from "@/components/icons";
import type { chatListUserType } from "./types";

function SideMessageBox({
	chatListUsers,
	setSelectedUser,
}: {
	chatListUsers: chatListUserType[];
	setSelectedUser: (user: chatListUserType) => void;
}) {
	return (
		<div className="mx-auto flex h-[440px] w-full gap-[28px] overflow-hidden lg:w-[450px]">
			<div
				className="w-full rounded-[16px] border border-solid border-medinfo-primary-lighter bg-white
					py-[20px]"
			>
				<div
					className="relative mx-[12px] items-center space-x-4 rounded-[8px] border
						border-medinfo-primary-lighter px-[16px] py-[14px] lg:w-[251px]"
				>
					<SearchIcon type="green" className="absolute top-4 left-1" />
					<input type="text" placeholder="Search for a chat" className="bg-none pl-[16px]" />
				</div>
				<div className="mt-[20px] h-[351px] custom-scrollbar overflow-y-scroll">
					{chatListUsers.length > 0 ? (
						chatListUsers.map((user) => {
							return (
								<div
									key={user.id}
									className={`flex cursor-pointer justify-between border-t border-solid p-[11px]
										hover:bg-amber-200`}
									onClick={() => setSelectedUser(user)}
								>
									<div className="flex gap-[8px]">
										<div
											className="relative size-[48px] rounded-full border-[1.4px]
												border-medinfo-primary-main bg-gray-300 lg:size-[48px]"
										>
											<div className="absolute top-[2px] right-1">
												<div className="size-[8px] rounded-full bg-[#05A660]" />
											</div>
										</div>
										<div>
											<h2 className="text-[18px]">{user.firstname}</h2>
											<p className="text-[14px]">{user.lastMessage}</p>
										</div>
									</div>
									<p className="text-[12px]">{user.time}</p>
								</div>
							);
						})
					) : (
						<div className="text-center">No available chats</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default SideMessageBox;
