import { useForm } from "react-hook-form";
import Button from "../../ui/Button.styled";
import Form from "../../ui/Form.styled";
import { MiniSpinner } from "../../ui/LoadingSpinners";
import useLogin from "./useLogin";

function LoginForm() {
	const { login, isLogingIn } = useLogin();

	const { register, handleSubmit, reset } = useForm({
		defaultValues: {
			email: "user@example.com",
			password: "123456789",
		},
	});

	async function onSubmit(data) {
		const { email, password } = data;

		const body = {
			email,
			password,
		};

		login(body, {
			onError: () => {
				reset({ password: "" });
			},
		});
	}

	return (
		<Form $for="regular" onSubmit={handleSubmit(onSubmit)}>
			<Form.RowVertical>
				<Form.Label>Email address</Form.Label>
				<Form.Input
					{...register("email", {
						required: "Email is required",
						pattern: {
							value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
							message: "Invalid email address",
						},
					})}
				/>
			</Form.RowVertical>

			<Form.RowVertical>
				<Form.Label>Password</Form.Label>
				<Form.Input
					type="password"
					{...register("password", { required: "Password is required" })}
				/>
			</Form.RowVertical>

			<Form.RowVertical>
				<Button
					disabled={isLogingIn}
					$variation="primary"
					// onClick={on}
				>
					{isLogingIn ? <MiniSpinner /> : "Log in"}
				</Button>
			</Form.RowVertical>
		</Form>
	);
}

export default LoginForm;
