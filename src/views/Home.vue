<template>
  <div class="home">
    <div class="hero">
      <img alt="Vue logo" src="../assets/main.jpg" />
      <div class="hero-content-area">
        <h1>aboutmusic</h1>
        <h3>Weekly Charts</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style scoped>
.hero {
  position: relative;
  justify-content: center;
  text-align: center;
  min-height: 100vh;
  color: #fff;
}

.hero img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  z-index: -1;
  background-color: #80a3db;
}

.hero h1 {
  font: bold 50px "Open Sans", sans-serif;
  margin-bottom: 15px;
}

.hero h3 {
  font: normal 28px "Open Sans", sans-serif;
  margin-bottom: 40px;
}
.hero-content-area {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
</style>