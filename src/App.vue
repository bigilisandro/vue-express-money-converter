<template>
  <div id="app">
    <div>
      <div class="container mx-auto" v-if="$store.state.token">
        <Converter />
      </div>
      <div v-else>
        <Home />
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import Converter from "./views/Converter.vue";
import Home from "./views/Home.vue";
export default {
  components: { Converter, Home },
  methods: {
    ...mapActions(["getToken"]),
  },
  created() {
    this.getToken();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
