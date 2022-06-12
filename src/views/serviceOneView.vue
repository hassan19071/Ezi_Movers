<template>
  <div class="service-single">
    <hero-sec-section :titleName="'Our Services'" :linkName="'Services'" />
    <our-offers />
    <servic-section />
    <track-section />
    <team-section />
    <newsletter-section />
    <footer-section />
  </div>
</template>

<script>
import heroSecSection from "@/components/heroSecSection.vue";
import ourOffers from "@/components/ourOffers.vue";
import servicSection from "@/components/servicSection.vue";
import trackSection from "@/components/trackSection.vue";
import teamSection from "@/components/teamSection.vue";
import newsletterSection from "@/components/newsletterSection.vue";
import footerSection from "@/components/footerSection.vue";

export default {
  name: "serviceView",
  components: {
    heroSecSection,
    ourOffers,
    footerSection,
    servicSection,
    trackSection,
    teamSection,
    newsletterSection,
  },
};
</script>

<style lang="scss" scoped>
.newsletter {
  background-color: #fff;
}
</style>
