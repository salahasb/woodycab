import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";

import useCreateCabin from "./useCreateCabin";
import Options from "../../ui/Options";
import Modal from "../../ui/Modal";
import CabinForm from "../../features/cabins/CabinForm";
import ConfirmDelete from "../../ui/ConfirmDelete";
import { useToaster } from "../../contexts/ToasterContext";
import useDeleteCabin from "./useDeleteCabin";

function CabinOptions({ cabin }) {
	const { id, name } = cabin;
	// cabins state
	const { isCreating, createCabin } = useCreateCabin();
	const { isDeleting, deleteCabin } = useDeleteCabin();

	// toasters state
	const { addToaster } = useToaster();

	function handleDuplicateCabin() {
		const options = {
			onSuccess: () => {
				// show a success message
				addToaster("success", "the cabin has duplicated successfully");
			},
		};

		createCabin(
			{
				...cabin,
				id: undefined,
				name: `Copy of ${name}`,
			},
			options
		);
	}
	return (
		<Options.Wrapper>
			<Options.Toggle id={id} />

			<Options.List id={id}>
				<Options.Option
					disabled={isCreating}
					onClick={handleDuplicateCabin}
					icon={<HiSquare2Stack />}
				>
					Duplicate
				</Options.Option>

				<Modal.Open opens="edit" id={id}>
					<Options.Option icon={<HiPencil />}>Edit</Options.Option>
				</Modal.Open>

				<Modal.Open opens="delete" id={id}>
					<Options.Option icon={<HiTrash />}>Delete</Options.Option>
				</Modal.Open>
			</Options.List>

			<Modal.Window name="edit" id={id}>
				<CabinForm cabin={cabin} />
			</Modal.Window>

			<Modal.Window name="delete" id={id}>
				<ConfirmDelete
					resource="cabins"
					id={id}
					onDelete={(close) =>
						deleteCabin(id, {
							onSettled: () => {
								close();
							},
						})
					}
					isDeleting={isDeleting}
				/>
			</Modal.Window>
		</Options.Wrapper>
	);
}

export default CabinOptions;
