import OutletLayout from "../ui/OutletLayout";
import CabinTableBox from "../features/cabins/CabinTableBox";
import TableOperation from "../ui/TableOperation";

function Cabins() {
	return (
		<OutletLayout heading="All cabins">
			<OutletLayout.Box>
				<TableOperation resource="cabins" />
			</OutletLayout.Box>

			<OutletLayout.Box $full>
				<CabinTableBox />
			</OutletLayout.Box>
		</OutletLayout>
	);
}

export default Cabins;
