<template>
 <HomeView />
</template>

<script>
import HomeView from "./views/HomeView.vue";
import "./assets/style.css";

export default {
 name: "App",
 components: {
  HomeView,
 },
};
</script>

<style>
#app {
 font-family: Avenir, Helvetica, Arial, sans-serif;
 -webkit-font-smoothing: antialiased;
 -moz-osx-font-smoothing: grayscale;
}
</style>
