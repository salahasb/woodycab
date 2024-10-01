import Heading from "./Heading";
import styled, { css } from "styled-components";

const StyledOutletLayout = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: 1fr;
	/* justify-content: space-between;
	align-items: center;
	flex-wrap: wrap; */
	row-gap: 3rem;
	column-gap: 5rem;

	@media (min-width: 650px) {
		grid-template-columns: auto auto;
	}
`;

const Box = styled.div`
	${({ $center }) =>
		$center &&
		css`
			justify-self: center;

			@media (min-width: 650px) {
				justify-self: right;
			}
		`}

	${({ $full }) =>
		$full &&
		css`
			@media (min-width: 650px) {
				grid-column: span 2;
			}
		`}
`;

function OutletLayout({ children, heading = "untitled" }) {
	return (
		<StyledOutletLayout>
			<Box>
				<Heading>{heading}</Heading>
			</Box>
			{/* {!children[0] && <Box />} */}
			{children}
		</StyledOutletLayout>
	);
}

OutletLayout.Box = Box;

export default OutletLayout;
