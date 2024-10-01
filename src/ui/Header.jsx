import {
	HiOutlineMoon,
	HiOutlineUser,
	HiArrowRightOnRectangle,
} from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import Options from "./Options";
import IconButton from "./IconButton.styled";
import useUser from "../features/auth/useUser";
import useLogout from "../features/auth/useLogout";
import { MiniSpinner } from "./LoadingSpinners";
import { useState } from "react";
import DarkModeToggle from "./DarkModeToggle";
import { HiOutlineMenu } from "react-icons/hi";

const StyledHeader = styled.header`
	display: grid;
	grid-template-columns: auto 1fr auto;
	padding: 1rem 2rem;
	background-color: var(--color-grey-0);
	align-items: center;
	/* @media (min-width: 768px) {
		grid-template-columns: 1fr auto auto;
	} */
`;

const AvatarBox = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;

	@media (min-width: 768px) {
		grid-column: 2/3;
		grid-row: 1/2;
		justify-self: end;
		margin-right: 2.8rem;
	}

	& span {
		display: none;
		font-size: 1.4rem;
		font-weight: 500;

		@media (min-width: 768px) {
			display: block;
		}
	}
`;

const Avatar = styled.div`
	border-radius: 50%;
	width: 3.6rem;
	aspect-ratio: 1;
	border-radius: 100%;
	overflow: hidden;

	& img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
	}
`;

const HeaderMenu = styled.ul`
	display: flex;
	gap: 0.5rem;
	justify-self: center;

	@media (min-width: 768px) {
		grid-column: 3/4;
	}
`;

const HeaderButton = styled(IconButton)`
	color: var(--color-brand-600);

	${({ $menuIcon }) =>
		$menuIcon
			? css`
					& svg {
						width: 2.8rem !important;
						height: 2.8rem !important;
					}

					@media (min-width: 1024px) {
						display: none;
					}
			  `
			: ""}

	& svg {
		width: 2.2rem;
		height: 2.2rem;
	}
`;

function Header({ setShowMenu }) {
	const {
		user: {
			user_metadata: { name, avatar },
		},
	} = useUser();

	const { logout, isLogingOut } = useLogout();

	const navigate = useNavigate();

	return (
		<StyledHeader>
			<HeaderButton $menuIcon onClick={() => setShowMenu((s) => !s)}>
				<HiOutlineMenu />
			</HeaderButton>

			<HeaderMenu>
				<li>
					<HeaderButton onClick={() => navigate("account")}>
						<HiOutlineUser />
					</HeaderButton>
				</li>
				<li>
					<DarkModeToggle />
				</li>
				<li>
					<HeaderButton onClick={logout}>
						{isLogingOut ? <MiniSpinner /> : <HiArrowRightOnRectangle />}
					</HeaderButton>
				</li>
			</HeaderMenu>

			<AvatarBox>
				<Avatar>
					<img
						src={avatar || "/img/default-user.jpg"}
						alt="User profile picture"
					/>
				</Avatar>
				<span>{name}</span>
			</AvatarBox>
		</StyledHeader>
	);
}

export default Header;
