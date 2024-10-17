import styled, { css } from "styled-components";

const styles = {
	primary: css`
		background-color: var(--color-brand-600);
		color: var(--color-brand-50);
		padding: 1.2rem 1.6rem;
		font-size: 1.6rem;

		&:hover {
			background-color: var(--color-brand-700);
		}
	`,

	secondary: css`
		font-size: 1.4rem;
		border: solid 1px var(--color-grey-200);
		padding: 1.2rem 1.6rem;
		background-color: var(--color-grey-0);

		&:hover {
			background-color: var(--color-grey-100);
		}
	`,

	danger: css`
		font-size: 1.4rem;
		padding: 1.2rem 1.6rem;
		background-color: var(--color-red-700);
		color: var(--color-red-100);

		&:hover {
			background-color: var(--color-red-800);
		}
	`,

	filter: css`
		padding: 0.5rem 0.7rem;
		font-size: 1rem;

		&:is(:hover, .active) {
			background-color: var(--color-brand-700);
			color: var(--color-brand-50);
		}

		@media (min-width: 365px) {
			font-size: 1.2rem;
		}

		@media (min-width: 400px) {
			font-size: 1.4rem;
		}
	`,

	pagination: css`
		padding: 0.5rem 1rem;
		font-size: 1.4rem;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;

		&:not(:disabled):hover {
			background-color: var(--color-brand-700);
			color: var(--color-brand-50);
		}

		& svg {
			stroke-width: 10rem;
			margin-bottom: 2px;
		}
	`,
	back: css`
		align-items: center;
		gap: 0.3rem;
		color: var(--color-brand-800);
	`,
};

const Button = styled.button`
	border-radius: var(--border-radius-sm);
	transition: var(--button-transition);
	font-weight: 500;
	cursor: pointer;
	display: flex;
	justify-content: center;

	&:disabled {
		cursor: not-allowed;
	}

	display: ${({ $booking }) => ($booking ? "none" : "flex")};

	${({ $booking }) =>
		$booking
			? css`
					@media (min-width: 600px) {
						display: flex;
					}
			  `
			: ""}

	${({ size }) =>
		size === "fit" &&
		css`
			width: fit-content;
		`}

	${({ $variation }) => styles[$variation]}
`;

Button.defaultProps = {
	$variation: "primary",
};

export default Button;
