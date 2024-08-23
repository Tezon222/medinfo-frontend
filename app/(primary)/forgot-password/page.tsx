import { Main } from "../_components";

function ForgotPasswordPage() {
	return (
		<Main className="flex justify-center md:w-full">
			<section
				className="flex max-w-[524px] flex-col gap-5 rounded-[16px] border-[1.4px]
					border-medinfo-light-2 p-6 shadow-[0_0_0_2px_hsl(0,0%,0%,0.25)] md:p-9"
			>
				<div className="flex flex-col gap-3 text-center">
					<h1 className="text-[22px] font-medium text-medinfo-primary-darker">Forgot Password</h1>
					<p className="text-medinfo-dark-4">Select an option to send a link reset password</p>
				</div>

				<form></form>
			</section>
		</Main>
	);
}
export default ForgotPasswordPage;
