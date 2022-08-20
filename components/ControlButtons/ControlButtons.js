import ControlButton from "./ControlButton";

import { FiCrop } from 'react-icons/fi';
import {
	BiMove,
	BiZoomIn,
	BiZoomOut
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

const ControlButtons = () => {
	return (
		<div className="mt-24 flex items-center justify-center space-x-2">
			<ControlButton Icon={BiZoomIn} title="Zoom In" />
			<ControlButton Icon={BiZoomOut} title="Zoom Out" />
			<ControlButton Icon={BsArrowLeft} title="Move Left" />
			<ControlButton Icon={BsArrowRight} title="Move Right" />
			<ControlButton Icon={BsArrowUp} title="Move Up" />
			<ControlButton Icon={BsArrowDown} title="Move Down" />
			<ControlButton Icon={GiHorizontalFlip} title="Flip X" />
			<ControlButton Icon={GiVerticalFlip} title="Flip Y" />
			<ControlButton Icon={FiCrop} title="Crop" />
			<ControlButton Icon={BiMove} title="Move" />
			<ControlButton Icon={GrRotateLeft} title="Rotate Left" />
			<ControlButton Icon={GrRotateRight} title="Rotate Right" />
		</div>
	);
}

export default ControlButtons;
