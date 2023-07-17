<template>
  <div class="grid md:grid-cols-2 gap-4">
    <div>
      <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2
            class="
              mt-10
              text-center text-2xl
              font-bold
              leading-9
              tracking-tight
              text-gray-900
            "
          >
            Sign in to your account
          </h2>
          <p class="mt-4">Enter your credentials to access your account</p>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <LoginForm />

          <p class="mt-10 text-center text-sm text-gray-500">
            Not a member?
            <a
              href="#"
              class="
                font-semibold
                leading-6
                text-indigo-600
                hover:text-indigo-500
              "
              >Start a 14 day free trial</a
            >
          </p>
        </div>
      </div>
    </div>
    <div class="hidden md:block">
      <img
        class="w-full h-screen"
        src="https://images.pexels.com/photos/4386476/pexels-photo-4386476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="Your Company"
      />
    </div>
  </div>
</template>

<script>
import LoginForm from "../components/LoginForm.vue";

export default {
  name: "Home",
  components: { LoginForm },
};
</script>
