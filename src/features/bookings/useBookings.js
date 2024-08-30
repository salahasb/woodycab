import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";

function useBookings() {
	const [searchParams] = useSearchParams({
		filterBy: "all",
		page: 1,
	});

	const filterBy = searchParams.get("filterBy");
	const sortBy = searchParams.get("sortBy");
	const page = searchParams.get("page");

	// pagination
	const rangeFrom = !page ? 0 : page * PAGE_SIZE - PAGE_SIZE;
	const rangeTo = !page ? PAGE_SIZE : page * PAGE_SIZE;

	// console.log(rangeFrom, rangeTo);

	const { data, isLoading, error } = useQuery({
		queryKey: ["bookings", { filterBy, sortBy, page }],
		queryFn: () => getBookings(filterBy, sortBy, rangeFrom, rangeTo),
		// cacheTime: 0,
		// staleTime: Infinity,
	});

	return { data: { ...data, rangeFrom, rangeTo } || {}, isLoading, error };
}

export default useBookings;
