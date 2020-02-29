<template>
  <div>
    <h1>Movie Grid</h1>
    <div class="movie-collection">
      <movieBox
        v-for="movie in movies"
        :key="movie.movieId"
        :paybill="movie.moviePaybill"
        :title="movie.movieTitle"
        :director="movie.movieDirector"
        :releaseYear="movie.movieYear"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import movieBox from "../components/movieBox";

export default {
  data() {
    return {};
  },
  components: {
    movieBox
  },
  computed: {
    ...mapState(["movies"])
  },
  method: {}
};
</script>

<style scoped>
.movie-collection {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
