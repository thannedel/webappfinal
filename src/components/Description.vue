<template>
  <div>
    <b-container class="cont">
      <b-card bg-variant="light">
        <router-link v-bind:to="'/biographies/' + chart.strArtist">
          <h4>{{ chart.strArtist }}</h4>
        </router-link>
        <img v-bind:src="chart.strAlbumThumb" />
        <b-card-text>{{ chart.strAlbum }}</b-card-text>
        <b-button variant="primary" @click="$emit('open-modal', chart.idAlbum)">Read More</b-button>
      </b-card>
    </b-container>

    <!-- <img v-bind:src="chart.strAlbumThumb" /> -->
    <!-- <button @click="$emit('read-more',chart.idAlbum)">read more</button> -->
  </div>
</template>
 
 <script>
export default {
  name: "Description",

  props: ["chart"]
};
</script >
<style scoped>
img {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  /*height: 100%; */
  background-size: cover;
}

a {
  color: black !important;
}
h4,
b-card-text {
  font: normal 20px sans-serif !important;
  color: #555;
}
</style>

