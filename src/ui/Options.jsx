import { css, styled } from "styled-components";
import { BsThreeDotsVertical } from "react-icons/bs";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import useOutsideClick from "../hooks/useOutsideClick";
import IconButton from "./IconButton.styled";

const ToggleIcon = styled(IconButton)`
	color: var(--color-grey-700);
	width: fit-content;
	margin-right: 2rem;

	& svg {
		width: 1.8rem;
		height: 1.8rem;
	}
`;

const StyledOptions = styled.div`
	position: relative;
	justify-self: flex-end;
`;

const StyledList = styled.ul`
	width: max-content;
	position: absolute;
	bottom: -4px;
	transform: translateY(100%);
	right: 2rem;
	z-index: 1;
	background-color: var(--color-grey-0);
	box-shadow: var(--shadow-md);
`;

const StyledOption = styled.button`
	width: 100%;
	display: flex;
	align-items: center;
	gap: 1.5rem;
	background-color: var(--color-grey-50);

	padding: 1rem 2rem;
	color: var(--color-grey-500);
	transition: var(--button-transition);

	& svg {
		color: var(--color-grey-400);
	}

	&:hover {
		background-color: var(--color-grey-100);
	}
`;

const OptionsContext = createContext();

function Options({ children }) {
	const [currOpenedOption, setCurrOpenedOption] = useState("");

	const closeOptions = () => setCurrOpenedOption("");
	const openOptions = (id) => setCurrOpenedOption(id);

	return (
		<OptionsContext.Provider
			value={{ currOpenedOption, closeOptions, openOptions }}
		>
			{children}
		</OptionsContext.Provider>
	);
}

function Wrapper({ children }) {
	return <StyledOptions>{children}</StyledOptions>;
}

function Toggle({ id }) {
	const { currOpenedOption, openOptions, closeOptions } =
		useContext(OptionsContext);

	function handleCurrOption(e) {
		e.stopPropagation();

		if (id !== currOpenedOption) openOptions(id);
		else closeOptions();
	}

	return (
		<ToggleIcon onClick={handleCurrOption}>
			<BsThreeDotsVertical />
		</ToggleIcon>
	);
}

function List({ children, id }) {
	const { currOpenedOption, closeOptions } = useContext(OptionsContext);

	const ref = useOutsideClick(closeOptions);

	if (currOpenedOption !== id) return;

	return <StyledList ref={ref}>{children}</StyledList>;
}

function Option({ children, onClick, icon }) {
	const { closeOptions } = useContext(OptionsContext);

	function handleCloseOptions() {
		closeOptions("");

		onClick();
	}

	return (
		<li>
			<StyledOption onClick={handleCloseOptions}>
				{icon}
				<span>{children}</span>
			</StyledOption>
		</li>
	);
}

Options.Wrapper = Wrapper;
Options.Toggle = Toggle;
Options.List = List;
Options.Option = Option;

export default Options;
