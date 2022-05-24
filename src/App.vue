<template>
  <div id="app" class="container-fluid mt-3">
    <div class="jumbotron">
    
      <navBar/>
      <router-view></router-view>
      <!-- <formComponent/> -->
      
    </div>
  </div>
</template>

<script>

/* import formComponent from './components/formComponent.vue' */
import navBar from './components/navBar.vue'

export default {
  name: 'App',
  components: {
   navBar,
   /* formComponent
    */
  }
}
</script>

<style>
#app {
  
}
</style>
