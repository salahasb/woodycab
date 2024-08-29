import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

function useBookings() {
	const [searchParams] = useSearchParams({
		filterBy: "all",
		page: 1,
	});

	const filterBy = searchParams.get("filterBy");
	const sortBy = searchParams.get("sortBy");

	const { data, isLoading, error } = useQuery({
		queryKey: ["bookings", { filterBy, sortBy }],
		queryFn: () => getBookings(filterBy, sortBy),
		// cacheTime: 0,
		// staleTime: Infinity,
	});

	return { data, isLoading, error };
}

export default useBookings;
