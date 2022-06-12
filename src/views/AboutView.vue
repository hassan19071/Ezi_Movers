<template>
  <div class="about">
    <hero-sec-section :titleName="'About Us'" :linkName="'About Us'" />
    <freight-types />
    <know-us />
    <mission-section />
    <team-section />
    <newsletter-section />
    <footer-section />
  </div>
</template>

<script>
import heroSecSection from "@/components/heroSecSection.vue";
import freightTypes from "@/components/freightTypes.vue";
import knowUs from "@/components/knowUs.vue";
import missionSection from "@/components/missionSection.vue";
import teamSection from "@/components/teamSection.vue";
import newsletterSection from "@/components/newsletterSection.vue";
import footerSection from "@/components/footerSection.vue";

export default {
  name: "aboutView",
  components: {
    heroSecSection,
    freightTypes,
    footerSection,
    knowUs,
    missionSection,
    teamSection,
    newsletterSection,
  },
};
</script>

<style lang="scss" scoped>
.newsletter {
  background-color: #fff !important;
}
</style>
