import OutletLayout from "../ui/OutletLayout";
import SignUpForm from "../features/auth/SignUpForm";

function Users() {
	return (
		<OutletLayout heading="Create a new user">
			<OutletLayout.Box $full>
				<SignUpForm />
			</OutletLayout.Box>
		</OutletLayout>
	);
}

export default Users;
