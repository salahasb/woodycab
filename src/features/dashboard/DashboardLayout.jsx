import styled from "styled-components";
import useRecentBookings from "./useRecentBookings";
import { MainSpinner } from "../../ui/LoadingSpinners";
import { useSearchParams } from "react-router-dom";
import { formatISO, subDays } from "date-fns";
import useRecentStays from "./useRecentStays";
import useCabins from "../cabins/useCabins";
import Stats from "./Stats";
import TodayBookings from "./TodayBookings";
import StaySummary from "./StaySummary";
import Sales from "./Sales";

const StyledDashboardLayout = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	gap: 2rem;

	@media (min-width: 482px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (min-width: 1220px) {
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: auto auto;
	}
`;

function DashboardLayout() {
	const [searchParams] = useSearchParams({ last: 7 });

	const numDays = +searchParams.get("last");

	let formattedDate;
	try {
		formattedDate = formatISO(subDays(new Date(), numDays));
	} catch (error) {
		// Set a default date if the formatting fails
		formattedDate = formatISO(subDays(new Date(), 7));
	}

	// Recent bookings
	const {
		data: { data: recentBookings },
		bookingsError,
		isLoadingBookings,
	} = useRecentBookings(formattedDate, numDays);

	// Recent stays
	const {
		data: { data: recentStays },
		staysError,
		isLoadingStays,
	} = useRecentStays(formattedDate, numDays);
	console.log(recentBookings);
	// Cabins
	const {
		cabins,
		error: cabinsError,
		isLoading: isLoadingCabins,
	} = useCabins();

	const isLoading = isLoadingBookings || isLoadingStays || isLoadingCabins;
	const error = bookingsError || staysError || cabinsError;

	// Early returns
	if (isLoading) return <MainSpinner />;

	if (error) throw Error(error.message);

	return (
		<StyledDashboardLayout>
			<Stats
				recentBookings={recentBookings}
				numDays={numDays}
				cabinsCount={cabins.length}
				recentStays={recentStays}
			/>
			<TodayBookings />

			<StaySummary stays={recentStays} />

			<Sales />
		</StyledDashboardLayout>
	);
}

export default DashboardLayout;
