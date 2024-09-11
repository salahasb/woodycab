import useSettings from "../features/settings/useSettings";
import OutletLayout from "../ui/OutletLayout";
import UpdateSettingsForm from "../features/settings/UpdateSettingsForm";
import { MainSpinner } from "../ui/LoadingSpinners";

function Settings() {
	const { settings, isLoading, error } = useSettings();

	return (
		<OutletLayout heading="Update hotel settings">
			<OutletLayout.Box $full>
				{isLoading ? (
					<MainSpinner $full />
				) : (
					<UpdateSettingsForm settings={settings} />
				)}
			</OutletLayout.Box>
		</OutletLayout>
	);
}

export default Settings;
