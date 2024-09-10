import styled from "styled-components";
import MainNav from "./MainNav";
import Uploader from "../data/Uploader";
import Logo from "./Logo.styled";
import { useDarkMode } from "../contexts/DarkModeContext";

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
	const { isDarkMode } = useDarkMode();

	const src = isDarkMode
		? "/src/data/img/logo-dark.png"
		: "/src/data/img/logo-light.png";

	return (
		<StyledSideBar>
			<Logo src={src} />
			<MainNav />
			<Uploader />
		</StyledSideBar>
	);
}

export default SideBar;
