import OutletLayout from "../../ui/OutletLayout";
import useBooking from "./useBooking";
import { MainSpinner, MiniSpinner } from "../../ui/LoadingSpinners";
import { IoIosArrowRoundBack } from "react-icons/io";
import Button from "../../ui/Button.styled";
import BookingDataBox from "./BookingDataBox";
import ButtonGroup from "../../ui/ButtonGroup";
import { bookings } from "../../data/data-bookings";
import useDeleteBooking from "./useDeleteBooking";
import { useNavigate } from "react-router-dom";
import useCheckOut from "./useCheckOut";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import { useEffect } from "react";

function BookingDetail() {
	// react query hooks
	const { booking, isLoading, id, error, remove } = useBooking();

	const { isDeleting, deleteBooking } = useDeleteBooking(id);
	const { isUpdating, checkoutBooking } = useCheckOut(id);

	// Effects
	useEffect(() => {
		// to remove the wrong key from the cache
		if (error) remove();
	}, [remove, error]);

	// react router hooks
	const navigate = useNavigate();

	// early returns
	if (isLoading) return <MainSpinner />;
	if (error) return <div> The booking {id} Not Found </div>;

	// destructing data
	const { status } = booking;

	return (
		<OutletLayout heading={`booking #${id}`}>
			<OutletLayout.Box>
				<Button $variation="back" onClick={() => navigate(-1)}>
					<IoIosArrowRoundBack size={25} />
					Back
				</Button>
			</OutletLayout.Box>

			<OutletLayout.Box $full>
				<BookingDataBox booking={booking} />

				<ButtonGroup>
					{status === "unconfirmed" && (
						<Button onClick={() => navigate(`/checkin/${id}`)}>Check in</Button>
					)}

					{status === "checked-in" && (
						<Button onClick={() => checkoutBooking(id)}>
							{isUpdating ? <MiniSpinner /> : "Check out"}
						</Button>
					)}

					<Modal.Open opens="deleteBooking" id={id}>
						<Button $variation="danger">
							{isDeleting ? <MiniSpinner /> : "Delete Booking"}
						</Button>
					</Modal.Open>

					<Button $variation="secondary" onClick={() => navigate(-1)}>
						Back
					</Button>
				</ButtonGroup>

				<Modal.Window name="deleteBooking" id={id}>
					<ConfirmDelete
						id={id}
						resource={"booking"}
						onDelete={(close) =>
							deleteBooking(id, {
								onSuccess: () => navigate(-1),
								onSettled: close,
							})
						}
						isDeleting={isDeleting}
					/>
				</Modal.Window>
			</OutletLayout.Box>
		</OutletLayout>
	);
}

export default BookingDetail;
