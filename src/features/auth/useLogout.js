import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logoutAuth } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";

function useLogout() {
	const queryClient = useQueryClient();
	const navigate = useNavigate();

	const {
		mutate: logout,
		isLoading: isLogingOut,
		error,
	} = useMutation({
		mutationFn: logoutAuth,
		onSuccess: () => {
			console.log("loggedOut");
			localStorage.removeItem("authToken");
			queryClient.removeQueries(["user"]);
			navigate("/login");
		},
	});
	return {
		logout,
		isLogingOut,
		error,
	};
}

export default useLogout;
