/* eslint-disable no-mixed-spaces-and-tabs */
import { IoIosArrowRoundBack } from "react-icons/io";
import Button from "../../ui/Button.styled";
import { MainSpinner, MiniSpinner } from "../../ui/LoadingSpinners";
import OutletLayout from "../../ui/OutletLayout";
import useBooking from "./useBooking";
import { useNavigate } from "react-router-dom";
import BookingDataBox from "./BookingDataBox";
import ButtonGroup from "../../ui/ButtonGroup";
import styled from "styled-components";
import { useEffect, useState } from "react";
import useCheckin from "./useCheckin";
import useSettings from "../settings/useSettings";

const Option = styled.div`
	padding: 2rem 4rem;
	display: flex;
	background-color: var(--color-grey-0);
	gap: 2rem;
	margin-bottom: 4rem;
`;

function CheckinBooking() {
	// input elements states
	const [isPaidState, setIsPaidState] = useState(false);
	const [addBreakfast, setAddBreakfast] = useState(false);

	// react query hooks
	const { booking, isLoading, error } = useBooking();
	const { checkin, isUpdating } = useCheckin(booking?.id);
	const { settings, isLoading: isLoadingSettings } = useSettings();

	// react router hooks
	const navigate = useNavigate();

	// effects
	useEffect(() => {
		if (booking?.status === "checked-in") navigate("/bookings");
	}, [booking, navigate]);

	// early returns
	if (isLoading || isLoadingSettings) return <MainSpinner />;
	if (error) return <div>{error.message}</div>;
	if (booking.status === "checked-in") return;

	//
	const {
		id,
		guests: { fullName },
		hasBreakfast,
		isPaid,
		totalPrice,
		cabinPrice,
		numGuests,
		numNights,
	} = booking;

	const totalBreakfastPrice = settings.breakfastPrice * numGuests * numNights;

	// event handlers
	function handleCheckinBooking() {
		const body = addBreakfast
			? {
					extrasPrice: totalBreakfastPrice,
					hasBreakfast: addBreakfast,
					totalPrice: cabinPrice + totalBreakfastPrice,
			  }
			: {};

		checkin({ id, body });
	}

	return (
		<OutletLayout heading={`Check in booking #${id}`}>
			<OutletLayout.Box>
				<Button $variation="back" onClick={() => navigate(-1)}>
					<IoIosArrowRoundBack size={25} />
					Back
				</Button>
			</OutletLayout.Box>

			<OutletLayout.Box $full>
				<BookingDataBox booking={booking} />

				{!hasBreakfast && (
					<Option>
						<input
							type="checkbox"
							id="breakfast"
							value={addBreakfast}
							onChange={() => setAddBreakfast((b) => !b)}
						/>
						<label htmlFor="breakfast">
							Want to add breakfast for ${totalBreakfastPrice}?
						</label>
					</Option>
				)}
				<Option>
					<input
						type="checkbox"
						id="price"
						disabled={isPaid || isPaidState}
						checked={isPaid || isPaidState}
						onChange={() => setIsPaidState((p) => !p)}
					/>
					<label htmlFor="price">
						I confirm that {fullName} has paid the total amount of $
						{addBreakfast ? totalPrice + totalBreakfastPrice : totalPrice}
						{addBreakfast && `($${totalPrice} + $${totalBreakfastPrice})`}
					</label>
				</Option>

				<ButtonGroup>
					<Button
						disabled={isPaid ? !isPaid : !isPaidState}
						onClick={handleCheckinBooking}
					>
						{isUpdating ? <MiniSpinner /> : `Check in booking #${id}`}
					</Button>

					<Button $variation="secondary" onClick={() => navigate(-1)}>
						Back
					</Button>
				</ButtonGroup>
			</OutletLayout.Box>
		</OutletLayout>
	);
}

export default CheckinBooking;
