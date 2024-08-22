import styled from "styled-components";
import MainNav from "./MainNav";
import Uploader from "../data/Uploader";
import Logo from "./Logo.styled";

const StyledSideBar = styled.aside`
	grid-row: 1/-1;
	border: var(--border-main);
	background-color: var(--color-grey-0);
	padding: 2rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 3.2rem;
`;

function SideBar() {
	return (
		<StyledSideBar>
			<Logo />
			<MainNav />
			<Uploader />
		</StyledSideBar>
	);
}

export default SideBar;
