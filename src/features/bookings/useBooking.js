import { QueryClient, useQuery, useQueryClient } from "@tanstack/react-query";
import { getBooking } from "../../services/apiBookings";
import { useParams } from "react-router-dom";

function useBooking() {
	const { id } = useParams();

	const {
		data: booking,
		isLoading,
		error,
		remove,
	} = useQuery({
		queryKey: ["booking", id],
		queryFn: () => getBooking(id),
		useErrorBoundary: false,
	});

	return { booking, isLoading, id, error, remove };
}

export default useBooking;
