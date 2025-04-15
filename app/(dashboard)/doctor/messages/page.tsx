import MainMessageBox from "./_components/MainMessageBox";
import SideMessageBox from "./_components/SideMessageBox";

function page() {
	return (
		<div className="mt-[40px] flex gap-[30px] px-[24px] lg:z-10 lg:mt-0 lg:p-[40px]">
			<SideMessageBox />
			<MainMessageBox />
		</div>
	);
}

export default page;
