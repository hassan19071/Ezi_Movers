<template>
  <div class="navbar">
    <div class="container px-lg-5">
      <div
        class="content d-flex justify-content-between align-items-center w-100 position-relative"
      >
        <div class="logo">
          <h1 class="my-0">
            <router-link to="/" class="d-flex align-items-center">
              Ezi <span>Movers</span></router-link
            >
          </h1>
        </div>
        <div class="links d-flex align-items-center">
          <ul
            class="list-unstyled d-lg-flex mb-0 links-list"
            :class="openMenu ? '' : 'close'"
          >
            <li class="mx-lg-3 my-lg-0 my-3">
              <router-link to="/">Home</router-link>
            </li>
            <li class="mx-lg-3 my-lg-0 my-3">
              <router-link to="/about">About</router-link>
            </li>
            <li class="position-relative mx-lg-3 my-lg-0 my-3">
              <router-link to="/services">Services</router-link>
            </li>
            <li class="position-relative mx-lg-3 my-lg-0 my-3">
              <a href="#">pages <i class="fa-solid fa-angle-down"></i></a>
              <div class="drob-links position-absolute">
                <ul class="list-unstyled mb-0">
                  <li>
                    <router-link to="/pricing">pricing table</router-link>
                  </li>
                  <li><router-link to="/team">team</router-link></li>
                </ul>
              </div>
            </li>
            <li class="mx-lg-3 my-lg-0 my-3">
              <router-link to="/contact">Contact</router-link>
            </li>
          </ul>
          <div class="search-bar position-relative ms-3">
            <i class="fa-solid fa-magnifying-glass"></i>
            <div class="field position-absolute">
              <input type="text" placeholder="search here.." />
              <div class="search">
                <i class="fa-solid fa-magnifying-glass"></i>
              </div>
            </div>
          </div>
          <div
            class="burger-icon d-lg-none ms-3"
            :class="openMenu ? 'x' : ''"
            @click="openMenu = !openMenu"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "navSection",
  data() {
    return {
      openMenu: false,
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/css/vars";
.navbar {
  background: rgba(221, 221, 221, 0.425);
  padding-top: 0 !important;
  padding-bottom: 0 !important;
  position: absolute;
  z-index: 100;
  width: 100%;
  .logo {
    h1 {
      span {
        color: $mainColor;
        font-style: italic;
      }
      a {
        text-decoration: none;
        font-size: calc(1vw + 1rem);
        color: #fff;
        text-transform: uppercase;
        font-family: "Oleo Script", cursive;
      }
    }
  }
  .links {
    .links-list {
      @media (max-width: 991px) {
        padding: 20px;
        position: absolute;
        background: #000;
        top: 100%;
        width: 100%;
        left: 50%;
        transform: translate(-50%);
        z-index: 10;
        &.close {
          opacity: 0;
          visibility: hidden;
        }
        > li {
          > a {
            padding: 0 !important;
          }
          &:hover {
            .drob-links {
              position: relative !important;
            }
          }
        }
      }
    }
    > ul {
      > li {
        > a {
          text-transform: uppercase;
          padding: 20px 0 !important;
          display: inline-block;
          color: #fff;
          font-weight: 500;
          &:hover,
          &.router-link-active {
            color: $mainColor;
          }
        }
        &:hover {
          .drob-links {
            visibility: visible;
            opacity: 1;
          }
        }
      }

      .drob-links {
        background: #eee;
        overflow: hidden;
        opacity: 0;
        visibility: hidden;
        transition: 0.3s;
        z-index: 6;
        @media (min-width: 992px) {
          width: 250%;
        }
        padding: 10px;
        li {
          margin: 10px 0;
          a {
            color: #000;
            text-transform: uppercase;
            &:hover {
              color: $mainColor;
            }
          }
        }
      }
    }
    .search-bar {
      padding: 20px;
      cursor: pointer;
      font-size: 16px;
      &:hover {
        .field {
          opacity: 1;
          visibility: visible;
        }
      }
      > svg {
        color: #fff;
      }
      .field {
        background: #eee;
        display: flex;
        padding: 20px 20px;
        z-index: 1;
        align-items: center;
        overflow: hidden;
        opacity: 0;
        visibility: hidden;
        transition: 0.3s;
        right: 0;
        top: 100%;
        input {
          width: 200px;
          padding: 0px 10px;
          outline: none;
          border-right: none;
          height: 40px;
          border: none;
        }
        .search {
          background: $mainColor;
          width: 50px;
          cursor: pointer;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
    .burger-icon {
      width: 30px;
      height: 20px;
      position: relative;
      cursor: pointer;
      &.x {
        span {
          &:first-of-type {
            top: 9px;
            transform: rotate(45deg);
          }
          &:nth-of-type(2) {
            transform: translateX(-100%);
            opacity: 0;
            visibility: hidden;
          }
          &:last-of-type {
            top: 9px;
            transform: rotate(-45deg);
          }
        }
      }
      span {
        position: absolute;
        height: 2px;
        width: 100%;
        background: #000;
        &:first-of-type {
          top: 0;
        }
        &:nth-of-type(2) {
          top: 9px;
        }
        &:last-of-type {
          top: 18px;
        }
      }
    }
  }
}
</style>
