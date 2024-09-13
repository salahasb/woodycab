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

	if (!res.ok) throw new Error(data.msg || "Something went wrong");

	return data;
}

export async function loginAuth(body) {
	const { data, error } = await supabase.auth.signInWithPassword(body);

	if (error) throw new Error(error.message);

	const {
		user,
		session: { access_token },
	} = data;

	return { user, access_token };
}

export async function logoutAuth() {
	const { error } = await supabase.auth.signOut();
}

export async function getUser() {
	const {
		data: { user },
		error,
	} = await supabase.auth.getUser();

	if (error) throw new Error(error.message);

	return user;
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

	// update user info + avatar in user table
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
