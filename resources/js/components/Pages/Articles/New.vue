<template>
    <div>
        <form @submit.prevent="AddArticle()">
            <div class="form-group">
                <label>Title</label>
                <input type="text" v-model="form.title" class="form-control" placeholder="Enter title">
            </div>
            <div class="form-group">
                <label>body</label>
                <textarea v-model="form.body" class="form-control" placeholder="body" rows="6"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>

<script>
export default {
    name : 'New',
    data(){
        return {
            form : {
                title : "",
                body : ""
            }
        }
    },
    computed : {
        currentUser(){
            return this.$store.getters.currentUser;
        }
    },
    methods : {
        AddArticle(){
            this.$store.dispatch('addArticle',this.$data.form)
            .then(() => {
                this.$router.push('/articles')
            })
        }
    }
}
</script>

<style>

</style>
