import OutletLayout from "../ui/OutletLayout";
import CabinTableBox from "../features/cabins/CabinTableBox";
import TableOperation from "../ui/TableOperation";

function Cabins() {
	return (
		<OutletLayout heading="All cabins">
			<OutletLayout.Box $operation>
				<TableOperation resource="cabins" />
			</OutletLayout.Box>

			<OutletLayout.Box $full $resource="table">
				<CabinTableBox />
			</OutletLayout.Box>
		</OutletLayout>
	);
}

export default Cabins;
