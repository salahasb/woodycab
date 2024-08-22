import { format, isToday } from "date-fns";
import { HiOutlineHomeModern } from "react-icons/hi2";
import styled from "styled-components";
import { formatDistanceFromNow } from "../../utils/helpers";
import Tag from "../../ui/Tag";

const Header = styled.header`
	display: flex;
	justify-content: space-between;
	padding: 2rem 4rem;
	background-color: var(--color-brand-500);
	color: var(--color-grey-0);
	border-top-left-radius: 5px;
	border-top-right-radius: 5px;
	& div {
		display: flex;
		gap: 2rem;
		align-items: center;
	}
`;

const Body = styled.div`
	padding: 2rem 4rem 1rem 4rem;
	background-color: var(--color-grey-0);
	display: flex;
	flex-direction: column;
	gap: 4rem;
	margin-bottom: 4rem;
	/* & {
		flex: 1;
	} */
`;

const Guest = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
`;

const statusToTagName = {
	unconfirmed: "blue",
	"checked-in": "green",
	"checked-out": "silver",
};

function BookingDataBox({ booking }) {
	const {
		numNights,
		numGuests,
		startDate,
		endDate,
		status,
		isPaid,
		observations,
		cabins: { name },
		guests: { fullName, email, nationalID },
	} = booking;

	return (
		<>
			<Header>
				<div>
					<HiOutlineHomeModern size={28} />
					<p>
						{numNights} nights in Cabin {name}
					</p>
				</div>
				<p>
					{" "}
					{format(new Date(startDate), "EEE, MMM dd yyyy")} (
					{isToday(new Date(startDate))
						? "Today"
						: formatDistanceFromNow(startDate)}
					) &mdash; {format(new Date(endDate), "EEE, MMM dd yyyy")}
				</p>
			</Header>
			<Body>
				<Guest>
					<p>
						{fullName} {numGuests && `+  ${numGuests} guests`}
					</p>
					&bull;
					<p>{email}</p>
					&bull;
					<p>National ID {nationalID}</p>
					<Tag $type={statusToTagName[status]}>{status}</Tag>
				</Guest>
				{observations && <div>Observation {observations}</div>}
				<div>Observation</div>
				<div>Breakfast</div>
				<div>total price</div>
				<div>booking date</div>
				<Tag $type={isPaid ? "green" : "red"}>
					{isPaid ? "Paid" : "Not Paid"}
				</Tag>
			</Body>
		</>
	);
}

export default BookingDataBox;
