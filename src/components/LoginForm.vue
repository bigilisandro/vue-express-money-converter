<template>
  <form
    @submit.prevent="login(user)"
    class="space-y-6"
    action="#"
    method="POST"
  >
    <div>
      <label
        for="email"
        class="block text-left text-sm font-medium leading-6 text-gray-900"
        >Email address</label
      >
      <div class="mt-2">
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Enter Email"
          v-model="user.email"
          autocomplete="email"
          required
          class="
            block
            w-full
            rounded-md
            border-0
            p-2
            text-gray-900
            shadow-sm
            ring-1 ring-inset ring-gray-300
            placeholder:text-gray-400
            focus:ring-2 focus:ring-inset focus:ring-indigo-600
          "
        />
      </div>
    </div>

    <div>
      <div class="flex items-center justify-between">
        <label
          for="password"
          class="block text-sm font-medium leading-6 text-gray-900"
          >Password</label
        >
        <div class="text-sm">
          <a
            href="#"
            class="font-semibold text-indigo-600 hover:text-indigo-500"
            >Forgot password?</a
          >
        </div>
      </div>
      <div class="mt-2">
        <input
          type="password"
          placeholder="Enter password"
          v-model="user.password"
          id="password"
          name="password"
          autocomplete="current-password"
          required
          class="
            block
            w-full
            rounded-md
            border-0
            p-2
            text-gray-900
            shadow-sm
            ring-1 ring-inset ring-gray-300
            placeholder:text-gray-400
          "
        />
      </div>
    </div>

    <div>
      <button
        type="submit"
        class="
          flex
          w-full
          justify-center
          rounded-md
          bg-indigo-600
          px-3
          py-1.5
          text-sm
          font-semibold
          leading-6
          text-white
          shadow-sm
        "
      >
        Sign in
      </button>
    </div>
  </form>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Home",
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions(["login"]),
  },
};
</script>
