<template>
  <main>
    <section class="product_page">
      <div class="spots">
        <div class="flowers">
          <div class="container">
            <div class="product_block">
              <div class="flower_item">
                <div class="product_photos">
                  <div class="right_photo">
                    <img
                      @click="changeImg(this.first, 'first')"
                      v-if="flower.images[1]"
                      :src="
                        require(`@/assets/images/flowers/${
                          flower.images[this.first]
                        }`)
                      "
                      class="card-img-top"
                      :alt="flower.title"
                    />
                    <img
                      @click="changeImg(this.second, 'second')"
                      v-if="flower.images[2]"
                      :src="
                        require(`@/assets/images/flowers/${
                          flower.images[this.second]
                        }`)
                      "
                      class="card-img-top"
                      :alt="flower.title"
                    />
                  </div>
                  <div class="center_photo">
                    <img
                      v-if="flower.images[0]"
                      :src="
                        require(`@/assets/images/flowers/${
                          flower.images[this.center]
                        }`)
                      "
                      class="card-img-top"
                      :alt="flower.title"
                    />
                  </div>
                </div>
                <div class="info_product">
                  <router-link class="to_main" to="/CatalogView"
                    >назад</router-link
                  >
                  <div class="title_product">{{ flower.title }}</div>
                  <div class="price">
                    {{ flower.price }} UAN
                    <span class="old_price" v-if="flower.isSale"
                      >{{ flower.old_price }} UAN</span
                    >
                  </div>
                  <div class="contains">
                    <span class="title_category">CКЛАД:</span>
                    {{ flower.consist }}
                  </div>
                  <div class="description">
                    {{ flower.description }}
                  </div>
                  <div class="marks">
                    <span class="title_category">Категорії: </span>
                    <span v-for="mark in flower.marks" :key="mark"
                      >{{ mark }},
                    </span>
                  </div>
                  <div class="btns_wrap">
                    <button
                      class="transparent_btn"
                      type="button"
                      @click="addToCart(flower.id, flower.price, flower.title)"
                    >
                      У корзину
                    </button>

                    <div class="qty_change">
                      <button
                        type="button"
                        class="_inc"
                        @click="changeProductQty(flower.id, 'inc')"
                      >
                        +
                      </button>
                      <div>{{ this.newQty }}</div>
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
              </div>
            </div>

            <div class="container">
              <div class="paym_methods">
                <div class="title center">Додатково до замовлення:</div>
                <div class="methods_wrap">
                  <div class="method">
                    <div class="highlited">Добрива для зрізаних квітів</div>
                    <div class="text">
                      При вказівці про це у побажаннях до букету, ми додамо
                      пакетик добрива для вас
                    </div>
                  </div>
                  <div class="method">
                    <div class="highlited">підпишемо листівку</div>
                    <div class="text">
                      У побажаннях до букету вкажіть текст, який хочете
                      розмістити та виберіть на сайті саму листівку
                    </div>
                  </div>
                  <div class="method">
                    <div class="highlited">Фото букета перед відправкою</div>
                    <div class="text">
                      У примітці до замовлення вкажіть про це ми відправимо фото
                      готового букета перед доставкою.
                    </div>
                  </div>
                  <div class="method">
                    <div class="highlited">Букет-сюрприз</div>
                    <div class="text">
                      Якщо хочете, щоб одержувач не знав, що йому вручать і від
                      когось, то вкажіть про це у примітці до замовлення
                    </div>
                  </div>
                </div>
              </div>
              <div class="info_wrapper">
                <div class="paym_methods">
                  <div class="title">Способи оплати:</div>
                  <ul>
                    <li>
                      БАНКІВСЬКОЮ КАРТОЮ ПРИ ОФОРМЛЕННІ ЗАМОВЛЕННЯ ЧЕРЕЗ САЙТ
                      або за посиланням
                    </li>
                    <li>
                      Готівкою, БАНКІВСЬКОЮ КАРТОЮ ПРИ САМОВИВОЗІ або з
                      розрахункового рахунку організації
                    </li>
                    <li>Готівкою при доставці кур'єром</li>
                    <li>КРИПТОВАЛЮТОЮ</li>
                  </ul>
                </div>

                <div class="cost_info">
                  <div class="title">вартість доставки:</div>
                  <ul>
                    <li>
                      <span> Безкоштовно</span> – при замовленні на суму
                      <span class="highlighted"> від 300 гривень </span>
                    </li>
                    <li>
                      <span> 50 гривень</span> – при замовленні на суму
                      <span class="highlighted"> менше 300 гривень </span>
                    </li>
                    <li>
                      Також ви можете забрати ваше замовлення самостійно за
                      адресою:

                      <span class="highlighted">
                        м.Київ, вул. Анни Ахматової, 25, кімн. 112 щоденно з
                        10.00 до 21.00
                      </span>
                    </li>
                  </ul>
                </div>
                <div class="conditions_info">
                  <div class="title">Умови доставки:</div>
                  <ul>
                    <li>
                      Доставка здійснюється по місту Київ в межах правобережжя
                      <span class="highlighted"> будь-якого дня.</span>
                    </li>
                    <li>
                      Можливість, терміни та вартість доставки за межі правого
                      берега, доставки у нічний час, свята
                      <span class="highlighted">
                        обговорюються з менеджеромь
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="slider_wrape">
            <div class="container">
              <div class="title">Вас також можуть зацікавити:</div>
              <sliderFavourite />
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
$lightGreeen-color: #43ffd2;
$pastelPinc-color: #d978ac;
$pastelPinc-colorSpot: #d978ac8b;
$lightGreeen-colorSpot: #43ffd399;
// PRODUCT PAGE START
.product_page {
  .product_photos img {
    &:hover {
      cursor: pointer;
    }
  }
  .slider_wrape {
    padding-bottom: 150px;
  }
  .btns_wrap {
    display: flex;
    flex-direction: row;
    column-gap: 30px;
    .qty_change {
      width: 160px;
      display: flex;
      justify-content: center;
      border: 1px solid #fff;
      div {
        padding-left: 51px;
        padding-right: 51px;
        display: flex;
        font-size: 19px;
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
        color: white;
        font-family: "Oswald";
        font-weight: 400;
        font-size: 25px;
      }
      .qty_inc {
        justify-content: center;
      }
      .qty_dec {
        margin-top: -4px;
      }
    }
  }
  .product_block {
    padding-top: 113px;
    margin-bottom: 80px;
    justify-content: center;
    align-items: center;
  }
  .info_product {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .description {
    line-height: 21px;
    margin-bottom: 5px;
    font-size: 16px;
  }
  .contains {
    margin-bottom: 15px;
    font-size: 16px;
  }

  .title_consist {
    text-transform: uppercase;
    font-weight: 700;
  }
  .marks {
    text-transform: capitalize;
    font-size: 14px;
    margin-bottom: 10px;
  }
  .title_category {
    font-weight: 700;
  }

  .price {
    font-size: 30px;
    color: $lightGreeen-color;
    font-family: "Oswald";
    font-weight: 700;
    margin-bottom: 15px;
    line-height: 44.5px;
    letter-spacing: 1.5px;
    .old_price {
      color: #555555;
      font-weight: 300;
      text-decoration: line-through;
      padding-left: 10px;
      line-height: 44.5px;
    }
  }
  .title_product {
    font-family: "Cormorant";
    font-weight: 400;
    text-transform: uppercase;
    font-size: 40px;
    letter-spacing: 1.5px;
    margin-bottom: 10px;
    line-height: 38px;
    margin-top: 20px;
  }
  .to_main {
    text-transform: uppercase;
    margin-left: 15px;
    text-decoration: none;
    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }

    font-family: "Oswald";
    font-size: 12px;
    position: relative;
    color: #fff;
    &:before {
      content: "";
      position: absolute;
      top: 10px;
      left: -13px;
      width: 8px;
      height: 8px;
      border-top: 1.8px solid white;
      border-left: 1.8px solid white;
      transform: rotate(319deg);
    }
  }

  .info_product {
    max-width: 500px;
    text-transform: uppercase;
  }
  .product_photos {
    display: flex;
    column-gap: 30px;
    .center_photo {
      // height: 450px;
      max-width: 350px;
    }
    .right_photo {
      display: flex;
      flex-direction: column;
      row-gap: 30px;
      img {
        max-width: 160px;
        max-height: 225px;
      }
    }
  }
  .container.wrap {
    padding-bottom: 230px;
  }
  .flower_item {
    display: flex;
    column-gap: 30px;
  }
  .spots {
    background: radial-gradient(
          $pastelPinc-colorSpot 0,
          transparent 70%,
          transparent 52%
        ) -303% -596px/737px 527px no-repeat,
      radial-gradient($pastelPinc-colorSpot 0, transparent 71%, transparent 52%)
        181% 492px/850px 765px no-repeat,
      radial-gradient($pastelPinc-colorSpot 0, transparent 69%, transparent 52%) -64%
        503px/629px 517px no-repeat,
      radial-gradient($pastelPinc-colorSpot 0, transparent 71%, transparent 52%)
        181% 492px/805px 725px no-repeat,
      radial-gradient($pastelPinc-colorSpot 0, transparent 69%, transparent 52%) -64%
        503px/629px 517px no-repeat,
      radial-gradient($pastelPinc-colorSpot 0, transparent 71%, transparent 52%)
        181% 492px/955px 725px no-repeat,
      radial-gradient(
          $lightGreeen-colorSpot 0,
          transparent 76%,
          transparent 52%
        ) -64% 503px/579px 817px no-repeat,
      radial-gradient(
          $lightGreeen-colorSpot 0,
          transparent 71%,
          transparent 52%
        )
        181% 492px/605px 725px no-repeat,
      radial-gradient(
          $lightGreeen-colorSpot 0,
          transparent 69%,
          transparent 52%
        ) -64% 503px/629px 517px no-repeat;

    background-position: -20% 197px, 144% -397px, 101% 438px, -25% 571px,
      -91% 2770px, -29% 2429px, 6% 722px, -21% 2998px, 124% 2719px;
  }
  .flowers {
    background-image: url(../assets/images/additional_pages/product/green.png);
    background-repeat: no-repeat;
    background-position: 133% 623px;
  }

  .title {
    font-family: "Oswald";
    font-weight: 700;
    font-size: 20px;
    padding-bottom: 0px;
    letter-spacing: 1px;
    color: $pastelPinc-color;
    text-transform: uppercase;
    line-height: 53px;
  }
  .highlighted {
    font-weight: 300;
    font-size: 20px;
    letter-spacing: 1.2px;
    color: $lightGreeen-color;
    text-transform: uppercase;
  }
  h3 {
    padding-top: 60px;
    max-width: 700px;
    padding-bottom: 24px;
    span {
      padding-left: 20%;
    }
  }
  .info_wrapper {
    text-align: left;
  }
  .paym_methods {
    padding-bottom: 11px;
    margin-bottom: 60px;

    .title.center {
      text-align: center;
      margin-bottom: 45px;
    }
    .methods_wrap {
      padding-bottom: 100px;
      display: flex;
      justify-content: space-between;
      .method {
        height: 240px;
        background-color: rgba(0, 0, 0, 0.2);
        backdrop-filter: blur(20px);
        border-radius: 20px;
        padding: 30px 17px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
        font-weight: normal;
        .highlited {
          color: $lightGreeen-color;
          font-size: 16px;
          text-transform: uppercase;
          justify-self: center;
          margin-bottom: 10px;
        }
        .text {
          text-transform: none;
          font-size: 15px;
          line-height: 21px;
          letter-spacing: 0.8px;
          justify-self: center;
          text-align: center;
          max-width: 195px;
        }
        &::before {
          content: "";
          width: 30px;
          height: 30px;
          position: absolute;
          top: -13px;
          left: 44%;
          background-color: #000000;
          border-radius: 50%;
        }
      }
    }
  }
  li {
    span {
      font-weight: 700;
    }
    .highlighted {
      font-weight: 300;
    }
    text-transform: uppercase;
    font-size: 20px;
    font-weight: 300;
    line-height: 26px;
    letter-spacing: 1.1px;
    padding-bottom: 10px;
    list-style-type: none;
    position: relative;
    &::before {
      content: "";
      width: 4px;
      height: 4px;
      position: absolute;
      top: 10.5px;
      left: -16px;
      background-color: #ffffff;
      border-radius: 50%;
    }
  }
  .cost_info {
    max-width: 900px;
    padding-bottom: 6px;
    padding-left: 0px;
    margin-bottom: 60px;
  }
  .conditions_info {
    max-width: 900px;
    margin-bottom: 60px;
  }

  .additional_info {
    padding: 30px;
    margin-bottom: 60px;

    background-color: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(20px);
    border-radius: 20px;
    font-size: 20px;
    font-weight: 300;
    line-height: 29.64px;
    letter-spacing: 1.2px;
    .info {
      ul {
        padding-bottom: 45px;
        padding-left: 30px;
        li {
          text-transform: lowercase;
        }
      }
    }
  }
  .down_info {
    margin-bottom: 30px;
  }
  .number {
    color: $lightGreeen-color;
    font-weight: 400;

    text-decoration: none;
    &:hover,
    &:active {
      cursor: pointer;
      text-decoration: underline;
    }
  }
  .cash_back {
    font-size: 20px;
    font-weight: 300;
    line-height: 29.64px;
    letter-spacing: 1.2px;
    p:nth-child(2) {
      padding-bottom: 40px;
    }
  }
}
// PRODUCT PAGE END

// PRODUCT PAGE RESPONSIVE

@media screen and (max-width: 1377px) {
  .carousel__prev::before,
  .carousel__next::before {
    width: 40px;
    left: -35px;
  }

  .carousel__prev::after {
    content: "";
    left: -41px;
  }
}

@media screen and (max-width: 1200px) {
  .how_to_order .steps_wrap::before {
    right: 25px;
  }

  .paym_methods .methods_wrap .method {
    font-size: 17px;
    padding: 23px 15px 15px;
    width: 226px;
  }
}
@media screen and (max-width: 1190px) {
  .product_page .info_product {
    max-width: 400px;
  }
  .product_page .paym_methods .methods_wrap .method[data-v-5ebb49ea] {
    column-gap: 15px;
    padding: 22px 7px;
  }
}

@media screen and (max-width: 1070px) {
  .paym_methods .methods_wrap {
    display: flex;

    align-items: center;
    flex-wrap: wrap;
    column-gap: 20px;
    width: 100%;
    .method {
      width: 250px;
    }
    row-gap: 25px;
    column-gap: 120px;
  }
  .paym_methods .title {
    padding-left: 70px;
  }
  .product_page .paym_methods .methods_wrap {
    justify-content: center;
  }
  .right_photo {
    img {
      min-width: 160px;
    }
  }
  .center_photo {
    img {
      min-width: 280px;
    }
  }
  .product_page {
    .title_product {
      font-size: 29px;
      line-height: 9px;
      margin-bottom: 10px;
    }
    .price {
      font-size: 24px;
      margin-bottom: 3px;
      line-height: 35.5px;
    }
    .btns_wrap {
      -moz-column-gap: 15px;
      column-gap: 15px;
    }
  }
  .product_page .paym_methods .methods_wrap .method {
    -moz-column-gap: 15px;
    column-gap: 5px;
    padding: 22px 7px;
    min-width: 215px;
  }
}
@media screen and (max-width: 990px) {
  .product_page .flower_item {
    -moz-column-gap: 9px;
    column-gap: 9px;
  }
  .product_page .product_photos {
    column-gap: 15px;

    .right_photo {
      row-gap: 15px;
    }
  }
  .product_page .info_product {
    max-width: 357px;
  }
}

@media screen and (max-width: 907px) {
  .product_page {
    .btns_wrap {
      flex-wrap: wrap-reverse;
      row-gap: 15px;
      button,
      .qty_change {
        display: flex;
        justify-content: space-around;
        width: 100%;
      }
    }
    li {
      font-size: 16px;
    }
    .highlighted {
      font-size: 16px;
    }
  }
  .product_page .flower_item {
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
  .deliv_paym {
    .flowers {
      background-position: -88% 1272px, -200% 67px, 403% 1244px;
    }
    h3 {
      padding-left: 20px;
      max-width: 600px;
    }
  }
}

@media screen and (max-width: 800px) {
  .how_to_order {
    h3 {
      padding-left: 51px;
      padding-bottom: 63px;
      font-size: 40px;
    }
  }
  .deliv_paym {
    .spots {
      background-position: -37% -278px, 12% 206px, 103% 167px, -31% 2323px,
        -91% 790px, 152% 918px, 188% 2165px;
    }
    .container.wrap {
      padding-bottom: 62px;
    }
    .title {
      padding-bottom: 8px;
    }
    .additional_info,
    .cash_back {
      font-size: 18px;
      line-height: 26.64px;
      letter-spacing: 1px;
    }
    .flowers {
      background-position: -88% 1272px, -150% 67px, 403% 1244px;
    }
    h3 {
      padding-left: 20px;
      line-height: 70px;
    }

    .paym_methods .methods_wrap {
      row-gap: 20px;
      column-gap: 80px;
    }
    .paym_methods .title {
      padding-left: 48px;
    }
  }
}

@media screen and (max-width: 650px) {
  .deliv_paym {
    li {
      font-size: 16px;
    }
    .title {
      padding-bottom: 0px;
    }
    .cost_info {
      padding-left: 44px;
    }
    .highlighted {
      font-size: 18px;
    }
    .conditions_info {
      padding-left: 20px;
    }
    .flowers {
      background-position: -88% 1272px, -50% 67px, -301px 750px;
    }
    h3 {
      max-width: 478px;
      font-size: 70px;
    }
    .warning {
      .title {
        line-height: 43px;
      }
    }
    .method::before {
      display: none;
      font-size: 19px;
    }
  }
}
@media screen and (max-width: 500px) {
  .product_page .product_photos .right_photo {
    display: none;
  }
}

@media screen and (max-width: 480px) {
  .deliv_paym {
    .warning {
      padding-left: 56px;
      .title {
        line-height: 27px;
      }
    }
    h3 {
      font-size: 53px;
      padding-left: 2px;
      span {
        padding-left: 1%;
      }
    }

    .warning::before {
      top: 25px;
      left: 23px;
    }
    .warning::after {
      top: 90px;
      left: 24px;
    }
  }
}
// DELIVERY AND PAYMENT PAGE RESPONSIVE END
</style>

<script>
import axios from "axios";
import sliderFavourite from "@/components/sliderFavourite.vue";
export default {
  name: "ProductView",

  data() {
    return {
      flower: { images: [] },
      flowers: [],
      first: 1,
      second: 2,
      center: 0,
      qty: 1,
      cart: [],
      newQty: 1,
    };
  },

  components: {
    sliderFavourite,
  },

  created() {
    axios.get("/data/flowers.json").then((resp) => {
      let id = parseInt(this.$route.params.id);
      this.flowers = resp.data;
      this.flower = resp.data.find((el) => {
        return el.id === id;
      });
      this.cart = JSON.parse(localStorage.getItem("products in cart")) || [];
    });
  },
  methods: {
    changeImg(index, place) {
      let changer;

      changer = this.center;
      this.center = index;
      if (place === "first") {
        this.first = changer;
      } else {
        this.second = changer;
      }
    },
    changeProductQty(id, action) {
      const index = this.flowers.findIndex((el) => el.id === id);
      if (action === "inc") {
        this.newQty = this.flowers[index].qty + 1;
      } else {
        if (this.flowers[index].qty >= 2) {
          this.newQty = this.flowers[index].qty - 1;
        } else {
          // askProdDel(index);
          return false;
        }
      }

      this.flowers[index].qty = this.newQty;
      this.cart[index].total = this.cart[index].price * this.newQty;
    },

    //     askProdDel(index) {

    //         const index = cart.findIndex((element) => element.title === title);
    //         cart.splice(index, 1);
    //         viewCardTable();
    //         topPanel.info("Product seccessfully delated");

    // },

    addToCart(id, price, title) {
      if (this.cart.find((el) => el.id === id) === undefined) {
        this.cart.push({
          name: title,
          id: id,
          qty: this.newQty,
          isBuy: false,
          price: price,
          total: parseFloat(this.newQty * parseFloat(price).toFixed(2)),
        });
        localStorage.setItem("products in cart", JSON.stringify(this.cart));
        this.cart = JSON.parse(localStorage.getItem("products in cart")) || [];
      } else {
        if (this.cart.findIndex((el) => el.id === id) !== undefined) {
          const prodIndex = this.cart.findIndex((el) => el.id === id);
          this.cart[prodIndex].qty = this.newQty;
          this.cart[prodIndex].total = parseFloat(
            (this.newQty * this.cart[prodIndex].price).toFixed(2)
          );
        }
        console.log("YEDDD:" + this.newQty);
        localStorage.setItem("products in cart", JSON.stringify(this.cart));
        this.cart = JSON.parse(localStorage.getItem("products in cart")) || [];

        this.newQty = 1;
      }
    },
  },
};
</script>
