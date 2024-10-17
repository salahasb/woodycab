// export default Modal;
import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import styled from "styled-components";
import useOutsideClick from "../hooks/useOutsideClick";
import CloseButton from "./CloseButton.styled";
// import { useOutsideClick } from "../hooks/useOutsideClick";

const StyledModal = styled.div`
	position: fixed;

	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background-color: var(--color-grey-0);
	border-radius: var(--border-radius-lg);
	box-shadow: var(--shadow-lg);
	padding: 4rem 2.5rem;
	transition: all 0.5s;
	max-width: 90%;
	width: 90%;
	/* height: fit-content; */
	max-height: 90%;
	overflow-y: auto;
	z-index: 2;

	@media (min-width: 425px) {
		padding: 4rem 5rem;
		/* width: max-content; */
		/* height: fit-content; */
		width: max-content;
		/* max-width: ; */
	}

	@media (min-width: 768px) {
		/* max-height: 80%;
		max-width: 90%; */
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
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
