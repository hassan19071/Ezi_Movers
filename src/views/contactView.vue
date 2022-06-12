<template>
  <div class="contact-page">
    <hero-sec-section :titleName="'Contact Us'" :linkName="'Contact'" />
    <contact-section />
    <footer-section />
  </div>
</template>

<script>
import heroSecSection from "@/components/heroSecSection.vue";
import contactSection from "@/components/contactSection.vue";
import footerSection from "@/components/footerSection.vue";

export default {
  name: "contact-View",
  components: {
    heroSecSection,
    footerSection,
    contactSection,
  },
};
</script>
