import { useQuery } from "@tanstack/react-query";
import { getRecentStays } from "../../services/apiBookings";

function useRecentStays(formattedDate, last) {
	const { data, error, isLoading } = useQuery({
		queryKey: ["recentStays", `last ${last}`],
		queryFn: () => getRecentStays(formattedDate),
	});
	return {
		data: data || {},
		staysError: error,
		isLoadingStays: isLoading,
	};
}

export default useRecentStays;
