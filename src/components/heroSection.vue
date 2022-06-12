<template>
  <div class="hero">
    <nav-section />
    <div class="slider-wrapper">
      <div class="buttons d-lg-flex d-none">
        <div class="prev position-absolute" @click="prevButton">
          <i class="fa-solid fa-angle-left"></i>
        </div>
        <div class="next position-absolute" @click="nextButton">
          <i class="fa-solid fa-angle-right"></i>
        </div>
      </div>
      <div class="slide position-absolute" :class="num == 1 ? 'close' : ''">
        <div class="content position-relative">
          <img src="../assets/imgs/slider1.jpg" alt="slide1" class="w-100" />
          <div class="caption position-absolute w-100">
            <div class="container px-lg-5">
              <h1>We Provide The Best Solution For Your Transport</h1>
              <router-link to="/contact">Contact Us Now</router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="slide position-absolute" :class="num == 2 ? 'close' : ''">
        <div class="content position-relative">
          <img src="../assets/imgs/slider2.jpg" alt="slide2" class="w-100" />
          <div class="caption position-absolute w-100">
            <div class="container px-lg-5">
              <h1>Easy Movers To Anywhere</h1>
              <router-link to="/contact">Contact Us Now</router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="slide position-absolute" :class="num == 3 ? 'close' : ''">
        <div class="content position-relative">
          <img src="../assets/imgs/slider3.jpg" alt="slide3" class="w-100" />
          <div class="caption position-absolute w-100">
            <div class="container px-lg-5">
              <h1>Because You Deserve Great Services</h1>
              <router-link to="/contact">Contact Us Now</router-link>
            </div>
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
  data() {
    return {
      num: 1,
    };
  },
  components: {
    navSection,
  },
  methods: {
    prevButton: function () {
      if (this.num < 3) {
        this.num++;
      } else {
        this.num = 1;
      }
    },
    nextButton: function () {
      if (this.num == 1) {
        this.num = 3;
      } else {
        this.num--;
      }
    },
  },
  created() {
    setInterval(() => {
      if (this.num == 1) {
        this.num = 3;
      } else {
        this.num--;
      }
    }, 10000);
  },
};
</script>

<style lang="scss">
@import "@/assets/css/vars";
.hero {
  user-select: none;
  min-height: 100vh;
  @media (max-width: 991px) {
    min-height: 60vh;
  }
  .buttons {
    div {
      z-index: 20;
      width: 50px;
      height: 50px;
      border: 1px solid #ddd;
      border-radius: 50%;
      top: 50%;
      transform: translateY(-50%);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: 0.3s;
      &:hover {
        background: $mainColor;
      }
      svg {
        color: #fff;
        font-size: 20px;
      }
      &:first-of-type {
        left: 20px;
      }
      &:last-of-type {
        right: 20px;
      }
    }
  }
  .slide {
    width: 100%;
    min-height: 100vh;
    opacity: 0;
    visibility: hidden;
    transition: 1s;
    &.close {
      opacity: 1;
      visibility: visible;
    }
    .content {
      img {
        min-height: 100vh;
        @media (max-width: 991px) {
          min-height: 60vh;
        }
      }
      .caption {
        background: rgba(51, 51, 51, 0.275);
        z-index: 10;
        top: 0;
        left: 0;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        h1 {
          color: #fff;
          font-size: calc(2vw + 2rem);
          margin-bottom: 30px;
          @media (min-width: 991px) {
            width: 80%;
            font-weight: 800;
          }
        }
        a {
          width: 50px;
          padding: 16px 10px;
          background: $mainColor;
          color: #fff;
        }
      }
    }
  }
}
</style>
