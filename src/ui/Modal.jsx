// import styled from "styled-components";
// import { IoCloseOutline } from "react-icons/io5";

// import CommonButton from "./IconButton.styled";
// import { createPortal } from "react-dom";
// import { cloneElement, createContext, useContext, useState } from "react";

// const Overlay = styled.div`
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// 	backdrop-filter: blur(5px);
// 	/* background-color: #0000004c; */
// 	position: fixed;
// 	top: 0;
// 	left: 0;
// 	width: 100%;
// 	height: 100vh;
// 	z-index: 2;
// `;

// const StyledWindow = styled.div`
// 	background-color: var(--color-grey-0);
// 	padding: 3.2rem 4rem;
// 	box-shadow: var(--shadow-lg);
// 	position: relative;
// 	width: fit-content;
// `;

// const CloseButton = styled(CommonButton)`
// 	position: absolute;
// 	top: 1rem;
// 	right: 1rem;
// 	padding: 0;

// 	& svg {
// 		width: 3rem;
// 		height: 3rem;
// 		color: var(--color-grey-500);
// 	}
// `;

// const ModalContext = createContext();

// function Modal({ children }) {
// 	const [currentName, setCurrentName] = useState("");
// 	const [currentCabin, setCurrentCabin] = useState("");

// 	return (
// 		<ModalContext.Provider
// 			value={{ currentName, setCurrentName, currentCabin, setCurrentCabin }}
// 		>
// 			{children}
// 		</ModalContext.Provider>
// 	);
// }

// function Open({ children, passedName, id }) {
// 	const { setCurrentName, setCurrentCabin } = useContext(ModalContext);

// 	return cloneElement(children, {
// 		onClick: () => {
// 			setCurrentName(passedName);
// 			setCurrentCabin(id);
// 		},
// 	});
// }

// function Window({ children, passedName, id }) {
// 	const { currentName, setCurrentName, currentCabin } =
// 		useContext(ModalContext);

// 	if (currentName !== passedName) return null;

// 	return createPortal(
// 		<Overlay>
// 			<StyledWindow>
// 				<CloseButton onClick={() => setCurrentName("")}>
// 					<IoCloseOutline />
// 				</CloseButton>
// 				{children}
// 			</StyledWindow>
// 		</Overlay>,
// 		document.body
// 	);
// }

// Modal.Window = Window;
// Modal.Open = Open;

// export default Modal;
import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import styled from "styled-components";
import IconButton from "./IconButton.styled";
import useOutsideClick from "../hooks/useOutsideClick";
// import { useOutsideClick } from "../hooks/useOutsideClick";

const StyledModal = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background-color: var(--color-grey-0);
	border-radius: var(--border-radius-lg);
	box-shadow: var(--shadow-lg);
	padding: 3.2rem 4rem;
	transition: all 0.5s;
	max-width: 80%;
`;

const Overlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	background-color: var(--backdrop-color);
	backdrop-filter: blur(4px);
	z-index: 1;
	transition: all 0.5s;
`;

const CloseButton = styled(IconButton)`
	position: absolute;
	top: 1rem;
	right: 1rem;
	padding: 0;

	& svg {
		width: 3rem;
		height: 3rem;
		color: var(--color-grey-500);
	}
`;

const ModalContext = createContext();

function Modal({ children }) {
	const [openName, setOpenName] = useState("");
	const [currentId, setCurrentId] = useState("");

	const close = () => {
		setOpenName("");
		setCurrentId("");
	};

	const open = (id, openName) => {
		setOpenName(openName);
		setCurrentId(id);
	};

	return (
		<ModalContext.Provider
			value={{ openName, close, open, currentId, setCurrentId }}
		>
			{children}
		</ModalContext.Provider>
	);
}

function Open({ children, opens: opensWindowName, id }) {
	const { open } = useContext(ModalContext);

	return cloneElement(children, {
		onClick: (e) => {
			open(id, opensWindowName);
		},
	});
}

function Window({ children, name, id }) {
	const { openName, close, currentId } = useContext(ModalContext);
	const ref = useOutsideClick(close, true);

	if (name !== openName || id !== currentId) return;

	return createPortal(
		<Overlay>
			<StyledModal ref={ref}>
				<CloseButton onClick={close}>
					<HiXMark />
				</CloseButton>

				<div>{cloneElement(children, { onCloseModal: close })}</div>
			</StyledModal>
		</Overlay>,
		document.body
	);
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
