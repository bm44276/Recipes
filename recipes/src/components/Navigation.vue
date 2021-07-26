<template>
    <div class="header">
      <nav class="navbar">

      <a class="navbar-brand text-white" href="/index">Home</a>
       <a class="nav-link text-white" href="/Map">Map</a>
          <a class="nav-link text-white" href="/AboutUs">About Us</a>
           <a class="nav-link text-white" href="/ContactUs">Contact Us</a>
      <form class="form-inline">
      
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" v-model="searchInput">
        
        <a v-bind:href="'/SearchResults?search=' +this.searchInput" class="btn btn-outline-success my-2 my-sm-0">Search</a>
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
}
</style>