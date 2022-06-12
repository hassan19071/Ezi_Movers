<template>
  <div class="hero-sec">
    <nav-section />
    <div class="title position-relative">
      <img src="@/assets/imgs/slider1.jpg" alt="slider1" class="w-100" />
      <div class="caption position-absolute w-100">
        <div class="container px-lg-5 text-center">
          <h1>{{ titleName }}</h1>
          <div>
            <router-link to="/">Home</router-link> / <span>{{ linkName }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navSection from "@/components/navSection.vue";

export default {
  name: "hero-sec",
  props: {
    titleName: String,
    linkName: String,
  },
  components: {
    navSection,
  },
};
</script>

<style lang="scss">
@import "@/assets/css/vars";
.hero-sec {
  .title {
    @media (max-width: 720px) {
      height: 50vh;
      img {
        height: 100%;
      }
    }
    .caption {
      background: rgba(40, 40, 40, 0.356);
      z-index: 10;
      top: 0;
      left: 0;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      h1 {
        color: #fff;
        font-size: calc(1.5rem + 1.5vw);
        font-weight: bold;
      }
      div {
        color: #fff;
        font-size: 18px;
        a {
          color: #fff;
          font-size: 18px;
        }
        span {
          color: $mainColor;
        }
      }
    }
  }
}
</style>
