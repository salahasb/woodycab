import styled from "styled-components";
import MainNav from "./MainNav";
import Uploader from "../data/Uploader";
import Logo from "./Logo";

const StyledSideBar = styled.aside`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 3.2rem;
	border: var(--border-main);
	background-color: var(--color-grey-0);
	padding: 2rem;

	width: 100%;
	max-width: 34rem;
	position: absolute;
	z-index: 1;
	height: 100%;
	transition: transform 0.3s;
	transform: translateX(-100%);

	@media (min-width: 1024px) {
		grid-row: 1/-1;
		width: auto;
		position: static;
		transform: translateX(0);
	}
`;

function SideBar() {
	return (
		<StyledSideBar>
			<Logo />
			<MainNav />
			{process.env.NODE_ENV === "development" && <Uploader />}
		</StyledSideBar>
	);
}

export default SideBar;
