import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../services/apiAuth";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function useUser() {
	const location = useLocation();

	const checkError = ({ state }) => {
		return !state.error;
	};

	const {
		data: user,
		isLoading,
		error,
		refetch,
		remove,
	} = useQuery({
		queryKey: ["user"],
		queryFn: getUser,
		refetchOnWindowFocus: checkError,
		refetchOnReconnect: checkError,
	});

	// Effects
	useEffect(() => {
		// to refetch whenever user navigate trough the app
		refetch();
	}, [location.pathname, refetch]);

	return { user, isLoading, error, remove };
}

export default useUser;
