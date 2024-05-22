import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://imnmafwxbcwvzcmtrcng.supabase.co';
const supabaseKey =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imltbm1hZnd4YmN3dnpjbXRyY25nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE4NDE2MDAsImV4cCI6MjAyNzQxNzYwMH0.7ye6I0ZnhTmxrLdDbVX5adjIqV-wPHOWkYed94GIJJ8';
export const supabase = createClient(supabaseUrl, supabaseKey);
