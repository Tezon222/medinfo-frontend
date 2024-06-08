"use client";

import { IconBox, Logo, Show } from "@/components/common";
import { Button, Form, Select } from "@/components/ui";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import DropZoneInput from "./DropZoneInput";

function SignUpPage() {
	const methods = useForm({
		defaultValues: {
			firstName: "",
			lastName: "",
			email: "",
			password: "",
			confirmPassword: "",
			specialty: "",
			license: [],
			country: "",
			photo: null,
		},
	});

	const { control } = methods;

	const type = useSearchParams().get("type") as "doctor" | "patient" | null;

	return (
		<main
			className="mx-6 my-14 max-w-max rounded-[16px] border-[1.4px] border-medinfo-light-2
				shadow-[0_0_0_2px_hsl(0,0%,0%,0.25)] md:mx-[100px] md:my-[92px] md:flex"
		>
			<section className="p-6 md:p-11">
				<Logo className="max-lg:h-[46px] max-lg:w-[60px]" />

				<div className="mt-3 flex flex-col items-center gap-8 md:w-max md:px-12">
					<h1
						className="max-w-[186px] text-center text-[24px] font-semibold leading-[32px]
							text-medinfo-primary-darker md:mx-[42px] md:max-w-[375px] md:text-[48px]
							md:font-bold md:leading-[56px]"
					>
						Join MedInfo Nigeria
					</h1>

					<Form.Root methods={methods} className="w-full gap-[14px]">
						<Form.Item
							control={control}
							name="firstName"
							className="gap-1 font-roboto md:text-[20px]"
						>
							<Form.Label className="font-medium">First name</Form.Label>

							<Form.InputGroup
								className="h-[48px] rounded-[8px] border-[1.4px]
									border-medinfo-primary-main px-4 py-3 md:h-[64px] md:px-4 md:py-5"
							>
								<Form.InputLeftItem>
									<IconBox icon="majesticons:user-line" className="size-5 md:size-6" />
								</Form.InputLeftItem>

								<Form.Input
									type="text"
									placeholder="enter first name"
									className="border-none p-0 font-medium placeholder:text-medinfo-dark-4
										focus-visible:ring-transparent md:text-base"
								/>
							</Form.InputGroup>
						</Form.Item>

						<Form.Item
							control={control}
							name="lastName"
							className="gap-1 font-roboto md:text-[20px]"
						>
							<Form.Label className="font-medium">Last name</Form.Label>

							<Form.InputGroup
								className="h-[48px] rounded-[8px] border-[1.4px]
									border-medinfo-primary-main px-4 py-3 md:h-[64px] md:px-4 md:py-5"
							>
								<Form.InputLeftItem>
									<IconBox icon="majesticons:user-line" className="size-5 md:size-6" />
								</Form.InputLeftItem>

								<Form.Input
									type="text"
									placeholder="enter last name"
									className="border-none p-0 font-medium placeholder:text-medinfo-dark-4
										focus-visible:ring-transparent md:text-base"
								/>
							</Form.InputGroup>
						</Form.Item>

						<Form.Item
							control={control}
							name="country"
							className="gap-1 font-roboto md:text-[20px]"
						>
							<Form.Label className="font-medium">Country</Form.Label>

							<Form.Controller
								control={control}
								name="country"
								render={({ field }) => (
									<Select.Root
										name={field.name}
										value={field.value}
										onValueChange={field.onChange}
									>
										<Select.Trigger
											classNames={{
												base: `h-[48px] gap-2 rounded-[8px] border-[1.4px]
												border-medinfo-primary-main px-4 font-medium
												data-[placeholder]:text-medinfo-dark-4 md:h-[64px] md:px-4
												md:text-base`,
												icon: "text-medinfo-dark-body-text md:size-6",
											}}
										>
											<Select.Value placeholder="select your country" />
										</Select.Trigger>

										<Select.Content className="bg-white/90 backdrop-blur-lg">
											<Select.Item
												value="Nigeria"
												className="font-medium md:text-base"
											>
												Nigeria
											</Select.Item>
											<Select.Item value="Ghana" className="font-medium md:text-base">
												Ghana
											</Select.Item>
										</Select.Content>
									</Select.Root>
								)}
							/>
						</Form.Item>

						<Show when={type === "doctor"}>
							<Form.Item
								control={control}
								name="specialty"
								className="gap-1 font-roboto md:text-[20px]"
							>
								<Form.Label className="font-medium">Specialty</Form.Label>

								<Form.Controller
									control={control}
									name="specialty"
									render={({ field }) => (
										<Select.Root
											name={field.name}
											value={field.value}
											onValueChange={field.onChange}
										>
											<Select.Trigger
												classNames={{
													base: `h-[48px] gap-2 rounded-[8px] border-[1.4px]
													border-medinfo-primary-main px-4 font-medium
													data-[placeholder]:text-medinfo-dark-4 md:h-[64px]
													md:text-base`,
													icon: "text-medinfo-dark-body-text md:size-6",
												}}
											>
												<Select.Value placeholder="select your specialty" />
											</Select.Trigger>

											<Select.Content className="bg-white/90 backdrop-blur-lg">
												<Select.Item
													value="steeze"
													className="font-medium md:text-base"
												>
													Steeze
												</Select.Item>
												<Select.Item
													value="cooking"
													className="font-medium md:text-base"
												>
													Cooking
												</Select.Item>
											</Select.Content>
										</Select.Root>
									)}
								/>
							</Form.Item>
						</Show>

						<Show when={type === "doctor"}>
							<Form.Item
								control={control}
								name="license"
								className="gap-1 font-roboto md:text-[20px]"
							>
								<Form.Label className="font-medium">Upload medical license/certificate</Form.Label>

								<Form.Controller
									control={control}
									name="license"
									render={({ field }) => (
										<DropZoneInput value={field.value} onChange={field.onChange} />
									)}
								/>
							</Form.Item>
						</Show>

						<Form.Item
							control={control}
							name="password"
							className="gap-1 font-roboto md:text-[20px]"
						>
							<Form.Label className="font-medium">Password</Form.Label>

							<Form.InputGroup
								className="h-[48px] rounded-[8px] border-[1.4px]
									border-medinfo-primary-main px-4 py-3 md:h-[64px] md:px-4 md:py-5"
							>
								<Form.InputLeftItem>
									<IconBox icon="mynaui:lock-password" className="size-5 md:size-6" />
								</Form.InputLeftItem>

								<Form.Input
									type="password"
									placeholder="enter password"
									className="border-none p-0 font-medium placeholder:text-medinfo-dark-4
										focus-visible:ring-transparent md:text-base"
								/>
							</Form.InputGroup>
						</Form.Item>

						<Form.Item
							control={control}
							name="confirmPassword"
							className="gap-1 font-roboto md:text-[20px]"
						>
							<Form.Label className="font-medium">Confirm password</Form.Label>

							<Form.InputGroup
								className="h-[48px] rounded-[8px] border-[1.4px]
									border-medinfo-primary-main px-4 py-3 md:h-[64px] md:px-4 md:py-5"
							>
								<Form.InputLeftItem>
									<IconBox icon="mynaui:lock-password" className="size-5 md:size-6" />
								</Form.InputLeftItem>

								<Form.Input
									type="password"
									placeholder="enter password"
									className="border-none p-0 font-medium placeholder:text-medinfo-dark-4
										focus-visible:ring-transparent md:text-base"
								/>
							</Form.InputGroup>
						</Form.Item>

						<article className="flex flex-col items-center gap-[14px] md:mt-[14px] md:gap-7">
							<Show when={type === "patient"}>
								<p className="font-roboto text-medinfo-dark-4 md:text-[20px]">Or</p>

								<div className="flex gap-8">
									<Button size="small" theme="outline" className="rounded-[8px]">
										<IconBox
											icon="icon-park-outline:google"
											className="size-[18px] lg:size-6"
										/>
									</Button>

									<Button size="small" theme="outline" className="rounded-[8px]">
										<IconBox
											icon="basil:facebook-outline"
											className="size-[18px] lg:size-6"
										/>
									</Button>
								</div>
							</Show>

							<Button type="submit">Sign Up</Button>

							<div className="space-y-2 text-center">
								<Link
									href={{
										query: { type: type === "doctor" ? "patient" : "doctor" },
									}}
									className="text-medinfo-primary-main md:text-[20px]"
								>
									{type === "doctor" ? "Register as a patient" : "Register as a doctor"}
								</Link>

								<p className="md:hidden">
									Already have an account?{" "}
									<Link href="/signup" className="text-medinfo-primary-main">
										Sign in
									</Link>
								</p>
							</div>
						</article>
					</Form.Root>
				</div>
			</section>

			<section
				className="flex max-w-[432px] flex-col items-center justify-center rounded-r-[16px]
					bg-medinfo-primary-main px-[35px] text-center text-white max-md:hidden"
			>
				<h2 className="text-[32px] font-semibold">Hello friend!</h2>

				<p className="mt-6 text-[18px]">
					Enter in your details and lets continue from where you stopped
				</p>

				<Button theme="outline-inverted" className="mt-[38px]">
					Sign in
				</Button>
			</section>
		</main>
	);
}

export default SignUpPage;
