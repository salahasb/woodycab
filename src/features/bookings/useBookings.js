import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

function useBookings() {
	const [searchParams] = useSearchParams({ filterBy: "all" });
	const currentFilter = searchParams.get("filterBy");

	const { data, isLoading, error } = useQuery({
		queryKey: ["bookings", currentFilter],
		queryFn: () => getBookings(currentFilter),
		// cacheTime: 0,
		// staleTime: Infinity,
	});

	return { data, isLoading, error };
}

export default useBookings;
