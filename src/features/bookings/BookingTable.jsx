import { useEffect, useState } from "react";
import { bookings } from "../../data/data-bookings";
import { MainSpinner } from "../../ui/LoadingSpinners";
import Options from "../../ui/Options";
import Table from "../../ui/Table";
import BookingRow from "./BookingRow";
import useBookings from "./useBookings";
import Button from "../../ui/Button.styled";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";

function BookingTable() {
	const {
		data: { data: bookings, count, rangeFrom, rangeTo },
		isLoading,
		error,
	} = useBookings();

	const [searchParams, setSearchParams] = useSearchParams({ page: 1 });

	useEffect(() => {
		// in case if user set non-existing "page" params in the URL
		if (error?.message !== "range error") return;
		searchParams.delete("page");

		setSearchParams(searchParams);
	}, [searchParams, setSearchParams, error]);

	if (isLoading) return <MainSpinner />;

	if (error?.message === "range error") return;

	if (error) throw new Error(`Boundary`);

	const page = +searchParams.get("page") || 1;

	const isLastPage = count - PAGE_SIZE * page <= 0;

	console.log(isLastPage, count, rangeTo);
	// const [page, setPage] = useState(null);

	return (
		<Options>
			<Table columns="0.6fr 2fr 2.4fr 1.4fr 1fr 3.2rem">
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
					<p>
						Showing <span>{rangeFrom + 1} </span>to{" "}
						<span>{isLastPage ? count : rangeTo}</span> of <span>{count}</span>{" "}
						results
					</p>

					<div>
						<Button
							disabled={page === 1}
							$variation="pagination"
							onClick={() => {
								// setPage((p) => p - 1);
								searchParams.set("page", page - 1);
								setSearchParams(searchParams);
							}}
						>
							Previous
						</Button>
						<Button
							disabled={isLastPage}
							$variation="pagination"
							onClick={() => {
								// setPage((p) => p + 1);

								searchParams.set("page", page + 1);

								setSearchParams(searchParams);
							}}
						>
							Next
						</Button>
					</div>
				</Table.Footer>
			</Table>
		</Options>
	);
}

export default BookingTable;
