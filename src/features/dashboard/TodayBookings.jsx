import styled from "styled-components";
import CommonBox from "../../ui/Box.styled";
import Button from "../../ui/Button.styled";
import Tag from "../../ui/Tag";
import { Flag } from "../../ui/Flag.styled";

const StyledTodayBookings = styled.div`
	${CommonBox}
	grid-column: span 2;
	padding: 2.2rem;

	& > h2 {
		font-size: 2.4rem;
		font-weight: 600;
		margin-bottom: 2rem;
	}

	& > ul {
		& li {
			display: flex;
			align-items: center;
			justify-content: space-between;
			border-top: 1px solid var(--color-grey-200);
			padding: 0.4rem 0;
			font-weight: 500;

			/* last li */
			&:last-child {
				border-bottom: 1px solid var(--color-grey-200);
			}

			/* Guest name */
			& > div:nth-child(2) {
				display: flex;

				& img {
					margin-right: 1rem;
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
				padding: 0.2rem 1.2rem;
				font-size: 1.1rem;
				text-transform: uppercase;
				width: 8.8rem;
			}
		}
	}
`;

function TodayBookings() {
	const {} = useTodayBookings();
	return (
		<StyledTodayBookings>
			<h2>Today</h2>

			<ul>
				<li>
					<Tag $type="green">arriving</Tag>
					<div>
						{" "}
						<Flag /> <span>name </span>
					</div>
					<span>11 nights</span>
					<Button>Check in</Button>
				</li>
				<li>
					<Tag $type="blue">departing</Tag>{" "}
					<div>
						<Flag /> <span>name </span>
					</div>
					<span>11 nights</span> <Button>Check out</Button>
				</li>
			</ul>
		</StyledTodayBookings>
	);
}

export default TodayBookings;
