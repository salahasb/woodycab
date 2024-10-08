import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import { useNavigate } from "react-router-dom";
import { useToaster } from "../../contexts/ToasterContext";

function useCheckin() {
	const navigate = useNavigate();
	const { addToaster } = useToaster();
	const queryClient = useQueryClient();

	const { mutate: checkin, isLoading: isCheckingIn } = useMutation({
		mutationFn: ({ id, body }) =>
			updateBooking(id, { status: "checked-in", isPaid: true, ...body }),

		onSuccess: (id) => {
			addToaster(
				"success",
				`the Booking ${id} has been successfully checked-in`
			);

			queryClient.invalidateQueries(["booking", id]);
			navigate(`/bookings/${id}`);
		},

		onError: () => addToaster("error", "There was an error while checking in"),
	});

	return { isCheckingIn, checkin };
}

export default useCheckin;
