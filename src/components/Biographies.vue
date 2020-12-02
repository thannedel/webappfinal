<template>
  <div class="biographies" v-if="!isLoading">
    <img v-bind:src="this.bios.artists[0].strArtistThumb" fluid alt="Fluid image" style="width:100%" />
    <div class="container">
    <p>{{this.bios.artists[0].strBiographyEN}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Biographies",

  data() {
    return {
      strArtist: this.$route.params.strArtist,
      bios: {},
      isLoading: true
    };
  },
  methods: {
    getData() {
      console.log(this.strArtist);
      // this.get(
      //   "https://theaudiodb.com/api/v1/json/1/search.php?s=" + this.strArtist
      // ).then(function(data) {
      //   console.log(data);
      //   this.bios = data;
      //   this.isLoading = false;
      // });
      fetch(
        "https://theaudiodb.com/api/v1/json/1/search.php?s=" + this.strArtist
      )
        .then(response => {
          console.log(response);
          return response.json();
        })
        .then(data => {
          this.bios = data;
          this.isLoading = false;
        });
    }
  },
  created() {
    this.getData();
  }
};

/*  console.log(strArtist);
      this.site4 = `https://theaudiodb.com/api/v1/json/1/search.php?s=${strArtist}`;
      console.log(this.site4);
      axios
        .get(this.site4)
        .then(res => {
          console.log(res.data);
          this.bios = res.data.artists.strBiographyEN;
          console.log(this.bios); 
        })
        .catch(err => console.log(err));
    }
  }
};*/
</script>

<style scoped>
@media screen and (min-width:800px) {
   div.biographies {
  padding-left: 25%;
  width: 80%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-align: center;
  
}

div.container {
  padding: 10px;
}
}

</style>