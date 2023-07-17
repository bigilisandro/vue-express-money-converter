<template>
  <div class="about my-auto">
    <h1 class="text-8xl my-5">Currency converter</h1>
    <p class="text-xl">
      Convert popular currencies from around the world with updated exchange
      rates using our calculator.
    </p>
    <Conversor />
    <p class="text-2xl">
      Currency calculation tools use reference exchange rates obtained from
      major market data sources
    </p>
    <button
      type="button"
      class="
        rounded-md
        bg-indigo-600
        mt-5
        px-3
        py-1.5
        text-sm
        font-semibold
        leading-6
        text-white
        shadow-sm
      "
      @click="logout"
    >
      Logout
    </button>
  </div>
</template>
<script>
import { mapState } from "vuex";
import { mapActions } from "vuex";
import Conversor from "../components/Conversor.vue";
export default {
  components: { Conversor },
  computed: {
    ...mapState(["token"]),
  },
  methods: {
    ...mapActions(["logout"]),
  },
};
</script>
