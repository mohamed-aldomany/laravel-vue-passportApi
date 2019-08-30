import { getLocalUser } from './helpers/auth';

const user = getLocalUser();

export default {
    state : {
        currentUser : user,
        isLoggedIn : !!user,
        loading : false,
        login_error : null,
        register_error: null,
        Articles : []
    },
    getters : {
        currentUser(state){
            return state.currentUser;
        },
        isLoggedIn(state) {
            return state.isLoggedIn;
        },
        loading(state) {
            return state.loading;
        },
        loginError(state) {
            return state.login_error;
        },
        registerError(state) {
            return state.register_error;
        },
        Articles(state) {
            return state.Articles;
        },
    },
    mutations : {
        login(state){
            state.loading = true;
            state.login_error = null;
        },
        register(state) {
            state.loading = true;
            state.register_error = null;
        },
        loginSuccess(state,payload){
            state.loading = false,
            state.login_error = null,
            state.isLoggedIn = true,
            state.currentUser = Object.assign({}, payload.user, {token: payload.access_token}),
            localStorage.setItem("user", JSON.stringify(state.currentUser));
        },
        loginFailed(state, payload) {
            state.loading = false,
            state.login_error = payload.error,
            state.isLoggedIn = false;
        },
        registerSuccess(state, payload) {
            state.loading = false,
            state.login_error = null,
            state.isLoggedIn = true,
            state.currentUser = Object.assign({}, payload.user, {token: payload.access_token}),
            localStorage.setItem("user", JSON.stringify(state.currentUser));
        },
        registerFailed(state, payload) {
            state.loading = false,
            state.register_error = payload.error,
            state.isLoggedIn = false;
        },
        logout(state){
            localStorage.removeItem("user"),
            state.isLoggedIn = false,
            state.currentUser = null;
        },
        updateArticles(state,payload){
            state.Articles = payload;
        }
    },
    actions : {
        login(context){
            context.commit('login');
        },
        register(context) {
            context.commit('register');
        },
        getArticles(context){
            axios.get('/api/article')
            .then((response)=>{
                context.commit('updateArticles',response.data.articles);
            })
        },
        addArticle(context,payload){
            // when i added the authorization to the url request =>
            // axios.post('/api/article', payload, {
            //         headers: {
            //             'Authorization': `Bearer ${context.state.currentUser.token}`
            //         }
            //     });
            axios.post('/api/article', payload);
        }
    }
}
