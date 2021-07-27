<template>
    <div>

        <HomeNavigation></HomeNavigation>
         <div class="container">
            <div class="spaceDiv"></div>
        <h1 class="aboutUsHeaders text zoomin"><span>About Us</span></h1>
        <div class="spaceDiv"></div>
        <div class="d-flex justify-content-center">
            <div class="aboutUsDiv aboutUsDivText shadow">
                <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit architecto repudiandae laudantium debitis alias nisi,
                       quam officiis dolores animi modi, iusto at eos, voluptate quas. Quia, alias perferendis? Maiores harum nisi unde
                       dignissimos numquam error. Officiis natus delectus aperiam explicabo, ad dignissimos mollitia ratione aut reiciendis,
                       neque nisi sint ullam distinctio perferendis labore numquam dolores. Vero fugit soluta, autem laboriosam delectus 
                       hic atque in qui officiis! Animi dolore ad explicabo.
                </p>

              
            </div>
            
            <div class="aboutUsDiv">
                <video autoplay muted loop id="myVideo" class="img-fluid">
                    <source src="../assets/video.mp4" type="video/mp4">
                  </video>
            </div>
        </div>
        

        <div class="spaceDiv"></div>


        <h2 class="aboutUsHeaders text zoomin">Our Team</h2>

        <div class="spaceDiv"></div>
      
        <div class="d-flex justify-content-around">
            
            <div> 
                <div class="flip-card">
                    <div class="flip-card-inner">
                      <div class="flip-card-front">
                        <img src="../assets/besmir.jpg" alt="Avatar" style="width:300px;height:300px;">
                      </div>
                      <div class="flip-card-back px-2" >
                        <h2 class="mt-2">Besmir Miftari</h2>
                        <p>Back-end developer</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quidem temporibus placeat recusandae blanditiis doloribus?</p>
                      </div>
                    </div>
                  </div>
            </div>
            <div> 
                <div class="flip-card">
                    <div class="flip-card-inner">
                      <div class="flip-card-front">
                        <img src="../assets/marigona.jpg" alt="Avatar" style="width:300px;height:300px;">
                      </div>
                      <div class="flip-card-back px-2" >
                        <h2 class="mt-2">Marigona Kadriu</h2>
                        <p>Front-end developer</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quidem temporibus placeat recusandae blanditiis doloribus?</p>
                      </div>
                    </div>
                  </div>
            </div>
            <div> 
                <div class="flip-card">
                    <div class="flip-card-inner">
                      <div class="flip-card-front">
                        <img src="../assets/joni.jpg" alt="Avatar" style="width:300px;height:300px;">
                      </div>
                      <div class="flip-card-back px-2" >
                        <h2 class="mt-2">Jon Morina</h2>
                        <p>Full stack developer</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quidem temporibus placeat recusandae blanditiis doloribus?</p>
                      </div>
                    </div>
                  </div>
            </div>
      
        </div>
        <div>

        </div>

        <div class="spaceDiv"></div>
        <h3 class="text-white" style="letter-spacing:0.2em;">We ensure quality!</h3>
        <div class="container my-2">
         
            <p class="aboutUsHeaders text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, alias?
                 Nulla non impedit voluptatibus labore nam sequi possimus mollitia magni 
                 temporibus sunt odio quidem consectetur, recusandae quae minus hic blanditiis ex dolorem
                  aspernatur! Deserunt dicta dolorem, impedit id vitae quod harum a enim recusandae laborum,
                   sint modi perspiciatis eligendi ad minus facilis vel culpa ullam repellat? Laudantium
                    illo ipsum aliquid eum blanditiis dolor iusto nisi itaque atque dicta accusantium, 
                    ducimus ipsam fuga cupiditate cum vero velit libero aperiam aut a accusamus nulla totam
                     officiis esse.
            </p>

            
        </div>
        
    </div>
    <Footer></Footer>
    </div>
</template>

<script>
import HomeNavigation from "../components/Navigation.vue"
import Footer from "../components/Footer.vue"
    export default {
         components: {
            HomeNavigation,
            Footer
        }
    }
</script>

<style scoped>
.aboutUsDiv{
    width: 50%;
    margin: 10px;
}

.aboutUsHeaders{
    text-align: center;
}

.text{
    color: white;
}

.aboutUsDivText{
    padding: 10px;
   
   
}

.shadow {
     -webkit-box-shadow: 0 8px 6px -6px rgb(255, 255, 255);
     -moz-box-shadow: 0 8px 6px -6px rgb(255, 255, 255);
      box-shadow: 0 8px 6px -6px rgb(255, 255, 255);
  }





  .flip-card {
    background-color: transparent;
    width: 300px;
    height: 300px;
    border: 1px solid #f1f1f1;
    perspective: 1000px; /* Remove this if you don't want the 3D effect */
  }
  
  /* This container is needed to position the front and back side */
  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }
  
  /* Do an horizontal flip when you move the mouse over the flip box container */
  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }
  
  /* Position the front and back side */
  .flip-card-front, .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
  }
  
  /* Style the front side (fallback if image is missing) */
  .flip-card-front {
    background-color: #bbb;
    color: black;
  }
  
  /* Style the back side */
  .flip-card-back {
    background-image: linear-gradient(to right top, #414141, #48444c, #534754, #604859, #6f495b);
    color: white;
    transform: rotateY(180deg);
    
  }

  .spaceDiv{
      margin-top: 100px;
  }

  h1 {
   width: 100%; 
   text-align: center; 
   border-bottom: 1px solid rgb(250, 250, 250); 
   line-height: 0.1em;
   margin: 10px 0 20px; 
} 

h1 span { 
    background: #414141; 
    padding:0 10px; 
}

.zoomin:hover
{
-webkit-transform: scale(1.1);
-ms-transform: scale(1.1);
transform: scale(1.1);
cursor:pointer;
}



</style>