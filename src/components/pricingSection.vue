<template>
  <div class="pricing">
    <div class="container px-lg-5 text-center">
      <div class="head">
        <h5>We Give You The Best</h5>
        <h1>Our Pricing Plan</h1>
      </div>
      <div class="row justify-content-center mt-5">
        <div class="col-lg col-md-6 mt-4 col-12">
          <div class="plan text-center">
            <div class="head-card">
              <h1>Free</h1>
              <p>per mile</p>
            </div>
            <h3>$0</h3>
            <ul class="list-unstyled">
              <li>1000kg load</li>
              <li>123 kg / pallet</li>
              <li>24/7 support</li>
              <li>Free Packaging</li>
              <li>Warehousing</li>
            </ul>
            <button>Open now</button>
          </div>
        </div>
        <div class="col-lg col-md-6 mt-4 col-12">
          <div class="plan text-center">
            <div class="head-card">
              <h1>Basic</h1>
              <p>per mile</p>
            </div>
            <h3>$120</h3>
            <ul class="list-unstyled">
              <li>2000kg load</li>
              <li>123 kg / pallet</li>
              <li>24/7 support</li>
              <li>basic Packaging</li>
              <li>Warehousing</li>
            </ul>
            <button>Open now</button>
          </div>
        </div>
        <div class="col-lg col-md-6 mt-4 col-12">
          <div class="plan text-center">
            <div class="head-card">
              <h1>Premium</h1>
              <p>per mile</p>
            </div>
            <h3>$200</h3>
            <ul class="list-unstyled">
              <li>3000kg load</li>
              <li>123 kg / pallet</li>
              <li>24/7 support</li>
              <li>premium Packaging</li>
              <li>Warehousing</li>
            </ul>
            <button>Order now</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "pricing-plan",
};
</script>

<style lang="scss">
@import "@/assets/css/vars";
@import "@/assets/css/mixins";

.pricing {
  margin: 100px 0;
  .head {
    h5 {
      color: $mainColor;
      font-size: 17px;
    }
    h1 {
      @include head(50%, -50%);
    }
  }
  .plan {
    background: #eee;
    padding-bottom: 20px;
    .head-card {
      background: $mainColor;
      padding: 15px 10px;
      color: #fff;
      border-radius: 10px 10px 0 0;
      margin-bottom: 30px;
      h1 {
        font-size: 30px;
      }
      p {
        margin-bottom: 0 !important;
      }
    }
    h3 {
      color: $mainColor;
    }
    ul {
      margin: 20px 0;
      li {
        padding: 8px 0;
        border-top: 1px solid rgb(231, 227, 227);
      }
    }
    button {
      background: $mainColor;
      border: none;
      outline: none;
      padding: 10px 20px;
      color: #fff;
    }
  }
}
</style>
