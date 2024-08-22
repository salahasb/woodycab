import styled from "styled-components";
import Filter from "./Filter";
import SortBy from "./SortBy";

const operations = {
	cabins: {
		filters: [
			{ label: "All", value: "all" },
			{ label: "Discount", value: "discount" },
			{ label: "No discount", value: "no-discount" },
		],
		sorts: [
			{ value: "name-asc", label: "Sort by name (A-Z)" },
			{ value: "name-desc", label: "Sort by name (Z-A)" },
			{ value: "regularPrice-asc", label: "Sort by price (low first)" },
			{ value: "regularPrice-desc", label: "Sort by price (high first)" },
			{ value: "maxCapacity-asc", label: "Sort by capacity (low first)" },
			{ value: "maxCapacity-desc", label: "Sort by capacity (high first)" },
		],
	},
	bookings: {
		filters: [
			{ label: "All", value: "all" },
			{ label: "Checked out", value: "checked-out" },
			{ label: "Checked in", value: "checked-in" },
			{ label: "unconfirmed", value: "unconfirmed" },
		],
		sorts: [
			{ value: "startDate-desc", label: "Sort by date (recent first)" },
			{ value: "startDate-asc", label: "Sort by date (earlier first)" },
			{ value: "totalPrice-desc", label: "Sort by amount (high first)" },
			{ value: "totalPrice-asc", label: "Sort by amount (low first)" },
		],
	},
};

const StyledTableOperation = styled.div`
	display: flex;
	gap: 2rem;
	align-items: center;
`;

function TableOperation({ resource }) {
	const currentOperation = operations[resource];

	const { filters, sorts } = currentOperation;
	return (
		<StyledTableOperation>
			<Filter filters={filters} />
			<SortBy sorts={sorts} />
		</StyledTableOperation>
	);
}

export default TableOperation;
