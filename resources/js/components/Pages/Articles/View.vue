<template>
    <div>
        <form @submit.prevent="updateArticle()">
            <div class="form-group">
                <label>Title</label>
                <input type="text" v-model="form.title" class="form-control" placeholder="Enter title" value="">
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
    name : 'Single',
    data(){
        return{
            article_id : this.$route.params.id,
            form : {
                title : '',
                body : ''
            },
            Article : []
        }
    },
    computed : {
        currentUser(){
            return this.$store.getters.currentUser;
        }
    },
    methods : {
        updateArticle(){
            axios.put('/api/article/'+this.article_id,this.$data.form)
            .then(()=>{
                this.$router.push('/articles');
            })
        },
        getArticle(){
            axios.get('/api/article/'+this.article_id)
            .then((response)=>{
                this.$data.form.title = response.data.article.title
                this.$data.form.body = response.data.article.body
            })
        }
    },
    created(){
        this.getArticle();
    }
}
</script>

<style>

</style>
