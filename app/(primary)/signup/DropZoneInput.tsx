import { DocumentUploadIcon } from "@/components/icons";
import { Button, DropZone } from "@/components/ui";

type DropZoneInputProps = {
	value: File[];
	onChange: (files: File[]) => void;
};

function DropZoneInput(props: DropZoneInputProps) {
	const { value, onChange } = props;

	return (
		<DropZone
			onDrop={({ acceptedFiles }) => {}}
			classNames={{
				base: `items-center gap-2 rounded-[8px] border-[1.4px] border-dashed
				border-medinfo-primary-darker px-4 py-3`,
			}}
			allowedFileTypes={["image/jpeg", "image/png", "application/pdf"]}
			validationRules={{ maxFileSize: 4 }}
		>
			<DocumentUploadIcon className="shrink-0 md:size-10" />

			<p className="text-[18px] font-medium text-medinfo-primary-darker md:text-[20px]">
				Drag files to upload
			</p>

			<p className="text-sm text-medinfo-dark-2">Files supported: JPG, PNG, PDF </p>

			<p className="text-sm text-medinfo-dark-2">or</p>

			<Button size="large">Choose File</Button>

			<p className="text-sm text-medinfo-dark-2">Maximum size: 4mb</p>
		</DropZone>
	);
}

export default DropZoneInput;
