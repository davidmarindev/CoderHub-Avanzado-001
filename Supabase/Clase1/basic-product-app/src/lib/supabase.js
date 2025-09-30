import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hzupzqmevureulkgodvw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh6dXB6cW1ldnVyZXVsa2dvZHZ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkwMDU3MzQsImV4cCI6MjA3NDU4MTczNH0.Ht7VWeCjV3X4CWRacZhurNhkptSlGULR3IUO9iSMwKw";
const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: true, // ✅ guarda sesión en localStorage
    autoRefreshToken: true, // ✅ refresca access token automáticamente
    detectSessionInUrl: true, // para magic links / OAuth
    storage: window.localStorage, // explícito (default)
  },
});

export default supabase;
