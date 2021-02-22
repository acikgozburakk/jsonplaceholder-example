import { createStore } from 'vuex'
import axios from "axios"

export default createStore({
  state: {
    baseurl: "https://jsonplaceholder.typicode.com",
    postList: [],
    userdetail: [],
    postcomment: [],
    userpost: [],
    useralbum: [],
    selectpost: [],
    alluser: [],

  },
  mutations: {
    setposts(state, post) {
      state.postList = post;
    },
    setuser(state, user) {
      state.userdetail = user;
    },
    setpostcomment(state, comment) {
      state.postcomment = comment;
    },
    userpost(state, post) {
      state.userpost = post;
    },
    useralbum(state, album) {
      state.useralbum = album;
    },
    selectpost(state, post) {
      state.selectpost = post;
    },
    alluser(state, user) {
      state.alluser = user;
    }



  },
  actions: {
    initpost({ commit, state }) {                                     //Bütün postlar
      axios
        .get(`${state.baseurl}/posts`).then((get_response) => {
          //console.log("get_response", get_response);
          commit("setposts", get_response.data);
        }).catch(e => console.log("error", e))
    },
    fetchuser({ commit, state }, id) {                                //idye göre kullanıcı
      axios
        .get(`${state.baseurl}/users/${id}`).then((get_response) => {
          //console.log("get_response", get_response);
          commit("setuser", get_response.data);
        }).catch(e => console.log("error", e))
    },
    alluser({ commit, state }) {                                        //bütün kullanıcılar
      axios
        .get(`${state.baseurl}/users`).then((get_response) => {
          //console.log("get_response", get_response);
          commit("alluser", get_response.data);
        }).catch(e => console.log("error", e))
    },
    postcomment({ commit, state }, id) {                                  //Post idye göre yorumlar
      axios
        .get(`${state.baseurl}/posts/${id}/comments`).then((get_response) => {
          //console.log("get_responsecomment", get_response.data);
          commit("setpostcomment", get_response.data);
        }).catch(e => console.log("error", e))
    },
    selectpost({ commit, state }, id) {                                     //idye göre post
      axios
        .get(`${state.baseurl}/posts/${id}`).then((get_response) => {
          //console.log("get_responsecomment", get_response.data);
          commit("selectpost", get_response.data);
        }).catch(e => console.log("error", e))
    },
    userpost({ commit, state }, userid) {                                     //kullanıcı idye göre postlar
      axios
        .get(`${state.baseurl}/posts?userId=${userid}`).then((get_response) => {
          //console.log("get_responsepsot", get_response.data);
          commit("userpost", get_response.data);
        }).catch(e => console.log("error", e))
    },
    useralbums({ commit, state }, userid) {                                     //kullanıcı idye göre albümler
      axios
        .get(`${state.baseurl}/albums?userId=${userid}`).then((get_response) => {
          //console.log("get_responsepalbum", get_response.data);
          commit("useralbum", get_response.data);
        }).catch(e => console.log("error", e))
    },

  },
  getters: {
    postlist: (state) => state.postList,
    userdetail: (state) => state.userdetail,
    postcomment: (state) => state.postcomment,
    userpost: (state) => state.userpost,
    useralbum: (state) => state.useralbum,
    selectpost: (state) => state.selectpost,
    alluser: (state) => state.alluser
  }
})
