<template>
  <div class="testimonial">
    <div class="overlay"></div>
    <div class="container px-lg-5">
      <div class="opinions position-relative">
        <div class="opinion position-absolute" :class="num == 1 ? 'close' : ''">
          <img src="@/assets/imgs/testimonial2.jpg" alt="testi1" />
          <i class="fa-solid fa-quote-left"></i>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
            doloribus quisquam voluptates, repudiandae soluta optio earum
            corrupti id eligendi tempora obcaecati cumque voluptas nemo, rem
            dolores voluptate numquam beatae incidunt.
          </p>
          <h4>Hassan Khaled2</h4>
          <span>Derector</span>
        </div>
        <div class="opinion position-absolute" :class="num == 2 ? 'close' : ''">
          <img src="@/assets/imgs/testimonial3.jpg" alt="testi1" />
          <i class="fa-solid fa-quote-left"></i>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
            doloribus quisquam voluptates, repudiandae soluta optio earum
            corrupti id eligendi tempora obcaecati cumque voluptas nemo, rem
            dolores voluptate numquam beatae incidunt.
          </p>
          <h4>Hassan Khaled</h4>
          <span>Frontend Dev</span>
        </div>
        <div class="opinion position-absolute" :class="num == 3 ? 'close' : ''">
          <img src="@/assets/imgs/testimonial1.jpg" alt="testi1" />
          <i class="fa-solid fa-quote-left"></i>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
            doloribus quisquam voluptates, repudiandae soluta optio earum
            corrupti id eligendi tempora obcaecati cumque voluptas nemo, rem
            dolores voluptate numquam beatae incidunt.
          </p>
          <h4>Manela Watson</h4>
          <span>Frontend Dev</span>
        </div>
        <div class="buttons d-none d-md-flex">
          <div class="prev" @click="prevButton">
            <i class="fa-solid fa-left-long"></i>
          </div>
          <div class="next" @click="nextButton">
            <i class="fa-solid fa-right-long"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "testimonial-sec",
  data() {
    return {
      num: 1,
    };
  },
  methods: {
    prevButton: function () {
      if (this.num < 3) {
        this.num++;
      } else {
        this.num = 1;
      }
    },
    nextButton: function () {
      if (this.num == 1) {
        this.num = 3;
      } else {
        this.num--;
      }
    },
  },
  created() {
    setInterval(() => {
      if (this.num == 1) {
        this.num = 3;
      } else {
        this.num--;
      }
    }, 8000);
  },
};
</script>

<style lang="scss">
@import "@/assets/css/vars";

.testimonial {
  margin: 100px 0 0;
  background-image: url("@/assets/imgs/slider1.jpg");
  background-size: cover;
  background-position: center;

  position: relative;
  .overlay {
    background: #142440b4;
    width: 100%;
    top: 0;
    left: 0;
    bottom: 0;
    position: absolute;
  }
  .opinions {
    width: 100%;
    min-height: 700px;
    .buttons {
      position: absolute;
      width: 80%;
      display: flex;
      justify-content: space-between;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 1;

      svg {
        color: #fff;
        font-size: 20px;
        cursor: pointer;
      }
    }
    .opinion {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 2;
      text-align: center;
      background: #fff;
      padding: 0 20px 30px;
      border-radius: 10px;
      width: 60%;
      opacity: 0;
      visibility: hidden;
      transition: 1s;
      user-select: none;
      &.close {
        opacity: 1;
        visibility: visible;
      }
      &::before {
        content: "";
        position: absolute;
        top: 100%;
        left: 50%;
        width: 95%;
        height: 10px;
        background: rgba(255, 255, 255, 0.53);
        transform: translateX(-50%);
        border-radius: 0 0 10px 10px;
      }
      &::after {
        content: "";
        position: absolute;
        top: 100%;
        left: 50%;
        width: 90%;
        height: 10px;
        background: rgba(255, 255, 255, 0.337);
        transform: translateX(-50%) translateY(98%);
        border-radius: 0 0 10px 10px;
      }
      @media (max-width: 991px) {
        width: 80%;
      }
      @media (max-width: 720px) {
        width: 100%;
      }
      img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        border: 3px solid #ddd;
        margin: 0px auto;
        display: block;
        transform: translateY(-50%);
      }
      svg {
        font-size: 22px;
      }
      h4 {
        color: $mainColor;
        font-size: 20px;
        font-weight: 600;
      }
    }
  }
}
</style>
