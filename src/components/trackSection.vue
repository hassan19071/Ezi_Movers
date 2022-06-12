<template>
  <div class="track">
    <div class="container px-lg-5">
      <h1>Enter Your Email and Track Your Cargo</h1>
      <div class="row">
        <div class="col-md-6 col-lg-4 col-12">
          <div class="input">
            <input type="email" placeholder="Email" />
          </div>
        </div>
        <div class="col-md-6 col-lg-4 col-12">
          <div class="input">
            <input type="text" placeholder="Tracking Number" />
          </div>
        </div>
        <div class="col-md-6 col-lg-4 col-12">
          <div class="button">
            <button>Track Your Cargo</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "track-section",
};
</script>

<style lang="scss">
@import "@/assets/css/vars";
.track {
  background-image: url("../assets/imgs/track-section-bg.jpg");
  background-repeat: no-repeat;
  padding: 60px 0;
  background-size: cover;
  h1 {
    color: #fff;
    font-size: calc(1vw + 0.8rem);
    font-weight: bold;
    margin-bottom: 25px;
  }
  .input {
    margin-top: 20px;
    input {
      width: 100%;
      border: none;
      outline: none;
      padding: 10px 15px;
    }
  }
  .button {
    margin-top: 20px;
    button {
      padding: 10px;
      border: none;
      outline: none;
      background: $mainColor;
      color: #fff;
    }
  }
}
</style>
