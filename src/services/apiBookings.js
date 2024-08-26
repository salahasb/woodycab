import { supabaseKey, supabaseUrl } from "./supabase";

export async function getBookings(filter) {
	const token = localStorage.getItem("authToken");

	if (!token) throw new Error(`Token Not Found!`);

	const filterQueryParam =
		filter && filter !== "all" ? `status=eq.${filter}&` : "";

	const res = await fetch(
		`${supabaseUrl}/rest/v1/bookings?${filterQueryParam}select=*,cabins(name),guests(fullName,email)`,
		{
			headers: {
				apikey: supabaseKey,
				Authorization: `Bearer ${token}`,
			},
		}
	);

	const data = await res.json();

	if (!res.ok) throw new Error(`${res.status} - ${data.message}`);

	return data;
}

export async function getBooking(id) {
	const token = localStorage.getItem("authToken");

	if (!token) throw new Error(`Token Not Found!`);

	const res = await fetch(
		`${supabaseUrl}/rest/v1/bookings?id=eq.${id}&select=*,cabins(name),guests(fullName,email,nationality,nationalID)`,
		{
			headers: {
				apikey: supabaseKey,
				Authorization: `Bearer ${token}`,
			},
		}
	);

	const data = await res.json();

	if (!res.ok) throw new Error(`${res.status} - ${data.message} `);

	if (!data.length) throw new Error(`The booking ${id} Not Found`);

	const [booking] = data;

	return booking;
}

export async function deleteBookingApi(id) {
	const token = localStorage.getItem("authToken");

	if (!token) throw new Error(`Token Not Found!`);

	const res = await fetch(`${supabaseUrl}/rest/v1/bookings?id=eq.${id}`, {
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

export async function updateBooking(id, body) {
	const token = localStorage.getItem("authToken");

	if (!token) throw new Error(`Token Not Found!`);

	const res = await fetch(`${supabaseUrl}/rest/v1/bookings?id=eq.${id}`, {
		method: "PATCH",
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

	return id;
}
