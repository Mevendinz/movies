<template>
  <div>
    <figure class="movie-box">
      <img :src="require('@/assets/paybills/' + paybill)" />

      <figcaption class="info-layer">
        <p id="title">{{title}}</p>
        <p id="director">{{director}}</p>
        <p id="releaseYear">{{releaseYear}}</p>
      </figcaption>
    </figure>
  </div>
</template>

<script>
export default {
  props: {
    paybill: String,
    title: String,
    director: String,
    releaseYear: String
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
img {
  height: 100%;
  width: 100%;
  z-index: -10;
}

p {
  margin: 10px;
}

#title {
  font-size: 15px;
}

#director {
  font-size: 13px;
}

#releaseYear {
  font-size: 10px;
}

.info-layer {
  display: none;
  visibility: hidden;
  transition: background-color 0.3s, visibility 0.3s;
  height: 25%;
  width: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0);
  color: white;
  text-align: left;
}

.movie-box:hover > .info-layer {
  display: block;
  visibility: visible;
  background-color: rgba(0, 0, 0, 0.8);
  transition: background-color 0.3s, visibility 0.3s;
  bottom: 0;
}

.movie-box {
  float: left;
  -webkit-user-drag: none;
  box-shadow: 0px 20px 15px;
  height: 400px;
  width: 300px;
  margin: 20px;
}

@-webkit-keyframes scale-up-center {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  100% {
    -webkit-transform: scale(1.5);
    transform: scale(1.5);
  }
}

@keyframes scale-up-center {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  100% {
    -webkit-transform: scale(1.5);
    transform: scale(1.5);
  }
}

.movie-box:hover {
  background-color: grey;
  color: cyan;
  cursor: pointer;
  -webkit-animation: scale-up-center 0.4s cubic-bezier(0.39, 0.575, 0.565, 1)
    both;
  animation: scale-up-center 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
}
</style>