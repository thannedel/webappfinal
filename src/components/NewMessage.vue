<template>
  <div class="new-message">
    <!--  <input id="message" type="text" />
    <button onclick="writePosts()">Send post</button>-->

    <!-- <form @submit.prevent="addMessage"></form> -->
    <b-input-group class="mt-3">
      <b-form-input name="new-message" v-model="newMessage" placeholder="Type your message"></b-form-input>

      <b-button variant="info" type="button" id="send" @click="addMessage()">Send Post</b-button>
    </b-input-group>
    <div v-if="!isLoading">
      <p v-for="(chat, index) in chats" v-bind:key="index">{{chat.name}} {{chat.message}}</p>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import "firebase/firestore";
import db from "../main";
export default {
  name: "NewMessage",
  props: ["userName"],
  data() {
    return {
      newMessage: null,
      chats: [],
      isLoading: true
    };
  },
  created() {
    this.getMessages();
  },

  methods: {
    getMessages() {
      db.collection("chat")
        .orderBy("date")

        .get()
        .then(querySnapshot => {
          //this.chats = [];
          let messages = [];
          querySnapshot.forEach(doc => {
            const data = {
              name: doc.data().name,
              message: doc.data().message,
              date: doc.data().date.timestamp
            };
            messages.push(data);
            console.log(this.chats);
            this.isLoading = false;
          });
          this.chats = messages;
        });
    },
    addMessage() {
      let database = firebase.firestore();
      let postData = {
        name: this.userName,
        message: this.newMessage,
        date: new Date()
      };
      console.log(postData);
      database
        .collection("chat")
        .add(postData)
        .then(docRef => {
          console.log("Document written with ID: ", docRef.id);
          this.getMessages();
        })
        .catch(error => {
          console.error("Error adding document: ", error);
        });

      console.log(postData);
      console.log(this.userName);
      this.newMessage = "";
    }
  }
};
</script>

<style scoped>
</style>