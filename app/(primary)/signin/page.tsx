"use client";

import { IconBox, Logo } from "@/components/common";
import { Button, Form } from "@/components/ui";
import Link from "next/link";
import { useForm } from "react-hook-form";

function SignInPage() {
	const methods = useForm({
		defaultValues: { email: "", password: "" },
	});

	const { control } = methods;

	return (
		<main
			className="mx-6 my-14 w-[min(100%,342px)] rounded-[16px] border-[1.4px] border-medinfo-light-2
				shadow-[0_0_0_2px_hsl(0,0%,0%,0.25)] md:mx-[100px] md:my-[92px] md:flex md:w-fit"
		>
			<section className="p-6 md:p-11">
				<Logo className="max-lg:h-[46px] max-lg:w-[60px]" />

				<div className="mt-3 flex w-max shrink-0 flex-col items-center gap-8 md:px-12">
					<h1
						className="max-w-[186px] text-center text-[24px] font-semibold leading-[32px]
							text-medinfo-primary-darker md:mx-[42px] md:max-w-[375px] md:text-[48px]
							md:font-bold md:leading-[56px]"
					>
						Sign in to MedInfo Nigeria
					</h1>

					<Form.Root methods={methods} className="w-full gap-[14px]">
						<Form.Item
							control={control}
							name="email"
							className="gap-1 font-roboto md:text-[20px]"
						>
							<Form.Label className="font-medium">Email</Form.Label>

							{/* // FIXME - Abstract this structure into an Form.InputGroup, giving access to LeftItem and RightItem */}
							<div
								className="flex items-center justify-between gap-4 rounded-[8px]
									border-[1.4px] border-medinfo-primary-main px-4 py-3 md:px-4 md:py-5"
							>
								<span>
									<IconBox icon="mynaui:envelope" className="size-5 md:size-6" />
								</span>

								<Form.Input
									type="email"
									placeholder="enter email"
									className="border-none p-0 font-medium placeholder:text-medinfo-dark-4
										focus-visible:ring-transparent md:text-base"
								/>
							</div>
						</Form.Item>

						<Form.Item
							control={control}
							name="password"
							className="gap-1 font-roboto md:text-[20px]"
						>
							<Form.Label className="font-medium">Password</Form.Label>

							<div
								className="flex items-center justify-between gap-4 rounded-[8px]
									border-[1.4px] border-medinfo-primary-main px-4 py-3 md:px-4 md:py-5"
							>
								<span>
									<IconBox icon="mynaui:lock-password" className="size-5 md:size-6" />
								</span>

								<Form.Input
									type={"password"}
									placeholder="enter password"
									className="border-none p-0 font-medium placeholder:text-medinfo-dark-4
										focus-visible:ring-transparent md:text-base"
								/>
							</div>

							<Link
								href="#forgot"
								className="mt-1 self-end font-work-sans text-medinfo-primary-main"
							>
								Forgot password?
							</Link>
						</Form.Item>

						<article className="flex flex-col items-center gap-[14px]">
							<p className="font-roboto text-medinfo-dark-4">Or</p>

							<div className="flex gap-8">
								<Button size="small" theme="outline" className="rounded-[8px]">
									<IconBox
										icon="icon-park-outline:google"
										className="size-[18px] lg:size-6"
									/>
								</Button>

								<Button size="small" theme="outline" className="rounded-[8px]">
									<IconBox icon="basil:facebook-outline" className="size-[18px] lg:size-6" />
								</Button>
							</div>

							<Button type="submit">Sign In</Button>

							<div className="space-y-1 text-center">
								<Link href="#doctor" className="text-medinfo-primary-main">
									Sign in as a doctor
								</Link>

								<p>
									Don't have an account?
									<Link href="/signup" className="text-medinfo-primary-main">
										Sign up
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
				<h2 className="text-[32px] font-semibold">Welcome Friend!</h2>

				<p className="mt-6 text-[18px]">Enter in your details and lets get you started</p>

				<Button theme="outline-inverted" className="mt-[38px]">
					Sign up
				</Button>
			</section>
		</main>
	);
}

export default SignInPage;
