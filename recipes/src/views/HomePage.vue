<template>
  <div >
      <HomeNavigation></HomeNavigation>
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
        <div class="scroll-down"></div>
    </div>
      <!--  <ul v-for="item in recipes.recipes" :key="item.id">
            <li>{{item.title}}
                <img :src="item.image" alt="">
                <a v-bind:href="'/RecipeDetails?RecipeId='+item.id">Details</a><br>
            </li>
           
        </ul>-->

        <div class="shadow py-3">
            <video height="500" loop="true" autoplay="autoplay"  id="vid" muted style="text-align: center; border-radius:20px">
            <source type="video/mp4" src="../assets/AppleAndPizzaAnimation.mp4">
   
            </video>
        </div>

        <div class="container-fluid mt-5 mb-5">
            <h1 class="text-white" style="letter-spacing:0.2em; font-family:verdana; font-size:35px">Our Recipes</h1>
            <div class="row justify-content-center">
                <div class="view view-first" v-for="item in recipes.recipes" :key="item.id" >
                    <div class="center">
                        <img :src="item.image" alt=""> 
                        <div class="mask">  
                            <div>
                                <h2>{{item.title}}</h2>  
                            <a v-bind:href="'/RecipeDetails?RecipeId='+item.id">Details</a>
                            </div>
                            
                        </div>     
                    </div>        
                </div>  
            </div>
        </div>
        <Footer></Footer>
  </div>
</template>
<script>
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
</script>

<script>
import HomeNavigation from "../components/Navigation.vue"
import Footer from "../components/Footer.vue"
export default {
      components: {
            HomeNavigation,
            Footer
        },
          data() {
            return {
               //data that is used in the components
              recipes:''
            }
        },
           mounted: function () {
            
           this.$http.get("https://api.spoonacular.com/recipes/complexSearch?apiKey=43f565ab010744c48b2fdd02bf4d4988&query=&number=20").then(response => {
                this.recipes = response.data;
                console.log(response.data);
            });
              
            this.$http.get("https://api.spoonacular.com/recipes/random?apiKey=43f565ab010744c48b2fdd02bf4d4988&&number=12").then(response => {
                this.recipes = response.data;
                console.log(response.data);
            });

            

        },
}
</script>

<style scoped>
body{background-color:#000; overflow:hidden;}

.scroll-down {
	position: absolute;
	left: 50%;
	bottom: 10px;
	display: block;
	text-align: center;
	font-size: 20px;
	z-index: 100;
	text-decoration: none;
	text-shadow: 0;
  width: 13px;
  height: 13px;
  border-bottom: 2px solid #fff;
  border-right: 2px solid #fff;
  z-index: 9;
  left: 50%;
  -webkit-transform: translate(-50%, 0%) rotate(45deg);
  -moz-transform: translate(-50%, 0%) rotate(45deg);
  transform: translate(-50%, 0%) rotate(45deg);
	-webkit-animation: fade_move_down 4s ease-in-out infinite;
	-moz-animation:    fade_move_down 4s ease-in-out infinite;
	animation:         fade_move_down 4s ease-in-out infinite;
}


/*animated scroll arrow animation*/
@-webkit-keyframes fade_move_down {
  0%   { -webkit-transform:translate(0,-10px) rotate(45deg); opacity: 0;  }
  50%  { opacity: 1;  }
  100% { -webkit-transform:translate(0,10px) rotate(45deg); opacity: 0; }
}
@-moz-keyframes fade_move_down {
  0%   { -moz-transform:translate(0,-10px) rotate(45deg); opacity: 0;  }
  50%  { opacity: 1;  }
  100% { -moz-transform:translate(0,10px) rotate(45deg); opacity: 0; }
}
@keyframes fade_move_down {
  0%   { transform:translate(0,-10px) rotate(45deg); opacity: 0;  }
  50%  { opacity: 1;  }
  100% { transform:translate(0,10px) rotate(45deg); opacity: 0; }
}
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


.view {
    width: 400px;
    height: 300px;
    margin: 10px;
    overflow: hidden;
    position: relative;
    text-align: center;
    box-shadow: 1px 1px 2px #e6e6e6;
    cursor: default;
}
.view .mask, .view .content {
    width: 400px;
    height: 300px;
    position: absolute;
    overflow: hidden;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}
.view img {
    display: block;
    position: relative
}
.view h2 {
    text-transform: uppercase;
    color: #fff;
    text-align: center;
    position: relative;
    font-size: 17px;
    padding: 10px;
    background: rgba(0, 0, 0, 0.8);
}
.view p {
    font-family: Georgia, serif;
    font-style: italic;
    font-size: 12px;
    position: relative;
    color: #fff;
    padding: 20px 0;
    margin: 20px 0;
    text-align: center
}
.view a.info {
    display: inline-block;
    text-decoration: none;
    padding: 7px 14px;
    background: #000;
    color: #fff;
    text-transform: uppercase;
    box-shadow: 0 0 1px #000;
    margin: 40px 0;
}
.view a.info:hover {
    box-shadow: 0 0 5px #000
}
.view-first img { 
	transform: scaleY(1);
	transition: all 0.7s ease-in-out;
}
.view-first .mask { 
    background-color: rgba(255, 231, 179, 0.3); 
    transition: all 0.5s linear;
    opacity: 0;
}	
.view-first h2{
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    background: transparent;
    margin: 20px 40px 0px 40px;
    transform: scale(0);
    color: #333;
    transition: all 0.5s linear;
    opacity: 0;
}
.view-first p {
    color: #333;
    opacity: 0;
    transform: scale(0);
    transition: all 0.5s linear;
    margin: 40px 0;
}
.view-first a.info { 
    opacity: 0;
    transform: scale(0);
    transition: all 0.5s linear;
}
.view-first img { 
	transform: scaleY(1);
	transition: all 0.7s ease-in-out;
}
.view-first .mask { 
    background:rgba(255, 255, 255, 0.219) ;
    transition: all 0.5s linear;
    opacity: 0;
}	
.view-first h2{
    border-bottom: 1px solid #525252;
    background: transparent;
    margin: 20px 40px 0px 40px;
    transform: scale(0);
    color: rgb(32, 32, 32);
    transition: all 0.5s linear;
    opacity: 0;
}
.view-first p {
    color: #333;
    opacity: 0;
    transform: scale(0);
    transition: all 0.5s linear;
}
.view-first a.info { 
    opacity: 0;
    transform: scale(0);
    transition: all 0.5s linear;
    margin: 20px 0;
}
.mask a{
    background: #414141;
    border: 2px #444444 solid;
    color: white;
    text-decoration: none;
    margin: 20px 20px;
    padding: 10px;
    box-shadow: 4px 4px 7px #444444;
    transition: all 0.2s linear;
}

.view-first:hover img { 
	transform: scale(10);
    opacity: 0.5;
}
.view-first:hover .mask { 
	opacity: 1;
}																			 
.view-first:hover h2,
.view-first:hover p,
.view-first:hover a.info{ 
    transform: scale(1);
    opacity: 1;
}
.mask a, .mask h2{
    margin: 20px 0 !important;
}
.mask a:hover{
    background-color: #525252;
    border: 1px solid #525252;
    letter-spacing: 1px;
}
.mask h2{
    width: 90% !important;
    margin: 20px auto !important;
    font-size: 25px;
    font-weight: 600;
    color: white;
}

.shadow {
     -webkit-box-shadow: 0 8px 6px -6px rgb(255, 255, 255);
     -moz-box-shadow: 0 8px 6px -6px rgb(255, 255, 255);
      box-shadow: 0 8px 6px -6px rgb(255, 255, 255);
  }

  .mySlides {display: none;}
img {vertical-align: middle;}

/* Slideshow container */
.slideshow-container {
  max-width: 1000px;
  position: relative;
  margin: auto;
}

/* Caption text */
.text {
  color: #f2f2f2;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
}

/* Number text (1/3 etc) */
.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

/* The dots/bullets/indicators */
.dot {
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active {
  background-color: #717171;
}

/* Fading animation */
.fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: 1.5s;
  animation-name: fade;
  animation-duration: 1.5s;
}

@-webkit-keyframes fade {
  from {opacity: .4} 
  to {opacity: 1}
}

@keyframes fade {
  from {opacity: .4} 
  to {opacity: 1}
}

/* On smaller screens, decrease text size */
@media only screen and (max-width: 300px) {
  .text {font-size: 11px}
}
</style>

