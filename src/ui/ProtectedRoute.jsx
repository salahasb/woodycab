import { useEffect } from "react";
import useUser from "../features/auth/useUser";
import { MainSpinner } from "./LoadingSpinners";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({ children }) {
	// React Query
	const { isLoading, error, remove, user } = useUser();

	// React Router
	const navigate = useNavigate();

	// Effects
	useEffect(() => {
		if (error) {
			remove();

			navigate("/login");
		}
	}, [error, navigate, remove]);

	console.log(user);
	// Early returns
	if (isLoading) return <MainSpinner $full />;

	if (error) return;

	return children;
}

export default ProtectedRoute;
