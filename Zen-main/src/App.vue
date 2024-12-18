<script>
import { RouterView,RouterLink } from 'vue-router';
</script>
<template>
    <router-view v-slot="{ Component }">
  <transition name="fade">
    <component :is="Component" />
  </transition>
</router-view>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;250;300;400;500;600;700;800&display=swap');
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: 'Poppins', sans-serif;
}
body{
  /* background: rgb(220, 243, 250) 100%;*/
  background: linear-gradient(#f6f1fb ,#b9e8fc) ;
}
.fade-enter-active,.fade-leave-active{
  transition: opacity 0.4s;
}
.fade-enter-from,.fade-leave-to{
  opacity: 0;
}
</style>