import { SearchIcon } from "@/components/icons";

function page() {
	const users = [
		{ id: 1, name: "Chidiebere", time: "12:00", recentMessage: "Whats good" },
		{ id: 2, name: "Zayne", time: "2:00", recentMessage: "Whats good" },
		{ id: 3, name: "Ferdinand", time: "12:00", recentMessage: "Whats good" },
		{ id: 4, name: "Max", time: "2:00", recentMessage: "Whats good" },
		{ id: 5, name: "Johnpaul", time: "12:00", recentMessage: "Whats good" },
		{ id: 6, name: "Uloma", time: "2:00", recentMessage: "Whats good" },
		{ id: 7, name: "Charles Mary", time: "2:00", recentMessage: "Whats good" },
		{ id: 8, name: "Jeff", time: "2:00", recentMessage: "Whats good" },
	];

	return (
		<div className="-z-10 mt-[56px] px-[24px] lg:z-10 lg:mt-0 lg:p-[40px]">
			<div className="flex h-[680px] gap-[28px]">
				<div
					className="w-full rounded-[16px] border border-solid border-medinfo-primary-lighter bg-white
						py-[20px] lg:max-w-[274px]"
				>
					<div
						className="relative mx-[12px] items-center space-x-4 rounded-[8px] border
							border-medinfo-primary-lighter px-[16px] py-[14px] lg:w-[251px]"
					>
						<SearchIcon type="green" className="absolute top-4 left-1" />
						<input type="text" placeholder="Search for a chat" className="bg-none pl-[16px]" />
					</div>
					<div className="mt-[20px]">
						{users.map(({ name, id, time, recentMessage }) => {
							return (
								<div
									key={id}
									className="flex cursor-pointer justify-between border-b border-solid p-[11px]"
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
											<h2 className="text-[18px]">{name}</h2>
											<p className="text-[14px]">{recentMessage}</p>
										</div>
									</div>
									<p className="text-[12px]">{time}</p>
								</div>
							);
						})}
					</div>
				</div>

				<div
					className="hidden w-full rounded-[16px] border border-solid border-medinfo-primary-lighter
						bg-white lg:flex"
				/>
			</div>
		</div>
	);
}

export default page;
