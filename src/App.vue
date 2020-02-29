<template>
  <div id="app">
    <navComponent></navComponent>
    <router-view />
  </div>
</template>

<script>
import navComponent from "./components/navComponent";
export default {
  name: "App",
  components: {
    navComponent
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}
</style>
