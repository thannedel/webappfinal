<template>
  <div class="singles">
    <h3>Singles Chart</h3>
    <Singles v-bind:singles="singles" v-on:chart-single="singlesByState" />
  </div>
</template>
<script>
import Singles from "../components/Singles";
import { apiKey } from "../components/key";
import axios from "axios";
export default {
  name: "SingleCharts",
  components: {
    Singles
  },

  data() {
    return {
      singles: [],
      // descs: "",
      selected: "",
      site3: "",
      //site1: ""
      apiKey: ""
    };
  },
  methods: {
    singlesByState(selected) {
      this.site3 = `https://theaudiodb.com/api/v1/json/${apiKey}/trending.php?country=${selected}&type=itunes&format=singles`;
      axios
        .get(this.site3)
        .then(res => (this.singles = res.data.trending))
        .catch(err => console.log(err));
      //console.log(this.site);
    },
    chartDefault() {
      this.site = `https://theaudiodb.com/api/v1/json/${apiKey}/trending.php?country=us&type=itunes&format=singles`;
      axios
        .get(this.site)
        .then(res => (this.singles = res.data.trending))
        .catch(err => console.log(err));
      //console.log(this.site);
    }
  },
  created() {
    this.chartDefault();
  }
};
</script>


<style scoped>
img {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;

  background-color: #80a3db;
}
h3 {
  font: bold 2rem "Open Sans", sans-serif;
  margin-bottom: 0.5rem;
  text-align: center;
  color: #555;
}
</style>
