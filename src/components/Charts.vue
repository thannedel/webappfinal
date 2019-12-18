<template>
  <div>
    <p>Choose By Country</p>
    <select v-model="selected" @change="$emit('chart-state', selected)">
      <option value="us" selected>USA</option>
      <option value="gb">Great Britain</option>
      <option value="de">Germany</option>
    </select>

    <div v-bind:key="chart.id" v-for="chart in charts">
      <Description v-bind:chart="chart" v-on:open-modal="openModal" />
    </div>

    <div v-show="showModal">
      <b-modal
        v-model="showModal"
        v-if="this.descs == null"
      >We 're sorry, there is no description for this album</b-modal>
      <b-modal v-model="showModal" v-else>{{ this.descs }}</b-modal>
    </div>
  </div>
</template>

<script>
import Description from "./Description.vue";

import axios from "axios";
export default {
  name: "Charts",
  components: {
    Description
  },

  props: ["charts"],
  data() {
    return {
      showModal: false,
      descs: "",
      site1: "",
      selected: "us"
    };
  },
  methods: {
    openModal(idAlbum) {
      console.log(idAlbum);
      this.site1 = `https://theaudiodb.com/api/v1/json/1/album.php?m=${idAlbum}`;
      axios
        .get(this.site1)
        .then(res => {
          console.log(res.data.album);
          this.descs = res.data.album[0].strDescriptionEN;
          // console.log(this.descs.strDescriptionEN);
        })
        .catch(err => console.log(err));
      // console.log(2);
      // console.log(this.descs);

      // this.$bvModal.show("my-modal");
      this.showModal = true;
      console.log(this.showModal);
      console.log(idAlbum);
    }
  }
}; /*  v-on:read-more="$emit('read-more',chart.idAlbum)" */
</script>

<style scoped>
</style>
