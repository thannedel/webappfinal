import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import firebase from 'firebase'


Vue.config.productionTip = false
Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

var firebaseConfig = {
  apiKey: "AIzaSyAYMZDEwqCRy7W2XW0VlcwveSFtSoV68tQ",
  authDomain: "demochat-e1e5e.firebaseapp.com",
  databaseURL: "https://demochat-e1e5e.firebaseio.com",
  projectId: "demochat-e1e5e",
  storageBucket: "demochat-e1e5e.appspot.com",
  messagingSenderId: "846433926953",
  appId: "1:846433926953:web:77714726715eec3db34138"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({
  timestampsInSnapshots: true
})

export default firebase.firestore()