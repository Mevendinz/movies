<template>
  <div>
    <h1>Movie List</h1>
    <table>
      <tr class="table-header">
        <td>Movie Title</td>
        <td>Director</td>
        <td>Release Date</td>
      </tr>
      <tr v-for="movie in movies" :key="movie.movieId">
        <td>{{ movie.movieTitle }}</td>
        <td>{{ movie.movieDirector }}</td>
        <td>{{ movie.movieYear }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["movies"])
  }
};
</script>

<style scoped>
table {
  border-style: hidden;
  border-collapse: collapse;
  margin: 0 auto;
  margin-top: 100px !important;
  width: 80%;
}

tr {
  background-color: grey;
}

td {
  border-style: hidden;
  text-align: left;
  padding: 20px;
}

.table-header {
  background-color: grey !important;
  cursor: default !important;
  font-weight: bold;
}

tr:nth-child(2n + 0) {
  background-color: rgb(180, 180, 180);
}

tr:hover {
  cursor: pointer;
  background-color: lightcyan;
}
</style>
