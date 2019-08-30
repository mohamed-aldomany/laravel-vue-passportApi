import Home from './components/Pages/Home.vue';
import Login  from './components/auth/Login.vue';
import Register from './components/auth/Register.vue';
import Articles from './components/Pages/Articles/Main.vue';
import List from './components/Pages/Articles/List.vue';
import New from './components/Pages/Articles/New.vue';
import View from './components/Pages/Articles/View.vue';

export const routes = [
    {
        path : '/',
        component : Home
    },
    {
        path : '/login',
        component : Login,
    },
    {
        path: '/register',
        component: Register,
    },
    {
        path : '/articles/',
        component : Articles,
        children : [
            {
                path : '/',
                component : List
            },
            {
                path: 'new',
                component: New
            },
            {
                path: ':id',
                component: View
            }
        ]
    }
];
