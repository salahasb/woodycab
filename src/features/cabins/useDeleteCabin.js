import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin as deleteCabinApi } from "../../services/apiCabins";
import { useToaster } from "../../contexts/ToasterContext";

function useDeleteCabin() {
	const queryClient = useQueryClient();
	const { addToaster } = useToaster();
	const {
		error,
		mutate: deleteCabin,
		isLoading: isDeleting,
	} = useMutation({
		mutationFn: deleteCabinApi,
		onSuccess: () => {
			addToaster("success", `The Cabin has been deleted successfully`);

			queryClient.invalidateQueries({
				queryKey: ["cabins"],
			});
		},
		onError: (error) => {
			console.log(error);

			addToaster("error", error.message);
		},
	});

	return { error, isDeleting, deleteCabin };
}

export default useDeleteCabin;
