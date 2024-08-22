import { useNavigate } from "react-router-dom";
import Options from "../../ui/Options";
import { IoCheckbox, IoEye, IoTrash } from "react-icons/io5";
import useCheckOut from "./useCheckOut";
import useDeleteBooking from "./useDeleteBooking";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";

function BookingOptions({ booking }) {
	const { id, status } = booking;
	const { checkoutBooking } = useCheckOut(id);
	const { isDeleting, deleteBooking } = useDeleteBooking(id);

	const navigate = useNavigate();
	return (
		<Options.Wrapper>
			<Options.Toggle id={id} />
			<Options.List id={id}>
				<Options.Option icon={<IoEye />} onClick={() => navigate(`${id}`)}>
					See details
				</Options.Option>
				{status === "unconfirmed" && (
					<Options.Option
						icon={<IoCheckbox />}
						onClick={() => navigate(`/checkin/${id}`)}
					>
						Check in
					</Options.Option>
				)}
				{status === "checked-in" && (
					<Options.Option
						icon={<IoCheckbox />}
						onClick={() => checkoutBooking(id)}
					>
						Check out
					</Options.Option>
				)}
				<Modal.Open opens="deleteBooking" id={id}>
					<Options.Option icon={<IoTrash />}>Delete booking</Options.Option>
				</Modal.Open>
			</Options.List>

			<Modal.Window name="deleteBooking" id={id}>
				<ConfirmDelete
					id={id}
					resource={"booking"}
					onDelete={(close) =>
						deleteBooking(id, {
							onSettled: close,
						})
					}
					isDeleting={isDeleting}
				/>
			</Modal.Window>
		</Options.Wrapper>
	);
}

export default BookingOptions;
