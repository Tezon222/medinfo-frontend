import CalendarIcon from "@/components/icons/CalendarIcon";
import DollarSignIcon from "@/components/icons/DollarSignIcon";
import PatientIcon from "@/components/icons/PatientIcon";
import Image from "next/image";
import ChartImage from "/public/assets/images/dashboard/chart.png"

function DoctorPage() {
	return (
		<div className="px-[40px] py-[40px]">
			<div className="flex gap-[40px] w-full max-h-[402px]">
				<div className="w-full max-w-[338px] space-y-[27px]">
					<div className="rounded-[16px] flex gap-[16px] p-[28px] shadow-md bg-white">
						<div className="bg-[#F0FDF6] p-[8px] rounded-[8px]">
							<DollarSignIcon/>
						</div>
						<div className="space-y-[6px]">
							<p className="font-normal text-medinfo-dark-3">Net income</p>
							<h2 className="text-[22px] font-medium text-medinfo-dark-1">$ 1200</h2>
						</div>
					</div>

					<div className="rounded-[16px] flex gap-[16px] p-[28px] shadow-md bg-white">
						<div className="bg-[#EFF4FB] p-[8px] rounded-[8px]">
							<PatientIcon/>
						</div>
						<div className="space-y-[6px]">
							<p className="font-normal text-medinfo-dark-3">Number of patients</p>
							<h2 className="text-[22px] font-medium text-medinfo-dark-1">890</h2>
						</div>
					</div>

					<div className="rounded-[16px] flex gap-[16px] p-[28px] shadow-md bg-white">
						<div className="bg-[#F8F5DB] p-[8px] rounded-[8px]">
							<CalendarIcon/>
						</div>
						<div className="space-y-[6px]">
							<p className="font-normal text-medinfo-dark-3">Total appointments</p>
							<h2 className="text-[22px] font-medium text-medinfo-dark-1">65</h2>
						</div>
					</div>
				</div>
				<div className="w-full rounded-[16px] p-[28px] shadow-md bg-white">
					<div className="flex justify-between items-center"> 
						<h2 className="text-[22px] font-medium">Overall activity</h2>
						<div>
							<p className="font-normal">2023</p>
							
						</div>
					</div>
					<div>
						{/* <Image src={ChartImage} height={} alt="chart"/> */}
					</div>
				</div>
			</div>
		</div>
	);
}

export default DoctorPage;
