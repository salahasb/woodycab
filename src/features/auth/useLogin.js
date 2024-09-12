import { useMutation } from "@tanstack/react-query";
import { loginAuth } from "../../services/apiAuth";
import { useToaster } from "../../contexts/ToasterContext";
import { useNavigate } from "react-router-dom";

function useLogin() {
	const { addToaster } = useToaster();
	const navigate = useNavigate();

	const {
		mutate: login,
		error,
		isLoading: isLogingIn,
	} = useMutation({
		mutationFn: loginAuth,
		onError: (error) => {
			if (error.message === "Invalid login credentials")
				return addToaster("error", "Provided email or password are incorrect");

			addToaster("error", "Failed to login");
		},
		onSuccess: (data) => {
			console.log(data);
			// store the "JTW Token" in local storage
			localStorage.setItem("authToken", data.access_token);

			navigate("/");
		},
	});

	return { login, error, isLogingIn };
}

export default useLogin;
