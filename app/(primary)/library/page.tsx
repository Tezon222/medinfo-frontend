"use client";

import { IconBox, getElementList } from "@/components/common";
import { SearchIcon } from "@/components/icons";
import { DropdownMenu } from "@/components/ui";
import { cnJoin } from "@/lib/utils/cn";
import { useState } from "react";
import { TipCard } from "./TipCard";

function LibraryPage() {
	const [filter, setFilter] = useState<"list" | "grid">("grid");
	const [CardList] = getElementList("base");

	return (
		<main
			className="flex w-full flex-col gap-6 px-6 py-14 max-md:max-w-[400px] md:gap-[92px] md:px-[70px]
				md:py-[92px] lg:px-[100px]"
		>
			<section className="grid gap-3 text-center">
				<h1 className="text-[22px] font-medium text-medinfo-primary-darker">
					Lorem ipsum dolor sit amet consectetur
				</h1>

				<p className="text-sm">
					Lorem ipsum dolor sit amet consectetur. Massa nec imperdiet neque ut. Lobortis in phasellus
					sed mattis tincidunt eget diam pharetra. Est lacus faucibus scelerisque nunc interdum
					tincidunt.
				</p>
			</section>

			<section className="flex h-[48px] justify-center gap-5">
				<DropdownMenu.Root>
					<DropdownMenu.Trigger
						className="group flex h-full w-[116px] items-center justify-between gap-2 rounded-[8px]
							border-[1.4px] border-medinfo-primary-main px-4 font-medium
							data-[placeholder]:text-medinfo-dark-4"
					>
						<p className="text-sm font-medium md:text-base">{filter}</p>

						<IconBox
							icon="lucide:chevron-down"
							className="size-5 text-medinfo-body-color group-data-[state=open]:rotate-180 md:size-6"
						/>
					</DropdownMenu.Trigger>

					<DropdownMenu.Content
						className="grid gap-1 border-[1.4px] border-medinfo-primary-main bg-white/90
							backdrop-blur-lg"
						align="start"
					>
						<DropdownMenu.RadioGroup
							value={filter}
							onValueChange={(value: string) => setFilter(value as typeof filter)}
						>
							<DropdownMenu.RadioItem
								value="grid"
								className="h-[48px] bg-medinfo-light-3 font-medium text-medinfo-dark-4
									focus:text-base focus:text-medinfo-body-color
									data-[state=checked]:bg-medinfo-light-1 md:h-[64px] md:text-base
									md:focus:text-[18px]"
							>
								grid
							</DropdownMenu.RadioItem>
							<DropdownMenu.RadioItem
								value="list"
								className="h-[48px] bg-medinfo-light-3 font-medium text-medinfo-dark-4
									focus:text-base focus:text-medinfo-body-color
									data-[state=checked]:bg-medinfo-light-1 md:h-[64px] md:text-base
									md:focus:text-[18px]"
							>
								list
							</DropdownMenu.RadioItem>
						</DropdownMenu.RadioGroup>
					</DropdownMenu.Content>
				</DropdownMenu.Root>

				<form
					className="flex h-full items-center gap-[18px] rounded-lg border-[1.4px]
						border-medinfo-primary-main bg-white px-4 focus-within:ring-2
						focus-within:ring-medinfo-primary-lighter focus-visible:outline-none"
				>
					<SearchIcon type="green" className="size-5 shrink-0" />

					<input
						type="search"
						placeholder="search..."
						className="w-full font-roboto text-sm font-medium outline-none placeholder:font-medium
							placeholder:text-medinfo-dark-4"
					/>
				</form>
			</section>

			<section
				className={cnJoin("grid w-full gap-y-6", filter === "grid" && "grid-cols-2 gap-x-[16px]")}
			>
				<CardList
					each={[...Array(6).keys()]}
					render={(index) => <TipCard key={index} type={filter} id={index + 1} />}
				/>
			</section>

			<section>
				<p className="text-center text-medinfo-primary-main">More results ...(190)</p>
			</section>
		</main>
	);
}

export default LibraryPage;
