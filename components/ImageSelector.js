import { UploadIcon } from '@heroicons/react/outline';

const ImageSelector = ({ onChange }) => {
	return (
		<div className="w-full h-[75vh] m-4 flex flex-col items-center justify-center border-dashed border-4 border-gray-400">
			<label
				htmlFor="image-selector"
				className="cursor-pointer flex flex-col space-y-8 items-center justify-center w-full h-full"
			>
				<UploadIcon className="h-20 w-20 text-gray-500 dark:text-gray-300" />
				<h2 className="cursor-pointer text-gray-500 text-xl font-semibold dark:text-gray-300">
					Click to select the image
				</h2>
			</label>

			<input
				type="file"
				accept="image/*"
				onChange={onChange}
				className="hidden"
				id="image-selector"
			/>
		</div>
	);
}

export default ImageSelector;
