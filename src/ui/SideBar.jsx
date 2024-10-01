import styled, { css } from "styled-components";
import MainNav from "./MainNav";
import Uploader from "../data/Uploader";
import Logo from "./Logo";
import { HiXMark } from "react-icons/hi2";
import CloseButton from "./CloseButton.styled";

const StyledSideBar = styled.aside`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 5rem;
	border: var(--border-main);
	background-color: var(--color-grey-0);
	padding: 6rem 2rem 2rem 2rem;

	width: 100%;
	max-width: 38.5rem;
	position: fixed;
	z-index: 1;
	height: 100dvh;
	top: 0;
	bottom: 0;
	transition: transform 0.3s;

	${({ showMenu }) =>
		!showMenu
			? css`
					transform: translateX(-100%);
			  `
			: css`
					transform: translateX(0);
			  `}

	@media (min-width: 1024px) {
		grid-row: 1/-1;
		width: auto;
		position: static;
		transform: translateX(0);
	}
`;

function SideBar({ showMenu, setShowMenu }) {
	return (
		<StyledSideBar showMenu={showMenu}>
			<CloseButton sideBar={true} onClick={() => setShowMenu(false)}>
				<HiXMark size={22} />
			</CloseButton>

			<Logo />

			<MainNav />

			{process.env.NODE_ENV === "development" && <Uploader />}
		</StyledSideBar>
	);
}

export default SideBar;
