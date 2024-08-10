import { IconBox, NavLink } from "@/components/common";
import { Card } from "@/components/ui";
import { cnMerge } from "@/lib/utils/cn";
import { tipPlaceHolder } from "@/public/assets/images/landing-page";
import Image from "next/image";

export type DailyTipCardProps = {
	id: number;
	className?: string;
};

function DailyTipCard({ className, id }: DailyTipCardProps) {
	return (
		<Card
			as="li"
			className={cnMerge(
				`flex w-[161px] shrink-0 flex-col gap-3 rounded-[16px] border-[1.4px] border-medinfo-light-1
				pb-3 md:w-[276px]`,
				className
			)}
		>
			<Card.Header className="min-h-[117px] md:max-h-[176px]">
				<Image
					className="max-h-full rounded-t-[16px] object-cover"
					src={tipPlaceHolder as string}
					alt=""
					draggable={false}
					width={161}
					height={117}
				/>
			</Card.Header>

			<Card.Content className="px-3">Lorem ipsum dolor sit amet consectetur.</Card.Content>

			<Card.Footer className="px-3" asChild={true}>
				<NavLink href={`/daily-tips/${id}`} className="flex items-center gap-4">
					Learn More
					<IconBox icon="material-symbols:play-arrow" className="text-[20px]" />
				</NavLink>
			</Card.Footer>
		</Card>
	);
}
export default DailyTipCard;
