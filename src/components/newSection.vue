<template>
  <div class="news">
    <div class="container px-lg-5 text-center">
      <div class="head">
        <h5>Stay With Our Blog</h5>
        <h1>Our Latest News</h1>
      </div>
      <div class="row justify-content-center mt-5">
        <div class="col-lg col-md-6 mt-4">
          <div class="new position-relative">
            <img src="@/assets/imgs/news1.jpg" class="w-100" />
            <div class="overlay"></div>
            <div class="position-absolute text">
              <h4>We can ensure you about the safe delevery</h4>
              <div class="data d-flex">
                <a href="#">Business</a>
                <p class="mb-0">October 15, 2022</p>
              </div>
            </div>
            <div class="position-absolute sec-text text-center">
              <h4>We can ensure you about the safe delevery</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
                quibusdam illum.
              </p>
              <a href="#">Read More..</a>
              <div class="data d-flex">
                <a href="#">Business</a>
                <p class="mb-0">October 15, 2022</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg col-md-6 mt-4">
          <div class="new position-relative">
            <img src="@/assets/imgs/news2.jpg" class="w-100" />
            <div class="overlay"></div>
            <div class="position-absolute text">
              <h4>We can ensure you about the safe delevery</h4>
              <div class="data d-flex">
                <a href="#">Business</a>
                <p class="mb-0">October 15, 2022</p>
              </div>
            </div>
            <div class="position-absolute sec-text text-center">
              <h4>We can ensure you about the safe delevery</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
                quibusdam illum.
              </p>
              <a href="#">Read More..</a>
              <div class="data d-flex">
                <a href="#">Business</a>
                <p class="mb-0">October 15, 2022</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg col-md-6 mt-4">
          <div class="new position-relative">
            <img src="@/assets/imgs/new3.jpg" class="w-100" />
            <div class="overlay"></div>
            <div class="position-absolute text">
              <h4>We can ensure you about the safe delevery</h4>
              <div class="data d-flex">
                <a href="#">Business</a>
                <p class="mb-0">October 15, 2022</p>
              </div>
            </div>
            <div class="position-absolute sec-text text-center">
              <h4>We can ensure you about the safe delevery</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
                quibusdam illum.
              </p>
              <a href="#">Read More..</a>
              <div class="data d-flex">
                <a href="#">Business</a>
                <p class="mb-0">October 15, 2022</p>
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
  name: "news-sec",
};
</script>

<style lang="scss">
@import "@/assets/css/mixins";
@import "@/assets/css/vars";

.news {
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
  .new {
    overflow: hidden;
    &:hover {
      .text {
        display: none;
      }
      .sec-text {
        transform: translateY(0);
      }
    }
    .overlay {
      position: absolute;
      background: rgba(17, 17, 17, 0.581);
      top: 0;
      bottom: 0;
      left: 0;
      width: 100%;
    }
    .text {
      z-index: 1;
      color: #fff;
      top: 100%;
      transform: translateY(-100%);
      h4 {
        font-size: 20px;
        padding: 0 20px;
      }
      .data {
        padding: 15px 20px;
        border-top: 1px solid rgb(198, 194, 194);
        justify-content: center;
        margin-top: 20px;
        a {
          color: #fff;
          margin-right: 15px;
          border-right: 1px solid #fff;
          padding-right: 15px;
        }
      }
    }
    .sec-text {
      top: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      background: rgba(255, 255, 255, 0.803);
      z-index: 2;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      transform: translateY(100%);
      transition: 0.4s;
      h4 {
        font-size: 20px;
        padding: 0 20px;
        margin-bottom: 20px;
      }
      p {
        padding: 0 20px;
        font-size: 14px;
      }
      a {
        color: $mainColor;
      }
      .data {
        padding: 15px 20px;
        border-top: 1px solid rgb(149, 147, 147);
        justify-content: center;
        margin-top: 20px;
        a {
          color: $mainColor;
          margin-right: 15px;
          border-right: 1px solid rgb(184, 182, 182);
          padding-right: 15px;
          font-size: 13px;
        }
        p {
          font-size: 13px;
        }
      }
    }
  }
}
</style>
