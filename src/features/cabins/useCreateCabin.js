import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postCabin } from "../../services/apiCabins";
import { useToaster } from "../../contexts/ToasterContext";

function useCreateCabin() {
	const queryClient = useQueryClient();

	const {
		isLoading: isCreating,
		mutate: createCabin,
		error,
	} = useMutation({
		mutationFn: postCabin,
		onSuccess: (data) => {
			// console.log("the cabin has been created Successfully");
			queryClient.invalidateQueries({ queryKey: ["cabins"] });
		},
		onError: (error) => {
			console.log(error.message);
		},
	});
	return { isCreating, createCabin, error };
}

export default useCreateCabin;
