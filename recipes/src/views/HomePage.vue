<template>
  <div>
      <HomeNavigation></HomeNavigation>
      <h1>Home page</h1>

       <!--<ul v-for="item in recipes.recipes" :key="item.id">
            <li>{{item.title}}
                <img :src="item.image" alt="">
                <a v-bind:href="'/RecipeDetails?RecipeId='+item.id">Details</a><br>
            </li>
           
        </ul>
-->
     
  </div>
</template>

<script>
import HomeNavigation from "../components/Navigation.vue"
export default {
      components: {
            HomeNavigation
        },
          data() {
            return {
               //data that is used in the components
               //recipes:''
            }
        },
           mounted: function () {
            
            /*this.$http.get("https://api.spoonacular.com/recipes/complexSearch?apiKey=e0c6235e9e9448a9acc247fb4264294b&query=&number=20").then(response => {
                this.recipes = response.data;
                console.log(response.data);
            });*/
              
            /*this.$http.get("https://api.spoonacular.com/recipes/random?apiKey=e0c6235e9e9448a9acc247fb4264294b&&number=10").then(response => {
                this.recipes = response.data;
                console.log(response.data);
            });*/

            

        },
}
</script>

<style>

</style>