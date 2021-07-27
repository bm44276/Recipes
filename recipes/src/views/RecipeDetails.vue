<template>
  <div>
     <HomeNavigation></HomeNavigation>

   <!--<div class="col">
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
 <h1 class="text-white my-3">Details</h1>
    <div class="container my-3 bg" >
        
     
        <div class="d-flex justify-content-center">
            <div>

               <img v-bind:src="recipe.image" alt="" height="400px"  width="400px" class="img-fluid m-5">
            </div>
          
            
            <div>
                <h2 class="text-black my-5" style="font-weight:600; font-style:underline">♦ {{recipe.title}}</h2>
                <p class="text-black para">♣ Made for {{recipe.readyInMinutes}} people</p>
                <p class="text-black para">♣ Estimated time {{recipe.readyInMinutes}} minutes</p>
            </div>
        </div>
        
        <div class="spaceDiv"></div>
        <h2 class="" style="font-family: verdana; letter-spacing: 0.2em">Instructions</h2>
        <div class="container d-flex">
            <p class="text text1 col-md-8 mx-3 p-3" style="text-align: center; "> {{recipe.instructions}}</p>

            <div class="text text4 col-md-3">
                <h3>Equipment</h3>
                 <ul>
                  <template v-for="item in recipe.analyzedInstructions[0].steps">
                    <li v-for="equipment in item.equipment" :key="equipment.id">
                      {{equipment.name}}
                    </li>
                  </template>
                  </ul>
             </div>
        </div>

        <div class="d-flex justify-content-center">
            <div class="text text2 col-md-7 mx-4">
               <h3 class=" p-3">Steps</h3>
               <ul v-for="item in recipe.analyzedInstructions[0].steps" :key="item.id">
                   <li>{{item.step}}</li>
               </ul>
            </div>
            
            <div  class="text text3 col-md-3">
                <h3 class="p-3">Ingredients</h3>

                  <ul>
                  <template v-for="item in recipe.analyzedInstructions[0].steps">
                    <li v-for="ingredient in item.ingredients" :key="ingredient.id">
                      {{ingredient.name}}
                    </li>
                  </template>
                  </ul>

             </div>

             

        </div>


    </div>



    <Footer></Footer>
  </div>
</template>

<script>
import HomeNavigation from "../components/Navigation.vue";
import Footer from "../components/Footer.vue"
export default {

  components: {
            HomeNavigation,
            Footer
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
    
          
    this.$http.get("https://api.spoonacular.com/recipes/"+recipeId+"/information?apiKey=43f565ab010744c48b2fdd02bf4d4988&includeNutrition=false").then(response => {
                this.recipe = response.data;
                console.log(response.data);
      });   

  }
}

</script>

<style scoped>
  .para{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: 600;

  }
ul li{
    list-style-type: none;
    text-decoration: none;
   
 
}

.text{
    color: black;
   background: rgba( 255, 255, 255, 0.25 );
box-shadow: 0 8px 32px 0 rgba(20, 20, 26, 0.37);
backdrop-filter: blur( 4px );
-webkit-backdrop-filter: blur( 4px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
}

.rowSpace{
    margin-right:20px;
}

.spaceDiv{
    margin-top: 80px;
}
.img-fluid{
  box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
-webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
}

.bg{

background: #000000;
background: radial-gradient(ellipse farthest-side at top left, #000000 0%, #cccccc 80%);
background: -webkit-radial-gradient(ellipse farthest-side at top left, #000000 0%, #cccccc 80%);
background: -moz-radial-gradient(ellipse farthest-side at top left, #000000 0%, #cccccc 80%);
border-radius: 30px;
}

</style>

