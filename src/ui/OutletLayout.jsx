import Heading from "./Heading";
import styled, { css } from "styled-components";

const StyledOutletLayout = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
	row-gap: 3rem;
`;

const Box = styled.div`
	${({ $full }) =>
		$full &&
		css`
			flex: 0 0 100%;
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
