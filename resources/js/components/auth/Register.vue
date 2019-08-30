<template>
    <div class="container">
        <form class="mt-5 card" @submit.prevent="authenticate">
            <div class="card-body">
                <h3 class="text-center">Register Form</h3>
                <hr/>
                <div v-if="authError" class="alert alert-warning" role="alert">
                    {{authError}}
                </div>
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" v-model="form.name" class="form-control" placeholder="Name">
                </div>
                <div class="form-group">
                    <label>Email address</label>
                    <input type="email" v-model="form.email" class="form-control" placeholder="Enter email">
                    <small class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label>Password</label>
                    <input type="password" v-model="form.password" class="form-control" placeholder="Password">
                </div>
                <div class="form-group">
                    <label>Current Password</label>
                    <input type="password" v-model="form.c_password" class="form-control" placeholder="Currnet Password">
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
        </form>
    </div>
</template>

<script>

import {register} from '../../helpers/auth';

export default {
    name : 'register',
    data() {
        return {
            form: {
                name : "",
                email : "",
                password : "",
                c_password : ""
            },
            error: null
        }
    },
    methods : {
        authenticate(){
            this.$store.dispatch('register');
            register(this.$data.form)
            .then((res)=>{
                this.$store.commit('loginSuccess',res);
                this.$router.push({path: '/'});
            })
            .catch((error)=>{
                this.$store.commit('registerFailed',{error});
            });
        }
    },
    computed : {
        authError(){
            return this.$store.getters.registerError;
        }
    }
};
</script>

<style scoped>

</style>
