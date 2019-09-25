<template>
  <div id="app" class="h-screen w-screen">
    <navigation :color="$route.meta.color" />
    <div>
      <router-view :key="$route.fullPath" />
    </div>
  </div>
</template>


<script>
import navigation from "@/components/navigation/topNav.vue";
export default {
  mounted() {
    console.log(this.$route);
  },
  components: {
    navigation
  }
};
</script>

<style lang="scss">
#app {
  font-family: "VCR OSD Mono", sans-serif;
  max-width: 100%;
  overflow-x: hidden;
}
</style>
