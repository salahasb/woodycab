import { useMutation, useQueryClient } from "@tanstack/react-query";
import { patchSettings } from "../../services/apiSettings";

function useEditSettings() {
	const queryClient = useQueryClient();

	const {
		mutate: updateSettings,
		error,
		isLoading: isUpdating,
	} = useMutation({
		mutationFn: patchSettings,
		onSuccess: (data) => {
			queryClient.invalidateQueries(["settings"]);
		},
		onError: (err) => {},
	});

	return { updateSettings, isUpdating, error };
}

export default useEditSettings;
