<template>
  <div class="missions">
    <div class="container px-lg-5">
      <div class="head text-center">
        <h5>We Provide the Best</h5>
        <h1>Our Mission</h1>
      </div>
      <div class="row justify-content-center mt-5">
        <div class="col-lg col-md-6 mt-4">
          <div class="content position-relative">
            <img src="@/assets/imgs/mission1.jpg" alt="mission1" />
            <div class="text position-absolute d-flex p-4">
              <i class="fa-solid fa-earth-africa"></i>
              <div class="ms-3">
                <h4>Ensure Safety</h4>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority , There are many variations of
                  passages of Lorem Ipsum available,
                </p>
                <a href="#">See More...</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg col-md-6 mt-4">
          <div class="content position-relative">
            <img src="@/assets/imgs/mission2.jpg" alt="mission2" />
            <div class="text position-absolute d-flex p-4">
              <i class="fa-solid fa-truck-ramp-box"></i>
              <div class="ms-3">
                <h4>Build Up Community</h4>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority , There are many variations of
                  passages of Lorem Ipsum available,
                </p>
                <a href="#">See More...</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg col-md-6 mt-4">
          <div class="content position-relative">
            <img src="@/assets/imgs/mission3.jpg" alt="mission3" />
            <div class="text position-absolute d-flex p-4">
              <i class="fa-solid fa-plane-departure"></i>
              <div class="ms-3">
                <h4>In Time Delivery</h4>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority , There are many variations of
                  passages of Lorem Ipsum available,
                </p>
                <a href="#">See More...</a>
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
  name: "mission-sec",
};
</script>

<style lang="scss">
@import "@/assets/css/vars";
@import "@/assets/css/mixins";

.missions {
  margin: 100px 0;
  .head {
    h5 {
      font-size: 17px;
      color: $mainColor;
    }
    h1 {
      @include head(50%, -50%);
    }
  }
  .content {
    overflow: hidden;
    &:hover {
      .text {
        transform: translateY(0);
      }
    }
    img {
      width: 100%;
      height: 350px;
    }
    .text {
      top: 0;
      width: 100%;
      background: #142440e6;
      height: 100%;
      color: rgb(209, 204, 204);
      transform: translateY(80%);
      transition: 0.3s;
      svg {
        font-size: 30px;
      }
      h4 {
        font-weight: 600;
        font-size: 20px;
        margin-bottom: 20px;
      }
      a {
        color: $mainColor;
      }
    }
  }
}
</style>
