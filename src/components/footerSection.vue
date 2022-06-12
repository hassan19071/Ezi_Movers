<template>
  <div class="footer">
    <div class="container px-lg-5">
      <div class="row">
        <div class="col-lg col-md-6 mt-4">
          <div class="text">
            <h1>Ezi <span>Movers</span></h1>
            <p class="mt-3">
              There are many variations of Lorem passages of Lorem Ipsum
              available, but the majority
            </p>
            <p class="my-3">By injected humour, or randomised words</p>
            <div class="links">
              <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
              <a href="#"><i class="fa-brands fa-twitter"></i></a>
              <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
        <div class="col-lg col-md-6 mt-4">
          <div class="text">
            <h3>Quick Link</h3>
            <ul class="list-unstyled">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Service</a></li>
              <li><a href="#">Loction</a></li>
              <li><a href="#">Testimonial</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
        </div>
        <div class="col-lg col-md-6 mt-4">
          <div class="text">
            <h3>Recent News</h3>
            <div class="data">
              <p class="mt-3 mb-0">
                There are many variations of passages of Lorem
              </p>
              <i class="fa-solid fa-clock me-2"></i>
              <span> Octobor 10, 2022</span>
            </div>
            <div class="data mt-4">
              <p class="mt-3">There are many variations of passages of Lorem</p>
              <i class="fa-solid fa-clock me-2"></i>
              <span> Octobor 10, 2022</span>
            </div>
          </div>
        </div>
        <div class="col-lg col-md-6 mt-4">
          <div class="text">
            <h3>Instagram</h3>
            <div class="imgs">
              <div class="row">
                <div class="col-4 mt-3">
                  <div class="img">
                    <img src="@/assets/imgs/footer1.jpg" class="w-100" />
                  </div>
                </div>
                <div class="col-4 mt-3">
                  <div class="img">
                    <img src="@/assets/imgs/footer2.jpg" class="w-100" />
                  </div>
                </div>
                <div class="col-4 mt-3">
                  <div class="img">
                    <img src="@/assets/imgs/footer3.jpg" class="w-100" />
                  </div>
                </div>
                <div class="col-4 mt-3">
                  <div class="img">
                    <img src="@/assets/imgs/footer4.jpg" class="w-100" />
                  </div>
                </div>
                <div class="col-4 mt-3">
                  <div class="img">
                    <img src="@/assets/imgs/footer5.jpg" class="w-100" />
                  </div>
                </div>
                <div class="col-4 mt-3">
                  <div class="img">
                    <img src="@/assets/imgs/footer6.jpg" class="w-100" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="foot text-center mt-5">
      © Copyrights 2022. All Rights Reserved. <br />
      Designed By Hassan.
    </div>
  </div>
</template>

<script>
export default {
  name: "footer_section",
};
</script>

<style lang="scss">
@import "@/assets/css/vars";
.footer {
  padding: 50px 0 0px;
  background: $secColor;
  color: #fff;
  .text {
    h1 {
      font-size: 35px;
      color: #fff;
      text-transform: uppercase;
      font-family: "Oleo Script", cursive;
      span {
        color: $mainColor;
        font-style: italic;
      }
    }
    h3 {
      font-size: 25px;
    }
    .data {
      span {
        color: rgb(189, 187, 187);
      }
      svg {
        color: $mainColor;
      }
    }
    .links {
      display: flex;

      a {
        display: flex;
        margin-right: 10px;
        width: 40px;
        height: 40px;
        justify-content: center;
        align-items: center;
        background: #fff;
        color: $secColor;
        border-radius: 50%;
        transition: 0.3s;
        &:hover {
          background: $mainColor;
          color: #fff;
        }
      }
    }
    ul {
      margin-top: 15px;
      li {
        margin-top: 10px;
        a {
          color: #fff;
          transition: 0.3s;
          &:hover {
            letter-spacing: 2px;
          }
        }
      }
    }
  }
  .foot {
    background: #0c172b;
    padding: 20px 0;
  }
}
</style>
