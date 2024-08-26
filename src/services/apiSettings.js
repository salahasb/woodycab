import { supabaseKey, supabaseUrl } from "./supabase";

export async function getSettings() {
	const token = localStorage.getItem("authToken");

	if (!token) throw new Error(`Token Not Found!`);

	const res = await fetch(`${supabaseUrl}/rest/v1/settings`, {
		headers: {
			apikey: supabaseKey,
			Authorization: `Bearer ${token}`,
		},
	});

	const [data] = await res.json();

	if (!res.ok) {
		throw new Error(`${data.message}`);
	}

	return data;
}

export async function patchSettings(body) {
	const token = localStorage.getItem("authToken");

	if (!token) throw new Error(`Token Not Found!`);

	const res = await fetch(`${supabaseUrl}/rest/v1/settings?id=eq.1`, {
		method: "PATCH",
		body: JSON.stringify(body),
		headers: {
			"Content-Type": "application/json",
			apikey: supabaseKey,
			Authorization: `Bearer ${token}`,
		},
	});

	console.log(res);
	if (!res.ok) {
		const data = await res.json();
		throw new Error(`${data.message}`);
	}
	// console.log(data);
	// return data;
}
