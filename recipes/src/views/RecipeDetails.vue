<template>
  <div>
     <HomeNavigation></HomeNavigation>

   <!-- <div class="col">
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
      
    </div>-->

    <div class="container">
        

        <div class="d-flex justify-content-around">
            <div>

               <img v-bind:src="recipe.image" alt="" height="400px"  width="400px" class="img-fluid">
            </div>
          
            
            <div>
                <h2 class="text"> {{recipe.title}}</h2>
                <p class="text">Made for {{recipe.readyInMinutes}} people</p>
                <p class="text">Estimated time {{recipe.readyInMinutes}} minutes</p>
            </div>
        </div>
        
        <div class="spaceDiv"></div>
        <div>
            <p class="text" style="text-align: center;">{{recipe.instructions}}</p>
        </div>

        <div class="d-flex justify-content-center">
            <div class="text">
               <h3>Steps</h3>
               <ul v-for="item in recipe.analyzedInstructions[0].steps" :key="item.id">
                   <li>{{item.step}}</li>
               </ul>
            </div>
            
            <div  class="text">
                <h3>Ingrediants</h3>

                  <ul>
                  <template v-for="item in recipe.analyzedInstructions[0].steps">
                    <li v-for="ingredient in item.ingredients" :key="ingredient.id">
                      {{ingredient.name}}
                    </li>
                  </template>
                  </ul>

             </div>

             <div  class="text">
                <h3>Equipmennt</h3>
                 <ul>
                  <template v-for="item in recipe.analyzedInstructions[0].steps">
                    <li v-for="equipment in item.equipment" :key="equipment.id">
                      {{equipment.name}}
                    </li>
                  </template>
                  </ul>
             </div>

        </div>


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
  
ul li{
    list-style-type: none;
    text-decoration: none;
   
 
}

.text{
    color: white;
}

.rowSpace{
    margin-right:20px;
}

.spaceDiv{
    margin-top: 80px;
}

</style>

