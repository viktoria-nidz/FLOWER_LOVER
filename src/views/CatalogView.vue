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

              <div class="tel_wrap">
                <router-link to="tel:+375 (29) 113-69-69"
                  >+375 (29) 113-69-69
                </router-link>
                <div class="btn_wrap">
                  <span class="icon-phone"></span>
                  <button type="button">Замовити дзвінок</button>
                </div>
              </div>
              <button class="cart" type="button">
                <span class="icon-shopping-bag"></span>
              </button>
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
                <button type="button" class="mark">
                  День Святого Валентина
                </button>
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
    </div>
  </div>
  <main>
    <section class="flowers_list">
      <div class="container">
        <div class="filters">
          <form id="filters_form" @submit.prevent="">
            <div class="color_filter">
              <input v-model="checked" type="checkbox" id="red" value="red" />
              <label for="red">червоний</label>
              <input
                v-model="checked"
                type="checkbox"
                id="white"
                value="white"
              />
              <label for="white">білий</label>
              <input
                v-model="checked"
                type="checkbox"
                id="yellow"
                value="yellow"
              />
              <label for="yellow">жовтий</label>
              <input v-model="checked" type="checkbox" id="pink" value="pink" />
              <label for="pink">рожевий</label>
              <input
                v-model="checked"
                type="checkbox"
                id="colorful"
                value="colorful"
              />
              <label for="colorful">різнобарвний</label>
            </div>

            <div class="format_filter">
              <input
                v-model="checked"
                type="checkbox"
                id="bouquet"
                value="bouquet"
              />
              <label for="bouquet">букет</label>
              <input v-model="checked" type="checkbox" id="vase" value="vase" />
              <label for="vase">у вазі</label>
              <input
                v-model="checked"
                type="checkbox"
                id="woodbox"
                value="woodbox"
              />
              <label for="woodbox">в ящику</label>
              <input v-model="checked" type="checkbox" id="box" value="box" />
              <label for="box">у коробці</label>
              <input
                v-model="checked"
                type="checkbox"
                id="envelope"
                value="envelope"
              />
              <label for="envelope">у конверті</label>
            </div>
          </form>

          <div
            class="flowers_catalog_items"
            v-for="(flower, number) in flowers"
            :key="number"
          >
            <div class="flower_ite">
              <div class="img-wrap">
                <img
                  :src="require(`@/assets/images/flowers/${flower.images[1]}`)"
                  class="card-img-top"
                  :alt="flower.title"
                />
              </div>
              <div class="title">{{ flower.title }}</div>
              <div class="price">{{ flower.price }} UAN</div>
              <button class="transparent_btn" type="button">У корзину</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.flowers_catalog_items {
  img {
    max-width: 255px;
    margin-bottom: 10px;
  }
  .title {
    text-transform: uppercase;
    font-size: 20px;
    color: #fff;
    font-family: "Oswald";
  }
  display: flex;
  gap: 35px;
  flex-wrap: wrap;
}
</style>

<script>
import axios from "axios";

export default {
  name: "CatalogView",
  data() {
    return {
      checked: [],
      flowers: [],
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
