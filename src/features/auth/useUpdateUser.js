import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUserAuth } from "../../services/apiAuth";
import { useToaster } from "../../contexts/ToasterContext";

function useUpdateUser() {
	const queryClient = useQueryClient();

	// toaster hook
	const { addToaster } = useToaster();

	const { mutate: updateUser, isLoading: isUpdating } = useMutation({
		mutationFn: updateUserAuth,
		onSuccess: (user) => {
			// queryClient.invalidateQueries(["user"]);
			queryClient.setQueryData(["user"], user);
		},
		onError: (err) => {
			addToaster("error", err.message);
		},
	});
	return { updateUser, isUpdating, addToaster };
}

export default useUpdateUser;
