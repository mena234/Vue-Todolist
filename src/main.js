import Vue from 'vue'
import App from './App'
import firebase from 'firebase/app';
import 'firebase/firestore';
import router from './router';
Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyCEFv56UQMRVznwzvDMOhY2Go3zoucaIJA",
  authDomain: "vue-todolist-98b65.firebaseapp.com",
  projectId: "vue-todolist-98b65",
  storageBucket: "vue-todolist-98b65.appspot.com",
  messagingSenderId: "867385916802",
  appId: "1:867385916802:web:61ae5dac758f23eb2d239b"
})

export const db = firebase.firestore()

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
