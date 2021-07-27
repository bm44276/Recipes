<template>
    <div class="header">
      <nav class="navbar">

      <a class="navbar-brand text-white" href="/index">Recipere</a>
       <a class="nav-link text-white" href="/index">Home</a>
       <a class="nav-link text-white" href="/Map">Map</a>
          <a class="nav-link text-white" href="/AboutUs">About Us</a>
           <a class="nav-link text-white" href="/ContactUs">Contact Us</a>
            <a class="nav-link text-white" href="/Testimonials">Testimonials</a>
      <form class="form-inline">
      
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" v-model="searchInput">
        
        <a v-bind:href="'/SearchResults?search=' +this.searchInput" class="btn btn-light my-2 my-sm-0">Search</a>
      </form>
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
</style>