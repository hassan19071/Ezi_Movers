<template>
  <top-head-section />
  <router-view />
</template>

<script>
import topHeadSection from "@/components/topHeadSection.vue";
export default {
  name: "app",
  components: {
    topHeadSection,
  },
};
</script>

<style lang="scss">
@import "@/assets/css/global";
</style>
