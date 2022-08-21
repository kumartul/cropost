import { Button } from "@mui/material";

import { AiOutlineDelete } from 'react-icons/ai';
import { FiDownload } from 'react-icons/fi';

const Card = ({ imagePreview, imageName, imageType, deleteImage }) => {
	return (
		<div className="flex-[0.2] flex flex-col space-y-4 h-[79vh] bg-[#d3d3d3] dark:bg-[#1a1a1a] rounded-lg p-2 mr-2">
			<div>
				<h2 className="text-gray-700 dark:text-gray-300 text-xl font-semibold">Image Preview</h2>

				<img
					src={imagePreview}
					alt="Preview"
					className="border-2 border-gray-600 dark:border-gray-500 border-dashed rounded-md mt-2"
				/>
			</div>

			<div className="flex space-x-2">
				<Button
					className="flex-1 flex space-x-2 items-center justify-center !normal-case !text-[16px] !text-white !bg-red-600 hover:!bg-red-700"
					onClick={deleteImage}
				>
					<div>
						<AiOutlineDelete />
					</div>
					<div>
						Delete
					</div>
				</Button>

				<Button className="flex-1 !normal-case !text-[16px] !text-white !bg-green-600 hover:!bg-green-700">
					<a
						href={imagePreview}
						download={`${imageName.replace("." + imageType.slice(imageType.indexOf('/') + 1), "")}_cropped.${imageType.slice(imageType.indexOf('/') + 1)}`}
						className="flex space-x-2 items-center justify-center"
					>
						<div>
							<FiDownload />
						</div>
						<div>
							Download
						</div>
					</a>
				</Button>
			</div>
		</div>
	);
}

export default Card;
