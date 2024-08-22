function Msg({ children, style }) {
	return (
		<div
			style={{
				display: "flex",
				opacity: "0",
				visibility: "hidden",
				background: "var(--color-grey-0)",
				position: "absolute",
				top: "50%",
				left: "50%",
				zIndex: "2",
				width: "50rem",
				padding: "5rem",
				transform: "translate(-50%, -50%)",
				transition: "all 0.5s",
				...style,
			}}
		>
			{children}
		</div>
	);
}
