import { Accordion as MuiAccordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

const Accordion = ({ resolutions }) => {
	return (
		<div className="flex-[0.2] h-[79vh] bg-[#d3d3d3] dark:bg-[#1a1a1a] rounded-lg ml-2 overflow-y-scroll">
			{
				resolutions.map((resolution, index) => (
					<MuiAccordion key={index}>
						<AccordionSummary
							className="dark:!bg-[#1a1a1a]"
							expandIcon={<ExpandMore className="dark:text-white" />}
						>
							<h2 className="text-gray-700 dark:text-gray-300 font-semibold">{Object.keys(resolution)[0]}</h2>
						</AccordionSummary>
						<AccordionDetails className="dark:!bg-[#222]">
							{
								Object.values(resolution)[0].map((dimension, _index) => (
									<div className="text-gray-600 dark:text-gray-300">
										<input
											type="radio"
											name="dimension"
											className="mr-2 cursor-pointer"
										/>
										{dimension.name}
									</div>
								))
							}
						</AccordionDetails>
					</MuiAccordion>
				))
			}
		</div>
	);
}

export default Accordion;
