import styled from "styled-components";
import CabinTable from "./CabinTable";
import Button from "../../ui/Button.styled";
import CabinForm from "./CabinForm";
import Modal from "../../ui/Modal";
import { useEffect } from "react";

const StyledBox = styled.div`
	margin-top: 4rem;
`;

function CabinTableBox() {
	return (
		<>
			<CabinTable />

			<StyledBox>
				<Modal.Open opens="cabin-form">
					<Button>Add new cabin</Button>
				</Modal.Open>

				<Modal.Window name="cabin-form">
					<CabinForm />
				</Modal.Window>
			</StyledBox>
		</>
	);
}

export default CabinTableBox;
