import { useMutation, useQueryClient } from "@tanstack/react-query";
import { patchSettings } from "../../services/apiSettings";
import { useToaster } from "../../contexts/ToasterContext";

function useEditSettings() {
	const queryClient = useQueryClient();
	const { addToaster } = useToaster();
	const {
		mutate: updateSettings,
		error,
		isLoading: isUpdating,
	} = useMutation({
		mutationFn: patchSettings,
		onSuccess: (data) => {
			queryClient.invalidateQueries(["settings"]);

			addToaster("success", "Hotel settings has been updated successfully");
		},
		onError: (err) => {
			addToaster("error", "Hotel settings update failed");
		},
	});

	return { updateSettings, isUpdating, error };
}

export default useEditSettings;
