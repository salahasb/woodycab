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
			/* color: var(--color-brand-50); */
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
		padding: 0.5rem 0.8rem;
		font-size: 1.4rem;

		/* ${({ active }) =>
			active &&
			css`
				background-color: var(--color-brand-700);
				color: var(--color-brand-50);
			`} */

		&:is(:hover, .active) {
			background-color: var(--color-brand-700);
			color: var(--color-brand-50);
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
	`,
	back: css`
		display: flex;
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
