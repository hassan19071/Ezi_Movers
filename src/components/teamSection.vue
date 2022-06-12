<template>
  <div class="team">
    <div class="container text-center px-lg-5">
      <div class="head">
        <h5>We Are With You</h5>
        <h1>Our Team Members</h1>
      </div>
      <div class="row justify-content-center mt-5">
        <div class="col-lg col-md-6 mt-4">
          <div class="member">
            <div class="img">
              <img src="@/assets/imgs/team1.jpg" alt="marina" />
              <div
                class="links d-flex align-items-center justify-content-center"
              >
                <div class="icons">
                  <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                  <a href="#"><i class="fa-brands fa-twitter"></i></a>
                  <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>
            <h3>Elizabeth Bannet</h3>
            <span>Logistic Maneger</span>
          </div>
        </div>
        <div class="col-lg col-md-6 mt-4">
          <div class="member">
            <div class="img">
              <img src="@/assets/imgs/team2.jpg" alt="marina" />
              <div
                class="links d-flex align-items-center justify-content-center"
              >
                <div class="icons">
                  <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                  <a href="#"><i class="fa-brands fa-twitter"></i></a>
                  <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>
            <h3>Johnthan Rok</h3>
            <span>Packeging Maneger</span>
          </div>
        </div>
        <div class="col-lg col-md-6 mt-4">
          <div class="member">
            <div class="img">
              <img src="@/assets/imgs/team3.jpg" alt="marina" />
              <div
                class="links d-flex align-items-center justify-content-center"
              >
                <div class="icons">
                  <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                  <a href="#"><i class="fa-brands fa-twitter"></i></a>
                  <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>
            <h3>Simon D’soza</h3>
            <span>Logistic Maneger</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "team-members",
};
</script>

<style lang="scss">
@import "@/assets/css/mixins";
@import "@/assets/css/vars";

.team {
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
  .member {
    background: #fff;
    padding-bottom: 20px;
    &:hover {
      .img {
        img {
          transform: scale(1.1);
        }
        .links {
          opacity: 1;
          visibility: visible;
          .icons {
            a {
              &:first-of-type {
                transform: translateY(-110%);
              }
              &:last-of-type {
                transform: translateY(110%);
              }
            }
          }
        }
      }
    }
    .img {
      position: relative;
      overflow: hidden;
      height: fit-content;
      img {
        width: 100%;
        transition: 0.3s;
      }
      .links {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        background: #34ccff6a;
        transition: 0.3s;
        opacity: 0;
        visibility: hidden;
        .icons {
          display: flex;
          a {
            margin: 0 10px;
            width: 44px;
            height: 44px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            background: #fff;
            transition: 0.3s;
            svg {
              font-size: 20px;
              color: $mainColor;
            }
          }
        }
      }
    }
    h3 {
      margin: 30px 0 10px;
      font-size: 20px;
      font-weight: 700;
      cursor: pointer;
      transition: 0.3s;
      &:hover {
        color: $mainColor;
      }
    }
  }
}
</style>
