<template>
  <div class="new-message">
    <!--  <input id="message" type="text" />
    <button onclick="writePosts()">Send post</button>-->

    <!-- <form @submit.prevent="addMessage"></form> -->
    <input type="text" name="new-message" v-model="newMessage" placeholder="Type your message" />
    <button type="button" id="send" @click="addMessage()">Send Post</button>
    <p v-for="chat in chats" v-bind:key="chat.id">{{chat.name}} {{chat.message}}</p>
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
      chats: []
    };
  },
  created() {
    db.collection("chat")
      .orderBy("date")

      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          const data = {
            name: doc.data().name,
            message: doc.data().message,
            date: doc.data().date.timestamp
          };
          this.chats.push(data);
        });
      });
  },

  methods: {
    addMessage() {
      //this.newMessage = "";
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
        })
        .catch(error => {
          console.error("Error adding document: ", error);
        });

      console.log(postData);
      console.log(this.userName);
    }
  }
};
</script>

<style>
</style>