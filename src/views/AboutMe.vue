<template>
  <div class="h-full w-full bg-wave-cream">
    <div class="flex sm:flex-row flex-col justify-between">
      <div class="w-full sm:w-3/6 h-full">
        <div>
          <img
            class="h-screen p-0 rounded-sm shadow w-full"
            src="@/assets/album-images/download.jpg"
            alt="image"
          />
        </div>
      </div>
      <div class="w-full sm:w-3/6 h-full">
        <div class="ml-6">
          <div>
            <p class="mt-4 text-2xl bottom-border">
              My name is Griffin Harris, I am a junior software developer based in Utah.
              I enjoy all things Javascript, mainly React and Vue JS. I attended school at Bottega
              in Lehi, UT. I learned Vue and built out this application for my capstone project. I also learned
              Tailwind CSS to style this application.
            </p>
            <div class="mt-4bottom-border">
              <h1 class="flex justify-center items-center text-6xl">CHECK ME OUT HERE</h1>
              <div class="mt-24 flex justify-between flex-row text-3xl">
                <a href="https://github.com/GriffinHarris51" target="_blank">GITHUB</a>
                <a href="https://www.instagram.com/griffinharris__/" target="_blank">INSTAGRAM</a>
                <a
                  class="mr-2"
                  href="https://www.linkedin.com/in/griffin-harris-2a7866191/"
                  target="_blank"
                >LINKEDIN</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  methods: {}
};
</script>

<style lang="scss">
.about-background {
  background-color: #ee7c51;
}

.bottom-border {
  border-bottom: 1px solid black;
}
</style>
