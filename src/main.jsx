import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import GlobalStyles from "./styles/GlobalStyles.js";
import { StrictMode } from "react";

ReactDOM.createRoot(document.getElementById("root")).render(
	<StrictMode>
		<>
			<GlobalStyles />

			<App />
		</>
	</StrictMode>
);
