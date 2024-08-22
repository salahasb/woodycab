import { Outlet } from "react-router-dom";
import OutletLayout from "../ui/OutletLayout";
import UpdateUserData from "../features/auth/UpdateUserData";
import UpdateUserPassword from "../features/auth/UpdateUserPassword";

function Account() {
	return (
		<OutletLayout heading="Update your account">
			<OutletLayout.Box $full>
				<UpdateUserData />
			</OutletLayout.Box>

			<OutletLayout.Box $full>
				<UpdateUserPassword />
			</OutletLayout.Box>
		</OutletLayout>
	);
}

export default Account;
