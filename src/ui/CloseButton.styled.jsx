import styled, { css } from "styled-components";
import IconButton from "./IconButton.styled";

const CloseButton = styled(IconButton)`
	position: absolute;
	top: 1rem;
	right: 1rem;
	padding: 0;

	& svg {
		width: 3rem;
		height: 3rem;
		color: var(--color-grey-500);
	}

	${({ sideBar }) =>
		sideBar
			? css`
					@media (min-width: 1024px) {
						display: none;
					}
			  `
			: ""};
`;
export default CloseButton;
