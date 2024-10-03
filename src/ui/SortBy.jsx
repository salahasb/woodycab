import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

const Select = styled.select`
	font-size: 1.4rem;
	font-weight: 500;
	padding: 1rem;
	background-color: var(--color-grey-0);

	/* temp */
	display: none;

	@media (min-width: 1295px) {
		display: block;
	}

	&:focus {
		outline: 2px solid var(--color-brand-600);
	}
`;

function SortBy({ sorts }) {
	const [searchParams, setSearchParams] = useSearchParams();

	const curSort = searchParams.get("sortBy") || "";

	function handleChange(e) {
		searchParams.set("sortBy", e.target.value);
		setSearchParams(searchParams);
	}

	return (
		<Select value={curSort} onChange={handleChange}>
			{sorts.map((option) => (
				<option key={option.value} value={option.value}>
					{option.label}
				</option>
			))}
		</Select>
	);
}

export default SortBy;
