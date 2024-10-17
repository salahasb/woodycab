import styled from "styled-components";
import Heading from "../../ui/Heading";
import Button from "../../ui/Button.styled";
import Form from "../../ui/Form.styled";
import { useForm } from "react-hook-form";
import useUser from "./useUser";
import useUpdateUser from "./useUpdateUser";
import { useToaster } from "../../contexts/ToasterContext";
import { MiniSpinner } from "../../ui/LoadingSpinners";

// const CurrentHeading = styled(Heading)`
// `;

function UpdateUserPassword() {
	// React query
	const { isUpdating, updateUser, addToaster } = useUpdateUser();

	// React Form
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	// event handlers
	function handleUpdatePassword({ password }) {
		const options = {
			onSettled: () => reset(),
			onSuccess: () => {
				addToaster("success", "The password has ben updated successfully");
			},
			onError: (error) => {
				addToaster("error", error.message);
			},
		};

		updateUser(
			{
				password,
			},
			options
		);
	}
	return (
		<>
			<Heading as="h3">Update password</Heading>
			<Form
				$for="regular"
				onSubmit={handleSubmit(handleUpdatePassword)}
				onReset={() => reset()}
			>
				<Form.Row>
					<Form.Label htmlFor="password">New Password (min 8 chars)</Form.Label>
					<Form.Input
						disabled={isUpdating}
						type="password"
						id="password"
						{...register("password", {
							required: "This field is required",
							minLength: {
								value: 8,
								message: "Password must be more than 8 characters",
							},
						})}
					/>
					<p>{errors?.password?.message}</p>
				</Form.Row>

				<Form.Row>
					<Form.Label htmlFor="confirmPassword">Confirm password</Form.Label>
					<Form.Input
						disabled={isUpdating}
						type="password"
						id="confirmPassword"
						{...register("confirmPassword", {
							required: {
								value: true,
								message: "This field is required",
							},
							validate: (value, fields) =>
								value === fields.password || "passwords not matched",
						})}
					/>
					<p>{errors?.confirmPassword?.message}</p>
				</Form.Row>

				<Form.Row>
					<Button $variation="secondary" type="reset">
						Cancel
					</Button>
					<Button disabled={isUpdating}>
						{isUpdating ? <MiniSpinner /> : "Update password"}
					</Button>
				</Form.Row>
			</Form>
		</>
	);
}

export default UpdateUserPassword;
