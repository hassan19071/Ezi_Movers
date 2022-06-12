<template>
  <div class="know-us">
    <div class="container px-lg-5">
      <div class="info px-4 py-5">
        <i class="fa-solid fa-earth-africa"></i>
        <h1>Who We Are?</h1>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less
        </p>
        <p>
          content here', making it look like readable English. Many desktop
          publishing packages and web page
        </p>
        <div class="feature">
          <div class="d-flex align-items-center">
            <div class="sign me-3"></div>
            <p class="mb-0">Long established fact that a reader</p>
          </div>
          <div class="d-flex align-items-center my-3">
            <div class="sign me-3"></div>
            <p class="mb-0">We making it look like readable English.</p>
          </div>
          <div class="d-flex align-items-center">
            <div class="sign me-3"></div>
            <p class="mb-0">Long established fact that a reader</p>
          </div>
        </div>
        <div
          class="signture d-flex align-items-center justify-content-between mt-5"
        >
          <div class="data">
            <h4>Hassan Khaled</h4>
            <p class="mb-0">Chairman & Chief Executive Officer</p>
          </div>
          <div class="sign-img">
            <img src="../assets/imgs/signture-white.png" alt="signture img" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "know-us",
};
</script>

<style lang="scss">
@import "@/assets/css/mixins";
@import "@/assets/css/vars";

.know-us {
  background-image: url("@/assets/imgs/know-us-bg.jpg");
  background-size: cover;
  background-position: center;
  padding: 80px 0;
  margin: 100px 0;
  .info {
    background: $secColor;
    width: 100%;
    color: rgb(203, 200, 200);
    @media (min-width: 991px) {
      width: 50%;
      margin-left: auto;
    }
    svg {
      color: $mainColor;
      font-size: 40px;
    }
    h1 {
      @include head(0, 0);
    }
    .sign {
      width: 15px;
      height: 15px;
      background: $mainColor;
    }
  }
}
</style>
