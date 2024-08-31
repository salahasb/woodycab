import { createContext, useContext } from "react";
import styled, { css } from "styled-components";

const TableContext = createContext();

const StyledTable = styled.div`
	display: flex;
	flex-direction: column;
	border-radius: var(--border-radius-tiny);
`;

const CommonRow = styled.div`
	display: grid;
	grid-template-columns: ${({ $columns }) => $columns};
	gap: 2.4rem;
	align-items: center;
	width: 100%;
	font-size: 1.4rem;
`;

const StyledHeader = styled(CommonRow)`
	background-color: var(--color-grey-100);
	border: var(--border-main);
	border-bottom: 0;
	padding: 1.6rem 1.4rem;

	& div {
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.4px;
		color: var(--color-grey-600);
	}
`;

const StyledRow = styled(CommonRow)`
	background-color: var(--color-grey-50);
	border-bottom: var(--border-main);
	padding: 1.6rem 1.6rem;

	&:last-of-type {
		border-bottom: 0;
	}
`;

const Footer = styled.footer`
	background-color: var(--color-grey-100);
	border: var(--border-main);
	border-top: 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 1.2rem 1.5rem;
	font-size: 1.4rem;
	color: var(--color-grey-600);
	font-weight: 500;

	/* This will hide the footer when it contains no child elements. Possible thanks to the parent selector :has 🎉 */
	&:not(:has(*)) {
		display: none;
	}

	& span {
		font-weight: 600;
	}

	& > div {
		display: flex;
		gap: 1rem;
	}
`;

const Empty = styled.p`
	font-size: 1.6rem;
	font-weight: 500;
	text-align: center;
	margin: 2.4rem;
`;

function Table({ children, columns }) {
	return (
		<TableContext.Provider value={{ columns }}>
			<StyledTable>{children}</StyledTable>
		</TableContext.Provider>
	);
}

function Header({ children }) {
	const { columns } = useContext(TableContext);

	return <StyledHeader $columns={columns}>{children}</StyledHeader>;
}

function Row({ children }) {
	const { columns } = useContext(TableContext);

	return <StyledRow $columns={columns}>{children}</StyledRow>;
}

function Body({ data, render }) {
	if (!data.length) return <Empty>No data to show at the moment</Empty>;

	return <div>{data.map(render)}</div>;
}

Table.Footer = Footer;
Table.Header = Header;
Table.Row = Row;
Table.Body = Body;

export default Table;
