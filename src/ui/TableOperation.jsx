import styled from "styled-components";
import Filter from "./Filter";
import SortBy from "./SortBy";
import { OPERATIONS } from "../utils/constants";

const StyledTableOperation = styled.div`
	display: flex;
	gap: 2rem;
	align-items: center;

	/* temp */
	/* flex-direction: column; */
`;

function TableOperation({ resource }) {
	const currentOperation = OPERATIONS[resource];

	const { filters, sorts } = currentOperation;
	return (
		<StyledTableOperation>
			<Filter filters={filters} resource="table" />
			<SortBy sorts={sorts} />
		</StyledTableOperation>
	);
}

export default TableOperation;
