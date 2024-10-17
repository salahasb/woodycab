import { createContext, useContext } from "react";
import styled from "styled-components";

const TableContext = createContext();

const StyledTable = styled.div`
	display: flex;
	flex-direction: column;
	border-radius: var(--border-radius-tiny);
	border: 1px solid var(--color-grey-200);
	overflow-x: auto;
	margin: 0 auto;
`;

const CommonRow = styled.div`
	display: grid;
	grid-template-columns: ${({ $columns }) => $columns};
	/* gap: 2.4rem; */
	align-items: center;
	font-size: 1rem;
	padding: 0.8rem 1rem;
	min-width: 60rem;
	width: 100%;

	@media (min-width: 1024px) {
		min-width: 90rem;

		width: 100%;
		font-size: 1.4rem;
		gap: 2.4rem;
	}
`;

const StyledHeader = styled(CommonRow)`
	background-color: var(--color-grey-50);
	/* border: var(--border-main); */
	border-bottom: 0;

	@media (min-width: 1024px) {
		padding: 1.6rem 1.4rem;
	}

	& div {
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.4px;
		color: var(--color-grey-600);
	}
`;

const StyledRow = styled(CommonRow)`
	background-color: var(--color-grey-0);
	border-bottom: var(--border-main);

	@media (min-width: 1024px) {
		padding: 1.6rem 1.6rem;
	}

	&:last-of-type {
		border-bottom: 0;
	}
`;

const Footer = styled.footer`
	background-color: var(--color-grey-50);
	border-top: 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: column;
	gap: 1rem;

	color: var(--color-grey-600);
	font-weight: 500;
	position: sticky;
	right: 0;
	left: 0;

	flex-direction: column;

	@media (min-width: 500px) {
		flex-direction: row;
	}

	padding: 1rem 1rem;
	font-size: 1rem;

	@media (min-width: 1024px) {
		padding: 1.2rem 1.5rem;
		font-size: 1.4rem;
	}

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
		width: 100%;
		justify-content: space-between;

		@media (min-width: 500px) {
			justify-content: initial;
			width: auto;
		}
	}

	& > p {
		display: none;

		@media (min-width: 500px) {
			display: block;
		}
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
