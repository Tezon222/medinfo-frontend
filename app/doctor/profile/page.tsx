"use client";

import { CameraIcon } from "@/components/icons";
import { Button, Form, Select } from "@/components/ui";

// function Page() {
// 	return (
// 		<div className="p-[40px]">
// 			<div className="rounded-[16px] bg-white p-[28px] shadow-md">
// 				<div className="relative">
// 					<div
// 						className="size-[140px] rounded-full border-[1.4px] border-solid
// 							border-medinfo-primary-main bg-gray-300"
// 					/>
// 					<div
// 						className="absolute left-[6rem] top-0 w-[40px] rounded-full border-[1.4px] border-solid
// 							border-medinfo-primary-main bg-white p-[7px]"
// 					>
// 						<CameraIcon />
// 					</div>
// 				</div>
// 				<div className="mt-[20px] flex gap-[16px] text-[20px] font-medium">
// 					<Button theme="secondary">Remove</Button>
// 					<Button theme="primary">Change</Button>
// 				</div>
// 			</div>

// 			<div className="mt-[32px] flex w-full items-end rounded-[16px] bg-white p-[28px] shadow-md">
// 				<div className="flex w-full gap-[95px]">
// 					<h2 className="text-[18px] font-medium">User identity</h2>
// 					<Form.Root className="w-full max-w-[372px] gap-3">
// 						<Form.Item className="space-y-[4px]">
// 							<Form.Label className="text-[20px] font-medium">First name</Form.Label>
// 							<Form.Input
// 								type="text"
// 								className="w-full rounded-[8px] border-[1.4px] border-solid
// 									border-medinfo-primary-main px-[16px] py-[12px] font-medium
// 									text-medinfo-primary-main"
// 							/>
// 						</Form.Item>

// 						<Form.Item className="space-y-[4px]">
// 							<Form.Label className="text-[20px] font-medium">Last name</Form.Label>
// 							<Form.Input
// 								type="text"
// 								className="w-full rounded-[8px] border-[1.4px] border-solid
// 									border-medinfo-primary-main px-[16px] py-[12px] font-medium
// 									text-medinfo-primary-main"
// 							/>
// 						</Form.Item>

// 						<Form.Item className="space-y-[4px]">
// 							<Form.Label className="text-[20px] font-medium">Gender</Form.Label>
// 							<Form.Input
// 								type="text"
// 								className="w-full rounded-[8px] border-[1.4px] border-solid
// 									border-medinfo-primary-main px-[16px] py-[12px] font-medium
// 									text-medinfo-primary-main"
// 							/>
// 						</Form.Item>

// 						<Form.Item className="space-y-[4px]">
// 							<Form.Label className="text-[20px] font-medium">Bio</Form.Label>
// 							<textarea
// 								className="w-full rounded-[8px] border-[1.4px] border-solid
// 									border-medinfo-primary-main px-[16px] py-[12px] font-medium
// 									text-medinfo-primary-main"
// 							/>
// 						</Form.Item>
// 					</Form.Root>
// 				</div>
// 				<div className="mt-[20px] flex gap-[16px] text-[20px] font-medium">
// 					<Button theme="secondary">Cancel</Button>
// 					<Button theme="primary">Save</Button>
// 				</div>
// 			</div>

// 			<div className="mt-[32px] flex w-full items-end rounded-[16px] bg-white p-[28px] shadow-md">
// 				<div className="flex w-full gap-[95px]">
// 					<h2 className="text-[18px] font-medium">Contact info</h2>
// 					<Form.Root className="w-full max-w-[372px] space-y-[12px]">
// 						<Form.Item className="space-y-[4px]">
// 							<Form.Label className="text-[20px] font-medium">Email</Form.Label>
// 							<Form.Input
// 								type="email"
// 								className="w-full rounded-[8px] border-[1.4px] border-solid
// 									border-medinfo-primary-main px-[16px] py-[12px] font-medium
// 									text-medinfo-primary-main"
// 							/>
// 						</Form.Item>

// 						<Form.Item className="space-y-[4px]">
// 							<Form.Label className="text-[20px] font-medium">Phone number</Form.Label>
// 							<Form.Input
// 								type="text"
// 								className="w-full rounded-[8px] border-[1.4px] border-solid
// 									border-medinfo-primary-main px-[16px] py-[12px] font-medium
// 									text-medinfo-primary-main"
// 							/>
// 						</Form.Item>
// 					</Form.Root>
// 				</div>
// 				<div className="mt-[20px] flex gap-[16px] text-[20px] font-medium">
// 					<Button theme="secondary">Cancel</Button>
// 					<Button theme="primary">Save</Button>
// 				</div>
// 			</div>

// 			<div className="mt-[32px] flex w-full items-end rounded-[16px] bg-white p-[28px] shadow-md">
// 				<div className="flex w-full gap-[95px]">
// 					<h2 className="text-[18px] font-medium">Location</h2>
// 					<Form.Root className="space-y-[12px]">
// 						<Form.Item className="space-y-[4px]">
// 							<Form.Label className="text-[20px] font-medium">Country</Form.Label>
// 							<Form.Input
// 								type="text"
// 								className="w-full rounded-[8px] border-[1.4px] border-solid
// 									border-medinfo-primary-main px-[16px] py-[12px] font-medium
// 									text-medinfo-primary-main"
// 							/>
// 						</Form.Item>

// 						<Form.Item className="space-y-[4px]">
// 							<Form.Label className="text-[20px] font-medium">City</Form.Label>
// 							<Form.Input
// 								type="text"
// 								className="w-full rounded-[8px] border-[1.4px] border-solid
// 									border-medinfo-primary-main px-[16px] py-[12px] font-medium
// 									text-medinfo-primary-main"
// 							/>
// 						</Form.Item>
// 					</Form.Root>
// 				</div>
// 				<div className="mt-[20px] flex gap-[16px] text-[20px] font-medium">
// 					<Button theme="secondary">Cancel</Button>
// 					<Button theme="primary">Save</Button>
// 				</div>
// 			</div>

// 			<div className="mt-[32px] flex w-full items-end rounded-[16px] bg-white p-[28px] shadow-md">
// 				<div className="flex w-full gap-[95px]">
// 					<h2 className="text-[18px] font-medium">Change password</h2>
// 					<Form.Root className="space-y-[12px]">
// 						<Form.Item className="space-y-[4px]">
// 							<Form.Label className="text-[20px] font-medium">Old password</Form.Label>
// 							<Form.InputGroup
// 								className="rounded-[8px] border-[1.4px] border-medinfo-primary-main px-[16px]
// 									py-[12px]"
// 							>
// 								<Form.Input
// 									type="password"
// 									className="w-full font-medium text-medinfo-primary-main"
// 								/>
// 							</Form.InputGroup>
// 						</Form.Item>

// 						<Form.Item className="space-y-[4px]">
// 							<Form.Label className="text-[20px] font-medium">New password</Form.Label>
// 							<Form.Input
// 								type="password"
// 								className="w-full rounded-[8px] border-[1.4px] border-solid
// 									border-medinfo-primary-main px-[16px] py-[12px] font-medium
// 									text-medinfo-primary-main"
// 							/>
// 						</Form.Item>

// 						<Form.Item className="space-y-[4px]">
// 							<Form.Label className="text-[20px] font-medium">Confirm password</Form.Label>
// 							<Form.Input
// 								type="password"
// 								className="w-full rounded-[8px] border-[1.4px] border-solid
// 									border-medinfo-primary-main px-[16px] py-[12px] font-medium
// 									text-medinfo-primary-main"
// 							/>
// 						</Form.Item>
// 					</Form.Root>
// 				</div>
// 				<div className="mt-[20px] flex gap-[16px] text-[20px] font-medium">
// 					<Button theme="secondary">Remove</Button>
// 					<Button theme="primary">Change</Button>
// 				</div>
// 			</div>
// 		</div>
// 	);

function ProfilePage() {
	return (
		<div className="flex flex-col gap-8 px-6 py-14">
			<section
				className="flex flex-col gap-5 rounded-[16px] p-4 shadow-[0_4px_6px_hsl(150,20%,25%,0.25)]
					lg:bg-white lg:p-8"
			>
				<div
					className="relative size-[108px] rounded-full border-[1.4px] border-medinfo-primary-main
						bg-gray-300 lg:size-[140px]"
				>
					<div
						className="absolute right-0 top-[2px] flex size-[24px] items-center justify-center
							rounded-full border-[1.4px] border-medinfo-primary-main bg-white lg:size-[40px]"
					>
						<CameraIcon className="size-[16px] lg:size-[26px]" />
					</div>
				</div>

				<div className="flex gap-4">
					<Button theme="secondary">Remove</Button>
					<Button theme="primary">Change</Button>
				</div>
			</section>

			<section
				className="flex flex-col gap-5 rounded-[16px] p-4 shadow-[0_4px_6px_hsl(150,20%,25%,0.25)]
					lg:bg-white lg:p-8"
			>
				<h3 className="text-[18px] font-medium">User Identity</h3>

				<Form.Root className="gap-3">
					<Form.Item className="gap-1">
						<Form.Label className="font-roboto text-base font-medium">First Name</Form.Label>
						<Form.Input
							type="text"
							className="h-[48px] rounded-[8px] border-[1.4px] border-medinfo-primary-main px-4 py-3
								font-roboto font-medium placeholder:text-medinfo-dark-4
								focus-visible:ring-transparent md:h-[64px] md:py-5 md:text-base"
						/>
					</Form.Item>
					<Form.Item className="gap-1">
						<Form.Label className="font-roboto text-base font-medium">Last Name</Form.Label>
						<Form.Input
							type="text"
							className="h-[48px] rounded-[8px] border-[1.4px] border-medinfo-primary-main px-4 py-3
								font-roboto font-medium placeholder:text-medinfo-dark-4
								focus-visible:ring-transparent md:h-[64px] md:py-5 md:text-base"
						/>
					</Form.Item>

					{/* <Form.Item className="gap-1 font-roboto md:text-[20px]">
						<Form.Label className="font-medium">Gender</Form.Label>

						<Form.Controller
							// control={control}
							name="gender"
							render={({ field }) => (
								<Select.Root name={field.name} value={field.value} onValueChange={field.onChange}>
									<Select.Trigger
										classNames={{
											base: `group h-[48px] gap-2 rounded-[8px] border-[1.4px]
											border-medinfo-primary-main px-4 font-medium
											data-[placeholder]:text-medinfo-dark-4 md:h-[64px] md:text-base`,
											icon: `text-medinfo-body-color group-data-[state=open]:rotate-180
											md:size-6`,
										}}
									>
										<Select.Value placeholder="specify gender" />
									</Select.Trigger>

									<Select.Content
										classNames={{
											base: `border-[1.4px] border-medinfo-primary-main bg-white/90 p-0
											backdrop-blur-lg`,
											viewport: "gap-1",
										}}
									>
										<Select.Item
											value="male"
											className="h-[48px] bg-medinfo-light-3 font-medium text-medinfo-dark-4
												focus:bg-medinfo-light-1 focus:text-medinfo-body-color
												data-[state=checked]:bg-medinfo-light-1 md:h-[64px] md:text-base"
										>
											Male
										</Select.Item>
										<Select.Item
											value="female"
											className="h-[48px] bg-medinfo-light-3 font-medium text-medinfo-dark-4
												focus:bg-medinfo-light-1 focus:text-medinfo-body-color
												data-[state=checked]:bg-medinfo-light-1 md:h-[64px] md:text-base"
										>
											Female
										</Select.Item>
									</Select.Content>
								</Select.Root>
							)}
						/>
					</Form.Item> */}

					<Form.Item className="gap-1">
						<Form.Label className="font-roboto text-base font-medium">Bio</Form.Label>
						<Form.Input
							type="textarea"
							className="h-[163px] rounded-[8px] border-[1.4px] border-medinfo-primary-main px-4
								py-5 font-roboto font-medium placeholder:text-medinfo-dark-4
								focus-visible:ring-transparent md:h-[64px] md:text-base"
						/>
					</Form.Item>
				</Form.Root>

				<div className="flex gap-6 self-center">
					<Button theme="secondary">Cancel</Button>
					<Button theme="primary">Save</Button>
				</div>
			</section>
		</div>
	);
}
export default ProfilePage;
