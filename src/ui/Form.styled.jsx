import styled, { css } from "styled-components";

const Form = styled.form`
	background-color: var(--color-grey-0);
	/* padding: 4rem; */

	${({ $for }) =>
		$for === "regular" &&
		css`
			padding: 3rem 5rem;
		`}

	${({ $for }) =>
		$for === "modal" &&
		css`
			width: 80rem;
		`}
`;

const Row = styled.div`
	padding: 1.5rem 0;
	display: flex;
	align-items: center;
	gap: 2.5rem;

	&:has(button) {
		gap: 2rem;
		justify-content: flex-end;
		border: 0;
	}

	&:not(:last-of-type) {
		border-bottom: var(--border-main);
	}

	& > input,
	& > textarea {
		width: 22.8rem;
	}

	& > label {
		width: 24.2rem;
		flex-shrink: 0;
	}

	& > p {
		color: var(--color-red-700);
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
