import styled from "styled-components";
import Logo from "../ui/Logo.styled";
import Heading from "../ui/Heading";
import LoginForm from "../features/auth/LoginForm";
import useUser from "../features/auth/useUser";
import { useEffect, useState } from "react";
import { MainSpinner } from "../ui/LoadingSpinners";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";

const LoginLayout = styled.main`
	height: 100vh;
	width: 100%;
	background-color: var(--color-grey-50);
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 4rem;
	flex-direction: column;
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
