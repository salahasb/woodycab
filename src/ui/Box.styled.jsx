import styled from "styled-components";

const Box = styled.div`
	padding: ${({ padding }) => padding};
	background-color: var(--color-grey-100);
	border: var(--color-grey-400);
`;

export default Box;
