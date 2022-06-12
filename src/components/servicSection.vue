<template>
  <div class="services">
    <div class="container px-lg-5">
      <div class="head text-center">
        <h5>We Provide the Best</h5>
        <h1>Our Service</h1>
      </div>
      <div class="row text-center mt-5">
        <div class="col-lg-4 col-md-6 col-12 mt-4">
          <div class="content">
            <div class="icon">
              <i class="fa-solid fa-truck-fast"></i>
            </div>
            <h4>Land Transport</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo,
              obcaecati.
            </p>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-12 mt-4">
          <div class="content">
            <div class="icon">
              <i class="fa-solid fa-ship"></i>
            </div>
            <h4>Sea Freight</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo,
              obcaecati.
            </p>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-12 mt-4">
          <div class="content">
            <div class="icon">
              <i class="fa-solid fa-plane-up"></i>
            </div>
            <h4>Air Freight</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo,
              obcaecati.
            </p>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-12 mt-4">
          <div class="content">
            <div class="icon">
              <i class="fa-solid fa-anchor"></i>
            </div>
            <h4>Logistic Solutions</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo,
              obcaecati.
            </p>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-12 mt-4">
          <div class="content">
            <div class="icon">
              <i class="fa-solid fa-truck"></i>
            </div>
            <h4>Packaging and Store</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo,
              obcaecati.
            </p>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-12 mt-4">
          <div class="content">
            <div class="icon">
              <i class="fa-solid fa-cart-flatbed-suitcase"></i>
            </div>
            <h4>Warehousing</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo,
              obcaecati.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "services-sec",
};
</script>

<style lang="scss">
@import "@/assets/css/vars";
@import "@/assets/css/mixins";
.services {
  padding: 100px 0;
  background: #ddd;
  .head {
    h5 {
      color: $mainColor;
      font-size: 17px;
    }
    h1 {
      @include head(50%, -50%);
    }
  }
  .content {
    background: #fff;
    padding: 30px 20px;
    border-radius: 10px;
    .icon {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background: $mainColor;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 30px;
      color: #fff;
      font-size: 25px;
    }
    h4 {
      font-size: 20px;
      color: #000;
      font-weight: 600;
      margin-bottom: 20px;
    }
  }
}
</style>
