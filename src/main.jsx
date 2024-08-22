import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import GlobalStyles from "./styles/GlobalStyles.js";
import { useEffect, useState } from "react";
import { getBooking } from "./services/apiBookings.js";

ReactDOM.createRoot(document.getElementById("root")).render(
	//<React.StrictMode>
	<>
		<GlobalStyles />

		<App />

		{/* <Parent /> */}
	</>
	//</React.StrictMode>
);

// function Parent() {
// 	const [val, setVal] = useState(0);
// 	console.log("From Parent");
// 	useEffect(() => {
// 		console.log("useEffect");
// 	});

// 	return <p onClick={() => setVal((e) => e + 1)}>hello</p>;
// }

// function Child() {
// 	console.log("From Child");

// 	return " I'm child ;";
// }

// Parent({ children: Child });
// document.addEventListener("click", (e) => {
// 	// e.stopPropagation();
// 	console.log("Document clicked");

// 	if (e.target === document.querySelector("button")) {
// 		console.log("setState");

// 		document.querySelector("button").addEventListener("click", (e) => {
// 			// e.stopPropagation();
// 			console.log("Button clicked");
// 		});

// 		console.log("another event added to the Dom");
// 	}
// });

// document.querySelector("button").addEventListener("click", (e) => {
// 	// e.stopPropagation();
// 	console.log("Button clicked");

// 	document.addEventListener("click", (e) => {
// 		// e.stopPropagation();
// 		console.log("document clicked");
// 	});
// 	console.log("event added to the document");
// });
