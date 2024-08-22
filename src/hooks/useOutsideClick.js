import { useEffect, useRef } from "react";

// export function useOutsideClick(handler, listenCapturing = true) {
// 	const ref = useRef();

// 	useEffect(
// 		function () {
// 			function handleClick(e) {
// 				if (ref.current && !ref.current.contains(e.target)) {
// 					handler();
// 				}
// 			}

// 			document.addEventListener("click", handleClick, listenCapturing);

// 			return () =>
// 				document.removeEventListener("click", handleClick, listenCapturing);
// 		},
// 		[handler, listenCapturing]
// 	);

// 	return ref;
// }

function useOutsideClick(handler, listenCapturing = false) {
	const ref = useRef();

	useEffect(() => {
		if (!ref.current) return;

		function handleClick(e) {
			if (!ref.current.contains(e.target)) {
				handler();
			}
		}

		document.addEventListener("click", handleClick, listenCapturing);

		return () => {
			document.removeEventListener("click", handleClick, listenCapturing);
		};
	}, [handler, ref, listenCapturing]);

	return ref;
}

export default useOutsideClick;
