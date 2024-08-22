import {
	BsCheck2,
	BsExclamation,
	BsExclamationTriangle,
	BsX,
} from "react-icons/bs";
import styled, { css, keyframes } from "styled-components";
import { useToaster } from "../contexts/ToasterContext";
import IconButton from "./IconButton.styled";
import Heading from "./Heading";
import { TOAST_TIMEOUT } from "../utils/constants";
import { createPortal } from "react-dom";

const types = [
	{
		type: "success",
		icon: BsCheck2,
		color: "--color-green-700",
	},
	{
		type: "error",
		icon: BsX,
		color: "--color-red-700",
	},
	{
		type: "warning",
		icon: BsExclamationTriangle,
		color: "--color-yellow-500",
	},
	{
		type: "info",
		icon: BsExclamation,
		color: "--color-blue-700",
	},
];

const backward = keyframes`
 to {
 
	width: 0px;
 
 }
`;

const StyledToasterList = styled.ul`
	display: flex;
	flex-direction: column-reverse;
	align-items: center;
	gap: 1rem;
	width: 50rem;
	position: fixed;
	top: 0;
	left: 50%;
	transform: translateX(-50%);
	z-index: 2;
`;

const StyledToaster = styled.li`
	position: relative;
	border-left: solid 5px var(${({ $color }) => $color});
	display: grid;
	grid-template-columns: auto 1fr;
	align-items: center;
	padding: 1em;
	background-color: var(--color-grey-50);
	box-shadow: 0px 0px 33px -1px rgba(0, 0, 0, 0.2);
	column-gap: 2rem;
	row-gap: 0.8rem;
	width: 40rem;
	z-index: 3;

	&::after {
		content: "";
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 2px;
		background-color: var(${({ $color }) => $color});
		animation: ${backward} ${TOAST_TIMEOUT / 1000}s linear forwards
			${({ $pause }) => !$pause && "paused"};
	}
`;

const IconBox = styled.div`
	border-radius: 50%;
	background-color: var(${({ $curToast }) => $curToast.color});
	display: flex;
	align-items: center;
	justify-content: center;
	width: 4rem;
	height: 4rem;
	grid-row: span 2;
	padding-left: 0.1rem;

	${({ $curToast }) =>
		$curToast.type === "warning" &&
		css`
			padding-bottom: 0.45rem;
		`}
`;

const Icon = styled.svg.attrs({ size: 25 })`
	color: var(--color-grey-0);
`;

const Close = styled(IconButton)`
	position: absolute;
	top: 1rem;
	right: 1rem;
	padding: 0;
	z-index: 1;

	& svg {
		color: var(--color-grey-500);
	}
`;

function ToasterList() {
	const { toasters } = useToaster();

	return createPortal(
		<StyledToasterList>
			{toasters.map((toaster) => (
				<ToasterItem key={toaster.id} toaster={toaster} />
			))}
		</StyledToasterList>,
		document.body
	);
}

function ToasterItem({ toaster }) {
	// toaster data
	const { closeToaster, pauseToaster, resumeToaster } = useToaster();
	const {
		id,
		type,
		message,
		timer: { timerId, remainTime },
	} = toaster;

	// choose the template of the Toaster
	const curToast = types.find((t) => t.type === type);
	const { icon, color } = curToast;

	return (
		<StyledToaster
			$color={color}
			$pause={timerId}
			onMouseEnter={() => pauseToaster(toaster.timer, id)}
			onMouseLeave={() => resumeToaster(id, remainTime)}
		>
			<IconBox $curToast={curToast}>
				<Icon as={icon} />
			</IconBox>
			<Heading as="h3">{type}</Heading>
			<div>{message}</div>
			<Close onClick={() => closeToaster(id)}>
				<BsX size={25} />
			</Close>
		</StyledToaster>
	);
}
export default ToasterList;
