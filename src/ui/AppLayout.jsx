import styled from "styled-components";
import Header from "./Header";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import Modal from "./Modal";
import ToasterList from "./Toaster";
import useUser from "../features/auth/useUser";
import { useEffect } from "react";

const StyledAppLayout = styled.div`
	/* display: grid;
	grid-template-columns: 26rem 1fr;
	grid-template-rows: auto 1fr;
	height: 100vh; */
	display: flex;
	flex-direction: column;

	/* @media (min-width: 1190px) { */
	@media (min-width: 1024px) {
		display: grid;
		grid-template-columns: 26rem 1fr;
		grid-template-rows: auto 1fr;
		height: 100vh;
	}
`;

const Main = styled.main`
	background-color: var(--color-grey-50);
	padding: 5rem 2rem;
	margin: 0 auto;
	overflow-y: auto;

	width: 100%;
	max-width: 120rem;
`;

function AppLayout() {
	return (
		<Modal>
			<StyledAppLayout>
				<Header />
				<SideBar />
				<Main>
					<Outlet />
				</Main>
			</StyledAppLayout>
		</Modal>
	);
}

export default AppLayout;
