<template>
  <div class="top-head">
    <div class="container px-lg-5">
      <div
        class="content d-flex justify-content-lg-between justify-content-center"
      >
        <div class="closing-time d-lg-block d-none">
          <i class="fa-solid fa-clock"></i> Mon - Tues : 6:00 Am - 10:00 Pm,
          Sunday Closed
        </div>
        <div class="accounts d-flex align-items-center">
          <div class="social me-5">
            <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
            <a href="#"><i class="fa-brands fa-twitter"></i></a>
            <a href="#"><i class="fa-brands fa-instagram"></i></a>
            <a href="#"><i class="fa-brands fa-google-plus-g"></i></a>
          </div>
          <div class="log">
            <a href="#">Login</a> OR <a href="#">Register</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "top-head",
};
</script>

<style lang="scss">
@import "@/assets/css/vars";
.top-head {
  background: $secColor;
  padding: 10px 0;
  .closing-time {
    color: #fff;
    display: flex;
    align-items: center;
    svg {
      color: $mainColor;
      margin-right: 5px;
    }
  }
  .accounts {
    .social {
      a {
        margin: 0 10px;
        color: #fff;
      }
    }
    .log {
      color: #fff;
      a {
        color: $mainColor;
        &:first-of-type {
          margin-right: 10px;
        }
        &:last-of-type {
          margin-left: 10px;
        }
      }
    }
  }
}
</style>
