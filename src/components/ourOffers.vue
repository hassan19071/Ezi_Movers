<template>
  <div class="offers">
    <div class="container px-lg-5">
      <div class="row">
        <div class="col-lg-4 col-12">
          <div class="types py-5 px-4">
            <div class="type d-flex align-items-center">
              <div class="div">
                <div class="icon">
                  <i class="fa-solid fa-ship"></i>
                </div>
              </div>
              <div class="text">
                <h4>Ocean Freight</h4>
                <p>There are many variations of passages of Lorem Ipsum</p>
              </div>
            </div>
            <div class="type d-flex align-items-center my-5">
              <div class="div">
                <div class="icon">
                  <i class="fa-solid fa-truck-fast"></i>
                </div>
              </div>
              <div class="text">
                <h4>Road Freight</h4>
                <p>There are many variations of passages of Lorem Ipsum</p>
              </div>
            </div>
            <div class="type d-flex align-items-center">
              <div class="div">
                <div class="icon">
                  <i class="fa-solid fa-plane-up"></i>
                </div>
              </div>
              <div class="text">
                <h4>Air Freight</h4>
                <p>There are many variations of passages of Lorem Ipsum</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-8 col-12 mt-lg-0 mt-4">
          <div class="description">
            <h2 class="mb-4">Internation Logistics & Transport</h2>
            <p>
              We Provide you the best service in the world.It is a long
              established fact that a reader will be distracted by the readable
              content of a page when looking at its layout. The point of using
              Lorem Ipsum is that it has a more-or-less normal distribution of
              letters, as opposed to using 'Content here, content here', making
              it look like readable English.
            </p>
            <div class="fes mt-4">
              <div class="point d-flex align-items-center">
                <div class="circle me-3"></div>
                <p>
                  Ipsum is that it has a more-or-less normal distribution of
                  letters
                </p>
              </div>
              <div class="point d-flex align-items-center">
                <div class="circle me-3"></div>
                <p>
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution
                </p>
              </div>
              <div class="point d-flex align-items-center">
                <div class="circle me-3"></div>
                <p>We Provide you the best service in the world.</p>
              </div>
              <div class="point d-flex align-items-center">
                <div class="circle me-3"></div>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable
                </p>
              </div>
              <div class="point d-flex align-items-center">
                <div class="circle me-3"></div>
                <p>normal distribution of letters, as opposed</p>
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
  name: "our-offers",
};
</script>

<style lang="scss">
@import "@/assets/css/vars";

.offers {
  margin: 100px 0;
  .types {
    background: rgba(221, 221, 221, 0.416);
    .type {
      .icon {
        width: 75px !important;
        height: 75px !important;
        background: $mainColor;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 20px;
        border-radius: 50%;
        svg {
          font-size: 25px;
        }
      }
      .text {
        h4 {
          font-size: 20px;
          font-weight: 600;
        }
        p {
          margin-bottom: 0 !important;
          margin-top: 10px;
          color: rgb(110, 110, 110);
        }
      }
    }
  }
  .description {
    h2 {
      font-size: 33px;
      font-weight: 700;
    }
    .fes {
      .point {
        margin-top: 10px;
        .circle {
          width: 15px;
          height: 15px;
          border-radius: 50%;
          background: $mainColor;
        }
        p {
          margin-bottom: 0 !important;
        }
      }
    }
  }
}
</style>
