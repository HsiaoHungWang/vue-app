<script setup>
import { ref } from 'vue';

const message = ref('')
</script>

<template>
  <input type="text" v-model="message" />
  <h3>Hello,{{ message }}!!</h3>
  
</template>

<style scoped>
 h3{
  color:blue
 }
</style>