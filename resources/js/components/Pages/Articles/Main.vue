<template>
    <div class="container mt-5">
        <div class="card">
            <div class="card-header">
                <div class="row">
                    Articles
                </div>
            </div>
            <div class="card-body">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name : 'Main',
};
</script>
