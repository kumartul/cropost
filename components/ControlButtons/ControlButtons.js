import ControlButton from "./ControlButton";

import { FiCrop } from 'react-icons/fi';
import {
	BiMove,
	BiZoomIn,
	BiZoomOut,
	BiReset
} from 'react-icons/bi';
import {
	BsArrowLeft,
	BsArrowRight,
	BsArrowUp,
	BsArrowDown
} from 'react-icons/bs';
import {
	GrRotateLeft,
	GrRotateRight
} from 'react-icons/gr';
import {
	GiHorizontalFlip,
	GiVerticalFlip
} from 'react-icons/gi';

const ControlButtons = ({ cropper }) => {
	const zoomIn = () => cropper.zoom(0.1);

	const zoomOut = () => cropper.zoom(-0.1);

	const moveLeft = () => cropper.move(-10, 0);

	const moveRight = () => cropper.move(10, 0);

	const moveUp = () => cropper.move(0, -10);

	const moveDown = () => cropper.move(0, 10);

	const flipX = () => cropper.getData().scaleX === 1 ? cropper.scaleX(-1) : cropper.scaleX(1);

	const flipY = () => cropper.getData().scaleY === 1 ? cropper.scaleY(-1) : cropper.scaleY(1);

	const rotateLeft = () => cropper.rotate(-90);

	const rotateRight = () => cropper.rotate(90);

	const crop = () => cropper.setDragMode('crop');

	const move = () => cropper.setDragMode('move');

	const reset = () => cropper.reset();

	return (
		<div className="mt-24 flex items-center justify-center space-x-4 absolute bottom-2 left-0 right-0">
			<ControlButton
				Icon={BiZoomIn}
				title="Zoom In"
				onClick={zoomIn}
			/>
			<ControlButton
				Icon={BiZoomOut}
				title="Zoom Out"
				onClick={zoomOut}
			/>
			<ControlButton
				Icon={BsArrowLeft}
				title="Move Left"
				onClick={moveLeft}
			/>
			<ControlButton
				Icon={BsArrowRight}
				title="Move Right"
				onClick={moveRight}
			/>
			<ControlButton
				Icon={BsArrowUp}
				title="Move Up"
				onClick={moveUp}
			/>
			<ControlButton
				Icon={BsArrowDown}
				title="Move Down"
				onClick={moveDown}
			/>
			<ControlButton
				Icon={GiHorizontalFlip}
				title="Flip X"
				onClick={flipX}
			/>
			<ControlButton
				Icon={GiVerticalFlip}
				title="Flip Y"
				onClick={flipY}
			/>
			<ControlButton
				Icon={GrRotateLeft}
				title="Rotate Left"
				onClick={rotateLeft}
			/>
			<ControlButton
				Icon={GrRotateRight}
				title="Rotate Right"
				onClick={rotateRight}
			/>
			<ControlButton
				Icon={FiCrop}
				title="Crop"
				onClick={crop}
			/>
			<ControlButton
				Icon={BiMove}
				title="Move"
				onClick={move}
			/>
			<ControlButton
				Icon={BiReset}
				title="Reset"
				onClick={reset}
			/>
		</div>
	);
}

export default ControlButtons;
