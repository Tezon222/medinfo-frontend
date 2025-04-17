import MainMessageBox from "./_components/MainMessageBox";
import SideMessageBox from "./_components/SideMessageBox";

function page() {
	return (
		<div className="static top-[85px] flex gap-[30px] px-0 lg:sticky lg:w-full lg:px-[24px] lg:py-[20px]">
			<SideMessageBox />
			<MainMessageBox />
		</div>
	);
}

export default page;
