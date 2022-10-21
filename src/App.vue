<script setup>
import HelloVue from '@/components/HelloVue.vue'

</script>

<template>
  <div class="row">
    <div class="col-3"><HelloVue></HelloVue> </div>
    <div class="col-6">
      <!--http://localhost:5174/-->
     <router-link to="/">Home</router-link> |    <!--<a href="...">Home</a> -->
      <!--http://localhost:5174/about-->
      <router-link to="/about">About</router-link> | 
      <!--http://localhost:5174/todo-->
      <router-link to="/todo">Todo</router-link> | 
      <hr />
      <router-view></router-view>
     
    </div>
    <div class="col-3"></div>
  </div>

 

</template>

<style scoped>

</style>
