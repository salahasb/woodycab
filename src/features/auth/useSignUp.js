import { useMutation } from "@tanstack/react-query";
import { SignUpAuth } from "../../services/apiAuth";
import { useToaster } from "../../contexts/ToasterContext";

function useSignUp() {
	const { addToaster } = useToaster();

	const { mutate: signUp, isLoading } = useMutation({
		mutationFn: SignUpAuth,
		onSuccess: (data) => {
			addToaster("success", `the user has been signed up successfully`);
		},
		onError: (error) => {
			console.log(11);
			addToaster("error", error.message);
		},
	});

	return { signUp, isLoading };
}

export default useSignUp;
