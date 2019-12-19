<template>
  <div>
    <b-card img-top tag="article" style="max-width: 20rem;" class="mb-2">
      <router-link v-bind:to="'/biographies/' + single.strArtist">
        <h4>{{ single.strArtist }}</h4>
      </router-link>
      <p>{{ single.strAlbum }}</p>

      <img v-bind:src="single.strTrackThumb" />
      <!-- <button @click="$emit('read-more',single.idAlbum)">read more</button> -->
      <b-button variant="primary" @click="$emit('open-modal', single.idAlbum)">Read More</b-button>
    </b-card>
  </div>
</template>
 
 <script>
export default {
  name: "SingleDesc",

  props: ["single"]
};
</script >
<style scoped>
img {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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
</style>;
