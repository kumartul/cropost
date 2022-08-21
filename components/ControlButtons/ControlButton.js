import { IconButton } from '@mui/material';

const ControlButton = ({ Icon, title, onClick }) => {
	return (
		<IconButton
			title={title}
			onClick={onClick}
			className="p-4 rounded-full !text-gray-500 bg-gray-200 dark:!text-gray-100 dark:bg-[#222]"
		>
			<Icon />
		</IconButton>
	);
}

export default ControlButton;
