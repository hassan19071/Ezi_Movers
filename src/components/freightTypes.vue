<template>
  <div class="freight-types">
    <div class="container px-lg-5">
      <div class="row text-center">
        <div class="col-md col-6">
          <div class="type">
            <div class="icon">
              <i class="fa-solid fa-ship"></i>
            </div>
            <div class="text">
              <h3>Ocean Freight</h3>
            </div>
          </div>
        </div>
        <div class="col-md col-6">
          <div class="type">
            <div class="icon">
              <i class="fa-solid fa-truck-fast"></i>
            </div>
            <div class="text">
              <h3>Road Freight</h3>
            </div>
          </div>
        </div>
        <div class="col-md col-6">
          <div class="type">
            <div class="icon">
              <i class="fa-solid fa-plane-up"></i>
            </div>
            <div class="text">
              <h3>Air Freight</h3>
            </div>
          </div>
        </div>
        <div class="col-md col-6">
          <div class="type">
            <div class="icon">
              <i class="fa-solid fa-truck-moving"></i>
            </div>
            <div class="text">
              <h3>Warehousing</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "freight-types",
};
</script>

<style lang="scss">
@import "@/assets/css/vars";
.freight-types {
  margin: 50px 0;
  .type {
    margin-top: 20px;
    .icon {
      width: 100px;
      height: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: auto;
      background: $mainColor;
      svg {
        font-size: 30px;
        color: #fff;
      }
    }
    .text {
      padding: 25px 20px;
      background: $mainColor;
      h3 {
        font-size: calc(0.7vw + 0.6rem);
        color: #fff;
      }
    }
  }
}
</style>
