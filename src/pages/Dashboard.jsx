import DashboardLayout from "../features/dashboard/DashboardLayout";
import Filter from "../ui/Filter";
import OutletLayout from "../ui/OutletLayout";
import TableOperation from "../ui/TableOperation";
import { OPERATIONS } from "../utils/constants";

function Dashboard() {
	return (
		<OutletLayout heading="Dashboard">
			<OutletLayout.Box>
				<Filter filters={OPERATIONS.statistics.filters} resource="statistics" />
			</OutletLayout.Box>

			<OutletLayout.Box $full>
				<DashboardLayout />
			</OutletLayout.Box>
		</OutletLayout>
	);
}

export default Dashboard;
