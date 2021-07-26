<template>
    <div>

        <HomeNavigation></HomeNavigation>
         <div class="container">
        <h1 class="aboutUsHeaders text">======About Us======</h1>
        <div class="spaceDiv"></div>
        <div class="d-flex justify-content-center">
            <div class="aboutUsDiv aboutUsDivText shadow">
                <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit architecto repudiandae laudantium debitis alias nisi,
                       quam officiis dolores animi modi, iusto at eos, voluptate quas. Quia, alias perferendis? Maiores harum nisi unde
                       dignissimos numquam error. Officiis natus delectus aperiam explicabo, ad dignissimos mollitia ratione aut reiciendis,
                       neque nisi sint ullam distinctio perferendis labore numquam dolores. Vero fugit soluta, autem laboriosam delectus 
                       hic atque in qui officiis! Animi dolore ad explicabo consequuntur a? Qui labore ipsam quibusdam aut unde neque, 
                       totam magnam, esse repellendus repudiandae reprehenderit culpa vel quasi porro laudantium sunt? Aut hic tempora eaque 
                       optio debitis facilis.
                </p>
            </div>
            
            <div class="aboutUsDiv">
                <video autoplay muted loop id="myVideo" class="img-fluid">
                    <source src="../assets/video.mp4" type="video/mp4">
                  </video>
            </div>
        </div>
        

        <div class="spaceDiv"></div>


        <h2 class="aboutUsHeaders text">Our Team</h2>

        <div class="spaceDiv"></div>
      
        <div class="d-flex justify-content-around">
            
            <div> 
                <div class="flip-card">
                    <div class="flip-card-inner">
                      <div class="flip-card-front">
                        <img src="burger.jpg" alt="Avatar" style="width:300px;height:300px;">
                      </div>
                      <div class="flip-card-back">
                        <h1>Besmir Miftari</h1>
                        <p>Back end developer</p>
                      </div>
                    </div>
                  </div>
            </div>
            <div> 
                <div class="flip-card">
                    <div class="flip-card-inner">
                      <div class="flip-card-front">
                        <img src="burger.jpg" alt="Avatar" style="width:300px;height:300px;">
                      </div>
                      <div class="flip-card-back">
                        <h1>Marigona Kadriu</h1>
                        <p>Front end developer</p>
                      </div>
                    </div>
                  </div>
            </div>
            <div> 
                <div class="flip-card">
                    <div class="flip-card-inner">
                      <div class="flip-card-front">
                        <img src="burger.jpg" alt="Avatar" style="width:300px;height:300px;">
                      </div>
                      <div class="flip-card-back">
                        <h1>Jon Morina</h1>
                        <p>Full stack developer</p>
                      </div>
                    </div>
                  </div>
            </div>
      
        </div>
        <div>

        </div>

        <div class="spaceDiv"></div>

        <div>
            <p class="aboutUsHeaders text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, alias?
                 Nulla non impedit voluptatibus labore nam sequi possimus mollitia magni 
                 temporibus sunt odio quidem consectetur, recusandae quae minus hic blanditiis ex dolorem
                  aspernatur! Deserunt dicta dolorem, impedit id vitae quod harum a enim recusandae laborum,
                   sint modi perspiciatis eligendi ad minus facilis vel culpa ullam repellat? Laudantium
                    illo ipsum aliquid eum blanditiis dolor iusto nisi itaque atque dicta accusantium, 
                    ducimus ipsam fuga cupiditate cum vero velit libero aperiam aut a accusamus nulla totam
                     officiis esse. Dignissimos rerum facere sint asperiores, eligendi omnis dicta a quia.
                      Libero, ipsam explicabo accusamus consectetur saepe, amet tempore sapiente fugit nisi
                       exercitationem eligendi sed quisquam ipsum porro nostrum omnis enim dolores quam deserunt
                        officiis voluptate provident maxime, deleniti laudantium! Corporis aspernatur aut libero,
                         nisi qui temporibus, reprehenderit soluta, doloribus dolor vero ut perferendis. Repellat
                          cum ut nulla, reiciendis dolore reprehenderit modi eaque eos dolorum nam vitae tempora 
                          sapiente, alias iure rerum corrupti voluptate! Deleniti ullam, ex quasi delectus molestiae
                           at neque quo quaerat. Cum maiores eveniet inventore nulla necessitatibus atque expedita
                            nesciunt amet, doloremque tenetur autem quam ipsam eius eum. Cumque voluptate illo nobis
                             minima inventore aliquam, sit tempore, sed modi ipsum natus ut iure?
            </p>
        </div>
        
    </div>
    </div>
</template>

<script>
import HomeNavigation from "../components/Navigation.vue"
    export default {
         components: {
            HomeNavigation
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
    background-color: #414141;
    color: white;
    transform: rotateY(180deg);
  }

  .spaceDiv{
      margin-top: 100px;
  }
</style>