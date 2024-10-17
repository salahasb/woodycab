import styled from "styled-components";
import Button from "./Button.styled";
import { useSearchParams } from "react-router-dom";

// const FilterButton = styled()``;

const StyledFilter = styled.div`
	display: flex;
	gap: 0.5rem;
	background-color: var(--color-grey-0);
	padding: 0.5rem;
	border-radius: 5px;
	width: fit-content;
`;

function Filter({ filters, resource }) {
	const [searchParams, setSearchParams] = useSearchParams({
		[filters.at(0).filterBy]: filters.at(0).value,
	});

	function handleSearchParams(filterBy, filterValue) {
		// reset the "page" query param first to reset the pagination
		if (resource === "table") searchParams.delete("page");

		searchParams.set(filterBy, filterValue);
		setSearchParams(searchParams);
	}
	return (
		<StyledFilter>
			{filters.map((filter) => {
				const curFilter =
					searchParams.get(filter.filterBy) || filters.at(0).value;

				return (
					<Button
						key={filter.value}
						onClick={() => handleSearchParams(filter.filterBy, filter.value)}
						$variation="filter"
						className={filter.value === curFilter && "active"}
						disabled={filter.value === curFilter}
					>
						{filter.label}
					</Button>
				);
			})}
		</StyledFilter>
	);
}

export default Filter;
