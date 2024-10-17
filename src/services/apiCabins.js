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
	// const token = localStorage.getItem("authToken");

	// if (!token) throw new Error(`Token Not Found!`);

	// const res = await fetch(`${supabaseUrl}/rest/v1/cabins?id=eq.${id}`, {
	// 	method: "DELETE",
	// 	headers: {
	// 		apikey: supabaseKey,
	// 		Authorization: `Bearer ${token}`,
	// 	},
	// });

	// if (!res.ok) {
	// 	const data = await res.json();

	// 	throw new Error(`${res.status} - ${data.message} `);
	// }

	const { error } = await supabase.from("cabins").delete().eq("id", id);

	if (error) {
		throw new Error(error.message);
	}
}

export async function postCabin(data) {
	// const token = localStorage.getItem("authToken");

	// if (!token) throw new Error(`Token Not Found!`);

	let imageUrl, imageName;

	if (typeof data.image === "string") imageUrl = data.image;
	else {
		imageName = `${Date.now()}-${data.image.name
			.replaceAll("/", "")
			.replaceAll(" ", "-")}`;

		imageUrl = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;
	}

	//  uploading cabin first
	// const res = await fetch(`${supabaseUrl}/rest/v1/cabins`, {
	// 	method: "POST",
	// 	body: JSON.stringify({ ...data, image: imageUrl }),
	// 	headers: {
	// 		"Content-type": "application/json",
	// 		apikey: supabaseKey,
	// 		Authorization: `Bearer ${token}`,
	// 	},
	// });

	const { error: uploadError } = await supabase
		.from("cabins")
		.insert({ ...data, image: imageUrl });

	if (uploadError) throw new Error(uploadError.message);

	if (typeof data.image === "string") return;

	// storing the cabin image in supabase storage later
	const image = data.image;

	const { data: newCabin, error: newCabinError } = await supabase.storage
		.from("cabin-images")
		.upload(`${imageName}`, image);

	// Delete cabin if cabin image didn't successfully upload
	if (newCabinError) {
		// await deleteCabin(newCabin.id);
		throw new Error("Cabin image has not uploaded");
	}

	// return data;
}

export async function updateCabin({ id, body }) {
	// const token = localStorage.getItem("authToken");

	// return;
	// if (!token) throw new Error(`Token Not Found!`);

	let image, imageName;

	if (typeof body.image === "string") image = body.image;
	else {
		imageName = `${Date.now()}-${body.image.name
			.replaceAll("/", "")
			.replaceAll(" ", "-")}`;

		image = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;
	}

	//  uploading cabin first
	// const res = await fetch(`${supabaseUrl}/rest/v1/cabins?id=eq.${id}`, {
	// 	method: "PATCH",
	// 	body: JSON.stringify({ ...body, image }),
	// 	headers: {
	// 		"Content-type": "application/json",
	// 		apikey: supabaseKey,
	// 		Authorization: `Bearer ${token}`,
	// 	},
	// });

	const { error: updateError } = await supabase
		.from("cabins")
		.update({ ...body, image })
		.eq("id", id);

	if (updateError) throw new Error(updateError.message);

	if (typeof body.image === "string") return;

	// storing the cabin image in supabase storage later
	const imageObj = body.image;

	const { error } = await supabase.storage
		.from("cabin-images")
		.upload(`${imageName}`, imageObj);

	if (error) {
		// await deleteCabin(id);
		throw new Error("Cabin image not uploaded");
	}

	// return data;
}
