<template>
  <div>
    <NavBar />
    <router-view/>
  </div>
</template>

<script setup>
import NavBar from '@/components/global/navBar.cmp.vue'

</script>


<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
