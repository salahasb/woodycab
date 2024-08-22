import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://gkyodlavamsoeokejqer.supabase.co";
export const supabaseKey =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdreW9kbGF2YW1zb2Vva2VqcWVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQwMzc2OTMsImV4cCI6MjAxOTYxMzY5M30.Q3J3xVtWPpnISpso8_bjzjXQk0M4XBcwmywRaDJxp2k";
const supabase = createClient(supabaseUrl, supabaseKey);

// Endpoints
export const AUTH_ENDPOINT = "auth/v1";

export default supabase;
