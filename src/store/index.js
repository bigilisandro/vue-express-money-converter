import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    token: null,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setToken(state, token) {
      state.token = token;
    },
    logout() {
      localStorage.removeItem("token");
      location.reload();
    },
  },
  actions: {
    async login({ commit }, user) {
      try {
        const res = await fetch("http://localhost:8080/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        });
        const userDB = await res.json();
        commit("setToken", userDB.token);
        localStorage.setItem("token", userDB.token);
      } catch (error) {
        console.log("Error: ", error);
      }
    },
    getToken({ commit }) {
      if (localStorage.getItem("token")) {
        commit("setToken", localStorage.getItem("token"));
      } else {
        commit("setToken", null);
      }
    },
    logout({ commit }) {
      commit("logout");
    },
  },
  getters: {
    isLoggedIn(state) {
      return !!state.token;
    },
  },
});
