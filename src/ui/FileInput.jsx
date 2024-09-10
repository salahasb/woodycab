import styled from "styled-components";

const FileInput = styled.input`
	font-size: 1.4rem;

	&::file-selector-button {
		cursor: pointer;
		background-color: var(--color-brand-700);
		border: 0;
		border-radius: 6px;
		color: #eee;
		font-size: 1.4rem;
		font-weight: 500;
		padding: 1rem 1.4rem;
		margin-right: 1rem;
	}
`;

export default FileInput;
