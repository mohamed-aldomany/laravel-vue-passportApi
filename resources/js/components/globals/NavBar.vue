<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
                <router-link class="navbar-brand" to="#">Navbar</router-link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul v-if="currentUser" class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <router-link class="nav-link" to="/articles">Articles</router-link>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                {{currentUser.name}}
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <router-link class="dropdown-item" to="#">Action</router-link>
                            <!-- <router-link class="dropdown-item" to="#">Another action</router-link> -->
                            <div class="dropdown-divider"></div>
                            <button @click.prevent="logout" class="dropdown-item" >Logout</button>
                            </div>
                        </li>
                    </ul>
                    <ul v-else class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <router-link class="nav-link" to="/login">Login</router-link>
                        </li>
                        <li class="nav-item active">
                            <router-link class="nav-link" to="/register">Register</router-link>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    </div>
</template>
<script>
export default {
    name : 'NavBar',
    methods : {
        logout(){
            this.$store.commit('logout');
            this.$router.push('/login');
        }
    },
    computed : {
        currentUser(){
            return this.$store.getters.currentUser;
        }
    }
}
</script>
