import styled from "styled-components";
import Box from "../../ui/Box.styled";

const StyledDashboardLayout = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
`;

function DashboardLayout() {
	return (
		<StyledDashboardLayout>
			<Box padding=""></Box>
		</StyledDashboardLayout>
	);
}

export default DashboardLayout;
