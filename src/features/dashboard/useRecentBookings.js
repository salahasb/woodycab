import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getRecentBookings, getRecentStays } from "../../services/apiBookings";
import { formatISO, subDays } from "date-fns";

function useRecentBookings(formattedDate, last) {
	const { data, error, isLoading } = useQuery({
		queryKey: ["recentBookings", `last ${last}`],
		queryFn: () => getRecentBookings(formattedDate),
	});
	return {
		data: data || {},
		bookingsError: error,
		isLoadingBookings: isLoading,
	};
}

export default useRecentBookings;
