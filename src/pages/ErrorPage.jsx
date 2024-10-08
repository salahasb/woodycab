import { useNavigate, useRouteError } from "react-router-dom";
import styled, { css } from "styled-components";
import Button from "../ui/Button.styled";
import { IoArrowBackOutline, IoReload } from "react-icons/io5";

const StyledErrorPage = styled.div`
	height: 100dvh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	color: var(--color-grey-700);
	gap: 1rem;
	background-color: var(--color-grey-0);

	@media (min-width: 600px) {
		padding-bottom: 5rem;
	}
`;

const Heading = styled.h1`
	font-weight: 800;
	font-size: 8rem;

	@media (min-width: 600px) {
		font-size: 20rem;
	}
`;

const Description = styled.p`
	margin-bottom: 4rem;
	font-size: 1.4rem;
	max-width: 90%;
	text-align: center;

	@media (min-width: 600px) {
		max-width: 50rem;
		text-align: start;
		font-size: 2rem;
	}

	${({ $bold }) =>
		$bold &&
		css`
			font-weight: 600;
		`}
`;

function ErrorPage() {
	const error = useRouteError();
	const navigate = useNavigate();

	return (
		<StyledErrorPage>
			<Heading>Oops!</Heading>

			<Description $bold>
				{error?.message || "Something went very wrong"}
			</Description>

			{
				<Button type="pagination" onClick={() => navigate("/")}>
					Go home
				</Button>
			}
		</StyledErrorPage>
	);
}

export default ErrorPage;
