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
          <button @click="toggleCart()" class="cart" type="button">
            <div class="product_qty">{{ this.inCart }}</div>
            <span class="icon-shopping-bag"></span>
          </button>
        </div>
      </div>
    </div>
    <!-- CART BLOCK START -->
    <div class="cart_side">
      <div class="cart_header">
        <h4>Ваша корзина</h4>
        <div @click="toggleCart()" class="close"></div>
      </div>
      <div class="cart_body">
        <div class="cart_item" v-for="flower in cart" :key="flower">
          <div class="center_block">
            <img
              :src="require(`@/assets/images/flowers/${flower.id}.1.jpg`)"
              class="card-img-top"
              :alt="flower.title"
            />

            <div class="wrap_qty_title">
              <div class="flower_title">
                {{ flower.name }}
              </div>
              <div class="qty_change">
                <button
                  type="button"
                  class="_inc"
                  @click="changeProductQty(flower.id, 'inc')"
                >
                  +
                </button>
                <div>{{ flower.qty }}</div>
                <button
                  type="button"
                  class="qty_dec"
                  @click="changeProductQty(flower.id, 'dec')"
                >
                  -
                </button>
              </div>
            </div>
          </div>
          <div class="total_block">
            <div class="price_item">{{ flower.total }} UAN</div>
            <button
              type="button"
              class="delete_btn"
              @click="askProdDel(flower.id)"
            >
              видалити
            </button>
          </div>
        </div>
      </div>
      <div class="cart_footer">
        <div class="to_pay">До сплати: {{ this.total }} UAN</div>
        <div class="warning">
          Щоб дізнатися про вартість доставки, перейдіть до оформлення
          замовлення.
        </div>

        <button class="transparent_btn btn_pay" type="button">
          Оформити замовленння
        </button>
      </div>
    </div>
    <!-- CART BLOCK END -->
  </header>
</template>

<style lang="scss" scoped>
$lightGreeen-color: #43ffd2;
$pastelPinc-color: #d978ac;
.cart {
  .cart_footer {
    .btn_pay {
      width: 100%;
    }
  }
  position: relative;
  height: 55px;
  span {
    font-size: 21px;
  }
}
.transparent_btn {
  margin-top: 20px;
  font-size: 14px;
  font-family: 400;
  padding: 16px 51px;
  // max-width: 320px;
  width: 100%;
}
.flower_title {
  color: #fff;
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 1.2px;
  padding-bottom: 20px;
  max-width: 120px;
  line-height: 16px;
}
.product_qty {
  position: absolute;
  top: 14px;
  left: 36px;
  width: 20px;
  height: 20px;
  font-size: 14px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: $lightGreeen-color;
  color: black;
}
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
    position: fixed;
    opacity: 0.9;
    height: 80px;
    z-index: 7000;
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
  z-index: 7001;
  &.open {
    display: block;
  }
}

#header.ad_page #side-block .menu_wrap ul {
  min-width: 130px;
}
// CART BLOCK START
.cart_side {
  .to_pay {
    text-transform: uppercase;
    margin-top: 25px;
    font-size: 16px;
  }
  .warning {
    color: white;
    text-transform: uppercase;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 1.2px;
  }
  .delete_btn {
    background-color: transparent;
    border: none;
    color: white;
    border-bottom: 1px solid white;
    text-transform: uppercase;
    margin-top: 15px;
    font-family: "Oswald";
    font-weight: 500;
    &:hover {
      cursor: pointer;
    }
  }
  .qty_change {
    width: 100px;
    height: 30px;
    display: flex;
    justify-content: center;
    border: 1px solid #9f9f9f;
    div {
      padding-left: 22px;
      padding-right: 22px;
      display: flex;
      font-size: 12px;
      justify-content: center;
      align-items: center;
    }
    button {
      &:hover {
        cursor: pointer;
      }
      background-color: transparent;
      border: none;
      display: flex;

      align-items: center;
      color: #9f9f9f;
      font-family: "Oswald";
      font-weight: 400;
      font-size: 20px;
    }
    .qty_inc {
      justify-content: center;
    }
    .qty_dec {
      margin-top: -4px;
    }
  }
  .center_block {
    display: flex;
    flex-direction: row;
    column-gap: 10px;
  }
  .cart_header {
    border-bottom: 1px #555555 solid;
    display: flex;
    justify-content: space-between;
    h4 {
      text-transform: uppercase;
      font-size: 30px;
      line-height: 45px;
      letter-spacing: 2px;
      font-weight: 700;
      padding-bottom: 16px;
    }
  }
  .cart_item {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px #555555 solid;
    padding: 20px 10px;
    img {
      max-width: 60px;
      height: 80px;
      margin-right: 10px;
    }
  }

  .close {
    width: 30px;
    height: 30px;
    position: relative;
    &:before {
      content: "";
      width: 30px;
      height: 30px;
      position: absolute;
      top: 9px;
      left: 11px;
      border-top: 3px solid $lightGreeen-color;
      transform: rotate(-49deg);
    }
    &:after {
      content: "";
      width: 30px;
      height: 30px;
      position: absolute;
      top: 8px;
      left: -9px;
      border-top: 3px solid $lightGreeen-color;
      transform: rotate(49deg);
    }
  }

  width: 25vw;
  min-width: 400px;
  position: fixed;
  right: 0;
  top: 0;
  background-color: #0a0b0e;
  color: $lightGreeen-color;
  padding: 30px;
  height: 100vh;
  overflow: scroll;
  z-index: 3000;
  -webkit-transform: translateX(25vw);
  -ms-transform: translateX(25vw);
  transform: translateX(25vw);
  -webkit-transition: all 0.7s ease;
  -o-transition: all 0.7s ease;
  transition: all 0.7s ease;
  &.open {
    -webkit-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0);
  }
  .price_item {
    font-size: 16px;
  }
}
// CART BLOCK END
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

  .hamburger {
    padding: 0;
  }
  width: 300px;
  position: fixed;
  left: 0;
  top: 0;
  background-color: #0a0b0e;
  color: $lightGreeen-color;
  border-right: $lightGreeen-color 7px solid;
  box-shadow: 0 0 5px $lightGreeen-color;
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
// import {  } from "@babel/types";
import axios from "axios";

export default {
  name: "MainHeader",
  data() {
    return {
      cart: [],
      newQty: 1,
      flower: [],
    };
  },
  created() {
    window.addEventListener("scroll", this.fixedHeader);
    this.cart = JSON.parse(localStorage.getItem("products in cart")) || [];
    axios.get("/data/flowers.json").then((resp) => {
      this.flowers = resp.data;
    });
  },

  computed: {
    // showQty() {
    //   this.addToCart();
    //   return this.cart.length;
    // },
    total() {
      let sum = 0;
      this.cart.forEach((element) => {
        sum += element.total;
      });
      return sum;
    },
    inCart() {
      return this.cart.length;
    },
  },
  methods: {
    // calculateTotal() {
    //   console.log("CALLCULAAATE TIME");
    //   console.log(typeof this.cart);

    //   for (let i = 0; i <= Object.keys(this.cart).length; i++) {
    //     console.log(this.cart[i].total);
    //     this.total += this.cart[i].total;

    //   }
    //   console.log(this.total);
    // },
    changeProductQty(id, action) {
      const index = this.flowers.findIndex((el) => el.id === id);
      const indexCart = this.cart.findIndex((el) => el.id === id);
      if (this.flowers[index].id === id) {
        if (action === "inc") {
          this.newQty = this.flowers[index].qty + 1;
        } else {
          if (this.flowers[index].qty >= 2) {
            this.newQty = this.flowers[index].qty - 1;
          } else {
            return false;
          }
        }
        this.flowers[index].qty = this.newQty;
        this.cart[indexCart].qty = this.newQty;
        this.cart[indexCart].total = this.cart[indexCart].price * this.newQty;
        // this.calculateTotal();
        localStorage.setItem("products in cart", JSON.stringify(this.cart));
      }
    },
    askProdDel(id) {
      // this.calculateTotal();
      const index = this.cart.findIndex((element) => element.id === id);
      this.cart.splice(index, 1);
      localStorage.setItem("products in cart", JSON.stringify(this.cart));
    },
    addToCart() {
      this.cart = JSON.parse(localStorage.getItem("products in cart")) || [];
      return this.cart.length;
    },
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

    toggleCart() {
      // this.calculateTotal();
      document.querySelector(".cart_side").classList.toggle("open");
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
