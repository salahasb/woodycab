import styled from "styled-components";
import Logo from "../ui/Logo";
import Heading from "../ui/Heading";
import LoginForm from "../features/auth/LoginForm";
import useUser from "../features/auth/useUser";
import { useEffect } from "react";
import { MainSpinner } from "../ui/LoadingSpinners";
import { useNavigate } from "react-router-dom";

const LoginLayout = styled.main`
	height: 100vh;
	width: 100%;
	max-width: 55rem;
	margin: 0 auto;
	padding: 0 2rem;
	background-color: var(--color-grey-50);
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 4rem;
`;

function Login() {
	const { isLoading, user } = useUser();

	const navigate = useNavigate();

	useEffect(() => {
		if (user) navigate("/");
	}, [navigate, user]);

	if (isLoading) return <MainSpinner $full />;

	if (user) return;

	return (
		<LoginLayout>
			<Logo />
			<Heading as="h1">Log In To Your Account</Heading>
			<LoginForm />
		</LoginLayout>
	);
}
export default Login;
