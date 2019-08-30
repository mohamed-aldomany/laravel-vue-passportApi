<template>
    <div>
        <router-link to="/articles/new" class="btn btn-primary btn-block">Add New Article</router-link>
        <hr>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Title</th>
                    <th scope="col">Body</th>
                    <th scope="col">Time</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody v-if="!Articles.length">
                <p class="text-center display-4 mt-5">there is no articles available!!!</p>
            </tbody>
            <tbody v-else>
                <tr v-for="Article in Articles" :key="Article.key">
                    <th scope="row">{{Article.id}}</th>
                    <td>{{Article.title}}</td>
                    <td>{{Article.body}}</td>
                    <td>{{Article.created_at}}</td>
                    <td><router-link :to="'/articles/'+Article.id">View</router-link></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name : 'Main',
    computed : {
        Articles(){
           return this.$store.getters.Articles;
        }
    },
    mounted() {
        this.$store.dispatch('getArticles')
    }
};
</script>
