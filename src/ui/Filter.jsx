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
`;

function Filter({ filters }) {
	const [searchParams, setSearchParams] = useSearchParams({ filterBy: "all" });
	const curFilter = searchParams.get("filterBy");

	function handleSearchParams(filterValue) {
		searchParams.set("filterBy", filterValue);
		setSearchParams(searchParams);
	}

	return (
		<StyledFilter>
			{filters.map((filter) => (
				<Button
					key={filter.value}
					onClick={() => handleSearchParams(filter.value)}
					$variation="filter"
					className={filter.value === curFilter && "active"}
					disabled={filter.value === curFilter}
				>
					{filter.label}
				</Button>
			))}
		</StyledFilter>
	);
}

export default Filter;
