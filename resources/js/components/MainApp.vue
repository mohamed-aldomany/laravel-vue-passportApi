<template>
    <div>
        <div>
            <nav-bar></nav-bar>
        </div>
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import NavBar from './globals/NavBar.vue';
    export default {
        name : 'MainApp',
        components: {
            NavBar,
        },
    };
</script>
