<!-- src/routes/welcome/+page.svelte -->
<script>
    import { user, clearUser } from '$lib/stores';
    import { supabase } from '$lib/supabase';
    import { goto } from '$app/navigation';
    import { onMount } from 'svelte';

    let currentUser;

    onMount(() => {
        const subscription = user.subscribe(value => {
            currentUser = value;
            if (!currentUser) {
                goto('/login');
            }
        });

        return () => subscription();
    });

    async function logout() {
        await supabase.auth.signOut();
        clearUser();
        goto('/');
    }
</script>

<h1>Bienvenido, {currentUser?.email}!</h1>
<button on:click={logout}>Cerrar Sesión</button>
