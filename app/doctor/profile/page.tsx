import CameraIcon from "@/components/icons/CameraIcon";

function Page() {
	return (
		<div className="p-[40px]">
			<div className="rounded-[16px] bg-white p-[28px] shadow-md">
				<div className="relative">
					<div
						className="h-[140px] w-[140px] rounded-full border-[1.4px] border-solid
							border-medinfo-primary-main bg-gray-300"
					/>
					<div
						className="absolute left-[6rem] top-0 w-[40px] rounded-full border-[1.4px] border-solid
							border-medinfo-primary-main bg-white p-[7px]"
					>
						<CameraIcon />
					</div>
				</div>
				<div className="mt-[20px] flex gap-[16px] text-[20px] font-medium">
					<button
						className="rounded-[8px] border-2 border-solid border-medinfo-primary-main px-[32px]
							py-[18px]"
					>
						Remove
					</button>
					<button className="rounded-[8px] bg-medinfo-primary-main px-[32px] py-[18px] text-white">
						Change
					</button>
				</div>
			</div>

			<div className="mt-[32px] flex w-full items-end rounded-[16px] bg-white p-[28px] shadow-md">
				<div className="flex w-full gap-[95px]">
					<h2 className="text-[18px] font-medium">User identity</h2>
					<form className="space-y-[12px]">
						<div className="space-y-[4px]">
							<label className="text-[20px] font-medium">First name</label>
							<input
								type="text"
								className="w-full rounded-[8px] border-[1.4px] border-solid
									border-medinfo-primary-main px-[16px] py-[12px] font-medium
									text-medinfo-primary-main"
							/>
						</div>

						<div className="space-y-[4px]">
							<label className="text-[20px] font-medium">Last name</label>
							<input
								type="text"
								className="w-full rounded-[8px] border-[1.4px] border-solid
									border-medinfo-primary-main px-[16px] py-[12px] font-medium
									text-medinfo-primary-main"
							/>
						</div>

						<div className="space-y-[4px]">
							<label className="text-[20px] font-medium">Gender</label>
							<input
								type="text"
								className="w-full rounded-[8px] border-[1.4px] border-solid
									border-medinfo-primary-main px-[16px] py-[12px] font-medium
									text-medinfo-primary-main"
							/>
						</div>

						<div className="space-y-[4px]">
							<label className="text-[20px] font-medium">Bio</label>
							<input
								type="textarea"
								className="w-full rounded-[8px] border-[1.4px] border-solid
									border-medinfo-primary-main px-[16px] py-[12px] font-medium
									text-medinfo-primary-main"
							/>
						</div>
					</form>
				</div>
				<div className="mt-[20px] flex gap-[16px] text-[20px] font-medium">
					<button
						className="rounded-[8px] border-2 border-solid border-medinfo-primary-main px-[32px]
							py-[18px]"
					>
						Cancel
					</button>
					<button className="rounded-[8px] bg-medinfo-primary-main px-[32px] py-[18px] text-white">
						Save
					</button>
				</div>
			</div>

			<div className="mt-[32px] flex w-full items-end rounded-[16px] bg-white p-[28px] shadow-md">
				<div className="flex w-full gap-[95px]">
					<h2 className="text-[18px] font-medium">Contact info</h2>
					<form className="space-y-[12px] max-w-[372px] w-full">
						<div className="space-y-[4px]">
							<label className="text-[20px] font-medium">Email</label>
							<input
								type="email"
								className="w-full rounded-[8px] border-[1.4px] border-solid
									border-medinfo-primary-main px-[16px] py-[12px] font-medium
									text-medinfo-primary-main"
							/>
						</div>

						<div className="space-y-[4px]">
							<label className="text-[20px] font-medium">Phone number</label>
							<input
								type="text"
								className="w-full rounded-[8px] border-[1.4px] border-solid
									border-medinfo-primary-main px-[16px] py-[12px] font-medium
									text-medinfo-primary-main"
							/>
						</div>
					</form>
				</div>
				<div className="mt-[20px] flex gap-[16px] text-[20px] font-medium">
					<button
						className="rounded-[8px] border-2 border-solid border-medinfo-primary-main px-[32px]
							py-[18px]"
					>
						Cancel
					</button>
					<button className="rounded-[8px] bg-medinfo-primary-main px-[32px] py-[18px] text-white">
						Save
					</button>
				</div>
			</div>

			<div className="mt-[32px] flex w-full items-end rounded-[16px] bg-white p-[28px] shadow-md">
				<div className="flex w-full gap-[95px]">
					<h2 className="text-[18px] font-medium">Location</h2>
					<form className="space-y-[12px]">
						<div className="space-y-[4px]">
							<label className="text-[20px] font-medium">Country</label>
							<input
								type="text"
								className="w-full rounded-[8px] border-[1.4px] border-solid
									border-medinfo-primary-main px-[16px] py-[12px] font-medium
									text-medinfo-primary-main"
							/>
						</div>

						<div className="space-y-[4px]">
							<label className="text-[20px] font-medium">City</label>
							<input
								type="text"
								className="w-full rounded-[8px] border-[1.4px] border-solid
									border-medinfo-primary-main px-[16px] py-[12px] font-medium
									text-medinfo-primary-main"
							/>
						</div>
					</form>
				</div>
				<div className="mt-[20px] flex gap-[16px] text-[20px] font-medium">
					<button
						className="rounded-[8px] border-2 border-solid border-medinfo-primary-main px-[32px]
							py-[18px]"
					>
						Cancel
					</button>
					<button className="rounded-[8px] bg-medinfo-primary-main px-[32px] py-[18px] text-white">
						Save
					</button>
				</div>
			</div>

			<div className="mt-[32px] flex w-full items-end rounded-[16px] bg-white p-[28px] shadow-md">
				<div className="flex w-full gap-[95px]">
					<h2 className="text-[18px] font-medium">Change password</h2>
					<form className="space-y-[12px]">
						<div className="space-y-[4px]">
							<label className="text-[20px] font-medium">Old password</label>
							<input
								type="password"
								className="w-full rounded-[8px] border-[1.4px] border-solid
									border-medinfo-primary-main px-[16px] py-[12px] font-medium
									text-medinfo-primary-main"
							/>
						</div>

						<div className="space-y-[4px]">
							<label className="text-[20px] font-medium">New password</label>
							<input
								type="password"
								className="w-full rounded-[8px] border-[1.4px] border-solid
									border-medinfo-primary-main px-[16px] py-[12px] font-medium
									text-medinfo-primary-main"
							/>
						</div>

						<div className="space-y-[4px]">
							<label className="text-[20px] font-medium">Confirm password</label>
							<input
								type="password"
								className="w-full rounded-[8px] border-[1.4px] border-solid
									border-medinfo-primary-main px-[16px] py-[12px] font-medium
									text-medinfo-primary-main"
							/>
						</div>
					</form>
				</div>
				<div className="mt-[20px] flex gap-[16px] text-[20px] font-medium">
					<button
						className="rounded-[8px] border-2 border-solid border-medinfo-primary-main px-[32px]
							py-[18px]"
					>
						Cancel
					</button>
					<button className="rounded-[8px] bg-medinfo-primary-main px-[32px] py-[18px] text-white">
						Save
					</button>
				</div>
			</div>
		</div>
	);
}

export default Page;
