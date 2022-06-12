<template>
  <top-head-section />
  <router-view />
</template>

<script>
import topHeadSection from "@/components/topHeadSection.vue";
import TopHeadSection from "@/components/topHeadSection.vue";
export default {
  name: "app",
  components: {
    topHeadSection,
    TopHeadSection,
  },
};
</script>

<style lang="scss">
@import "@/assets/css/global";
</style>
