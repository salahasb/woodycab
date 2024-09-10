import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import { useDarkMode } from "../contexts/DarkModeContext";
import styled from "styled-components";
import IconButton from "./IconButton.styled";

const HeaderButton = styled(IconButton)`
	color: var(--color-brand-600);

	& svg {
		width: 2.2rem;
		height: 2.2rem;
	}
`;

function DarkModeToggle() {
	const { isDarkMode, toggleDarkMode } = useDarkMode();

	return (
		<HeaderButton onClick={toggleDarkMode}>
			{isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
		</HeaderButton>
	);
}

export default DarkModeToggle;
