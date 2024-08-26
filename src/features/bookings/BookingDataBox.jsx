import { format, isToday } from "date-fns";
import {
	HiOutlineChatBubbleBottomCenterText,
	HiOutlineCheck,
	HiOutlineCheckCircle,
	HiOutlineCurrencyDollar,
	HiOutlineHomeModern,
} from "react-icons/hi2";
import styled, { css } from "styled-components";
import { formatCurrency, formatDistanceFromNow } from "../../utils/helpers";
import Tag from "../../ui/Tag";
import DataItem from "../../ui/DataItem";

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
	gap: 2rem;
	margin-bottom: 4rem;
	/* & {
		flex: 1;
	} */
`;

const Guest = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
	font-weight: 500;
	margin-bottom: 1rem;

	& p:not(:first-child) {
		color: var(--color-grey-700);
		font-weight: 400;
	}
`;

const Price = styled.div`
	background-color: ${({ $isPaid }) =>
		$isPaid ? "var(--color-green-100)" : "var(--color-yellow-100)"};

	color: ${({ $isPaid }) =>
		$isPaid ? "var(--color-green-700)" : "var(--color-yellow-700)"};

	padding: 2.4rem 3rem;
	display: flex;
	justify-content: space-between;
	align-items: center;

	& svg {
		color: currentColor !important;
		font-size: 2.4rem;
	}

	& > p {
		font-weight: 600;
		text-transform: uppercase;
		font-size: 1.4rem;
	}
`;

const BookingDate = styled.p`
	margin-left: auto;
	color: var(--color-grey-500);
	font-size: 1.2rem;
`;

const statusToTagName = {
	unconfirmed: "blue",
	"checked-in": "green",
	"checked-out": "silver",
};

function BookingDataBox({ booking }) {
	const {
		created_at,
		numNights,
		numGuests,
		startDate,
		endDate,
		status,
		isPaid,
		hasBreakfast,
		observations,
		totalPrice,
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

				{observations && (
					<DataItem
						icon={<HiOutlineChatBubbleBottomCenterText />}
						label={"Observation"}
						content={observations}
					/>
				)}

				<DataItem
					icon={<HiOutlineCheckCircle />}
					label={"Breakfast Included?"}
					content={hasBreakfast ? "Yes" : "No"}
				/>

				<Price $isPaid={isPaid}>
					<DataItem
						label={"Total price"}
						icon={<HiOutlineCurrencyDollar />}
						content={formatCurrency(totalPrice)}
					/>

					<p>{isPaid ? "Paid" : "Will pay at property"}</p>
				</Price>

				{/* <Tag $type={isPaid ? "green" : "red"}> */}
				<BookingDate>
					Booked {format(new Date(created_at), "EEE, MMM dd yyyy, p")}
				</BookingDate>
				{/* </Tag> */}
			</Body>
		</>
	);
}

export default BookingDataBox;
