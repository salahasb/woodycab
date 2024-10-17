// import { Link, NavLink } from "react-router-dom";

import styled from "styled-components";
import {
	HiOutlineHome,
	HiOutlineCalendarDays,
	HiHomeModern,
	HiOutlineHomeModern,
	HiOutlineUsers,
	HiCog6Tooth,
	HiOutlineCog6Tooth,
} from "react-icons/hi2";
import { IconContext } from "react-icons";
import { NavLink } from "react-router-dom";

const StyledMainNav = styled.nav`
	width: 100%;
`;

const NavList = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 0.8rem;
	/* width: 100%; */
`;

const LinkButton = styled(NavLink).attrs({ onClick: () => console.log(25) })`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	gap: 1rem;
	padding: 1rem 2rem;
	border-radius: var(--border-radius-sm);
	font-weight: 500;
	transition: var(--button-transition);
	color: var(--color-grey-600);

	&:is(:hover, .active) {
		background-color: var(--color-grey-50);
		color: var(--color-grey-800);
	}

	& svg {
		--size: 2.5rem;
		width: var(--size);
		height: var(--size);
		color: var(--color-grey-400);
		transition: var(--button-transition);
	}

	&:is(:hover, .active) svg {
		color: var(--color-brand-600);
	}
`;

function MainNav({ setShowMenu }) {
	return (
		<StyledMainNav>
			<NavList onClick={() => setShowMenu(false)}>
				<li>
					<LinkButton to="dashboard">
						<HiOutlineHome />
						<span>Home</span>
					</LinkButton>
				</li>
				<li>
					<LinkButton to="bookings">
						<HiOutlineCalendarDays />
						<span>Bookings</span>
					</LinkButton>
				</li>
				<li>
					<LinkButton to="cabins">
						<HiOutlineHomeModern />
						<span>Cabins</span>
					</LinkButton>
				</li>
				<li>
					<LinkButton to="users">
						<HiOutlineUsers />
						<span>Users</span>
					</LinkButton>
				</li>
				<li>
					<LinkButton to="settings">
						<HiOutlineCog6Tooth />
						<span>Settings</span>
					</LinkButton>
				</li>
			</NavList>
		</StyledMainNav>
	);
}

export default MainNav;
