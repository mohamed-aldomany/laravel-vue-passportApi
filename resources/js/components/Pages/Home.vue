<template>
    <div class="container">
        <div class="card text-center mt-5">
            <div class="card-header">
                {{welcome}}
            </div>
            <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            <div class="card-footer text-muted">
                2 days ago
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name : 'Home',
    computed : {
        welcome(){
            return this.$store.getters.welcome;
        }
    }
};
</script>
