import styled from "styled-components";

const Tag = styled.span`
	width: fit-content;
	text-transform: uppercase;
	font-size: 0.8rem;
	font-weight: 600;
	padding: 0.4rem 1.2rem;
	border-radius: 100px;

	/* Make these dynamic, based on the received prop */
	color: var(--color-${({ $type }) => $type}-700);
	background-color: var(--color-${({ $type }) => $type}-100);

	@media (min-width: 600px) {
		font-size: 1.1rem;
	}
`;

export default Tag;
