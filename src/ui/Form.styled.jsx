import styled, { css } from "styled-components";

const Form = styled.form`
	margin: 0 auto;

	${({ $for }) =>
		$for === "regular" &&
		css`
			padding: 3rem 3rem;

			@media (min-width: 400px) {
				padding: 3rem 5rem;
			}
		`}

	${({ $for }) =>
		$for === "modal" &&
		css`
			width: 80rem;
		`}
`;

const Row = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	align-items: center;
	margin: 0 auto;
	max-width: 40rem;
	column-gap: 2rem;

	@media (min-width: 1400px) {
		max-width: initial;
		margin-bottom: 2rem;
		grid-template-columns: 0.6fr 1fr 1fr;
	}

	&:has(button) {
		display: flex;

		margin: 0 auto;
		width: fit-content;

		& > button[type="reset"] {
			display: none;
		}

		@media (min-width: 768px) {
			margin: 0;
			width: fit-content;
			margin-left: auto;

			& > button[type="reset"] {
				display: block;
			}
		}
	}

	&:not(:last-of-type) {
		/* border-bottom: var(--border-main); */
	}

	& > input,
	& > textarea {
		width: 100%;
		margin-bottom: 0.5rem;
		/* max-width: 38rem; */

		@media (min-width: 500px) {
			/* width: 22.8rem; */
		}
	}

	& > label {
		flex-shrink: 0;
		margin-bottom: 0.5rem;
	}

	& > p {
		color: var(--color-red-700);
		font-size: 1.2rem;
		height: 3.6rem;
		line-height: 1;

		@media (min-width: 1400px) {
			font-size: 1.4rem;
			font-weight: 400;
			height: auto;
			line-height: 1.5;
		}
	}
`;

const RowVertical = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.8rem;

	&:has(:not(button)) {
		margin-bottom: 2.5rem;
	}
`;

const Label = styled.label`
	font-size: 1.5rem;
	${({ $shrink }) => {
		$shrink ? "flex-shrink:1;" : "";
	}}
`;

const Input = styled.input`
	border: solid 1px var(--color-grey-300);
	outline: 0;
	padding: 0.8rem 1rem;
	border-radius: var(--border-radius-sm);
	background-color: var(--color-grey-0);
	padding: 0.8rem 1.2rem;
	box-shadow: var(--shadow-sm);
	/* flex: 1 1 auto; */

	${({ $width }) =>
		$width &&
		css`
			width: ${$width};
		`}

	&:focus {
		outline: 2px solid var(--color-brand-600);
		outline-offset: -1px;
	}

	&:disabled {
		background-color: var(--color-grey-200);
		cursor: no-drop;
	}

	&[type="email"] {
		color: var(--color-grey-500);
	}
`;

const TextArea = styled.textarea`
	border: solid 1px var(--color-grey-300);
	outline: 0;
	padding: 0.8rem 1rem;
	border-radius: var(--border-radius-sm);
	background-color: var(--color-grey-0);
	/* flex: 1 0 100%; */

	&:focus {
		outline: 2px solid var(--color-brand-600);
		outline-offset: -1px;
	}
`;

const Error = styled.p`
	color: var(--color-red-700);
`;

Form.Row = Row;
Form.RowVertical = RowVertical;
Form.Label = Label;
Form.Input = Input;
Form.TextArea = TextArea;
Form.Error = Error;

Form.defaultProps = {
	$for: "regular",
};
export default Form;
