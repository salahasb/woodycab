import styled from "styled-components";
import CommonBox from "../../ui/Box.styled";
import useTodayBookings from "./useTodayBookings";
import TodayBookingItem from "./TodayBookingItem";
import { MainSpinner } from "../../ui/LoadingSpinners";

const StyledTodayBookings = styled.div`
	${CommonBox}
	padding: 2.2rem;
	overflow: hidden;

	@media (min-width: 465px) {
		grid-column: span 2;
	}

	@media (min-width: 850px) {
		grid-column: span 1;
	}

	@media (min-width: 1024px) {
		grid-column: span 2;
	}

	& > h2 {
		font-size: 1.8rem;

		@media (min-width: 365px) {
			font-size: 2rem;
		}

		font-weight: 600;
		margin-bottom: 2rem;
	}

	& > ul {
		max-height: 24rem;
		width: 100%;
		max-width: 50rem;
		overflow: auto;
		margin: 0 auto;

		&::-webkit-scrollbar {
			width: 0.6rem;
			height: 0.6rem;
		}

		& li {
			display: grid;
			grid-template-columns: 10rem 20rem 6rem auto;
			gap: 1.4rem;
			align-items: center;
			padding: 1rem 0;
			font-weight: 500;
			border-bottom: 1px solid var(--color-grey-200);
			/* margin: 0 auto; */
			width: fit-content;

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
			) : todayBookings.length === 0 ? (
				<p>No activities</p>
			) : (
				<ul>
					{todayBookings.map((booking) => (
						<TodayBookingItem key={booking.id} booking={booking} />
					))}{" "}
				</ul>
			)}
		</StyledTodayBookings>
	);
}

export default TodayBookings;
