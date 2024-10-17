import { MainSpinner } from "../../ui/LoadingSpinners";
import Options from "../../ui/Options";
import Table from "../../ui/Table";
import BookingRow from "./BookingRow";
import useBookings from "./useBookings";
import Pagination from "./Pagination";

function BookingTable() {
	const {
		data: { data: bookings },
		isLoading,
		error,
	} = useBookings();

	if (error?.message === "range error") return;

	if (isLoading) return <MainSpinner />;

	return (
		<Options>
			<Table columns="1.4fr 3fr 3.8fr 2.4fr 2fr 4rem">
				<Table.Header>
					<div>cabin</div>
					<div>GUEST</div>
					<div>dates</div>
					<div>status</div>
					<div>amount</div>
				</Table.Header>

				<Table.Body
					data={bookings}
					render={(booking) => (
						<BookingRow booking={booking} key={booking.id} />
					)}
				/>

				<Table.Footer>
					<Pagination />
				</Table.Footer>
			</Table>
		</Options>
	);
}

export default BookingTable;
