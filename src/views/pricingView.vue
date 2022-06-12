<template>
  <div class="pricing-page">
    <hero-sec-section :titleName="'Pricing Table'" :linkName="'Pricing'" />
    <pricing-section />
    <we-did-section />
    <newsletter-section />
    <footer-section />
  </div>
</template>

<script>
import heroSecSection from "@/components/heroSecSection.vue";
import pricingSection from "@/components/pricingSection.vue";
import weDidSection from "@/components/weDid.vue";
import newsletterSection from "@/components/newsletterSection.vue";
import footerSection from "@/components/footerSection.vue";

export default {
  name: "pricingView",
  components: {
    heroSecSection,
    footerSection,
    pricingSection,
    weDidSection,
    newsletterSection,
  },
};
</script>

<style lang="scss" scoped>
.we-did {
  margin-bottom: 0 !important;
}
</style>
