import { useQuery } from "@tanstack/react-query";
import { getTodayBookings } from "../../services/apiBookings";

function useTodayBookings() {
	const today = new Date();
	today.setUTCHours(0, 0, 0, 0);
	const date = today.toISOString();

	const { data, isLoading, error } = useQuery({
		queryKey: [
			"todayBookings",

			// , new Date(date).toDateString()
		],
		queryFn: () => getTodayBookings(date),
	});

	return { data, isLoading, error };
}

export default useTodayBookings;
