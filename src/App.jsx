import { Suspense, lazy } from "react";
import {
	Navigate,
	RouterProvider,
	createBrowserRouter,
} from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MainSpinner } from "./ui/LoadingSpinners.jsx";

const AppLayout = lazy(() => import("./ui/AppLayout"));
const Dashboard = lazy(() => import("./pages/Dashboard.jsx"));
const Cabins = lazy(() => import("./pages/Cabins.jsx"));
const Bookings = lazy(() => import("./pages/Bookings.jsx"));
const Users = lazy(() => import("./pages/Users.jsx"));
const Settings = lazy(() => import("./pages/Settings.jsx"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage.jsx"));

import GlobalStyles from "./styles/GlobalStyles.js";
import ErrorPage from "./pages/ErrorPage.jsx";
import Account from "./pages/Account.jsx";

import { ToasterProvider } from "./contexts/ToasterContext.jsx";
import Checkin from "./pages/Checkin.jsx";
import Booking from "./pages/Booking.jsx";
import ToasterList from "./ui/Toaster.jsx";
import ProtectedRoute from "./ui/ProtectedRoute.jsx";
import Login from "./pages/Login.jsx";
import { DarkModeProvider } from "./contexts/DarkModeContext.jsx";

const router = createBrowserRouter([
	{
		element: (
			<ProtectedRoute>
				<AppLayout />
			</ProtectedRoute>
		),

		children: [
			{ path: "/", element: <Navigate replace to="/dashboard" /> },

			{ path: "dashboard", element: <Dashboard /> },
			{ path: "bookings", element: <Bookings /> },
			{ path: "bookings/:id", element: <Booking /> },
			{ path: "checkin/:id", element: <Checkin /> },
			{
				path: "cabins",
				element: <Cabins />,
			},
			{ path: "users", element: <Users /> },
			{ path: "settings", element: <Settings /> },
			{ path: "account", element: <Account /> },
		],
		errorElement: <ErrorPage />,
		// ErrorBoundary: ErrorPage,
	},
	{ path: "login", element: <Login />, errorElement: <ErrorPage /> },
	{ path: "*", element: <NotFoundPage /> },
]);

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: false,
		},
	},
});

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<DarkModeProvider>
				<ToasterProvider>
					<ToasterList />
					<GlobalStyles />
					<ReactQueryDevtools initialIsOpen={false} />
					<Suspense fallback={<MainSpinner $full />}>
						<RouterProvider router={router} />
					</Suspense>
				</ToasterProvider>
			</DarkModeProvider>
		</QueryClientProvider>
	);
}

export default App;
