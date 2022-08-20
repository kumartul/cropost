import ControlButton from "./ControlButton";

import {
	ZoomInIcon,
	ZoomOutIcon,
	ArrowLeftIcon,
	ArrowRightIcon,
	ArrowUpIcon,
	ArrowDownIcon,
	SwitchHorizontalIcon,
	SwitchVerticalIcon,

} from '@heroicons/react/outline';

import { FiCrop } from 'react-icons/fi';
import { BiMove } from 'react-icons/bi';
import {
	GrRotateLeft,
	GrRotateRight
} from 'react-icons/gr';

const ControlButtons = () => {
	return (
		<div>
			<ControlButton Icon={ZoomInIcon} />
			<ControlButton Icon={ZoomOutIcon} />
			<ControlButton Icon={ArrowLeftIcon} />
			<ControlButton Icon={ArrowRightIcon} />
			<ControlButton Icon={ArrowUpIcon} />
			<ControlButton Icon={ArrowDownIcon} />
			<ControlButton Icon={SwitchHorizontalIcon} />
			<ControlButton Icon={SwitchVerticalIcon} />
			<ControlButton Icon={FiCrop} />
			<ControlButton Icon={BiMove} />
			<ControlButton Icon={GrRotateLeft} />
			<ControlButton Icon={GrRotateRight} />
		</div>
	);
}

export default ControlButtons;
