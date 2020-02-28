<template>
  <div id="app">
    <nav>
      <router-link to="/list">
        <button class="left-button">List</button>
      </router-link>
      <router-link to="/grid">
        <button>Grid</button>
      </router-link>
      <button class="right-button">Add</button>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {}
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

button {
  font-weight: bold;
  background-color: grey;
  padding: 15px;
  cursor: pointer;
  border: none;
}

button:hover {
  background-color: lightcyan;
}

button:active {
  background-color: cyan;
}

.left-button {
  border-radius: 20px 0 0 20px;
  border-right: 1px solid black;
}

.right-button {
  border-radius: 0 20px 20px 0;
  border-left: 1px solid black;
}

nav {
  display: inline-block;
  position: absolute;
  left: 90%;
}
</style>
