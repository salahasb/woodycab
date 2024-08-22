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
			console.log("the cabin has been deleted Successfully");

			addToaster("success", `The Cabin has deleted successfully`);

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
