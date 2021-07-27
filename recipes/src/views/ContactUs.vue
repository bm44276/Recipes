<template>
    <div class="contactUs">
        <HomeNavigation></HomeNavigation>
        <br><br>
        <div class="backgroundVideo">
            <video src="../assets/salt.mp4" autoplay muted loop></video>
        </div>
        <div id="wrap">
            <h1>Send a Message!</h1>
            <br><br><br>
            <div class="form-wrap">
                <form>
                    <p>Hello John Doe,</p>
                    <label for="email">Your Message:</label>
                    <textarea name="message" id="message" value="Your Message"></textarea>
                    <p>Best,</p>
                    <div class="inputDesign"> 
                        <input type="text" name="name" id="email">
                       <div class="underline">

                       </div>
                        <label for="name">Name:</label>
                    </div>
                    

                    <input type="submit" name="submit" value="Send">
                </form>
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

<style>
.contactUs{
    width: 100%;
}
        .backgroundVideo video{
            object-fit: cover;
            width: 100vw;
            height: 100vh;
            position: fixed;
            top: 0;
            left: 0;
            z-index: 0;
            opacity: 0.3;
        }

     .contactUs, .contactUs.div, .contactUs.h1, .contactUs.h2, .contactUs form,
      .contactUs.fieldset, .contactUs input, .contactUs textarea, .contactUs.p{
          margin: 0;
          padding: 0;
          border: 0;
          outline: none;
     }

     .contactUs{
          font-family: tahoma;
          z-index: 2;
     }
     .contactUs p{
            font-size: 24px;
     }
     #wrap{
         width: 540px;
         margin: 20px auto;
         height: 1000px;
         z-index: 2;
     }
    .contactUs h1{
         margin-bottom: 15px;
         text-align: center;
         font-size: 45px;
         font-family: tahoma;
         color: rgb(245, 245, 245);
         font-weight: bold;
         letter-spacing: 3px;
         word-spacing: 2px;
         animation: animate 2s linear;
         z-index: 2;
         position: relative;
         text-shadow: 5px 12px 4px rgb(0, 0, 0);
     }

   @keyframes animate {
       0%{
           width: 82%;
       }
       70%, 90%{
           width: 100%;
       }
   }
  .form-wrap{
      overflow: hidden;
      height: 447px;
      position: relative;
      top:0px;
      transition: all 1s ease-in-out .3s;
  }
  .form-wrap::before{
        content: "";
        position: absolute;
        bottom: 128px;
        left:0px;
        background: url('../assets/before.png');
        width:530px;
        height: 317px;
  }
  .form-wrap::after{
        content: "";
        position: absolute;
        bottom: 0px;
        left:0px;
        background: url('../assets/after.png');
        width:530px;
        height: 259px;
  }

  .form-wrap.hide::before, .form-wrap.hide::after{
       display: none;
  }

  .form-wrap:hover{
      height: 777px;
      top: -200px;
  }
 .form-wrap form{
        color: white;
        background: #564e68;
        position: relative;
        top: 200px;
        overflow: hidden;
        height: 200px; 
        width: 400px;
        margin: 0px auto;
        padding: 20px;
        border: 1px solid #494358;
        border-right: 3px;
        transition: all 1s ease-in-out .3s;
        border-radius: 10px;
  }
   .form-wrap:hover form{
      height: 530px;
      box-shadow: 8px -7px 27px black;
  }
  .form-wrap label{
      margin: 11px 20px 0 0;
      font-size: 15px;
      color: gray;
  }
 .form-wrap textarea{
      font: 14px normal uppercase, arial, serif;
      color: black;
      background: rgb(255, 255, 255);
      width:350px;
      height: 37px;
      padding: 0px 10px;
      margin: 0 0 10px 0;
      border: 1px solid #f8f5f1;
      border-radius: 5px;
      padding: 5px;
  }

 .form-wrap textarea{
      height: 80px;
      padding-top: 14px;
      padding: 5px;
  }

.contactUs label{
    color: white;
    margin-bottom: 10px;
}

  .form-wrap input[type=submit]{
    position: relative;
    font-family: tahoma;
    font-size: 24px;
    color: rgb(170, 170, 170);
    width: 100%;
    text-align: center;
    opacity: 0;
    background: rgb(67, 62, 78);
    cursor: pointer;
    letter-spacing: 2px;
    border-radius: 3px;
    transition: opacity 0.7s ease-in-out 1s;
  }
  .form-wrap:hover input[type=submit]{
      z-index: 1;
      opacity: 1;
      transition: opacity 0.7s ease-in-out 1.3s;
      border: 1px solid rgb(60, 55, 70);
      margin-bottom: 30px;
  }
 .contactUs input[type=submit]:hover{
    color: white;
  }
  .inputDesign{
        position: relative;
        width: 100%;
        height: 40px;
        margin-bottom: 20px;
  }
  .inputDesign input{
      height: 100%;
      width: 100%;
      border: none;
      font-size: 17px;
      border-bottom: 2px solid silver;
      background: none;
  }
  .inputDesign input:focus ~ label{
      transform: translateY(-20px);
      font-size: 16px;
      color: white;
  }
  .inputDesign label{
      position: absolute;
      bottom: 0px;
      left: 0px;
      color: grey;
      pointer-events: none;
      transition: all 0.3s ease;
  }
  .inputDesign .underline{
      position: absolute;
      bottom: 0px;
      height: 2px;
      width: 100%;
      background: rgb(29, 30, 44);
  }
  .inputDesign .underline::before{
        content: "";
        position: absolute;
        height: 100%;
        width: 100%;
        background: white;
        transform: scaleX(0);
        transition: transform 0.3s ease;
  }
  .inputDesign input:focus ~ .underline::before{
        transform: scaleX(1);
  }
</style>