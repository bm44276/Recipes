<template>
  <div>
     <HomeNavigation></HomeNavigation>

    <div class="col">
      <div><h1>{{recipe.title}}</h1></div>
      <div>
          <img v-bind:src="recipe.image" alt="">
      </div>
      <p>ready for {{recipe.readyInMinutes}} minutes</p>
      <p>  {{recipe.instructions}}</p>
      <p>Steps to be taken</p>
      <ul v-for="item in recipe.analyzedInstructions[0].steps" :key="item.id">
        <li>{{item.step}}</li>
          Ingredients
          <ul v-for="ingredient in item.ingredients" :key="ingredient.id">
            <li>{{ingredient.name}}</li>
          </ul>

          <br>

           Equipment
          <ul v-for="ingredient in item.equipment" :key="ingredient.id">
            <li>{{ingredient.name}}</li>
          </ul>
      </ul>
      
    </div>
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
               recipe:''
            }
        },
  mounted: function(){
  
    var url_string = window.location.href;
    var url = new URL(url_string);
    var recipeId = url.searchParams.get("RecipeId");
    
    console.log(recipeId);
    
          
     this.$http.get("https://api.spoonacular.com/recipes/"+recipeId+"/information?apiKey=e0c6235e9e9448a9acc247fb4264294b&includeNutrition=false").then(response => {
                this.recipe = response.data;
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

