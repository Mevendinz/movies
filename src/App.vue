<template>
  <div id="app">
    <navComponent></navComponent>
    <router-view />
    <footerComponent></footerComponent>
  </div>
</template>

<script>
import navComponent from "./components/navComponent";
import footerComponent from "./components/footerComponent";

export default {
  name: "App",
  components: {
    navComponent,
    footerComponent
  }
};
</script>

<style>
#app {
  display: block;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 20px;
}

::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 20px;
}

::-webkit-scrollbar-thumb:hover {
  background: lightcyan;
}
</style>
