import { supabase } from '$lib/supabase';
import { setUser, clearUser } from '$lib/stores';

// @ts-ignore
export async function handle({ event, resolve }) {
    const { data: { session } } = await supabase.auth.getSession();

    if (session) {
        setUser(session.user);
    } else {
        clearUser();
    }

    return resolve(event);
}
