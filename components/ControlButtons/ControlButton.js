import { IconButton } from '@mui/material';

const ControlButton = ({ Icon, title, onClick }) => {
	return (
		<IconButton
			title={title}
			onClick={onClick}
			className="p-4 rounded-full !text-gray-700 !bg-gray-300 hover:!bg-gray-200 dark:!text-gray-200 dark:!bg-[#2a2a2a] dark:hover:!bg-[#2f2f2f]"
		>
			<Icon />
		</IconButton>
	);
}

export default ControlButton;
