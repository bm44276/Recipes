<template>
    <div class="header">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand text-white" href="/index">Recipere</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link text-white" href="/index">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-white" href="/Map">Map</a>
      </li>
     
      <li class="nav-item">
        <a class="nav-link text-white" href="/AboutUs">About Us</a>
      </li>

      <li class="nav-item">
        <a class="nav-link text-white" href="/ContactUs">Contact Us</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-white" href="/Testimonials">Testimonials</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" v-model="searchInput">
        <a v-bind:href="'/SearchResults?search=' +this.searchInput" class="btn but btn-light my-2 my-sm-0">Search</a>
    </form>
  </div>
</nav>
    </div>
</template>

<script>
    export default {
      data(){
      return {
        searchInput:""
      }
      },
       methods:{
         search: function() {
           console.log(this.searchInput);
           window.location.href = "/SearchResults?search="+this.searchInput;
         }
       }
    }
</script>

<style scoped>

nav{
  background-color: #6F495B !important;
  color: white !important;
  z-index: 10;
}

@import url('https://fonts.googleapis.com/css2?family=STIX+Two+Math');

.nav-link{
  font-family: 'STIX Two Math', serif;
  font-size:18px
}
.nav-link:hover{
  background-color:#8d6f7dcb;
  padding: 5px 15px;
  border-radius: 20px;
}
@import url('https://fonts.googleapis.com/css2?family=Zen+Tokyo+Zoo&display=swap');
.navbar-brand{
font-family: 'Zen Tokyo Zoo', cursive;
font-size: 35px;
letter-spacing: 0.1em;
}
.but{
    color: #000;
    font-size: 12px;
    font-weight: bold;
    letter-spacing: 2px;
    padding: 12px 0;
    background: #fff;
    border: none;
    outline:none;
    position: relative;
    z-index: 1;
    width: 80px;
}
.but:hover{
  color: white;
}

.but::before{
  transition: 0.5s all ease;
  position: absolute;
  top: 0;
  left: 50%;
  right: 50%;
  bottom: 0;
  opacity: 0;
  content: "";
  background-color: #29091d;
  color: white;
}
.but:hover::before{
  transition: 0.5s all ease;
  left: 0;
  right: 0;
  opacity: 1;
  z-index: -1;
  color: white;
}
</style>