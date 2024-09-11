import styled, { css, keyframes } from "styled-components";
import { ImSpinner8 } from "react-icons/im";

// The common styles
const rotate = keyframes`
    from{
	  transform:    rotate(0)
   }

   to {
      transform:    rotate(1turn)
   }
    `;

const CommonSpinner = styled(ImSpinner8)`
	animation: ${rotate} 1.5s infinite linear;
`;

// For "the main" spinner
const SpinnerBox = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: ${({ $full }) => ($full ? "100vh" : "100%")};
	background-color: var(--color-grey-100);
`;

const StyledMainSpinner = styled(CommonSpinner)`
	background-color: transparent;
	width: 6.4rem;
	height: 6.4rem;
	color: var(--color-brand-600);
`;

function MainSpinner({ $full }) {
	return (
		<SpinnerBox $full={$full}>
			<StyledMainSpinner />
		</SpinnerBox>
	);
}

// For "mini" spinner
const MiniSpinner = styled(CommonSpinner).attrs({ size: 20 })``;

export { MainSpinner, MiniSpinner };
