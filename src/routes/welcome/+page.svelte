<script>
    // @ts-nocheck
    
    import { user, clearUser } from '$lib/stores';
    import { supabase } from '$lib/supabase';
    import { goto } from '$app/navigation';
    import { onMount } from 'svelte';

    // @ts-ignore
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

<div class="container mt-5">
    <div class="row justify-content-center">
        <div class="col-md-6 text-center">
            
                    <h1 class="card-title">Bienvenido, {currentUser?.email}!</h1>
                    <button class="btn btn-danger mt-3" on:click={logout}>Cerrar Sesión</button>
        </div>
    </div>
</div>
