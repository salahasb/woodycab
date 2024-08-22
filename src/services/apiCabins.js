import supabase, { supabaseKey, supabaseUrl } from "./supabase";

export async function getCabins() {
	const { data, error } = await supabase.from("cabins").select("*");

	if (error) {
		console.log(error);

		throw new Error(`Cabins couldn't be loaded`);
	}

	return data;
}

export async function deleteCabin(id) {
	const token = localStorage.getItem("authToken");

	if (!token) throw new Error(`Token Not Found!`);

	const res = await fetch(`${supabaseUrl}/rest/v1/cabins?id=eq.${id}`, {
		method: "DELETE",
		headers: {
			apikey: supabaseKey,
			Authorization: `Bearer ${token}`,
		},
	});

	if (!res.ok) {
		const data = await res.json();

		throw new Error(`${res.status} - ${data.message} `);
	}
}

export async function postCabin(body) {
	const token = localStorage.getItem("authToken");

	if (!token) throw new Error(`Token Not Found!`);

	const res = await fetch(`${supabaseUrl}/rest/v1/cabins`, {
		method: "POST",
		body: JSON.stringify(body),
		headers: {
			"Content-type": "application/json",
			apikey: supabaseKey,
			Authorization: `Bearer ${token}`,
		},
	});

	if (!res.ok) {
		const data = await res.json();

		throw new Error(`${res.status} - ${data.message} `);
	}

	// return data;
}

export async function updateCabin({ id, body }) {
	const token = localStorage.getItem("authToken");

	if (!token) throw new Error(`Token Not Found!`);

	const res = await fetch(`${supabaseUrl}/rest/v1/cabins?id=eq.${id}`, {
		method: "PATCH",
		body: JSON.stringify(body),
		headers: {
			"Content-type": "application/json",
			apikey: supabaseKey,
			Authorization: `Bearer ${token}`,
		},
	});
	// console.log(res);

	if (!res.ok) {
		const data = await res.json();

		throw new Error(`${res.status} - ${data.message} `);
	}
	// return data;
}
