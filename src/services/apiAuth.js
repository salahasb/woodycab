import { generateImageNameAndUrl } from "../utils/helpers";
import supabase, {
	AUTH_ENDPOINT,
	AVATARS_BUCKET_NAME,
	supabaseKey,
	supabaseUrl,
} from "./supabase";

export async function SignUpAuth(body) {
	const res = await fetch(`${supabaseUrl}/${AUTH_ENDPOINT}/signup`, {
		headers: { apikey: supabaseKey },
		method: "POST",
		body: JSON.stringify(body),
	});

	const data = await res.json();

	if (!res.ok) throw new Error(`${data.msg}`);

	return data;
}

export async function loginAuth(body) {
	const res = await fetch(
		`${supabaseUrl}/${AUTH_ENDPOINT}/token?grant_type=password`,
		{
			headers: { apikey: supabaseKey },
			method: "POST",
			body: JSON.stringify(body),
		}
	);

	const data = await res.json();

	if (data.error) throw new Error(data.error);

	return data;
}

export async function logoutAuth() {
	const token = localStorage.getItem("authToken");

	if (!token) throw new Error(`Token Not Found!`);

	const res = await fetch(`${supabaseUrl}/${AUTH_ENDPOINT}/logout`, {
		headers: { apikey: supabaseKey, Authorization: `Bearer ${token}` },
		method: "POST",
	});

	if (!res.ok) {
		const data = await res.json();

		throw new Error(`${data.msg}`);
	}
}

export async function getUser() {
	const token = localStorage.getItem("authToken");

	if (!token) throw new Error(`Token Not Found!`);

	const res = await fetch(`${supabaseUrl}/${AUTH_ENDPOINT}/user`, {
		headers: {
			apikey: supabaseKey,
			Authorization: `Bearer ${token}`,
		},
	});

	const data = await res.json();

	if (!res.ok) throw new Error(`${data.msg}`);

	return data;
}

export async function updateUserAuth({ name, avatar, password }) {
	const token = localStorage.getItem("authToken");
	if (!token) throw new Error(`Token Not Found!`);

	const body = { data: {} };

	if (password) body.password = password;
	else body.data.name = name;

	let imageName;

	if (avatar) {
		const { imageName: newImageName, imageUrl } = generateImageNameAndUrl(
			avatar,
			AVATARS_BUCKET_NAME
		);

		imageName = newImageName;
		body.data.avatar = imageUrl;
	}

	const res = await fetch(`${supabaseUrl}/${AUTH_ENDPOINT}/user`, {
		headers: { apikey: supabaseKey, Authorization: `Bearer ${token}` },
		method: "PUT",
		body: JSON.stringify(body),
	});

	const data = await res.json();
	if (!res.ok) throw new Error(data.msg || "Failed to update user");

	// update user avatar in supabase storage
	if (avatar) {
		const { error } = await supabase.storage
			.from(AVATARS_BUCKET_NAME)
			.upload(imageName, avatar);

		if (error) throw new Error("avatar image not uploaded");
	}

	return data;
}
