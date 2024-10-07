import { format, isToday } from "date-fns";
import {
	HiOutlineChatBubbleBottomCenterText,
	HiOutlineCheckCircle,
	HiOutlineCurrencyDollar,
	HiOutlineEnvelope,
	HiOutlineFingerPrint,
	HiOutlineHomeModern,
	HiOutlineIdentification,
	HiOutlineInformationCircle,
	HiOutlineUser,
	HiOutlineUserGroup,
	HiUser,
} from "react-icons/hi2";
import styled, { css } from "styled-components";
import { formatCurrency, formatDistanceFromNow } from "../../utils/helpers";
import Tag from "../../ui/Tag";
import DataItem from "../../ui/DataItem";
import { Flag } from "../../ui/Flag.styled";
import { IoIosArrowRoundBack } from "react-icons/io";
import Button from "../../ui/Button.styled";
import { useNavigate } from "react-router-dom";

const Header = styled.header`
	display: flex;
	justify-content: space-between;
	padding: 1rem 2rem;
	background-color: var(--color-brand-500);
	/* color: var(--color-grey-900); */
	color: #eee;
	border-top-left-radius: 5px;
	border-top-right-radius: 5px;
	font-size: 1.4rem;

	& div {
		display: flex;
		gap: 0.8rem;
		font-weight: 600;

		align-items: center;
	}

	@media (min-width: 600px) {
		font-size: 1.8rem;
	}

	@media (min-width: 768px) {
		padding: 2rem 4rem;
	}

	& button {
		color: currentColor;
		& span {
			display: none;
			/* margin-left: 8px; */

			@media (min-width: 425px) {
				display: block;
			}
		}

		& svg {
			font-size: 3.4rem;
			margin-right: -8px;

			@media (min-width: 425px) {
				font-size: 2.6rem;
				margin-right: 0;
			}
		}
	}
`;

const Body = styled.div`
	padding: 3.2rem 2rem 1rem 2rem;
	background-color: var(--color-grey-0);
	display: flex;
	flex-direction: column;
	gap: 2rem;
	margin-bottom: 2.6rem;
	font-size: 1rem;

	@media (min-width: 425px) {
		font-size: 1.1rem;
	}
	@media (min-width: 600px) {
		font-size: 1.6rem;
		/* padding: 3.2rem 3rem 1rem 3rem; */
		gap: 2.4rem;
	}
	@media (min-width: 768px) {
		padding: 3.2rem 4rem 1rem 4rem;
		gap: 2.8rem;
		margin-bottom: 3.6rem;

		/* padding: 2rem 4rem; */
	}
`;

const Price = styled.div`
	background-color: ${({ $isPaid }) =>
		$isPaid ? "var(--color-green-100)" : "var(--color-yellow-100)"};
	border-radius: 4px;
	color: ${({ $isPaid }) =>
		$isPaid ? "var(--color-green-700)" : "var(--color-yellow-700)"};

	padding: 3rem 2rem;

	display: flex;
	justify-content: space-between;
	gap: 1rem;
	font-size: 1.2rem;
	position: relative;
	margin-top: 1.2rem;

	@media (min-width: 600px) {
		font-size: 1.6rem;
		padding: 3rem 5rem;
	}

	& div {
		align-items: center;
		gap: 0.4rem;
		margin-right: 0.8rem;
	}

	& div div {
		width: fit-content;
	}

	& svg {
		color: currentColor !important;
		font-size: 2.4rem;
	}

	& > p {
		font-weight: 600;
		text-transform: uppercase;
		/* font-size: 1.4rem; */
		font-size: 1rem;
		align-self: flex-end;

		position: absolute;
		bottom: 8px;
		right: 12px;

		@media (min-width: 768px) {
			position: static;
			font-size: initial;
		}
	}
`;

const BookingDate = styled.p`
	margin-left: auto;
	color: var(--color-grey-500);
	font-size: 1rem;

	@media (min-width: 425px) {
		font-size: 1.2rem;
	}
`;

const statusToTagName = {
	unconfirmed: "blue",
	"checked-in": "green",
	"checked-out": "silver",
};

function BookingDataBox({ booking }) {
	const navigate = useNavigate();

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
		guests: { fullName, email, nationalID, nationality, countryFlag },
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

				<Button $variation="back" onClick={() => navigate(-1)}>
					<IoIosArrowRoundBack color="#eee" />
					<span>Back</span>
				</Button>
				{/*	<p>
					{" "}
					{format(new Date(startDate), "EEE, MMM dd yyyy")} (
					{isToday(new Date(startDate))
						? "Today"
						: formatDistanceFromNow(startDate)}
					) &mdash; {format(new Date(endDate), "EEE, MMM dd yyyy")}
				</p> */}
				{/* <span>Booking #{booking.id}</span> */}
			</Header>
			<Body>
				<DataItem
					icon={<HiOutlineUser />}
					label={"Guests"}
					content={
						<>
							<span>
								<Flag src={countryFlag} alt={`Flag of ${nationality}`} />
							</span>

							<span>
								{fullName} {numGuests && `+  ${numGuests} guests`}
							</span>
						</>
					}
				/>

				<DataItem
					icon={<HiOutlineEnvelope />}
					label={"Email"}
					content={email}
				/>

				<DataItem
					icon={<HiOutlineFingerPrint />}
					label={"National ID"}
					content={nationalID}
				/>

				<DataItem
					icon={<HiOutlineCheckCircle />}
					label={"Breakfast Included?"}
					content={hasBreakfast ? "Yes" : "No"}
				/>

				<DataItem
					icon={<HiOutlineInformationCircle />}
					label={"Status"}
					content={<Tag $type={statusToTagName[status]}>{status}</Tag>}
				/>

				{observations && (
					<DataItem
						icon={<HiOutlineChatBubbleBottomCenterText />}
						label={"Observation"}
						content={observations}
					/>
				)}

				<Price $isPaid={isPaid}>
					<DataItem
						label={"Total price"}
						icon={<HiOutlineCurrencyDollar />}
						content={formatCurrency(totalPrice)}
					/>

					<p>{isPaid ? "Paid" : "Will pay at property"}</p>
				</Price>

				<BookingDate>
					Booked {format(new Date(created_at), "EEE, MMM dd yyyy, p")}
				</BookingDate>
			</Body>
		</>
	);
}

export default BookingDataBox;
