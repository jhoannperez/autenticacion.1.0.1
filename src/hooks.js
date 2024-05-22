import { supabase } from '$lib/supabase';
import { setUser, clearUser } from '$lib/stores';

// @ts-ignore
export async function handle({ event, resolve }) {
    const { data: session, error } = await supabase.auth.getSession();

    if (session) {
        // @ts-ignore
        setUser(session.user);
        // Guardar la sesión en el almacenamiento local del navegador
        localStorage.setItem('supabaseSession', JSON.stringify(session));
    } else if (error) {
        console.error('Error obteniendo la sesión:', error.message);
        clearUser();
    } else {
        clearUser();
    }

    return resolve(event);
}
