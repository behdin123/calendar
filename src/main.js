import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import firebase from "firebase";
import VueTextareaAutosize from 'vue-textarea-autosize'

Vue.use(VueTextareaAutosize)

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyA8LjS5yeBlNET_IgaIIM0n0J4mBbJ291w",
  authDomain: "vue-calendar-2b115.firebaseapp.com",
  databaseURL: "https://vue-calendar-2b115-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "vue-calendar-2b115",
  storageBucket: "vue-calendar-2b115.appspot.com",
  messagingSenderId: "533093956470",
  appId: "1:533093956470:web:c850810b698366c2fb9857"
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')

