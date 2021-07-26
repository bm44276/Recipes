<template>
    <div class="contactUs">
        <HomeNavigation></HomeNavigation>
        <br><br>
        <div id="wrap">
            <h1>Send a Message!</h1>
            <br><br><br>
            <div class="form-wrap">
                <form>
                    <p>Hello John Doe,</p>
                    <label for="email">Your Message:</label>
                    <textarea name="message" id="message" value="Your Message"></textarea>
                    <p>Best,</p>
                    <label for="name">Name:</label>
                    <input type="text" name="name" value="Name" id="email">

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

     .contactUs, .contactUs.div, .contactUs.h1, .contactUs.h2, .contactUs form,
      .contactUs.fieldset, .contactUs input, .contactUs textarea, .contactUs.p{
          margin: 0;
          padding: 0;
          border: 0;
          outline: none;
     }

     .contactUs{
          font-family: tahoma;
     }
     .contactUs p{
            font-size: 24px;
     }
     #wrap{
         width: 540px;
         margin: 20px auto;
         height: 1000px;
     }
    .contactUs h1{
         margin-bottom: 15px;
         text-align: center;
         font-size: 45px;
         font-family: tahoma;
         color: white;
         font-weight: bold;
         letter-spacing: 2px;
         animation: animate 2s linear;
     }

   @keyframes animate {
       0%{
           width: 75%;
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
      box-shadow: 9px 9px 7px #6f6e75;
  }
  .form-wrap label{
      margin: 11px 20px 0 0;
      font-size: 15px;
      color: gray;
      text-transform: uppercase;
  }
 .form-wrap input[type=text], textarea{
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
 .contactUs textarea:focus, input[type=text]:focus{
      background: white;
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
</style>