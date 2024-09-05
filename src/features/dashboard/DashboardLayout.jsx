import styled from "styled-components";
import Stat from "./Stat";
import useRecentBookings from "./useRecentBookings";
import { formatCurrency } from "../../utils/helpers";
import { MainSpinner } from "../../ui/LoadingSpinners";
import { useSearchParams } from "react-router-dom";
import { formatISO, subDays } from "date-fns";
import useRecentStays from "./useRecentStays";
import useCabins from "../cabins/useCabins";
import Stats from "./Stats";
import TodayBookings from "./TodayBookings";

const StyledDashboardLayout = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 2rem;
`;

function DashboardLayout() {
	const [searchParams] = useSearchParams({ last: 7 });

	const numDays = +searchParams.get("last");

	const formattedDate = formatISO(subDays(new Date(), numDays));

	// Recent bookings
	const {
		data: { data: recentBookings, count: bookingsCount },
		bookingsError,
		isLoadingBookings,
	} = useRecentBookings(formattedDate, numDays);

	// Recent stays
	const {
		data: { data: recentStays, count: staysCount },
		staysError,
		isLoadingStays,
	} = useRecentStays(formattedDate, numDays);
	// Cabins
	const {
		cabins,
		error: cabinsError,
		isLoading: isLoadingCabins,
	} = useCabins();
	const isLoading = isLoadingBookings || isLoadingStays || isLoadingCabins;
	const error = bookingsError || staysError || cabinsError;

	if (isLoading) return <MainSpinner />;

	if (error) throw new Error();

	return (
		<StyledDashboardLayout>
			<Stats
				recentBookings={recentBookings}
				numDays={numDays}
				cabinsCount={cabins.length}
				recentStays={recentStays}
			/>

			<TodayBookings />
		</StyledDashboardLayout>
	);
}

export default DashboardLayout;
