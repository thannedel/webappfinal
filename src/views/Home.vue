<template>
  <div>
    <b-container fluid class="p-4 bg-success">
      <b-row>
        <b-col>
          <b-img
            thumbnail
            fluid
            src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="Image 1"
          ></b-img>
        </b-col>
        <b-col>
          <b-img
            thumbnail
            fluid
            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            alt="Image 2"
          ></b-img>
        </b-col>
        <b-col>
          <b-img
            thumbnail
            fluid
            src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            alt="Image 3"
          ></b-img>
        </b-col>
      </b-row>
    </b-container>
    <b-jumbotron>
      <template v-slot:header>aboutmusic</template>

      <template v-slot:lead>We have our ears in the streets.</template>

      <hr class="my-4" />

      <p>The top albums and singles of the week from USA, UK and Germany</p>

      <router-link to=/albums><b-button variant="primary" >Albums</b-button></router-link>
      <router-link to=/singles> <b-button variant="success" href="/singles">Singles</b-button></router-link>
    </b-jumbotron>
     <footer id="main-footer" class="bg-inverse">
    <div class="container">
      <div class="row">
        <div class="col text-center">
          <div class="py-4">
            <h1 class="h3">tHLab</h1>
            <p>Copyright &copy; 2019</p>
            
          </div>
        </div>
      </div>
    </div>
  </footer>
    <!-- <h1>aboutmusic</h1>

    <p>"We have our ears in the streets."</p>
    <hr />-->
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style scoped>
/* hr {
  width: 150px;
  height: 2px;
  background-color: #4f9129;
  border: 0;
  margin-bottom: 80px;
} */
 h1 {
 /*  display: flex;
  justify-content: center;
  font: bold 40px "Open Sans";
  margin: 15px 1 5px;*/

  color: rgb(96, 97, 42);
} 
p {
  display: flex;
  font-style: italic;
  justify-content: center;
}

</style>