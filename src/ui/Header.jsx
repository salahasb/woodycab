import {
	HiOutlineMoon,
	HiOutlineUser,
	HiArrowRightOnRectangle,
} from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Options from "./Options";
import IconButton from "./IconButton.styled";
import useUser from "../features/auth/useUser";
import useLogout from "../features/auth/useLogout";
import { MiniSpinner } from "./LoadingSpinners";
import { useState } from "react";

const StyledHeader = styled.header`
	display: flex;
	justify-content: end;
	align-items: center;
	gap: 3rem;
	padding: 1rem 4rem;
`;

const AvatarBox = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;

	& span {
		font-size: 1.4rem;
		font-weight: 500;
	}
`;

const Avatar = styled.img`
	width: 3rem;
	border-radius: 50%;
`;

const HeaderMenu = styled.ul`
	display: flex;
	gap: 0.5rem;
`;
const HeaderButton = styled(IconButton)`
	color: var(--color-brand-600);

	& svg {
		width: 2.2rem;
		height: 2.2rem;
	}
`;

function Header() {
	const {
		user: {
			user_metadata: { name, avatar },
		},
	} = useUser("header");

	const { logout, isLogingOut } = useLogout();

	const navigate = useNavigate();

	return (
		<StyledHeader>
			<AvatarBox>
				<Avatar
					src={avatar || "/src/data/img/default-user.jpg"}
					alt="User profile picture"
				/>
				<span>{name}</span>
			</AvatarBox>

			<HeaderMenu>
				<li>
					<HeaderButton onClick={() => navigate("account")}>
						<HiOutlineUser />
					</HeaderButton>
				</li>
				<li>
					<HeaderButton>
						<HiOutlineMoon />
					</HeaderButton>
				</li>
				<li>
					<HeaderButton onClick={logout}>
						{isLogingOut ? <MiniSpinner /> : <HiArrowRightOnRectangle />}
					</HeaderButton>
				</li>
			</HeaderMenu>
		</StyledHeader>
	);
}

export default Header;
