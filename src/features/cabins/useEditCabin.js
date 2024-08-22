import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCabin } from "../../services/apiCabins";
import { useToaster } from "../../contexts/ToasterContext";

function useEditCabin() {
	const queryClient = useQueryClient();

	const {
		isLoading: isEditing,
		error,
		mutate: editCabin,
	} = useMutation({
		mutationFn: updateCabin,
		onSuccess: (data) => {
			console.log("the cabin has been  Successfully");

			queryClient.invalidateQueries({ queryKey: ["cabins"] });
		},
		onError: (error) => {
			console.log(error.message);
		},
	});

	return { editCabin, isEditing, error };
}

export default useEditCabin;
