import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '../views/HomePage';
import RecipeDetails from '../views/RecipeDetails';
import SearchResults from '../views/SearchResults'

Vue.use(Router);

let router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
        path: '/index',
        name: 'index',
        component: HomePage
        },
        {
            path: '/',
            name: '',
            component: HomePage
            },
        {
            path: '/RecipeDetails',
            name: 'RecipeDetails',
            component: RecipeDetails
        },
        {
            path: '/SearchResults',
            name: 'SearchResults',
            component: SearchResults
        }

]
});


export default router