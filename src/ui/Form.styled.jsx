import styled, { css } from "styled-components";

const Form = styled.form`
	margin: 0 auto;
	background-color: var(--color-grey-0);
	width: 100%;
	border-radius: 6px;

	${({ $for }) =>
		$for === "regular" &&
		css`
			padding: 3rem 3rem;

			@media (min-width: 400px) {
				padding: 5rem 5rem;
			}
		`}

	${({ $for }) =>
		$for === "modal" &&
		css`
			/* width: 80rem; */
		`};
`;

const Row = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	align-items: center;
	column-gap: 2rem;

	&:not(:has(> p)) {
		margin-bottom: 3rem;
	}

	@media (min-width: 1500px) {
		max-width: initial;
		margin-bottom: 2rem;
		grid-template-columns: 0.6fr 1fr 1fr;
	}

	&:nth-last-child(2):not(:has(> p)) {
		margin-bottom: 5rem;
	}

	&:has(button) {
		display: flex;
		justify-content: center;
		margin-bottom: 0;
		margin-top: 2rem;

		& > button[type="reset"] {
			display: none;
		}

		@media (min-width: 768px) {
			justify-content: right;

			& > button[type="reset"] {
				display: block;
			}
		}

		@media (min-width: 1500px) {
			margin-top: 4rem;
		}
	}

	&:not(:last-of-type) {
		/* border-bottom: var(--border-main); */
	}

	& > input,
	& > textarea {
		width: 100%;
		margin-bottom: 0.5rem;

		@media (min-width: 1500px) {
			margin-bottom: 0;
		}
	}

	& > label {
		font-size: 1.4rem;
		font-weight: 500;
		flex-shrink: 0;
		margin-bottom: 0.5rem;

		@media (min-width: 1500px) {
			margin-bottom: 0rem;
		}
	}

	& > p {
		color: var(--color-red-700);
		font-size: 1.2rem;
		height: 3rem;
		line-height: 1.4;

		@media (min-width: 1500px) {
			font-size: 1.4rem;
			font-weight: 400;
			height: auto;
			line-height: 1.5;
			margin-left: 2rem;
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
