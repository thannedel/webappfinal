<template>
  <div>
    <div id="isLogin" class="mt-5">
      <div id="chat">
        <p>Simple chat example</p>
        <input id="message" type="text" />
        <button onclick="writePosts()">Send post</button>
      </div>

      <div id="posts" class="mt-5"></div>
    </div>
  </div>
</template>

<script>
//import firebase from "firebase";
export default {
  name: "Chat",
  data() {
    return {
      posts: [],
      database: ""
    };
  },
  methods: {
    getPosts() {
      this.database
        .collection("posts")
        .get()
        .then(function(querySnapshot) {
          let posts = [];
          querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            posts.push(doc.data());
            // console.log(doc.id, " => ", doc.data());
          });
          this.displayMessages(posts);
        });
    }
  }
};
</script>

<style scoped>
</style>