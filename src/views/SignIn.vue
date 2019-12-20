<template>
  <div class="signIn">
    <b-button variant="primary" size="lg" type="button" id="logIn" @click="logIn()">Log in!</b-button>
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
          if (this.userName) {
            this.$router.push({
              name: "Chat",
              params: { userName: this.userName }
            });
          }
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

<style scoped>
.signIn {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
