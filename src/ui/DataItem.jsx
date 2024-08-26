import styled from "styled-components";

const StyledDataItem = styled.div`
	display: flex;
	align-items: flex-start;
	gap: 1.6rem;
`;

const Label = styled.div`
	display: flex;
	align-items: center;
	gap: 0.8rem;
	font-weight: 500;

	& svg {
		font-size: 2rem;
		color: var(--color-brand-700);
	}
`;

function DataItem({ icon, label, content }) {
	return (
		<StyledDataItem>
			<Label>
				{icon}
				<span>{label}</span>
			</Label>
			<p>{content}</p>
		</StyledDataItem>
	);
}

export default DataItem;
