<template>
  <div class="we-did position-relative">
    <div class="overlay position-absolute"></div>
    <div class="container px-lg-5">
      <div
        class="row position-relative align-items-center justify-content-center"
        style="z-index: 2"
      >
        <div class="col-md col-12">
          <div class="content">
            <h2>Our Some Important Things That will Satisfite You...</h2>
            <p class="mt-4 mb-3">
              Many desktop publishing packages and web page editors now use
              Lorem Ipsum as their default model text, and a search for 'lorem
              ipsum' will uncover many web sites still in their infancy.Many
              desktop publishing packages and web page editors now
            </p>
            <button>Learn more</button>
          </div>
        </div>
        <div class="col-md col-12 mt-md-0 mt-4">
          <div class="quantity">
            <div class="row">
              <div class="col-6">
                <div class="nums">
                  <h1>2122</h1>
                  <p>Delivered Packages</p>
                </div>
              </div>
              <div class="col-6">
                <div class="nums">
                  <h1>782</h1>
                  <p>Countries Covered</p>
                </div>
              </div>
              <div class="col-6 mt-4">
                <div class="nums">
                  <h1>832</h1>
                  <p>Satisfied Clients</p>
                </div>
              </div>
              <div class="col-6 mt-4">
                <div class="nums">
                  <h1>5432</h1>
                  <p>Tons of Goods</p>
                </div>
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
  name: "we-did",
};
</script>

<style lang="scss">
@import "@/assets/css/vars";

.we-did {
  margin: 100px 0;
  background-image: url("../assets/imgs/we-did-bg.jpg");
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  padding: 100px 0;
  .overlay {
    background: #142440b4;
    width: 100%;
    top: 0;
    left: 0;
    bottom: 0;
  }
  .content {
    background: $mainColor;
    color: #fff;
    padding: 50px;
    button {
      background: #fff;
      color: #000;
      border: none;
      outline: none;
      padding: 10px 20px;
    }
  }
  .quantity {
    padding: 50px;
    color: #fff;
    h1 {
      position: relative;
      margin-bottom: 20px;
      &::before {
        position: absolute;
        width: 60px;
        height: 5px;
        background: $mainColor;
        content: "";
        top: 100%;
        left: 0;
      }
    }
    p {
      font-weight: 600;
    }
  }
}
</style>
