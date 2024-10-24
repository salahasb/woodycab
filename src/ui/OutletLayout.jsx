import Heading from "./Heading";
import styled, { css } from "styled-components";

const StyledOutletLayout = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: 1fr;
	row-gap: 3rem;
	column-gap: 2rem;

	@media (min-width: 700px) {
		grid-template-columns: auto 1fr;
	}
`;

const Box = styled.div`
	${({ $operation }) =>
		$operation &&
		css`
			justify-self: center;

			@media (min-width: 700px) {
				justify-self: right;
			}
		`}

	${({ $full }) =>
		$full &&
		css`
			@media (min-width: 700px) {
				grid-column: span 2;
			}
		`}

	${({ $resource }) =>
		$resource === "table" &&
		css`
			overflow-y: hidden;
		`}
`;

function OutletLayout({ children, heading = "untitled" }) {
	return (
		<StyledOutletLayout>
			<Box>
				<Heading>{heading}</Heading>
			</Box>
			{children}
		</StyledOutletLayout>
	);
}

OutletLayout.Box = Box;

export default OutletLayout;
