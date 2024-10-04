import { useForm } from "react-hook-form";
import Button from "../../ui/Button.styled";
import Form from "../../ui/Form.styled";
import useSignUp from "./useSignUp";
import { MiniSpinner } from "../../ui/LoadingSpinners";
import styled from "styled-components";

const StyledFormContainer = styled.div`
	background-color: var(--color-grey-0);
`;

function SignUpForm() {
	const { signUp, isLoading } = useSignUp();

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	function handleSignUp({ email, password, name }) {
		const body = {
			email: email,
			password: password,
			data: {
				name,
				avatar: "",
			},
		};

		signUp(body, { onSettled: () => reset() });
	}

	return (
		// <StyledFormContainer>
		<Form onSubmit={handleSubmit(handleSignUp)}>
			<Form.Row>
				<Form.Label>Full name</Form.Label>
				<Form.Input
					{...register("name", {
						required: { value: true, message: "This field is required" },
					})}
				/>
				<p>{errors?.name?.message}</p>
			</Form.Row>
			<Form.Row>
				<Form.Label>Email address</Form.Label>
				<Form.Input
					{...register("email", {
						required: { value: true, message: "This field is required" },
						pattern: {
							value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
							message: "Invalid email address",
						},
					})}
				/>
				<p>{errors?.email?.message}</p>
			</Form.Row>
			<Form.Row>
				<Form.Label>Password (min 8 characters)</Form.Label>
				<Form.Input
					type="password"
					{...register("password", {
						required: { value: true, message: "This field is required" },
						minLength: {
							value: 8,
							message: "Password should be more than 8 characters",
						},
					})}
				/>
				<p> {errors?.password?.message}</p>
			</Form.Row>
			<Form.Row>
				<Form.Label> Repeat password</Form.Label>
				<Form.Input
					type="password"
					{...register("confirmPassword", {
						required: { value: true, message: "This field is required" },
						validate: (value, formValues) =>
							value === formValues.password || "Passwords need to match",
					})}
				/>
				<p>{errors?.confirmPassword?.message}</p>
			</Form.Row>
			<Form.Row>
				<Button $variation="secondary" type="reset" onClick={reset}>
					Cancel
				</Button>
				<Button>{isLoading ? <MiniSpinner /> : "Create new user"}</Button>
			</Form.Row>
		</Form>
	);
}

export default SignUpForm;
