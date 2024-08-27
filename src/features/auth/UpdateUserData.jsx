import styled from "styled-components";
import Button from "../../ui/Button.styled";
import Form from "../../ui/Form.styled";
import Heading from "../../ui/Heading";
import useUser from "./useUser";
import useUpdateUser from "./useUpdateUser";
import { MiniSpinner } from "../../ui/LoadingSpinners";
import { useForm } from "react-hook-form";
import FileInput from "../../ui/FileInput";

const CurrentHeading = styled(Heading)`
	margin-bottom: 2rem;
`;

const StyledUpdateUserData = styled.div`
	margin-bottom: 4rem;
`;

function UpdateUserData() {
	// React Query
	const {
		user: {
			user_metadata: { name: currentName },
			email,
		},
	} = useUser();

	const { updateUser, isUpdating, addToaster } = useUpdateUser();

	// React hook form
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: { name: currentName, email },
	});

	// event handlers
	function handleUpdateUser({ name, avatar }) {
		// return console.log(avatar[0]);
		updateUser(
			{
				data: {
					name,
					avatar,
				},
			},
			{
				onSuccess: () => {
					addToaster("success", "The user has updated successfully");
				},
			}
		);
	}

	function handleReset(e) {
		e.preventDefault();
		reset({ name: currentName });
	}

	return (
		<StyledUpdateUserData>
			<CurrentHeading as="h3">Update user data</CurrentHeading>
			<Form $for="regular" onSubmit={handleSubmit(handleUpdateUser)}>
				<Form.Row>
					<Form.Label htmlFor="email">Email address</Form.Label>
					<Form.Input type="email" id="email" disabled {...register("email")} />
					<p></p>
				</Form.Row>

				<Form.Row>
					<Form.Label htmlFor="name">Full name</Form.Label>
					<Form.Input
						disabled={isUpdating}
						id="name"
						{...register("name", {
							required: { value: true, message: "this field is  required" },
						})}
					/>
					<p>{errors?.name?.message}</p>
				</Form.Row>

				<Form.Row>
					<Form.Label htmlFor="avatar">Avatar image</Form.Label>
					<FileInput
						type="file"
						id="avatar"
						accept="image/*"
						{...register("avatar")}
					/>
				</Form.Row>

				<Form.Row>
					<Button
						disabled={isUpdating}
						$variation="secondary"
						onClick={handleReset}
					>
						Cancel
					</Button>
					<Button disabled={isUpdating}>
						{isUpdating ? <MiniSpinner /> : "Update account"}
					</Button>
				</Form.Row>
			</Form>
		</StyledUpdateUserData>
	);
}

export default UpdateUserData;
