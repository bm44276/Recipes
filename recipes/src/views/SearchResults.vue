<template>
  <div>
     <HomeNavigation></HomeNavigation>

      <ul v-for="item in recipes.results" :key="item.id">
            <li>{{item.title}}
                <img :src="item.image" alt="">
                <a v-bind:href="'/RecipeDetails?RecipeId='+item.id">Details</a><br>
            </li>
           
        </ul>

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
               recipes:[]
            }
        },
  mounted: function(){
  
    var url_string = window.location.href;
    var url = new URL(url_string);
    var search = url.searchParams.get("search");
    
    console.log(search);
    
          
     this.$http.get("https://api.spoonacular.com/recipes/complexSearch?apiKey=e0c6235e9e9448a9acc247fb4264294b&query="+search+"&number=10").then(response => {
                this.recipes = response.data;
                console.log(response.data);
      });      

  }
}

</script>

<style>
  .row{
    display: flex;
  }

  .col{
    display: felx;
    flex-direction: column;
  }
</style>

