<template>
  <div >
      <HomeNavigation></HomeNavigation>
 

       <!--<ul v-for="item in recipes.recipes" :key="item.id">
            <li>{{item.title}}
                <img :src="item.image" alt="">
                <a v-bind:href="'/RecipeDetails?RecipeId='+item.id">Details</a><br>
            </li>
           
        </ul>
-->
    <div class="wrapper">
    <div class="row">
       <div class="col">
            <h1>Lorem ipsum</h1>
            <p>Lorem ipsum dolor sit amet dolor sit amet lorem ipsum
            Lorem ipsum dolor sit amet dolor sit amet lorem ipsum
            Lorem ipsum dolor sit amet dolor sit amet lorem ipsum0</p>
            <button>Explore</button>
        </div>
        <div class="col">
        <div class="card card1">
        <h5>Lorem title</h5>
        </div>
        <div class="card card2">
        <h5>Lorem title</h5>
        </div>
        <div class="card card3">
        <h5>Lorem title</h5>
        </div>
        <div class="card card4">
        <h5>Lorem title</h5>
        </div>
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

<style scoped>
.wrapper{
    width:100%;
    overflow:hidden;
    height:100vh;
    background-image: linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url(../../public/bg.jpg);
    background-position: center;
    background-size: cover;
}
.row{
    display:flex;
    height:88%;
    align-items:center;
    margin-top:2em
}
.col{
    flex-basis:50%
}
h1{
    color: #fff;
    font-size:80px;
}

p{
color: #fff;
font-size: 12px;
line-height:15px;
margin:10px 3em;
}
button{
    width: 180px;
    color: #000;
    font-size: 12px;
    padding: 12px 0;
    background: #fff;
    border: 0;
    border-radius: 20px;
    outline:none;
    margin-top: 30px;

}
button:hover{
    background-color:#141414;
    color:#fff;
    transition: ease 0.5s ;
}
.card{
    width:200px;
    height:250px;
    display: inline-block;
    border-radius: 10px;
    padding: 15px 25px;
    box-sizing: border-box;
    margin: 20px 15px;
    background-position: center;
    background-size:cover;
    transition: transform 0.5s;
}
.card1{
    background-image: url(../../public/dish1.jpg);
}
.card2{
    background-image: url(../../public/dish3.jpg);
}
.card3{
    background-image: url(../../public/dish4.png);
}
.card4{
    background-image: url(../../public/dish2.jpg);
}
.card:hover{
    transform: translateY(-10px);
}
h5{
    color: #000;
    text-shadow: 0 0 5px #999;
    font-weight:600
}
</style>