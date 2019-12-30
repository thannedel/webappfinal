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
              <div class="incoming_msg">
                <div class="incoming_msg_img">
                  <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" />
                </div>
                <div class="received_msg">
                  <div class="received_withd_msg">
                    <p>Test, which is a new approach to have</p>
                    <span class="time_date">11:01 AM | Yesterday</span>
                  </div>
                </div>
              </div>
              <div class="outgoing_msg">
                <div class="sent_msg">
                  <p>Apollo University, Delhi, India Test</p>
                  <span class="time_date">11:01 AM | Today</span>
                </div>
              </div>
              <div class="incoming_msg">
                <div class="incoming_msg_img">
                  <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" />
                </div>
                <div class="received_msg">
                  <div class="received_withd_msg">
                    <p>
                      We work directly with our designers and suppliers,
                      and sell direct to you, which means quality, exclusive
                      products, at a price anyone can afford.
                    </p>
                    <span class="time_date">11:01 AM | Today</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="type_msg">
              <div class="input_msg_write">
                <input type="text" class="write_msg" placeholder="Type a message" />
                <button class="msg_send_btn" type="button">
                  <i class="fa fa-paper-plane-o" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </div>
      
        <p class="text-center top_spac">
          Design by
          <a target="_blank" href="#">Sunil Rajput</a>
        </p>
      </div>
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