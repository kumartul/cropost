import { useState } from 'react';

import { Accordion as MuiAccordion, AccordionSummary, AccordionDetails, Input, Button } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

const Accordion = ({ resolutions, onResolutionChange }) => {
	const [width, setWidth] = useState(0);
	const [height, setHeight] = useState(0);

	return (
		<div className="flex-[0.2] h-[79vh] bg-[#d3d3d3] dark:bg-[#1a1a1a] rounded-lg ml-2 overflow-y-scroll">
			{
				resolutions.map((resolution, index) => (
					<MuiAccordion key={'m' + index}>
						<AccordionSummary
							className="dark:!bg-[#1a1a1a]"
							expandIcon={<ExpandMore className="dark:text-white" />}
						>
							<h2 className="text-gray-700 dark:text-gray-300 font-semibold">{Object.keys(resolution)[0]}</h2>
						</AccordionSummary>
						<AccordionDetails className="dark:!bg-[#222]">
							{
								Object.values(resolution)[0].map((dimension, _index) => (
									<div
										key={'i' + _index}
										className="text-gray-600 dark:text-gray-300"
									>
										<input
											type="radio"
											name="dimension"
											id={`item_${index}${_index}`}
											className="mr-2 cursor-pointer"
											defaultChecked={index === 0 && _index === 0}
											onChange={() => onResolutionChange(Object.keys(resolution)[0], dimension.description, dimension.width, dimension.height)}
										/>
										<label htmlFor={`item_${index}${_index}`}>{dimension.name}</label>
									</div>
								))
							}
						</AccordionDetails>
					</MuiAccordion>
				))
			}
			<MuiAccordion>
				<AccordionSummary
					className="dark:!bg-[#1a1a1a]"
					expandIcon={<ExpandMore className="dark:text-white" />}
				>
					<h2 className="text-gray-700 dark:text-gray-300 font-semibold">Custom</h2>
				</AccordionSummary>

				<AccordionDetails className="flex flex-col space-y-2">
					<div>
						Width:&nbsp;&nbsp;&nbsp;
						<Input
							type="number"
							value={width}
							onChange={event => setWidth(event.target.value)}
						/>
					</div>

					<div>
						Height:&nbsp;&nbsp;
						<Input
							type="number"
							value={height}
							onChange={event => setHeight(event.target.value)}
						/>
					</div>

					<Button
						className="!normal-case !text-[16px] !text-white !bg-green-600 hover:!bg-green-700"
						onClick={() => onResolutionChange('Custom', 'Custom Resolution', width, height)}
					>
						Done!
					</Button>
				</AccordionDetails>
			</MuiAccordion>
		</div>
	);
}

export default Accordion;
