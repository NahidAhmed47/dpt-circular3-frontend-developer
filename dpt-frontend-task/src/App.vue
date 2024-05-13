<template>
 <HeaderNav />
</template>

<script>
import HeaderNav from "./components/shared/HeaderNav.vue";
import "./assets/style.css";

export default {
 name: "App",
 components: {
  HeaderNav,
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
