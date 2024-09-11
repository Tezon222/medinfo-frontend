import { IconBox, NavLink } from "@/components/common";
import { Card } from "@/components/ui";
import { cnMerge } from "@/lib/utils/cn";
import Image from "next/image";

export type DailyTipCardProps = {
	id: string;
	className?: string;
	imageUrl: string;
	title: string;
};

function DailyTipCard({ className, id, imageUrl, title }: DailyTipCardProps) {
	return (
		<Card
			as="li"
			className={cnMerge(
				`flex w-[161px] shrink-0 flex-col gap-3 rounded-[16px] border-[1.4px] border-medinfo-light-1
				pb-3 md:w-[276px]`,
				className
			)}
		>
			<Card.Header className="h-[117px] md:h-[176px]">
				<Image
					className="h-full rounded-t-[16px] object-cover"
					src={imageUrl}
					alt=""
					draggable={false}
					width={161}
					height={117}
				/>
			</Card.Header>

			<Card.Content className="grow px-3">{title}</Card.Content>

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
