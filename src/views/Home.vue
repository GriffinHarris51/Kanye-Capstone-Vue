<template>
  <div class="h-screen bg-wave-cream w-full py-10 overflow-hidden">
    <div class="max-w-2xl mx-auto flex flex-row justify-center">
      <button
        @click="getKanyeQuote"
        class="transisition bg-brown-light text-white text-lg px-8 py-4 r rounded-full shadow-lg border focus:outline-none border-brown-home hover:bg-white hover:text-brown-light"
      >Press for Dragon Energy</button>
    </div>
    <div class="w-full overflow-hidden flex flex-row justify-center mt-10" v-if="quotes">
      <div class="flex flex-col items-center">
        <p class="text-s sm:text-lg" v-for="(quote, index) in quotes" :key="index">
          "
          <span :class="quote.length > 40 ? 'text-brown' : 'text-brown-medium'">{{quote}}</span>
          - Kanye West
          "
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "home",
  data() {
    return {
      quotes: []
    };
  },
  methods: {
    getKanyeQuote() {
      axios.get(process.env.VUE_APP_KANYE_API).then(res => {
        this.quotes.push(res.data.quote);
      });
    }
  }
};
</script>

<style lang="scss">
.transisition {
  transition: all 0.3s ease-in-out;
}
</style>
