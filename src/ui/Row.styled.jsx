import styled, { css } from "styled-components";

const Row = styled.div`
	display: flex;

	${({ direction }) =>
		direction === "row"
			? css`
					flex-direction: row;
					justify-content: space-between;
			  `
			: css`
					flex-direction: column;
					align-items: center;
			  `}
`;

Row.defaultProps = { direction: "row" };

export default Row;
