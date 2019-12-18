<template>
  <div>
    <button type="button" id="logIn" @click="logIn()">Log in!</button>
    <div id="chat">
      <p>Simple chat example</p>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "SighnIn",
  data() {
    return {
      user: "",
      email: "",
      userName: "",
      displayName: ""
    };
  },
  methods: {
    logIn() {
      console.log(firebase);
      let provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(result => {
          var user = result.user;
          console.log("You are logged in");

          this.userName = user.displayName;
          this.email = user.email;
          console.log(this.userName);
          console.log(this.email);
          //getPosts();
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style scoped></style>
