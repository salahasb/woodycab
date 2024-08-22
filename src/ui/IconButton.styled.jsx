import styled from "styled-components";

const IconButton = styled.button`
	padding: 0.5rem;
	border-radius: var(--border-radius-sm);
	transition: var(--button-transition);

	&:focus {
		outline: 2px solid var(--color-brand-400);
	}

	&:hover {
		background-color: var(--color-grey-200);
	}
`;

export default IconButton;
