<template>
  <!-- <div class="page-overlay"></div> -->

  <header id="header" class="ad_page">
    <!-- MOBILE MENU START -->
    <div id="side-block">
      <div class="menu_wrap">
        <div class="hamb-menu side">
          <button
            class="hamburger hamburger--elastic"
            type="button"
            @click="toggleMenu"
          >
            <span class="hamburger-box">
              <span class="hamburger-inner"></span>
            </span>
          </button>
        </div>
        <div class="logo_wrap">
          <router-link to="/" @click="toggleMenu"
            ><img class="logo" src="../assets/images/logo.svg" alt="logo" />
          </router-link>
        </div>

        <ul class="mobile">
          <li><router-link to="/CatalogView">Каталог</router-link></li>
          <li @click="toggleMenu">
            <router-link to="/DeliveryPaymentView"
              >Доставка і оплата
            </router-link>
          </li>
          <li @click="toggleMenu">
            <router-link to="/AboutView">Про нас</router-link>
          </li>
          <li @click="toggleMenu">
            <router-link to="/ContactsView">Контакти</router-link>
          </li>
          <li @click="toggleMenu">
            <router-link to="/FaqView">FAQ </router-link>
          </li>
        </ul>
        <div class="mail_wrap">
          <router-link
            @click="toggleMenu"
            to="mailto:zakaz@loverflower.by"
            class="bigger link"
            >zakaz@loverflower.by</router-link
          >
          <div class="smaller">Доставка 24/7 по домовленості с оператором</div>
        </div>

        <div class="tel_wrap">
          <router-link to="tel:+375 (29) 113-69-69" class="bigger"
            >+375 (29) 113-69-69</router-link
          >
          <div class="smaller">Прийом дзвінків цілодобово</div>
        </div>
        <div class="social_wrap">
          <ul class="social_networks">
            <li>
              <router-link
                @click="toggleMenu"
                to="https://www.instagram.com/"
                title="instagram"
                target="_blank"
                rel="noopenner noreferrer"
              >
                <span class="icon-instagram"></span>
              </router-link>
            </li>
            <li>
              <router-link
                @click="toggleMenu"
                to="https://www.whatsapp.com/?lang=uk"
                title="whatsapp"
                target="_blank"
                rel="noopenner noreferrer"
              >
                <span class="icon-whatsapp"></span>
              </router-link>
            </li>

            <li>
              <router-link
                @click="toggleMenu"
                to="https://www.viber.com/en/"
                title="viber"
                target="_blank"
                rel="noopenner noreferrer"
              >
                <span class="icon-viber"></span>
              </router-link>
            </li>
          </ul>
        </div>
        <div class="green_text">Реквізити</div>
        <div class="adress">
          ТОВ "Ловефлове" 220035, Україна, м.Київ, вул. Тимірязєва буд. 67,
          кімн. 112 (прим.11) УНП 193263781, р/р BY55MTBK3012000109
        </div>
      </div>
    </div>
    <!-- MOBILE MENU END -->
    <div class="container">
      <div class="menu_wrap mobile-version">
        <div class="hamb-menu">
          <button
            class="hamburger hamburger--elastic"
            type="button"
            @click="toggleMenu"
          >
            <span class="hamburger-box">
              <span class="hamburger-inner"></span>
            </span>
          </button>
        </div>
        <h5>LOVER FLOWER</h5>
        <button class="cart" type="button">
          <span class="icon-shopping-bag"></span>
        </button>
      </div>
      <div class="menu_wrap main_menu">
        <div class="logo_wrap">
          <router-link to="/"
            ><img class="logo" src="../assets/images/logo.svg" alt="logo" />
          </router-link>
        </div>

        <ul>
          <li><router-link to="/CatalogView">Каталог</router-link></li>
          <li>
            <router-link to="/DeliveryPaymentView"
              >Доставка і оплата
            </router-link>
          </li>
          <li>
            <router-link to="/AboutView">Про нас</router-link>
          </li>
          <li><router-link to="/ContactsView">Контакти</router-link></li>
          <li><router-link to="/FaqView">FAQ </router-link></li>
        </ul>

        <div class="right_block_menu">
          <div class="tel_wrap">
            <router-link to="tel:+375 (29) 113-69-69">
              <span class="icon-phone"></span> +375 (29) 113-69-69</router-link
            >
          </div>
          <button class="cart" type="button">
            <span class="icon-shopping-bag"></span>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
$lightGreeen-color: #43ffd2;
$pastelPinc-color: #d978ac;
.main_menu {
  &.fixed {
    background-color: black;
    box-shadow: 0 0 5px #999;
    left: -2px;

    // justify-content: space-around;
    width: 100vw;
    max-width: 100vw;
    min-width: 100vw;
    backdrop-filter: blur(7px);
    box-shadow: 0 0 5px $lightGreeen-color;
    opacity: 0.9;
    height: 80px;
    z-index: 2000;
    padding: 10px;
  }
}
.menu_wrap.mobile-version {
  display: none;
}

.hamb-menu {
  display: none;
}
.page-overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: none;
  z-index: 2999;
  &.open {
    display: block;
  }
}

#header.ad_page #side-block .menu_wrap ul {
  min-width: 130px;
}
#side-block {
  .hamb-menu.side {
    display: block;
    margin-left: 176px;
  }
  .social_wrap {
    background-color: transparent;
    max-width: 200px;
    .social_networks {
      min-width: 139px;
      margin-bottom: -10px;
      background-color: transparent;
      height: auto;
      display: flex;
      flex-direction: row;
    }
  }
  .green_text {
    padding-top: 5px;
    margin-left: -20px;
  }
  .adress {
    max-width: 280px;
    font-size: 15px;
    margin-left: -20px;
    color: #fff;
  }
  ul li {
    text-decoration: none;
    border-bottom: none;
  }
  ul {
    min-width: 130px;
  }
  font-size: 20px;
  .mail_wrap,
  .tel_wrap {
    align-self: center;
    text-align: center;
    margin-left: -45px;
    color: #fff;
  }

  .menu_wrap {
    font-size: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 300px;
    ul.mobile {
      min-width: 297px;
      display: flex;
      z-index: 3000;
      flex-direction: column;
      font-size: 18px;
      li {
        margin-bottom: 8px;
        color: $lightGreeen-color;
        border-bottom: none;
      }
      li a {
        font-size: 18px;
        border-bottom: none;
        color: $lightGreeen-color;
      }
    }
  }
  width: 300px;
  position: fixed;
  left: 0;
  top: 0;
  background-color: #0a0b0e;
  color: $lightGreeen-color;
  border-right: $lightGreeen-color 7px solid;
  box-shadow: 0 0 5px $lightGreeen-color;
  .hamburger {
    padding: 0;
  }

  padding: 30px;
  height: 100vh;
  z-index: 3000;
  -webkit-transform: translateX(-300px);
  -ms-transform: translateX(-300px);
  transform: translateX(-300px);
  -webkit-transition: all 0.7s ease;
  -o-transition: all 0.7s ease;
  transition: all 0.7s ease;
  &.open {
    -webkit-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0);
  }
}

@media screen and (max-width: 700px) {
  .menu_wrap {
    display: none;
  }
  .hamb-menu {
    max-width: 100px;

    // margin-left: 80%;
  }
  .menu_wrap.mobile-version {
    display: block;
    display: flex;

    left: -2px;

    // justify-content: space-around;
    width: 100vw;
    max-width: 100vw;
    min-width: 100vw;
    max-width: 90vw;
    gap: 100px;
    align-items: center;
    justify-content: space-between;
    &.fixed {
      background-color: black;
      box-shadow: 0 0 5px $lightGreeen-color;
      width: 100vw;
      max-width: 100vw;
      backdrop-filter: blur(7px);
      opacity: 0.9;
    }

    h5 {
      font-family: "Cormorant";
      font-weight: 300;
      font-size: 20px;
      max-width: 100px;
      line-height: 24px;
      padding-top: 5px;
      letter-spacing: 1.2px;
    }
    .hamb-menu {
      display: block;
    }
  }
}
</style>
<script>
export default {
  name: "MainHeader",
  created() {
    window.addEventListener("scroll", this.fixedHeader);
  },
  methods: {
    fixedHeader() {
      if (window.scrollY > 90) {
        document
          .querySelector(" .menu_wrap.mobile-version")
          .classList.add("fixed");
        document.querySelector(".main_menu").classList.add("fixed");
      } else {
        document
          .querySelector(" .menu_wrap.mobile-version")
          .classList.remove("fixed");
        document.querySelector(".main_menu").classList.remove("fixed");
      }
    },
    toggleMenu() {
      document.querySelector(".hamburger").classList.toggle("is-active");
      document.querySelector("#side-block").classList.toggle("open");
      document.querySelector(".page-overlay").classList.toggle("open");
      document.querySelector("body").classList.toggle("lock");
    },
  },
};
</script>
