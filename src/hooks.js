import { supabase } from '$lib/supabase';
import { setUser, clearUser } from '$lib/stores';

export async function handle({ event, resolve }) {
	const { user } = await supabase.auth.getUser();

	if (user) {
		setUser(user);
	} else {
		clearUser();
	}

	return resolve(event);
}
