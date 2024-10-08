import styled from "styled-components";
import Button from "../ui/Button.styled";
import { useNavigate } from "react-router-dom";

const StyledNotFoundPage = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100dvh;
	background-color: var(--color-grey-0);
	color: var(--color-grey-700);
	gap: 2rem;

	& > h1 {
		font-size: 10rem;
		font-weight: 500;
		line-height: 0.78;

		@media (min-width: 600px) {
			font-size: 16rem;
		}
	}

	& > p {
		font-size: 2rem;
		margin-bottom: 2rem;

		@media (min-width: 600px) {
			font-size: 2.8rem;
		}
	}
`;

function NotFoundPage() {
	const navigate = useNavigate();

	return (
		<StyledNotFoundPage>
			<h1>404 </h1>
			<p>Page not found</p>
			<Button onClick={() => navigate("/")}>Go Home</Button>
		</StyledNotFoundPage>
	);
}

export default NotFoundPage;
