// @ts-nocheck
import { writable } from 'svelte/store';

export const user = writable(null);

export function setUser(newUser) {
	user.set(newUser);
}

export function clearUser() {
	user.set(null);
}
