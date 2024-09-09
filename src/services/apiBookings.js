import supabase, { supabaseKey, supabaseUrl } from "./supabase";
import { formatISO } from "date-fns";

export async function getBookings(filterBy, sortBy, rangeFrom, rangeTo) {
	let query = supabase
		.from("bookings")
		.select("*, cabins(name), guests(fullName, email)", { count: "exact" });

	if (filterBy && filterBy !== "all") query.eq("status", filterBy);

	if (sortBy) {
		const [sort, order] = sortBy.split("-");
		const isAscending = order === "asc";

		query.order(sort, { ascending: isAscending });
	}

	const { data, error, count } = await query.range(rangeFrom, rangeTo - 1);

	if ((error && error.code === "PGRST103") || (rangeFrom && !data.length))
		throw new Error("range error");

	if (error) throw new Error(error.message || "failed to get bookings");

	return { data, count };
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

export async function getRecentBookings(date) {
	const { data, error, count } = await supabase
		.from("bookings")
		.select("totalPrice, status, isPaid", { count: "exact" })
		.gte("created_at", date)
		.eq("isPaid", true);

	if (error) throw new Error(error.message || "Bookings not found");

	return { data, count };
}

export async function getRecentStays(date) {
	const { data, error, count } = await supabase
		.from("bookings")
		.select("*, guests(fullName)", { count: "exact" })
		.gte("startDate", date)
		.lte("startDate", formatISO(Date.now()))
		.or("status.eq.checked-in,status.eq.checked-out");

	if (error) throw new Error(error.message || "Bookings not found");
	return { data, count };
}

export async function getTodayBookings() {
	const today = new Date();
	today.setUTCHours(0, 0, 0, 0);
	const date = today.toISOString();

	const { data, error } = await supabase
		.from("bookings")
		.select("id, numNights, status, guests(fullName, nationality, countryFlag)")
		.or(
			`and(status.eq.unconfirmed,startDate.eq.${date}),and(status.eq.checked-in,endDate.eq.${date})`
		);

	if (error) throw new Error(error.message || "Bookings not found");

	return data;
}
