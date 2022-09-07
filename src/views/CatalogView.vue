<template>
  <div class="stains_overlay">
    <div class="flower-overlay">
      <header id="header" class="catalog_before">
        <div class="container">
          <div class="menu_wrap"></div>
          <div class="right_block">
            <div class="mail_wrap">
              <router-link to="mailto:zakaz@loverflower.by"
                >zakaz@loverflower.by</router-link
              >
              <div>Доставка 24/7 по домовленості с оператором</div>
            </div>
            <div class="address_wrap">
              <div class="adress">вул. Тимірязєва 67</div>
              <div class="schedule">10:00 до 21:00</div>
              <div class="schedule">без вихідний</div>
            </div>

            <div class="social_wrap">
              <ul class="social_networks">
                <li>
                  <router-link
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
          </div>

          <div class="flower_front"></div>
          <div class="center_block catalog">
            <div class="first_title_line">КАТАЛОГ</div>
            <div class="second_title_line">КВІТІВ</div>
            <div class="desc">
              У нашому магазині найбільший вибір квітів для будь-яких подій:
            </div>
          </div>
        </div>
      </header>

      <main>
        <section class="flowers_list">
          <div class="container">
            <div class="catalog_page_wrap">
              <div class="filters">
                <form id="filters_form" @submit.prevent="">
                  <div class="color_filter">
                    <div class="title_filter">ПО КОЛЬОРУ</div>
                    <label for="red">
                      <input
                        v-model="selected.color"
                        type="checkbox"
                        id="red"
                        value="червоний"
                      />
                      <span class="checkmark"></span>
                      червоний
                    </label>
                    <label for="white">
                      <input
                        v-model="selected.color"
                        type="checkbox"
                        id="white"
                        value="білий"
                      />
                      <span class="checkmark"></span>
                      білий
                    </label>
                    <label for="yellow">
                      <input
                        v-model="selected.color"
                        type="checkbox"
                        id="yellow"
                        value="жовтий"
                      />
                      <span class="checkmark"></span>
                      жовтий
                    </label>
                    <label for="pink">
                      <input
                        v-model="selected.color"
                        type="checkbox"
                        id="pink"
                        value="рожевий"
                      />
                      <span class="checkmark"></span>
                      рожевий
                    </label>
                    <label for="colorful">
                      <input
                        v-model="selected.color"
                        type="checkbox"
                        id="colorful"
                        value="різнобарвний"
                      />
                      <span class="checkmark"></span>
                      різнобарвний
                    </label>
                  </div>

                  <div class="format_filter">
                    <div class="title_filter">ПО ФОРМАТУ</div>
                    <label for="bouquet">
                      <input
                        v-model="selected.format"
                        type="checkbox"
                        id="bouquet"
                        value="букет"
                      />
                      <span class="checkmark"></span>
                      букет
                    </label>
                    <label for="vase">
                      <input
                        v-model="selected.format"
                        type="checkbox"
                        id="vase"
                        value="у вазі"
                      />
                      <span class="checkmark"></span>
                      у вазі
                    </label>
                    <label for="woodbox">
                      <input
                        v-model="selected.format"
                        type="checkbox"
                        id="woodbox"
                        value="в ящику"
                      />
                      <span class="checkmark"></span>
                      в ящику
                    </label>
                    <label for="box">
                      <input
                        v-model="selected.format"
                        type="checkbox"
                        id="box"
                        value="у коробці"
                      />
                      <span class="checkmark"></span>
                      у коробці
                    </label>
                    <label for="envelope">
                      <input
                        v-model="selected.format"
                        type="checkbox"
                        id="envelope"
                        value="у конверті"
                      />
                      <span class="checkmark"></span>
                      у конверті
                    </label>
                  </div>
                  <div class="price_filter">
                    <div class="title_filter">ВАРТІСТЬ</div>
                    <price-range-slider
                      v-model="range"
                      :trackHeight="0.5"
                      @changeRange="changeRange"
                    />
                  </div>
                </form>
              </div>
              <div class="flowers_catalog_items">
                <div
                  class="flower_item"
                  v-for="(flower, number) in filteredFlowers"
                  :key="number"
                >
                  <div class="flag_wrap" v-if="flower.isSale && flower.isNew">
                    <div class="sale">SALE</div>
                    <div class="new">NEW</div>
                  </div>

                  <div v-else-if="flower.isSale" class="sale">SALE</div>
                  <div v-else-if="flower.isNew" class="new">NEW</div>

                  <div class="img-wrap">
                    <router-link
                      :to="{ name: 'product-view', params: { id: flower.id } }"
                    >
                      <img
                        :src="
                          require(`@/assets/images/flowers/${flower.images[0]}`)
                        "
                        class="card-img-top"
                        :alt="flower.title"
                      />
                    </router-link>
                  </div>
                  <div class="title product">
                    <router-link
                      :to="{ name: 'product-view', params: { id: flower.id } }"
                    >
                      {{ flower.title }}
                    </router-link>
                  </div>

                  <div class="price">
                    {{ flower.price }} UAN
                    <span class="old_price" v-if="flower.isSale"
                      >{{ flower.old_price }} UAN</span
                    >
                  </div>
                  <button
                    class="transparent_btn"
                    type="button"
                    @click="addToCart(flower.id, flower.price, flower.title)"
                  >
                    У корзину
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$lightGreeen-color: #43ffd2;
$pastelPinc-color: #d978ac;
$pastelPinc-colorSpot: #8a10519d;
$lightGreeen-colorSpot: #43ffd399;
.social_networks {
  margin-bottom: 44px;
}

#header {
  padding-top: 10px;
  margin-bottom: 80px;
}
.right_block {
  margin-top: -50px;
}
.flower-overlay {
  background-image: url(../assets/images/additional_pages/catalog/hotPinkFlower1.png),
    url(../assets/images/additional_pages/catalog/hotPinkFlower2.png);
  background-size: auto;
  background-repeat: no-repeat;
  background-position: -300px -80px, 980px -102px;
}
.stains_overlay {
  background: radial-gradient(
        $pastelPinc-colorSpot 0,
        transparent 70%,
        transparent 100%
      ) -303% -596px/737px 527px no-repeat,
    radial-gradient($pastelPinc-colorSpot 0, transparent 71%, transparent 50%)
      181% 492px/850px 765px no-repeat,
    radial-gradient($pastelPinc-colorSpot 0, transparent 69%, transparent 50%) -64%
      503px/629px 517px no-repeat,
    radial-gradient($pastelPinc-colorSpot 0, transparent 71%, transparent 50%)
      181% 492px/805px 725px no-repeat,
    radial-gradient($pastelPinc-colorSpot 0, transparent 69%, transparent 50%) -64%
      503px/629px 517px no-repeat,
    radial-gradient($pastelPinc-colorSpot 0, transparent 71%, transparent 50%)
      181% 492px/955px 725px no-repeat,
    radial-gradient($lightGreeen-colorSpot 0, transparent 76%, transparent 50%) -64%
      503px/579px 817px no-repeat,
    radial-gradient($lightGreeen-colorSpot 0, transparent 71%, transparent 50%)
      181% 492px/605px 725px no-repeat,
    radial-gradient($lightGreeen-colorSpot 0, transparent 69%, transparent 50%) -64%
      503px/629px 517px no-repeat;

  background-position: -20% 197px, 144% -397px, 101% 438px, -25% 571px,
    -91% 2770px, -29% 2429px, 6% 722px, -21% 2998px, 124% 2719px;
}
.center_block {
  max-width: 920px;
  position: flex;
  z-index: 2;
  margin-top: 100px;
  padding: 20px;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  .desc {
    text-transform: uppercase;
    font-size: 14px;
    margin-left: 9vw;
    font-weight: 400;
    margin-top: 20px;
    max-width: 400px;
    margin-bottom: 38px;
  }

  .second_title_line {
    padding-left: 25vw;
  }
}

.center_block .first_title_line,
.center_block .second_title_line {
  font-weight: 400;
  font-size: 130px;
  letter-spacing: 4px;
  line-height: 140px;
  text-align: center;
  justify-content: center;
  align-items: left;
  font-family: "Cormorant";
}
.catalog_page_wrap {
  .title.product a {
    color: #fff;
    text-transform: uppercase;
    text-decoration: none;
    &:hover {
      cursor: pointer;
      color: $pastelPinc-color;
    }
  }
  .card-img-top {
    &:hover {
      cursor: pointer;
    }
  }
  #filters_form {
    // CUSTOM RANGE START
    input[type="range"] {
      -webkit-appearance: none;
      appearance: none;
      background: white;
      cursor: pointer;
      width: 223px;
      height: 1px;
    }
    input[type="range"]::-webkit-slider-thumb,
    input[type="range"]::-webkit-slider-thumb {
      -webkit-appearance: none; /* Override default look */
      appearance: none;
      margin-top: 0px; /* Centers thumb on the track */
      background-color: $lightGreeen-color;
      border-radius: 50%;

      height: 15px;
      width: 15px;
    }

    // CUSTOM RANGE END

    .color_filter,


// CUSTOM CHECKBOX START

.format_filter,
.marks_list {
      /* Create a custom checkbox */
      .checkmark {
        position: absolute;
        top: 0;
        left: 0;
        height: 25px;
        width: 25px;
        background-color: transparent;
      }

      /* On mouse-over, add a grey background color */
      .checkmark {
        background-color: $pastelPinc-color;
      }

      /* When the checkbox is checked, add a blue background */
      input:checked ~ .checkmark {
        background-color: $pastelPinc-color;
      }

      /* Create the checkmark/indicator (hidden when not checked) */
      .checkmark:after {
        content: "";
        position: absolute;
        display: none;
      }

      /* Show the checkmark when checked */
      input:checked ~ .checkmark:after {
        display: block;
      }

      /* Style the checkmark/indicator */
      label .checkmark:after {
        left: 6px;
        top: 1px;
        width: 5px;
        height: 10px;
        border: solid $lightGreeen-color;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
      }
      // CUSTOM CHECKBOX END

      margin-bottom: 23px;
      display: flex;
      flex-direction: column;
      .checkmark {
        position: absolute;
        top: 5px;
        left: 1px;
        height: 18px;
        width: 18px;
        border-radius: 4px;
        background-color: transparent;
        border: 0.5px white solid;
      }
      input:checked {
        .checkmark {
          background-color: $pastelPinc-color;
        }
      }
      label {
        padding-left: 32px;
        text-transform: uppercase;
        font-weight: 300;
        font-size: 16px;
        letter-spacing: 1.5px;
        input {
          position: absolute;
          opacity: 0;
          cursor: pointer;
          height: 0;
          width: 0;
        }
        position: relative;

        top: 0;
        left: 0;
      }
    }
  }
  // CUSTOM CHECKBOX END

  .filters {
    .title_filter {
      color: $lightGreeen-color;
      font-size: 18px;
      font-weight: 700;
      display: flex;
      margin-bottom: 5px;
      flex-direction: column;
      row-gap: 5px;
    }
    max-height: min-content;
    max-height: 650px;
    max-width: 255px;
    min-width: 255px;
    padding: 20px 16px;
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(20px);
    border-radius: 20px;
  }
  display: flex;
  flex-direction: row;
  column-gap: 30px;
}
.flowers_catalog_items {
  margin-bottom: 200px;
  .img-wrap {
    max-width: 255px;
    height: 335px;
    margin-bottom: 10px;
  }

  .title {
    max-width: 255px;
    text-transform: uppercase;
    font-size: 20px;
    color: #fff;
    font-family: "Oswald";
    margin-bottom: 10px;
    line-height: 22px;
  }
  .flower_item {
    position: relative;
    .transparent_btn {
      width: 100%;
    }
  }
  .flag_wrap {
    display: flex;
    flex-direction: column;
    row-gap: 5px;
    position: absolute;
    top: -12px;
    left: 215px;
  }
  .sale,
  .new {
    position: absolute;
    top: -12px;
    left: 215px;
    padding-top: 13px;
    text-align: center;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    color: black;
    font-weight: 300;
    font-size: 20px;
  }
  .sale {
    background-color: #31985a;
  }
  .new {
    background-color: #d978ac;
  }
  .flag_wrap {
    .sale,
    .new {
      position: static;
    }
  }

  .price {
    font-size: 14px;
    color: #fff;
    font-family: "Oswald";
    font-weight: 700;
    margin-bottom: 20px;
    line-height: 16px;
    .old_price {
      color: #939393;
      font-weight: 300;
      text-decoration: line-through;
      padding-left: 10px;
      line-height: 16px;
    }
  }
  display: flex;
  column-gap: 30px;
  row-gap: 60px;
  flex-wrap: wrap;
}

// CATALOG RESPONSIVE START
@media screen and (max-width: 1275px) {
  .flowers_catalog_items {
    justify-content: space-evenly;
  }
  .center_block.catalog {
    max-width: 792px;
    margin-left: 100px;
    .first_title_line,
    .second_title_line {
      font-size: 110px;
      line-height: 113px;
    }
  }
}

@media screen and (max-width: 1190px) {
  .center_block.catalog {
    max-width: 692px;
    margin-left: 50px;
    .first_title_line,
    .second_title_line {
      font-size: 100px;
      text-align: left;
      justify-content: left;
    }
  }
}

@media screen and (max-width: 1050px) {
  .catalog_page_wrap .filters {
    .color_filter label,
    .format_filter label {
      font-size: 15px;
    }
    .title_filter {
      font-size: 16px;
    }

    max-height: min-content;
    max-height: 545px;
    max-width: 229px;
    min-width: 197px;
  }
  .flowers_catalog_items {
    column-gap: 25px;
    width: 100vw;
    max-width: 60vw;
    justify-content: space-evenly;
  }
  .catalog_page_wrap {
    column-gap: 30px;
    width: 100%;
  }
  .center_block.catalog {
    max-width: 600px;
    margin-left: 30px;
    .first_title_line,
    .second_title_line {
      font-size: 85px;
      line-height: 89px;
      text-align: left;
      justify-content: left;
    }
  }

  @media screen and (max-width: 900px) {
    .catalog_before {
      .mail_wrap div {
        max-width: 130px;
        line-height: 20px;
      }
    }
    .flowers_catalog_items {
      max-width: 86vw;
    }
    #header.catalog_before {
      padding-bottom: 60px;
    }
    .center_block.catalog {
      max-width: 570px;
      margin-left: 0px;
      .first_title_line,
      .second_title_line {
        font-size: 90px;
      }
    }

    .catalog_page_wrap[data-v-10441314] {
      flex-direction: column;
    }
    .catalog_page_wrap .filters {
      max-height: min-content;
      max-height: 240px;
      max-width: 87vw;
      min-width: 87vw;
      margin-bottom: 30px;
      // margin: 40px auto;
    }
    #filters_form {
      display: flex;
      flex-direction: row;
      column-gap: 5px;
      justify-content: space-between;
      padding: 15px;
    }
  }

  @media screen and (max-width: 805px) {
    .right_block {
      display: none;
    }
    #header.catalog_before {
      padding-bottom: 19px;
    }
    .center_block.catalog[data-v-10441314] {
      max-width: 90vw;
      margin-left: 0px;
    }
  }

  @media screen and (max-width: 520px) {
    #filters_form {
      flex-wrap: wrap;
      max-height: 310px;
      height: 310px;
    }
    .catalog_page_wrap .filters {
      max-height: min-content;
      max-height: 380px;
    }
  }
  @media screen and (max-width: 430px) {
    .flower-overlay #header .center_block.catalog .first_title_line,
    .flower-overlay #header .center_block.catalog .second_title_line {
      font-size: 56px;
      line-height: 69px;
    }
  }

  @media screen and (max-width: 380px) {
    #filters_form {
      max-height: 600px;
      height: 600px;
    }
    .catalog_page_wrap .filters {
      max-height: min-content;
      max-height: 680px;
      min-width: 40vw;
    }
  }
}
// CATALOG RESPONSIVE END
</style>

<script>
import axios from "axios";
import PriceRangeSlider from "../components/range";

export default {
  name: "CatalogView",
  components: {
    PriceRangeSlider,
  },
  data() {
    return {
      checked: [],
      // filteredFlowers: [],
      flowers: [],
      cart: [],
      cartLength: 0,
      showProduct: false,
      to: 10000,
      markContainCheck: 0,
      range: "50",
      selected: {
        priceFrom: 50,
        priceTo: 10000,
        mark: [],
        format: [],
        color: [],
      },
    };
  },
  computed: {

    filteredFlowers() {

      return this.flowers.filter((el) => {
        if (this.selected.color.length && this.selected.format.length) {
          return (
            this.selected.color.includes(el.params.color) &&
            this.selected.format.includes(el.params.format) &&
            el.price >= this.selected.priceFrom &&
            el.price <= this.selected.priceTo
          );
        } else if (
          this.selected.color.length &&
          this.selected.format.length === 0
        ) {
          return (
            this.selected.color.includes(el.params.color) &&
            el.price >= this.selected.priceFrom &&
            el.price <= this.selected.priceTo
          );
        } else if (
          this.selected.color.length === 0 &&
          this.selected.format.length
        ) {
          return (
            this.selected.format.includes(el.params.format) &&
            el.price >= this.selected.priceFrom &&
            el.price <= this.selected.priceTo
          );
        } else {
          return (
            el.price >= this.selected.priceFrom &&
            el.price <= this.selected.priceTo
          );
        }
      });
    },
  },
  // add to LOCAL
  //  localStorage.setItem("products in cart", JSON.stringify(this.cart));
  created() {
    axios.get("data/flowers.json").then((resp) => {
      this.flowers = resp.data;
      this.cart = JSON.parse(localStorage.getItem("products in cart")) || [];
      this.cartLength  = this.cart.length;
      // console.log(this.cart);
    });
  },
  watch: {
    selected: {
      handler: function () {
        this.sortByMarks();
      },
    },

  },
  methods: {
    sortByMarks() {
      this.checked = this.checked.filter((el) => {
        return (
          this.selected.mark.length !== 0 &&
          this.flowers.mark.includes(el.selected.mark)
        );
      });
    },
    changeRange(min, max) {
      this.selected.priceFrom = min;
      this.selected.priceTo = max;
    },
    addToCart(id, price, title) {
      let qty = 1;
      if (this.cart.find((el) => el.id === id) === undefined) {
        this.cart.push({
          name: title,
          id: id,
          qty: qty,
          isBuy: false,
          price: price,
          total: parseFloat((qty * price).toFixed(2)),
        });
        localStorage.setItem("products in cart", JSON.stringify(this.cart));
        this.cart = JSON.parse(localStorage.getItem("products in cart")) || [];
      } else {
        if (this.cart.findIndex((el) => el.id === id) !== undefined) {
          const prodIndex = this.cart.findIndex((el) => el.id === id);
          const newQty = this.cart[prodIndex].qty + 1;
          this.cart[prodIndex].qty = newQty;
          this.cart[prodIndex].total = parseFloat(
            (newQty * this.cart[prodIndex].price).toFixed(2)
          );
        }

        localStorage.setItem("products in cart", JSON.stringify(this.cart));
        this.cart = JSON.parse(localStorage.getItem("products in cart")) || [];
        
      }
    },
  },
};
</script>
