import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button.styled";
import { Flag } from "../../ui/Flag.styled";
import Tag from "../../ui/Tag";
import useCheckOut from "../bookings/useCheckOut";
import { MiniSpinner } from "../../ui/LoadingSpinners";

function TodayBookingItem({ booking }) {
	const {
		id,
		status,
		numNights,
		guests: { nationality, countryFlag, fullName },
	} = booking;

	const { isUpdating, checkoutBooking } = useCheckOut(id);

	const navigate = useNavigate();

	const isUnconfirmed = status === "unconfirmed";

	return (
		<li>
			{isUnconfirmed ? (
				<Tag $type="green">arriving</Tag>
			) : (
				<Tag $type="blue">departing</Tag>
			)}

			<div>
				<Flag src={countryFlag} alt={`Flag of ${nationality}`} />
				<span>{fullName}</span>
			</div>

			<span>{numNights} nights</span>

			{isUnconfirmed ? (
				<Button onClick={() => navigate(`/checkin/${id}`)}>Check in </Button>
			) : (
				<Button onClick={() => checkoutBooking()}>
					{isUpdating ? <MiniSpinner /> : "Check Out"}
				</Button>
			)}
		</li>
	);
}

export default TodayBookingItem;
