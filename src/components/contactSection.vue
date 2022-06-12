<template>
  <div class="contact">
    <div class="container px-lg-5">
      <div class="head text-center">
        <h5>Try to find us</h5>
        <h1>Contatc Us</h1>
      </div>
      <div class="form">
        <div class="row align-items-center">
          <div class="col-lg-5 col-12">
            <div class="infos">
              <div class="info d-flex align-items-center">
                <div class="icon">
                  <div><i class="fa-solid fa-location-dot"></i></div>
                </div>
                <div class="text ms-4">
                  <h4>Address</h4>
                  <p class="mb-0">123 Street, Minin, Egy</p>
                </div>
              </div>
              <div class="info d-flex align-items-center my-5">
                <div class="icon">
                  <div><i class="fa-solid fa-phone"></i></div>
                </div>
                <div class="text ms-4">
                  <h4>Call Us</h4>
                  <p class="mb-0">+01152205570</p>
                </div>
              </div>
              <div class="info d-flex align-items-center">
                <div class="icon">
                  <div><i class="fa-solid fa-envelope"></i></div>
                </div>
                <div class="text ms-4">
                  <h4>Email Us</h4>
                  <p class="mb-0">Hk5949467@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-7 col-12 mt-5 mt-lg-0">
            <form>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" class="my-3" />
              <textarea
                name="msg"
                id="msg"
                cols="30"
                rows="10"
                placeholder="Entre Your Message"
              ></textarea>
              <input type="submit" value="Send Your Message" class="mt-3" />
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "contact-sec",
};
</script>

<style lang="scss">
@import "@/assets/css/mixins";
@import "@/assets/css/vars";
.contact {
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
  .form {
    margin-top: 50px;
    .infos {
      .info {
        .icon {
          div {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background: $mainColor;
            color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            svg {
              font-size: 25px;
            }
          }
        }
        .text {
          h4 {
            font-size: 22px;
            font-weight: 600;
            color: #333;
          }
          p {
            color: rgb(110, 105, 105);
          }
        }
      }
    }
    form {
      input,
      textarea {
        width: 100%;
        padding: 7px 15px;
        border: 1.5px solid #ddd;
        &:focus {
          border: 1.5px solid $mainColor !important;
          outline: none;
        }
      }
      input[type="submit"] {
        background: $mainColor;
        color: #fff;
        padding: 10px;
        border: 1.5px solid #ddd;
      }
    }
  }
}
</style>
