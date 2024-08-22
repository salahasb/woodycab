import styled from "styled-components";
import Table from "../../ui/Table";
import { format, formatDate, isToday } from "date-fns";
import { formatCurrency, formatDistanceFromNow } from "../../utils/helpers";
import Tag from "../../ui/Tag";
import BookingOptions from "./BookingOptions";

const Cabin = styled.div`
	font-size: 1.6rem;
	font-weight: 600;
	color: var(--color-grey-600);
	font-family: "Sono";
`;

const Stacks = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.2rem;

	& span:first-child {
		font-weight: 500;
	}

	& span:last-child {
		color: var(--color-grey-500);
		font-size: 1.2rem;
	}
`;

const Amount = styled.div`
	font-family: "Sono";
	font-weight: 500;
`;

function BookingRow({ booking }) {
	const {
		id: bookingId,
		created_at,
		startDate,
		endDate,
		numNights,
		numGuests,
		totalPrice,
		status,
		guests: { fullName: guestName, email },
		cabins: { name: cabinName },
	} = booking;

	const statusToTagName = {
		unconfirmed: "blue",
		"checked-in": "green",
		"checked-out": "silver",
	};

	return (
		<Table.Row>
			<Cabin>{cabinName}</Cabin>
			<Stacks>
				<span>{guestName}</span>
				<span>{email}</span>
			</Stacks>
			<Stacks>
				<span>
					{isToday(new Date(startDate))
						? "Today"
						: formatDistanceFromNow(startDate)}{" "}
					&rarr; {numNights} night stay
				</span>
				<span>
					{format(new Date(startDate), "MMM dd yyyy")} &mdash;{" "}
					{format(new Date(endDate), "MMM dd yyyy")}
				</span>
			</Stacks>
			<Tag $type={statusToTagName[status]}>{status.replace("-", " ")} </Tag>
			<Amount>{formatCurrency(totalPrice)}</Amount>
			<BookingOptions booking={booking} />
		</Table.Row>
	);
}

export default BookingRow;
