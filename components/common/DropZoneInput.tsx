"use client";

import { Switch } from "@/components/common/Switch";
import { cnMerge } from "@/lib/utils/cn";
import { isFile } from "@zayne-labs/toolkit-type-helpers";
import { getElementList } from "@zayne-labs/ui-react/common/for";
import { DropZone, type DropZoneRootProps, useDropZoneContext } from "@zayne-labs/ui-react/ui/drop-zone";
import Image from "next/image";
import { toast } from "sonner";
import { IconBox } from "./IconBox";

type FileOrNull = File | null;

type DropZoneInputProps = DropZoneRootProps & {
	onChange: (file: FileOrNull) => void;
};

export function DropZoneInput(props: DropZoneInputProps) {
	const { onChange, onFilesChange, onUploadError, onUploadSuccess, ...restOfProps } = props;

	const handleFileUpload: DropZoneRootProps["onFilesChange"] = (ctx) => {
		onFilesChange?.(ctx);

		if (!isFile(ctx.filesWithPreview[0]?.file)) return;

		onChange(ctx.filesWithPreview[0].file);
	};

	return (
		<DropZone.Root
			onUploadError={(ctx) => {
				toast.error("Error", { description: ctx.message });
				onUploadError?.(ctx);
			}}
			onUploadSuccess={(ctx) => {
				toast.success("Success", { description: ctx.message });
				onUploadSuccess?.(ctx);
			}}
			onUpload={handleFileUpload}
			{...restOfProps}
		/>
	);
}

type ImagePreviewProps = {
	classNames?: {
		image?: string;
		listContainer?: string;
		listItem?: string;
	};
};

export function DropZoneInputImagePreview(props: ImagePreviewProps) {
	const { classNames } = props;

	const [ImagePreviewList] = getElementList();

	const { dropZoneState, dropZoneActions } = useDropZoneContext();

	if (dropZoneState.filesWithPreview.length === 0) return;

	return (
		<ImagePreviewList
			className={cnMerge(
				`relative mt-[13px] max-h-[140px] divide-y divide-gray-600 overflow-y-auto overscroll-y-contain
				rounded-md border border-gray-600`,
				classNames?.listContainer
			)}
			each={dropZoneState.filesWithPreview}
			render={(fileWithPreview) => {
				return (
					<li
						key={fileWithPreview.id}
						className={cnMerge(
							"flex items-center justify-between p-2 text-xs",
							classNames?.listItem
						)}
					>
						<div className="flex min-h-[48px] min-w-0 items-center gap-4">
							<Switch.Root>
								<Switch.Match when={fileWithPreview.file.type.startsWith("image")}>
									<Image
										src={fileWithPreview.preview ?? ""}
										className={cnMerge(
											"size-[50px] shrink-0 rounded-md object-cover",
											classNames?.image
										)}
										width={50}
										height={50}
										priority={true}
										alt="image-preview-thumbnail"
									/>
								</Switch.Match>

								<Switch.Match when={fileWithPreview.file.type.includes("pdf")}>
									<span className="block size-[40px] shrink-0">
										<IconBox icon="solar:document-medicine-linear" className="size-full" />
									</span>
								</Switch.Match>

								<Switch.Default>
									<span className="block size-[40px] shrink-0">
										<IconBox icon="solar:file-outline" className="size-full" />
									</span>
								</Switch.Default>
							</Switch.Root>

							<p className="truncate">{fileWithPreview.file.name}</p>
						</div>

						<button type="button" onClick={() => dropZoneActions.removeFile(fileWithPreview)}>
							<IconBox
								icon="lucide:trash-2"
								className="size-[20px] text-red-500 active:scale-110"
							/>
						</button>
					</li>
				);
			}}
		/>
	);
}

Object.assign(DropZoneInputImagePreview, DropZone.ImagePreview);
