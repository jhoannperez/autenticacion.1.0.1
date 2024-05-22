<script>
    import { goto } from '$app/navigation';

    function navigateToLogin() {
        goto('/login');
    }

    function navigateToRegister() {
        goto('/register');
    }
</script>

<div class="container mt-5">
    <div class="row justify-content-center">
        <div class="col-md-6 text-center">
            <button class="btn btn-primary mb-3 me-2" on:click={navigateToLogin}>Iniciar Sesión</button>
            <button class="btn btn-secondary mb-3" on:click={navigateToRegister}>Registrar</button>
        </div>
    </div>
</div>
