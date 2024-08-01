function Page() {
	return (
		<div className="p-[40px]">
			<div className="rounded-[16px] bg-white p-[28px] shadow-md">
				<div className="space-y-[12px]">
					<h1 className="text-[22px] font-medium text-medinfo-dark-1">Notifications</h1>
					<p className="text-[14px] font-normal text-medinfo-dark-4">
						MedInfo Nigeria may still send you important notifications about your account outside of
						your preferred notification settings.
					</p>
				</div>
				<div className="mt-[24px] w-full max-w-[683px] space-y-[24px]">
					<div className="flex justify-between">
						<h2 className="text-[18px] text-medinfo-dark-1">
							A doctor answers your questions in the community
						</h2>
						<div className="space-y-[8px]">
							<div className="flex items-center space-x-[8px]">
								<input type="radio" name="" className="size-[24px]" />
								<label>Yes</label>
							</div>
							<div className="flex items-center space-x-[8px]">
								<input type="radio" name="" className="size-[24px]" />
								<label>No</label>
							</div>
						</div>
					</div>
					<div className="flex justify-between">
						<h2 className="text-[18px] text-medinfo-dark-1">
							A doctor answers your questions in the community
						</h2>
						<div className="space-y-[8px]">
							<div className="flex items-center space-x-[8px]">
								<input type="radio" name="" className="size-[24px]" />
								<label>Yes</label>
							</div>
							<div className="flex items-center space-x-[8px]">
								<input type="radio" name="" className="size-[24px]" />
								<label>No</label>
							</div>
						</div>
					</div>
					<div className="flex justify-between">
						<h2 className="text-[18px] text-medinfo-dark-1">
							A doctor answers your questions in the community
						</h2>
						<div className="space-y-[8px]">
							<div className="flex items-center space-x-[8px]">
								<input type="radio" name="" className="size-[24px]" />
								<label>Yes</label>
							</div>
							<div className="flex items-center space-x-[8px]">
								<input type="radio" name="" className="size-[24px]" />
								<label>No</label>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="mt-[32px] rounded-[16px] bg-white p-[28px] shadow-md">
				<div className="space-y-[40px]">
					<h2 className="text-[22px] font-medium">About MedInfo Nigeria</h2>
					<div className="space-y-[16px] text-[20px] font-medium text-medinfo-primary-main">
						<p>Terms of use</p>
						<hr className="w-full" />
						<p>Privacy policy</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Page;
