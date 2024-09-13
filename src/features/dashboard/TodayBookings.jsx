import styled from "styled-components";
import CommonBox from "../../ui/Box.styled";
import useTodayBookings from "./useTodayBookings";
import TodayBookingItem from "./TodayBookingItem";
import { MainSpinner } from "../../ui/LoadingSpinners";

const StyledTodayBookings = styled.div`
	${CommonBox}
	grid-column: span 2;
	padding: 2.2rem;

	& > h2 {
		font-size: 2.2rem;
		font-weight: 600;
		margin-bottom: 2rem;
	}

	& > ul {
		overflow-y: auto;
		max-height: 80%;

		& li {
			display: grid;
			grid-template-columns: 0.5fr 1fr 1fr auto;
			gap: 1.4rem;
			align-items: center;
			padding: 1rem 0;
			font-weight: 500;
			border-bottom: 1px solid var(--color-grey-200);

			/* all li except the last &:not(:last-child) {
				border-bottom: 1px solid var(--color-grey-200);
			} */

			/* Guest name */
			& > div:nth-child(2) {
				display: flex;
				align-items: center;
				/* justify-self: start; */

				& img {
					margin-right: 1rem;
					/* height: rem; */
				}

				& span {
					font-size: 1.4rem;
				}
			}

			/* Number of nights */
			& span:nth-last-child(2) {
				font-size: 1.3rem;
				color: var(--color-grey-500);
			}

			/* Button */
			& button:last-child {
				padding: 0.4rem 0.6rem;
				font-size: 1rem;
				font-weight: 600;
				text-transform: uppercase;
				width: 8.6rem;
			}
		}
	}
`;

function TodayBookings() {
	const { data: todayBookings, isLoading, error } = useTodayBookings();

	return (
		<StyledTodayBookings>
			<h2>Today</h2>
			{isLoading ? (
				<MainSpinner $color={"transparent"} />
			) : (
				<ul>
					{todayBookings.length === 0 ? (
						<p>No activities</p>
					) : (
						todayBookings.map((booking) => (
							<TodayBookingItem key={booking.id} booking={booking} />
						))
					)}
				</ul>
			)}
		</StyledTodayBookings>
	);
}

export default TodayBookings;
