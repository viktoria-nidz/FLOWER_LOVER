<template>
  <div class="flower-overlay">
    <div class="stains_overlay">
    <header id="header">
      <div class="">
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
          <div class="center_block">
            <div class="first_title_line">КАТАЛОГ</div>
            <div class="second_title_line">КВІТІВ</div>
            <div class="desc">
              У нашому магазині найбільший вибір квітів для будь-яких подій:
            </div>
            <div class="marks_list">
              <button type="button" class="mark">1 Вересня</button>
              <button type="button" class="mark">8 Березня</button>
              <button type="button" class="mark">Бабусі</button>
              <button type="button" class="mark">День народження</button>
              <button type="button" class="mark">Мамі</button>
              <button type="button" class="mark">Випускний</button>
              <button type="button" class="mark">День Святого Валентина</button>
              <button type="button" class="mark">Коханій</button>
              <button type="button" class="mark">Комплімент</button>
              <button type="button" class="mark">Сестрі</button>
              <button type="button" class="mark">Річниця</button>
              <button type="button" class="mark">Особлива дата</button>
              <button type="button" class="mark">Пропозиція</button>
              <button type="button" class="mark">Подрузі</button>
            </div>
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
                      v-model="checked"
                      type="checkbox"
                      id="red"
                      value="red"
                    />
                    <span class="checkmark"></span>
                    червоний
                  </label>
                  <label for="white">
                    <input
                      v-model="checked"
                      type="checkbox"
                      id="white"
                      value="white"
                    />
                    <span class="checkmark"></span>
                    білий
                  </label>
                  <label for="yellow">
                    <input
                      v-model="checked"
                      type="checkbox"
                      id="yellow"
                      value="yellow"
                    />
                    <span class="checkmark"></span>
                    жовтий
                  </label>
                  <label for="pink">
                    <input
                      v-model="checked"
                      type="checkbox"
                      id="pink"
                      value="pink"
                    />
                    <span class="checkmark"></span>
                    рожевий
                  </label>
                  <label for="colorful">
                    <input
                      v-model="checked"
                      type="checkbox"
                      id="colorful"
                      value="colorful"
                    />
                    <span class="checkmark"></span>
                    різнобарвний
                  </label>
                </div>

                <div class="format_filter">
                  <div class="title_filter">ПО ФОРМАТУ</div>
                  <label for="bouquet">
                    <input
                      v-model="checked"
                      type="checkbox"
                      id="bouquet"
                      value="bouquet"
                    />
                    <span class="checkmark"></span>
                    букет
                  </label>
                  <label for="vase">
                    <input
                      v-model="checked"
                      type="checkbox"
                      id="vase"
                      value="vase"
                    />
                    <span class="checkmark"></span>
                    у вазі
                  </label>
                  <label for="woodbox">
                    <input
                      v-model="checked"
                      type="checkbox"
                      id="woodbox"
                      value="woodbox"
                    />
                    <span class="checkmark"></span>
                    в ящику
                  </label>
                  <label for="box">
                    <input
                      v-model="checked"
                      type="checkbox"
                      id="box"
                      value="box"
                    />
                    <span class="checkmark"></span>
                    у коробці
                  </label>
                  <label for="envelope">
                    <input
                      v-model="checked"
                      type="checkbox"
                      id="envelope"
                      value="envelope"
                    />
                    <span class="checkmark"></span>
                    у конверті
                  </label>
                </div>
                <div class="price_filter">
                  <div class="title_filter">ВАРТІСТЬ</div>
                  <price-range-slider v-model="range" :trackHeight="0.5" />
                </div>
              </form>
            </div>
            <div class="flowers_catalog_items">
              <div
                class="flower_item"
                v-for="(flower, number) in flowers"
                :key="number"
              >
                <div class="flag_wrap" v-if="flower.isSale && flower.isNew">
                  <div class="sale">SALE</div>
                  <div class="new">NEW</div>
                </div>

                <div v-else-if="flower.isSale" class="sale">SALE</div>
                <div v-else-if="flower.isNew" class="new">NEW</div>

                <div class="img-wrap">
                  <img
                    :src="
                      require(`@/assets/images/flowers/${flower.images[0]}`)
                    "
                    class="card-img-top"
                    :alt="flower.title"
                  />
                </div>
                <div class="title">{{ flower.title }}</div>
                <div class="price">
                  {{ flower.price }} UAN
                  <span class="old_price" v-if="flower.isSale"
                    >{{ flower.old_price }} UAN</span
                  >
                </div>
                <button class="transparent_btn" type="button">У корзину</button>
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
$pastelPinc-colorSpot: #d978ac8b;
$lightGreeen-colorSpot: #43ffd399;
.social_networks {
  margin-bottom: 44px;
}
.flower-overlay,
.stains_overlay {
  width: 100%;
  height: 100%;
}
#header {
  margin-bottom: 80px;
}
.right_block {
  margin-top: -100px;
}
.flower-overlay {
  background-image: url(../assets/images/additional_pages/catalog/hotPinkFlower1.png),
    url(../assets/images/additional_pages/catalog/hotPinkFlower2.png);
  background-size: auto;
  background-repeat: no-repeat;
  background-position: -510px 178px, 900px -102px;
}
// .stains_overlay {

// }
.center_block {
  max-width: 920px;
  position: flex;
  z-index: 2;
  margin-top: 150px;
  padding: 20px;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  .desc {
    text-transform: uppercase;
    font-size: 14px;
    margin-left: 25vw;
    font-weight: 400;
    margin-top: 20px;
    max-width: 400px;
    margin-bottom: 100px;
  }
  .marks_list {
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
    align-items: left;
    gap: 10px;
    button {
      &:active {
        color: #fff;
        background-color: #7d2253;
        box-shadow: inset 0px 0px 10px #1b000e;
      }
      &:hover {
        color: #fff;
        background-color: #7d2253;
      }
      border: 1px solid white;
      color: white;
      font-family: "Oswald";
      font-weight: 400;
      font-size: 12px;
      letter-spacing: 2px;
      border-radius: 40px;
      padding: 11px 16px;
      text-transform: uppercase;
      font-weight: normal;
      background-color: transparent;
    }
  }
  .second_title_line {
    padding-left: 25vw;
  }
}
.center_block .first_title_line,
.center_block .second_title_line {
  font-weight: 400;
  font-size: 100px;
  letter-spacing: 4px;
  line-height: 101px;
  text-align: left;
  justify-content: left;
  align-items: left;
  font-family: "Cormorant";
}
.catalog_page_wrap {
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

.format_filter {
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
      filteredFlowers: [],
      flowers: [],
      to: 10000,
      range: "50",
    };
  },
  created() {
    axios.get("data/flowers.json").then((resp) => {
      this.flowers = resp.data;
    });
  },

  methods: {},
};
</script>
