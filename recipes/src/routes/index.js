import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '../views/HomePage';
import Map from '../views/Map';
import RecipeDetails from '../views/RecipeDetails';
import SearchResults from '../views/SearchResults'
import AboutUs from '../views/AboutUs'
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
            path: '/Map',
            name: 'Map',
            component: Map
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
        },
        {
            path: '/AboutUs',
            name: 'AboutUs',
            component: AboutUs
        }

]
});


export default router