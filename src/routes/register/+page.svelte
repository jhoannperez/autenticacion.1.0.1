<script>
    import { supabase } from '$lib/supabase';
    import { setUser } from '$lib/stores';
    import { goto } from '$app/navigation';

    let email = '';
    let password = '';

    async function register() {
        // @ts-ignore
        const { user, error } = await supabase.auth.signUp({ email, password });
        if (error) {
            console.error('Error registering:', error.message);
        } else {
            setUser(user);
            goto('/welcome');
        }
    }

    function cancel() {
        goto('/');
    }
</script>

<div class="container mt-5">
    <div class="row justify-content-center">
        <div class="col-md-6">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Registro</h5>
                    <div class="mb-3">
                        <label for="email" class="form-label">Correo electrónico</label>
                        <input type="email" class="form-control" id="email" bind:value={email} placeholder="Correo electrónico" />
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Contraseña</label>
                        <input type="password" class="form-control" id="password" bind:value={password} placeholder="Contraseña" />
                    </div>
                    <button class="btn btn-primary mb-3" on:click={register}>Registrar</button>
                    <button class="btn btn-secondary mb-3" on:click={cancel}>Salir</button>
                </div>
            </div>
        </div>
    </div>
</div>
