<template>
  <div>
    <video
      class="flex items-center justify-center right-0 bottom-0 min-h-full min-w-full"
      autoplay
      loop
      id="sundayService"
    >
      <source src="../assets/video/sunday-service.mp4" type="video/mp4" />
    </video>
    <div class="sm:fixed block sm:bottom-0 text-white p-5 sm:w-1/3 w-full">
      <div class="p-4">
        <h1 class="text-pink-pastel font-extrabold text-lg sm:text-2xl">Welcome To Sunday Service</h1>
        <p class="text-pink-pastel font-extrabold text-lg sm:text-2xl">Sit back and Enjoy</p>
      </div>
      <button
        class="transisition w-48 sm:w-50 w-full text-lg p-2 border-none rounded-full bg-pink-pastel text-white cursor-pointer focus:outline-none sm:hover:bg-white sm:hover:text-pink-pastel border-pink-pastel"
        id="myBtn"
        @click="pauseFunction()"
      >Push to Pause</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "sunday",
  methods: {
    pauseFunction() {
      let video = document.getElementById("sundayService");
      let btn = document.getElementById("myBtn");
      if (video.paused) {
        video.play();
        btn.innerHTML = "Pause";
      } else {
        video.pause();
        btn.innerHTML = "Play";
      }
    }
  }
};
</script>


<style lang="scss">
.sunday-nav {
  background-color: #a18caf;
}
.transisition {
  transition: all 0.3s ease-in-out;
}
</style>