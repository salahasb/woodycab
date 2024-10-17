import styled from "styled-components";
import Header from "./Header";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import Modal from "./Modal";

import { useState } from "react";

const StyledAppLayout = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	height: 100dvh;
	grid-template-rows: auto 1fr;

	@media (min-width: 1024px) {
		grid-template-columns: 30rem 1fr;
	}

	& > div:has(main) {
		width: 100%;
		overflow-y: auto;
	}
`;

const Main = styled.main`
	background-color: var(--color-grey-50);
	padding: 5rem 2rem;
	margin: 0 auto;

	max-width: 140rem;

	@media (min-width: 600px) {
		padding: 5rem 4rem;
	}

	@media (min-width: 1392px) {
		padding: 5rem 6rem;
	}
`;

function AppLayout() {
	// Wasting rerenders don't impact the performance here, that's why simple state has been used here instead of using more performant approaches
	const [showMenu, setShowMenu] = useState(false);

	return (
		<Modal>
			<StyledAppLayout>
				<Header setShowMenu={setShowMenu} />
				<SideBar showMenu={showMenu} setShowMenu={setShowMenu} />
				<div>
					<Main>
						<Outlet />
					</Main>
				</div>
			</StyledAppLayout>
		</Modal>
	);
}

export default AppLayout;
