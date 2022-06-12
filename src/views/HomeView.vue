<template>
  <div class="home">
    <hero-section />
    <freight-types />
    <who-we />
    <service-section />
    <track-section />
    <feature-section />
    <we-did />
    <pricing-section />
    <testimonial-section />
    <team-section />
    <new-section />
    <newsletter-section />
    <footer-section />
  </div>
</template>

<script>
// @ is an alias to /src
import heroSection from "@/components/heroSection.vue";
import freightTypes from "@/components/freightTypes.vue";
import whoWe from "@/components/whoWe.vue";
import serviceSection from "@/components/servicSection.vue";
import trackSection from "@/components/trackSection.vue";
import featureSection from "@/components/featureSection.vue";
import weDid from "@/components/weDid.vue";
import pricingSection from "@/components/pricingSection.vue";
import testimonialSection from "@/components/testimonialSection.vue";
import teamSection from "@/components/teamSection.vue";
import newSection from "@/components/newSection.vue";
import newsletterSection from "@/components/newsletterSection.vue";
import footerSection from "@/components/footerSection.vue";

export default {
  name: "HomeView",
  components: {
    heroSection,
    freightTypes,
    whoWe,
    serviceSection,
    trackSection,
    featureSection,
    weDid,
    pricingSection,
    testimonialSection,
    teamSection,
    newSection,
    newsletterSection,
    footerSection,
  },
};
</script>
