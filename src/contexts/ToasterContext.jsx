/* eslint-disable no-case-declarations */
import { createContext, useContext, useReducer } from "react";
import { TOAST_TIMEOUT } from "../utils/constants";

const ToasterContext = createContext();

const initialState = [
	// {
	// 	id: "409f9c20-c88d-4522-a333-e1e0fe3e978b",
	// 	type: "error",
	// 	message:
	// 		'409 - update or delete on table "cabins" violates foreign key constraint "bookings_cabinId_fkey" on table "bookings" ',
	// 	timerId: null,
	// 	remainTime: TOAST_TIMEOUT,
	// },
];

function reducer(state = initialState, { type, payload }) {
	// const { id } = state;
	// console.log(state);
	switch (type) {
		case "toaster/add":
			return [...state, payload];

		case "toaster/delete":
			return state.filter((t) => t.id !== payload);

		case "toaster/pause":
			const { id, remainTime } = payload;

			return state.map((t) =>
				t.id === id
					? { ...t, timer: { ...t.timer, timerId: null, remainTime } }
					: t
			);

		case "toaster/resume":
			const { timerId, startingTimeout } = payload;

			return state.map((t) =>
				t.id === payload.id
					? { ...t, timer: { ...t.timer, timerId, startingTimeout } }
					: t
			);

		default:
			return state;
	}
}

function ToasterProvider({ children }) {
	// The Toaster reducer state
	const [toasters, dispatch] = useReducer(reducer, initialState);

	// const [toasters, setToasters] = useState([]);

	// event handlers
	function addToaster(type, message) {
		// generate id for each toaster
		const id = crypto.randomUUID();

		// set a timer for each toaster
		const timerId = setTimeout(() => {
			dispatch({ type: `toaster/delete`, payload: id });
			// setToasters((t) => t.filter((t) => t.id !== id));
		}, TOAST_TIMEOUT);

		const newToasterItem = {
			id,
			type,
			message,
			timer: {
				timerId,
				remainTime: TOAST_TIMEOUT,
				startingTimeout: Date.now(),
			},
		};

		dispatch({
			type: "toaster/add",
			payload: newToasterItem,
		});
		// setToasters((t) => [...t, newToasterItem]);
	}

	function closeToaster(id) {
		dispatch({ type: "toaster/delete", payload: id });
		// setToasters((t) => t.filter((t) => t.id !== id));
	}

	function pauseToaster({ timerId, remainTime, startingTimeout }, id) {
		const passedTime = Date.now() - startingTimeout;
		remainTime = remainTime - passedTime;

		clearTimeout(timerId);

		dispatch({
			type: "toaster/pause",
			payload: { id, remainTime },
		});
	}

	function resumeToaster(id, remainTime) {
		// const remainTime = Date.now() ;
		const timerId = setTimeout(() => {
			dispatch({ type: `toaster/delete`, payload: id });
			// setToasters((t) => t.filter((t) => t.id !== id));
		}, remainTime);

		dispatch({
			type: "toaster/resume",
			payload: { id, timerId, startingTimeout: Date.now() },
		});

		// setToasters((t) =>
		// 	t.map((t) =>
		// 		t.id === id
		// 			? { ...t, ...{ id, timer: { ...t.timer, timerId, startingTimeout } } }
		// 			: t
		// 	)
		// );
	}

	return (
		<ToasterContext.Provider
			value={{
				toasters,
				addToaster,
				closeToaster,
				pauseToaster,
				resumeToaster,
			}}
		>
			{children}
		</ToasterContext.Provider>
	);
}

function useToaster() {
	const context = useContext(ToasterContext);

	if (context === undefined) {
		throw new Error(`Error in ToasterContext`);
	}

	return context;
}

export { ToasterProvider, useToaster };
