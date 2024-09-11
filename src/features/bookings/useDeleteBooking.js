import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBookingApi } from "../../services/apiBookings";
import { useToaster } from "../../contexts/ToasterContext";

function useDeleteBooking(id) {
	const { addToaster } = useToaster();

	const queryClient = useQueryClient();

	const { isLoading: isDeleting, mutate: deleteBooking } = useMutation({
		mutationFn: deleteBookingApi,
		onSuccess: () => {
			addToaster("success", `the booking ${id} has been deleted successfully`);

			queryClient.invalidateQueries({ active: true });
			// queryClient.removeQueries(["booking", id]);
			queryClient.removeQueries({ queryKey: ["booking", id] });
		},
	});

	return { isDeleting, deleteBooking };
}

export default useDeleteBooking;
