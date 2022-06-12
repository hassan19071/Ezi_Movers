<template>
  <div class="features">
    <img src="../assets/imgs/feature-bg.png" />
    <div class="container px-lg-5">
      <div class="head text-center">
        <h5>We Provide the Best</h5>
        <h1>Our Awesome Features</h1>
      </div>
      <div class="row mt-5">
        <div class="col-lg col-md-6 col-12 text-md-end text-center mt-4">
          <div class="text">
            <div class="icon mx-auto ms-md-auto me-md-0">
              <i class="fa-solid fa-plane-up"></i>
            </div>
            <h4>First Air Freight</h4>
            <p>
              Many desktop publishing packages and web page editors now use
              Lorem Ipsum as their default model text,
            </p>
          </div>
          <div class="text">
            <div class="icon mx-auto ms-md-auto me-md-0 mt-4">
              <i class="fa-solid fa-truck-fast"></i>
            </div>
            <h4>First Ground Shipping</h4>
            <p>
              Many desktop publishing packages and web page editors now use
              Lorem Ipsum as their default model text,
            </p>
          </div>
        </div>
        <div class="col-lg col-md-6 col-12 text-center mt-4">
          <div class="img">
            <img src="../assets/imgs/fearure-img.png" alt="" />
          </div>
        </div>
        <div class="col-lg col-md-12 col-12 text-center text-md-start mt-4">
          <div class="row">
            <div class="col-lg-12 col-md-6 col-12">
              <div class="text">
                <div class="icon mx-auto mx-md-0">
                  <i class="fa-solid fa-ship"></i>
                </div>
                <h4>Quickest Cargo</h4>
                <p>
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text,
                </p>
              </div>
            </div>
            <div class="col-lg-12 col-md-6 col-12">
              <div class="text">
                <div class="icon mx-auto mx-md-0 mt-lg-2 mt-md-0 mt-2">
                  <i class="fa-solid fa-truck-clock"></i>
                </div>
                <h4>Timely Delivery</h4>
                <p>
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text,
                </p>
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
  name: "features-section",
};
</script>

<style lang="scss">
@import "@/assets/css/vars";
@import "@/assets/css/mixins";

.features {
  margin: 100px 0;
  position: relative;
  > img {
    position: absolute;
    z-index: -1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .head {
    h5 {
      color: $mainColor;
      font-size: 17px;
    }
    h1 {
      @include head(50%, -50%);
    }
  }
  .text {
    .icon {
      width: 60px;
      height: 60px;
      background: $mainColor;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      font-size: 18px;
    }
    h4 {
      font-size: 18px;
      font-weight: 600;
      margin: 20px 0;
    }
  }
}
</style>
