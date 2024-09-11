import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import { useToaster } from "../../contexts/ToasterContext";

function useCheckOut(id) {
	const { addToaster } = useToaster();
	const queryClient = useQueryClient();

	const {
		isLoading: isUpdating,
		mutate: checkoutBooking,
		error,
	} = useMutation({
		mutationFn: () => updateBooking(id, { status: "checked-out" }),
		onSuccess: () => {
			addToaster(
				"success",
				`the booking ${id} has been checked out successfully`
			),
				//  to invalidate the current active query
				queryClient.invalidateQueries({ active: true });
		},
	});

	return { isUpdating, checkoutBooking, error };
}

export default useCheckOut;
