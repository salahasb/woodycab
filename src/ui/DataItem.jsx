import styled from "styled-components";

const StyledDataItem = styled.div`
	display: flex;
	align-items: start;
	gap: 1.6rem;

	& p {
		display: flex;
		gap: 0.5rem;
		align-items: start;
		margin-top: 1.8px;
		word-break: break-all;

		@media (min-width: 600px) {
			margin-top: 0px;
		}
		/* white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		width: 50px; */

		& img {
			margin-top: 1.8px;

			@media (min-width: 600px) {
				margin-top: 5.2px;
			}
		}
	}
`;

const Label = styled.div`
	display: flex;
	align-items: center;
	gap: 0.8rem;
	font-weight: 500;
	width: 13rem;
	flex-shrink: 0;

	@media (min-width: 425px) {
		width: 14rem;
	}

	@media (min-width: 600px) {
		width: 20rem;
	}

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
