import styled from "styled-components";
import { useDarkMode } from "../contexts/DarkModeContext";

const StyledLogo = styled.img.attrs({
	alt: "Logo",
})`
	height: 9.6rem;
`;

function Logo() {
	const { isDarkMode } = useDarkMode();

	const src = isDarkMode
		? "/src/data/img/logo-dark.png"
		: "/src/data/img/logo-light.png";

	return <StyledLogo src={src} alt="" />;
}

export default Logo;