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

	& > h1 {
		font-size: 20rem;
		font-weight: 500;
		line-height: 0.78;
	}

	& > p {
		font-size: 5rem;
		/* font-weight: 500; */
		margin-bottom: 2rem;
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
