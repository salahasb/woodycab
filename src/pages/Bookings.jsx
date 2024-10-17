import BookingTable from "../features/bookings/BookingTable";
import OutletLayout from "../ui/OutletLayout";
import TableOperation from "../ui/TableOperation";

function Bookings() {
	return (
		<OutletLayout heading="All bookings">
			<OutletLayout.Box $operation>
				<TableOperation resource="bookings" />
			</OutletLayout.Box>

			<OutletLayout.Box $full $resource="table">
				<BookingTable />
			</OutletLayout.Box>
		</OutletLayout>
	);
}

export default Bookings;
