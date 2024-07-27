function Page() {
	return (
		<div className="p-[40px]">
			<div className="rounded-[16px] bg-white p-[28px] shadow-md">
				<div className="space-y-[12px]">
					<h1 className="text-[22px] font-medium text-[#414141]">Notifications</h1>
					<p className="text-[#8C8C8C] text-[14px] font-normal">
						MedInfo Nigeria may still send you important notifications about your account outside of
						your preferred notification settings.
					</p>
				</div>
				<div className="w-full max-w-[683px] mt-[24px] space-y-[24px]">
					<div className="flex justify-between">
						<h2 className="text-[#414141] text-[18px]">A doctor answers your questions in the community</h2>
						<div className="space-y-[8px]">
							<div className="space-x-[8px] flex items-center">
								<input type="radio" name="" className="w-[24px] h-[24px]" />
								<label >Yes</label>
							</div>
							<div className="space-x-[8px] flex items-center">
								<input type="radio" name="" className="w-[24px] h-[24px]" />
								<label >No</label>
							</div>
						</div>
					</div>
					<div className="flex justify-between">
						<h2 className="text-[#414141] text-[18px]">A doctor answers your questions in the community</h2>
						<div className="space-y-[8px]">
							<div className="space-x-[8px] flex items-center">
								<input type="radio" name="" className="w-[24px] h-[24px]" />
								<label >Yes</label>
							</div>
							<div className="space-x-[8px] flex items-center">
								<input type="radio" name="" className="w-[24px] h-[24px]" />
								<label >No</label>
							</div>
						</div>
					</div>
					<div className="flex justify-between">
						<h2 className="text-[#414141] text-[18px]">A doctor answers your questions in the community</h2>
						<div className="space-y-[8px]">
							<div className="space-x-[8px] flex items-center">
								<input type="radio" name="" className="w-[24px] h-[24px]" />
								<label >Yes</label>
							</div>
							<div className="space-x-[8px] flex items-center">
								<input type="radio" name="" className="w-[24px] h-[24px]" />
								<label >No</label>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="rounded-[16px] bg-white p-[28px] shadow-md mt-[32px]">
				<div className="space-y-[40px]">
					<h2 className="text-[22px] font-medium">About MedInfo Nigeria</h2>
					<div className="space-y-[16px]">
						<p className="text-[20px] text-[#344E41] font-medium">Terms of use</p>
						<hr className="w-full" />
						<p className="text-[20px] text-[#344E41] font-medium">Privacy policy</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Page;
