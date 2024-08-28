import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://uxeaelhrtalugdxtczww.supabase.co";
export const supabaseKey =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV4ZWFlbGhydGFsdWdkeHRjend3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ0MzE0MTcsImV4cCI6MjA0MDAwNzQxN30.mkt_DhkLIorw0V5WK9hV3heZ9bl2eP8Ihxurwo4hKyM";

export const CABINS_BUCKET_NAME = "cabin-images";
export const AVATARS_BUCKET_NAME = "avatars";

const supabase = createClient(supabaseUrl, supabaseKey);

// Endpoints
export const AUTH_ENDPOINT = "auth/v1";

export default supabase;
