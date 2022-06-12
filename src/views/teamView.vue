<template>
  <div class="team-page">
    <hero-sec-section :titleName="'Our Team'" :linkName="'team'" />
    <team-section />
    <new-section />
    <newsletter-section />
    <footer-section />
  </div>
</template>

<script>
import heroSecSection from "@/components/heroSecSection.vue";
import teamSection from "@/components/teamSection.vue";
import newSection from "@/components/newSection.vue";
import newsletterSection from "@/components/newsletterSection.vue";
import footerSection from "@/components/footerSection.vue";

export default {
  name: "team-View",
  components: {
    heroSecSection,
    footerSection,
    newsletterSection,
    teamSection,
    newSection,
  },
};
</script>
