// @ts-nocheck
import { writable } from 'svelte/store';

// Intentar cargar la sesión desde el almacenamiento local
const storedSession = localStorage.getItem('supabaseSession');
const initialUser = storedSession ? JSON.parse(storedSession).user : null;

export const user = writable(initialUser);

export function setUser(newUser) {
    user.set(newUser);
}

export function clearUser() {
    user.set(null);
}
