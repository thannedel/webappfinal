<template>
  <div class="new-message">
    <!--  <input id="message" type="text" />
    <button onclick="writePosts()">Send post</button>-->

    <!-- <form @submit.prevent="addMessage"></form> -->

    <div class="container">
      <div class="messaging">
        <div class="inbox_msg">
          <div class="inbox_people"></div>

          <div class="mesgs">
            <div class="msg_history">
              <div v-if="!isLoading">
                <div v-for="(chat, index) in chats" v-bind:key="index" class="incoming_msg">
                  <div class="incoming_msg_img">
                    <!-- <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> -->
                  </div>
                  <div :class="[chat.name===userName?'sent_msg':'received_msg']">
                    <div class="received_withd_msg">
                      <p>{{chat.message}}</p>
                      <span class="time_date">{{chat.name}}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <b-input-group class="mt-3">
            <b-form-input name="new-message" v-model="newMessage" placeholder="Type your message"></b-form-input>

            <b-button variant="info" type="button" id="send" @click="addMessage()">Send Post</b-button>
          </b-input-group>
        </div>
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
.container {
  max-width: 1170px;
  margin: auto;
}
img {
  max-width: 100%;
}
.inbox_people {
  background: #f8f8f8 none repeat scroll 0 0;
  float: left;
  overflow: hidden;
  width: 40%;
  border-right: 1px solid #c4c4c4;
}
.inbox_msg {
  border: 1px solid #c4c4c4;
  clear: both;
  overflow: hidden;
}

.chat_img {
  float: left;
  width: 11%;
}

.incoming_msg_img {
  display: inline-block;
  width: 6%;
}
.received_msg {
  display: inline-block;
  padding: 0 0 0 60%;
  vertical-align: top;
  width: 100%;
}
.received_withd_msg p {
  background: #ebebeb none repeat scroll 0 0;
  border-radius: 3px;
  color: #646464;
  font-size: 14px;
  margin: 0;
  padding: 5px 10px 5px 12px;
  width: 100%;
}
.time_date {
  color: #747474;
  display: block;
  font-size: 12px;
  margin: 8px 0 0;
}
.received_withd_msg {
  width: 57%;
}
.mesgs {
  float: left;
  padding: 30px 15px 0 25px;
  width: 100%;
}

.outgoing_msg {
  overflow: hidden;
  margin: 26px 0 26px;
}

.messaging {
  padding: 0 0 50px 0;
}
.msg_history {
  height: 516px;
  overflow-y: auto;
}
</style>