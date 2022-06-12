<template>
  <div class="about-us">
    <div class="container px-lg-5">
      <div class="row align-items-center">
        <div class="col-lg">
          <div class="img">
            <img
              src="../assets/imgs/about-img.svg"
              alt="about-img"
              class="w-100"
            />
          </div>
        </div>
        <div class="col-lg ps-lg-5 mt-lg-0 mt-4">
          <div class="text">
            <i class="fa-solid fa-earth-africa"></i>
            <h3>Who We Are?</h3>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less
            </p>
            <div class="features">
              <div class="d-flex align-items-center">
                <div class="sign me-3"></div>
                <p class="mb-0">Long established fact that a reader</p>
              </div>
              <div class="d-flex align-items-center">
                <div class="sign me-3"></div>
                <p class="mb-0">We making it look like readable English.</p>
              </div>
              <div class="d-flex align-items-center">
                <div class="sign me-3"></div>
                <p class="mb-0">Long established fact that a reader</p>
              </div>
            </div>
            <div
              class="signture d-flex align-items-center justify-content-between"
            >
              <div class="info">
                <h4>Hassan Khaled</h4>
                <p class="mb-0">Chairman & Chief Executive Officer</p>
              </div>
              <div class="sign-img">
                <img src="../assets/imgs/signture.png" alt="signture img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "about-us",
};
</script>

<style lang="scss" scoped>
@import "../assets/css/vars";
@import "../assets/css/mixins";

.about-us {
  margin: 100px 0;
  .text {
    svg {
      font-size: 40px;
      color: $mainColor;
    }
    h3 {
      @include head(0, 0);
    }
    .features {
      margin: 30px 0;
      > div {
        margin: 10px 0;
        .sign {
          width: 20px;
          height: 20px;
          background: $mainColor;
        }
      }
    }
    .signture {
      h4 {
        font-size: 18px;
        font-weight: bold;
      }
    }
  }
}
</style>
