import styled from "styled-components";
import CommonBox from "../../ui/Box.styled";

const StyledStat = styled.div`
	${CommonBox}
	padding: 1.6rem;
	display: flex;
	align-items: center;
	gap: 2rem;

	& div:first-of-type {
		background-color: var(--color-${({ $color }) => $color}-100);
		padding: 1.4rem;
		border-radius: 100%;

		& svg {
			color: var(--color-${({ $color }) => $color}-700);
			font-size: 3.2rem;
		}
	}

	& div:last-of-type {
		display: flex;
		flex-direction: column;
		/* justify-content: center; */

		& span:first-of-type {
			text-transform: uppercase;
			color: var(--color-grey-500);
			font-size: 1.2rem;
			font-weight: 600;
		}

		& span:last-of-type {
			color: var(--color-grey-700);
			font-size: 2.2rem;
			font-weight: 500;
		}
	}
`;

function Stat({ label, value, icon, color }) {
	return (
		<StyledStat $color={color}>
			<div>{icon}</div>
			<div>
				<span>{label}</span>
				<span>{value}</span>
			</div>
		</StyledStat>
	);
}

export default Stat;
