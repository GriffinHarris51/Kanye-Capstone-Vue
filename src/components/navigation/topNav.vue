<template>
  <div :class="[ color, 'w-full']">
    <div class="max-w-4xl mx-auto flex flex-row justify-between items-center">
      <div id="left-nav" class="ml-4">
        <router-link to="/">
          <h1 class="text-white font-extrabold text-2xl">Kanye App</h1>
        </router-link>
      </div>
      <div id="right-nav" class="hidden md:block mr-5">
        <ul class="flex flex-row items-center">
          <li>
            <router-link
              class="text-white px-8 py-3 rounded-sm cursor-pointer"
              exact-active-class="bg-brown shadow rounded"
              to="/"
            >Home</router-link>
          </li>
          <li>
            <router-link
              class="text-white px-8 py-3 cursor-pointer"
              exact-active-class="bg-mauve-green text-white shadow rounded"
              to="/music"
            >Music</router-link>
          </li>
          <li>
            <router-link
              class="text-white px-8 py-3 cursor-pointer"
              exact-active-class="bg-pink text-white shadow rounded"
              to="/sunday-service"
            >Sunday Service</router-link>
          </li>
          <li>
            <router-link
              class="text-white px-8 py-3 rounded-sm cursor-pointer"
              exact-active-class="bg-wave-green shadow rounded"
              to="/about-me"
            >About Me</router-link>
          </li>
        </ul>
      </div>
      <div class="block md:hidden mr-5" @click="showMobileMenu = !showMobileMenu">
        <svg
          class="stroke-current h-5 w-5 text-white cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          aria-labelledby="title"
          aria-describedby="desc"
          role="img"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <title>Menu Hamburger</title>
          <desc>A line styled icon from Orion Icon Library.</desc>
          <path
            data-name="layer2"
            fill="none"
            stroke="#fff"
            stroke-miterlimit="10"
            stroke-width="4"
            d="M2 14h60M2 32h36"
            stroke-linejoin="round"
            stroke-linecap="round"
          />
          <path
            data-name="layer1"
            fill="none"
            stroke="#fff"
            stroke-miterlimit="10"
            stroke-width="4"
            d="M2 50h60"
            stroke-linejoin="round"
            stroke-linecap="round"
          />
        </svg>
      </div>
    </div>
    <div class="absolute right-0 top-0 h-full w-screen bg-mauve z-10" v-if="showMobileMenu">
      <div class="flex flex-col text-center justify-between">
        <button @click="showMobileMenu = !showMobileMenu">
          <svg
            class="stroke-current h-10 w-10 text-black cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            aria-labelledby="title"
            aria-describedby="desc"
            role="img"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <title>Close</title>
            <desc>A line styled icon from Orion Icon Library.</desc>
            <path
              data-name="layer1"
              fill="none"
              stroke="#202020"
              stroke-miterlimit="10"
              stroke-width="2"
              d="M41.999 20.002l-22 22m22 0L20 20"
              stroke-linejoin="round"
              stroke-linecap="round"
            />
          </svg>
        </button>
        <router-link
          class="text-white px-8 py-3 rounded-sm cursor-pointer"
          exact-active-class="text-brown"
          to="/"
        >Home</router-link>
        <router-link
          class="text-white px-8 py-3 cursor-pointer"
          exact-active-class="bg-mauve-green text-white shadow rounded"
          to="/music"
        >Music</router-link>
        <router-link
          class="text-white px-8 py-3 cursor-pointer"
          exact-active-class="bg-mauve-green text-white shadow rounded"
          to="/sunday-service"
        >Sunday Service</router-link>
        <router-link
          class="text-white px-8 py-3 rounded-sm cursor-pointer"
          exact-active-class="bg-mauve-green text-white shadow rounded"
          to="/about-me"
        >About Me</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      required: false,
      default: () => "kanye-brown"
    }
  },
  data() {
    return {
      showMobileMenu: false
    };
  },

  watch: {
    $route(to, from) {
      this.showMobileMenu = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.kanye-brown {
  background-color: #bbac9d;
  color: #26201e;
}
</style>