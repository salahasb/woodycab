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
		/* margin-bottom: 0.2rem; */
		font-size: 20rem;
	}
`;

const Description = styled.p`
	margin-bottom: 4rem;
	font-size: 1.4rem;

	@media (min-width: 600px) {
		font-size: 3rem;
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

	const isConnectionError =
		error.message.includes("Failed to fetch dynamically imported module") ||
		error.message.includes("Failed to fetch");
	const errMsg = isConnectionError && "Check out your internet connection";

	// console.log(isConnectionError);
	// console.log(error.message);
	return (
		<StyledErrorPage>
			<Heading>Oops!</Heading>
			{/* 
			<Description>
				{error.status} - {error.statusText}
			</Description> */}
			<Description $bold>{"Something went very wrong"}</Description>
			{/* 
			{isConnectionError && (
				<Button onClick={() => navigate(0)}>
					<IoReload /> Reload
				</Button>
			)} */}
			{/* {!isConnectionError && (
				<Button type="pagination" onClick={() => navigate(-1)}>
					<IoArrowBackOutline />
					Go back
				</Button>
			)} */}
			{
				<Button type="pagination" onClick={() => navigate("/")}>
					Go home
				</Button>
			}
		</StyledErrorPage>
	);
}

export default ErrorPage;
