import Form from "../../ui/Form.styled";
import { useForm } from "react-hook-form";
import useEditSettings from "./useEditSettings";

function UpdateSettingsForm({ settings }) {
	const {
		minBookingLength,
		maxBookingLength,
		maxGuestsPerBooking,
		breakfastPrice,
	} = settings;

	// react hook form
	const { register } = useForm();

	// react query
	const { isUpdating, updateSettings } = useEditSettings();

	// event handlers
	function handleOnBlur(e, field) {
		const { value } = e.target;

		updateSettings({ [field]: value });
	}

	return (
		<Form>
			<Form.Row>
				<Form.Label htmlFor="minBookingLength">
					Minimum nights/booking
				</Form.Label>
				<Form.Input
					defaultValue={minBookingLength}
					type="number"
					id="minBookingLength"
					onBlur={(e) => handleOnBlur(e, "minBookingLength")}
					disabled={isUpdating}
				/>
			</Form.Row>
			<Form.Row>
				<Form.Label htmlFor="maxBookingLength">
					Maximum nights/booking
				</Form.Label>
				<Form.Input
					defaultValue={maxBookingLength}
					type="number"
					id="maxBookingLength"
					onBlur={(e) => handleOnBlur(e, "maxBookingLength")}
					disabled={isUpdating}
				/>
			</Form.Row>
			<Form.Row>
				<Form.Label htmlFor="maxGuestsPerBooking">
					Maximum guests/booking
				</Form.Label>
				<Form.Input
					defaultValue={maxGuestsPerBooking}
					{...register("maxGuestsPerBooking")}
					type="number"
					id="maxGuestsPerBooking"
					onBlur={(e) => handleOnBlur(e, "maxGuestsPerBooking")}
					disabled={isUpdating}
				/>
			</Form.Row>
			<Form.Row>
				<Form.Label htmlFor="breakfastPrice">Breakfast price</Form.Label>
				<Form.Input
					defaultValue={breakfastPrice}
					{...register("breakfastPrice")}
					type="number"
					id="breakfastPrice"
					onBlur={(e) => handleOnBlur(e, "breakfastPrice")}
					disabled={isUpdating}
				/>
			</Form.Row>
		</Form>
	);
}

export default UpdateSettingsForm;
