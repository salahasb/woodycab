import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";
import { useEffect } from "react";

function useBookings() {
	// query params
	const [searchParams, setSearchParams] = useSearchParams({
		status: "all",
		page: 1,
	});

	const filterBy = searchParams.get("status");
	const sortBy = searchParams.get("sortBy");
	const page = searchParams.get("page");

	// pagination
	const rangeFrom = !page ? 0 : page * PAGE_SIZE - PAGE_SIZE;
	const rangeTo = !page ? PAGE_SIZE : page * PAGE_SIZE;

	//  fetching bookings
	const { data, isLoading, error } = useQuery({
		queryKey: ["bookings", { filterBy, sortBy, page }],
		queryFn: () => getBookings(filterBy, sortBy, rangeFrom, rangeTo),
	});

	// in case if user set non-existing "page" param in the URL
	useEffect(() => {
		if (error?.message !== "range error") return;
		searchParams.delete("page");

		setSearchParams(searchParams);
	}, [searchParams, setSearchParams, error]);

	return { data: { ...data, rangeFrom, rangeTo } || {}, isLoading, error };
}

export default useBookings;
