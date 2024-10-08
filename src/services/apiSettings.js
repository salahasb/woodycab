import supabase, { supabaseKey, supabaseUrl } from "./supabase";

export async function getSettings() {
	const { data, error } = await supabase.from("settings").select("*");

	if (error) {
		throw new Error(`${error.message}`);
	}

	return data[0];
}

export async function patchSettings(body) {
	const { error } = await supabase.from("settings").update(body).eq("id", 6);

	if (error) {
		throw new Error(`${error.message}`);
	}
}
