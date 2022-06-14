<template>
  <!--  <nav>-->
  <!--    <router-link to="/">Home</router-link>-->
  <!--    <router-link to="/about">About</router-link>-->
  <!--  </nav>-->
  <div id="app">
    <Navbar />
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>
<script>
import Navbar from './components/Navbar'
export default {
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
@import "~materialize-css/dist/css/materialize.min.css";
</style>
