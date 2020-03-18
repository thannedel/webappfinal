<template>
  <div class="albums">
    <h3>Albums Chart</h3>

    <Charts v-bind:charts="charts" v-on:chart-state="chartByState" />
  </div>
</template>

<script>
import Charts from "../components/Charts";
import { apiKey } from "../components/key";
import axios from "axios";
export default {
  name: "app",
  components: {
    Charts
  },

  data() {
    return {
      charts: [],
      // descs: "",
      selected: "",
      site: "",
      apiKey: ""
      //site1: ""
    };
  },
  methods: {
    chartByState(selected) {
      this.site = `https://theaudiodb.com/api/v1/json/${apiKey}/trending.php?country=${selected}&type=itunes&format=albums`;
      axios
        .get(this.site)
        .then(res => (this.charts = res.data.trending))
        .catch(err => console.log(err));
      //console.log(this.site);
    },
    chartDefault() {
      this.site = `https://theaudiodb.com/api/v1/json/${apiKey}/trending.php?country=US&type=itunes&format=albums`;
      axios
        .get(this.site)
        .then(res => (this.charts = res.data.trending))
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
  font: bold 1.2rem "Open Sans", sans-serif;
  margin-bottom: 0.5rem;
  text-align: center;
  color: #555;
}
</style>




