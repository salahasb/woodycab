import styled from "styled-components";
import { DevTool } from "@hookform/devtools";
import { useForm } from "react-hook-form";

import Form from "../../ui/Form.styled";
import Button from "../../ui/Button.styled";
import useCreateCabin from "./useCreateCabin";
import useEditCabin from "./useEditCabin";
import { MiniSpinner } from "../../ui/LoadingSpinners";
import { useToaster } from "../../contexts/ToasterContext";
import { useEffect } from "react";

function CabinForm({ cabin = {}, onCloseModal }) {
	const { id, name, image, maxCapacity, regularPrice, discount, description } =
		cabin;

	// react form hooks
	const { register, handleSubmit, reset, formState, control, getValues } =
		useForm();
	const { errors } = formState;

	// react query hooks
	const { createCabin, isCreating } = useCreateCabin();
	const { editCabin, isEditing } = useEditCabin();
	const isWorking = isCreating || isEditing;

	// Toaster Context
	const { addToaster } = useToaster();

	// event handler
	function onSubmit(data) {
		console.log("Submitted");
		// to reset the form, show msg, close modal
		function handleReset(msg) {
			reset();
			addToaster("success", msg);
			onCloseModal();
		}

		if (id)
			editCabin(
				{ id, body: data },
				{
					onSuccess: () => handleReset(`The Cabin has updated successfully`),
				}
			);
		else
			createCabin(data, {
				onSuccess: () => handleReset(`The Cabin has Created successfully`),
			});
	}

	function onError(errors) {
		console.log(errors);
		// console.log()
	}

	return (
		<Form onSubmit={handleSubmit(onSubmit, onError)} $for="modal">
			<Form.Row>
				<Form.Label htmlFor="cabinName">Cabin name</Form.Label>
				<Form.Input
					id="cabinName"
					type="text"
					defaultValue={name}
					disabled={isWorking}
					{...register("name", {
						required: "this field is required ",
					})}
				/>
				<Form.Error>{errors?.name?.message}</Form.Error>
			</Form.Row>

			<Form.Row>
				<Form.Label htmlFor="maxCapacity">Maximum capacity</Form.Label>
				<Form.Input
					id="maxCapacity"
					type="number"
					defaultValue={maxCapacity}
					disabled={isWorking}
					{...register("maxCapacity", {
						required: "this field is required ",
						min: {
							value: 1,
							message: "the max capacity should be more than 0 ",
						},
					})}
				/>

				<Form.Error>{errors?.maxCapacity?.message}</Form.Error>
			</Form.Row>

			<Form.Row>
				<Form.Label htmlFor="regularPrice">Regular price</Form.Label>
				<Form.Input
					id="regularPrice"
					type="number"
					defaultValue={regularPrice}
					disabled={isWorking}
					{...register("regularPrice", {
						required: "this field is required",
						min: {
							value: 50,
							message: "the price should be more than $50 ",
						},
					})}
				/>

				<Form.Error>{errors?.regularPrice?.message}</Form.Error>
			</Form.Row>
			<Form.Row>
				<Form.Label htmlFor="discount">Discount</Form.Label>
				<Form.Input
					id="discount"
					type="number"
					defaultValue={discount}
					disabled={isWorking}
					{...register("discount", {
						validate: (value, fields) =>
							value <= getValues().regularPrice ||
							"Discount should be less than regular price",
					})}
				/>

				<Form.Error>{errors?.discount?.message}</Form.Error>
			</Form.Row>
			<Form.Row>
				<Form.Label htmlFor="description">Description for website</Form.Label>
				<Form.TextArea
					id="description"
					type="number"
					defaultValue={description}
					disabled={isWorking}
					{...register("description", { required: "this field is required" })}
				/>

				<Form.Error>{errors?.description?.message}</Form.Error>
			</Form.Row>
			<Form.Row>
				<Form.Label>Image</Form.Label>
				{/* <Form.Label htmlFor="6">Cabin photo</Form.Label> */}
			</Form.Row>
			<Form.Row>
				<Button $variation="secondary" type="reset" onClick={onCloseModal}>
					Cancel
				</Button>
				<Button disabled={isWorking}>
					{id ? "Update cabin" : "Create new cabin"}
				</Button>
			</Form.Row>
			{/* <DevTool control={control} /> */}
		</Form>
	);
}

export default CabinForm;
