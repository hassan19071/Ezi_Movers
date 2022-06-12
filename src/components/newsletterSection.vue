<template>
  <div class="newsletter">
    <div class="container px-lg-5">
      <div class="row align-items-center">
        <div class="col-lg-4 my-4">
          <div class="text">
            <h4>Subscribe Our Newsletter</h4>
            <p class="mb-0 mt-3">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
            </p>
          </div>
        </div>
        <div class="col-lg my-4">
          <div class="form">
            <form
              action="post"
              class="d-flex justify-content-between flex-wrap"
            >
              <input type="text" placeholder="Name" class="my-3" />
              <input type="email" placeholder="Email" class="my-3" />
              <button class="my-3">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "newsletter-sec",
};
</script>

<style lang="scss">
@import "@/assets/css/vars";

.newsletter {
  margin: 0px 0 0;
  background: #ddd;
  padding: 60px 0;
  .text {
    h4 {
      font-weight: 700;
      font-size: 25px;
      color: #000;
    }
  }
  .form {
    input {
      width: 300px;
      padding: 10px 20px;
      border: 1px solid #ddd;
      outline: none;
    }
    button {
      border: none;
      outline: none;
      background: $mainColor;
      color: #fff;
      padding: 10px 20px;
    }
  }
}
</style>
