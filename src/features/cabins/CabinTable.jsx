import CabinRow from "./CabinRow";
import Table from "../../ui/Table";
import useCabins from "./useCabins";
import { MainSpinner } from "../../ui/LoadingSpinners";
import Options from "../../ui/Options";
import { useSearchParams } from "react-router-dom";
import { filterCabins } from "../../utils/helpers";

function CabinTable() {
	// React Query hook
	const { isLoading, error, cabins } = useCabins();
	const [searchParams] = useSearchParams({
		discount: "all",
		sortBy: "name-asc",
	});

	if (isLoading) return <MainSpinner />;

	// Filter
	const curFilter = searchParams.get("discount") || "all";
	const filteredCabins =
		curFilter === "all" ? cabins : filterCabins(cabins, curFilter);

	// Sort
	const curSort = searchParams.get("sortBy");
	const [field, direction] = curSort.split("-");
	const modifier = direction === "asc" ? 1 : -1;
	const sortedCabins = filteredCabins.sort(
		(a, b) => (a[field] - b[field]) * modifier
	);

	return (
		<Options>
			<Table columns="0.8fr 0.8fr 1.6fr 1fr 1fr 0.8fr">
				<Table.Header>
					<div></div>
					<div>Cabin</div>
					<div>Capacity</div>
					<div>Price</div>
					<div>Discount</div>
					<div></div>
				</Table.Header>

				<Table.Body
					data={sortedCabins}
					render={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />}
				/>
			</Table>
		</Options>
	);
}

export default CabinTable;
