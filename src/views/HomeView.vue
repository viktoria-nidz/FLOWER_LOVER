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
              <div class="first_title_line">lover</div>
              <div class="second_title_line">flower</div>
              <div class="desc">
                Створюємо для тих, хто цінує свіжість та витонченість квітки
              </div>
              <button class="standart_green_btn" type="button">
                Дивитись Каталог
              </button>
            </div>
          </div>
        </div>

        <div class="dark_overlay"></div>
      </header>
    </div>
  </div>
  <main id="main">
    <!-- CATALOG -->
    <section class="about_catalog_page">
      <div class="spots">
        <div class="container">
          <h3>Каталог</h3>
          <div class="first_line">
            <div class="catalog_desc">
              <p>
                У нас найбільший вибір квітів, букетів, листівок та подарунків.
                Ми завжди допоможемо вам підібрати букет для вашої події, наш
                менеджер вас проконсультує та допоможе визначитися з тим, що вам
                найкраще підійде
              </p>
              <span>Ознайомтеся з нашими розділами каталогу</span>
            </div>
            <div class="ready_bouquets block">
              <h4>готові букети із сухоцвітів</h4>
              <ul>
                <li>Букети</li>
                <li>Для інтер'єра</li>
                <li>Композиції</li>
              </ul>
              <div class="btn-wrap">
                <button class="watch_catalog_btn" type="button">
                  Дивитись каталог
                </button>
              </div>
            </div>
          </div>
          <div class="second_line">
            <div class="flowers block">
              <h4>квіти</h4>
              <ul>
                <li>Збірні Букети</li>
                <li>Монобукети</li>
                <li>Композиції з квітів</li>
                <li>Троянди</li>
                <li>Весільні</li>
              </ul>
              <div class="btn-wrap">
                <button class="watch_catalog_btn" type="button">
                  Дивитись каталог
                </button>
              </div>
            </div>

            <div class="additional block">
              <h4>Додатково</h4>
              <ul>
                <li>Кульки</li>
                <li>Іграшки</li>
                <li>Листівки</li>
                <li>Упакування</li>
              </ul>
              <div class="btn-wrap">
                <button class="watch_catalog_btn" type="button">
                  Дивитись каталог
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- CATALOG END -->
    <!-- POPULAR -->
    <section class="popular_bouquets">
      <div class="spots popular">
        <div class="marmur">
          <div class="container">
            <div class="title_wrap">
              <h3>Популярні <span>Букети</span></h3>
              <div class="sub_text">
                Найулюбленіші композиції наших клієнтів
              </div>
            </div>

            <div class="popular_slider_wrapper">
              <div class="arrow-left"></div>
              <div class="flower_card">
                <img src="../assets/images/special_1.jpg" alt="" />
                <div class="bouquet_name">найкращий з усіх</div>
                <div class="price">628 UAN</div>
                <button class="transparent_btn" type="button">У корзину</button>
              </div>

              <div class="flower_card">
                <img src="../assets/images/special_1.jpg" alt="" />
                <div class="bouquet_name">найкращий з усіх</div>
                <div class="price">628 UAN</div>
                <button class="transparent_btn" type="button">У корзину</button>
              </div>

              <div class="flower_card">
                <img src="../assets/images/special_1.jpg" alt="" />
                <div class="bouquet_name">найкращий з усіх</div>
                <div class="price">628 UAN</div>
                <button class="transparent_btn" type="button">У корзину</button>
              </div>
              <div class="arrow-right"></div>
            </div>

            <button class="watch_catalog_btn" type="button">
              Дивитись увесь каталог
            </button>
          </div>
        </div>
      </div>
    </section>
    <!-- POPULAR END-->

    <!-- HOW TO ORDER -->
    <section class="how_to_order">
      <div class="order_background">
        <div class="container">
          <h3>Як зробити <span>замовлення</span></h3>
          <div class="steps_wrap">
            <div class="column_first">
              <div class="step">
                <h6 class="first_step">1 КРОК</h6>
                <p>Виберіть, які квіти чи подарунки ви хочете купити</p>
              </div>
              <div class="step">
                <h6>2 КРОК</h6>
                <p>
                  Оформіть замовлення, і ми надішлемо вам підтвердження на
                  електронну пошту, а також менеджер зв'яжеться з вами по
                  телефону або WhatsApp
                </p>
              </div>
              <div class="step">
                <h6>3 КРОК</h6>
                <p>
                  Наші флористи дбайливо підійдуть до створення букету квітів на
                  початку дня або напередодні
                </p>
              </div>
            </div>

            <div class="column_second">
              <div class="step">
                <h6>4 КРОК</h6>
                <p>
                  Один з наших кур'єрів або партнерів доставить ваше замовлення
                  на вказану адресу. Ми надішлемо вам повідомлення в Whats App
                  як тільки замовлення буде доставлено
                </p>
              </div>

              <div class="step">
                <h6>5 КРОК</h6>
                <p>
                  Насолоджуйтесь квітами, якщо ви замовили їх для дому або
                  любов'ю, якою поділилися, якщо ви замовили для друга
                </p>
              </div>
            </div>
          </div>
          <div class="signature">Lover <span>Flower</span></div>
        </div>
      </div>
    </section>
    <!-- HOW TO ORDER END-->
    <!-- SPECIAL OCCASION -->
    <section class="special_occasion">
      <div class="spot">
        <div class="container">
          <div class="title_line">
            <h3>Особливий <span>привід?</span></h3>
            <img src="../assets/images/special_1.jpg" alt="bouquets" />
          </div>
          <div class="img_line">
            <div class="text_info">
              <p>
                Ми готові прийти на допомогу та зібрати унікальний букет, на
                будь-який смак, бюджет та для будь-якої події за вашим
                індивідуальним замовленням.
              </p>
              <ul>
                <li>врахуємо навіть найвишуканіші побажання;</li>
                <li>
                  підберемо найсвіжіші квіти та зробимо унікальний букет чи
                  композицію;
                </li>
                <li>сплатити можна при отриманні або онлайн на сайті</li>
              </ul>
              <button class="standart_green_btn" type="button">
                зібрати індивідуальний букет
              </button>
            </div>
            <img src="../assets/images/special_2.jpg" alt="bouquets" />
            <img
              class="small_img"
              src="../assets/images/special_3.jpg"
              alt="bouquets"
            />
            <img src="../assets/images/special_4.jpg" alt="bouquets" />
          </div>
        </div>
      </div>
    </section>
    <!-- SPECIAL OCCASION END-->

    <!-- QUESTIONS_FORM -->
    <section class="questions_form">
      <div class="spots">
        <div class="signature_shadow">
          <div class="leaves"></div>
          <div class="signature">have any questions?</div>
          <div class="container">
            <h3>Залишились <span>запитання?</span></h3>

            <div class="form_wrap">
              <p class="form_instr">
                Надішліть ваше запитання,<br />
                замовлення або скаргу через форму зворотного зв'язку, і наш
                спеціаліст зв'яжеться з вами протягом 15 хвилин.
              </p>
              <smallForm />
              <div class="sup_inst_wrap">
                <p class="sup_instr">
                  Натискаючи на кнопку «Надіслати», я даю свою згоду на обробку
                  персональних даних відповідно до
                  <span> Політики конфіденційності</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="img_block_wrap">
        <div class="spots_signature">
          <div class="container">
            <div class="img_line">
              <img src="../assets/images/bottom_1.jpg" alt="bouquet" />
              <img src="../assets/images/bottom_2.jpg" alt="bouquet" />
              <img src="../assets/images/bottom_3.jpg" alt="bouquet" />
              <img src="../assets/images/bottom_4.jpg" alt="bouquet" />
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
        </div>

        <div class="signature">our social networks</div>
      </div>
    </section>
    <!-- QUESTIONS_FORM END-->
  </main>
</template>

<style lang="scss" scoped>
$lightGreeen-color: #43ffd2;
$pastelPinc-color: #d978ac;
$pastelPinc-colorSpot: #d978ac8b;
$lightGreeen-colorSpot: #43ffd399;
input:-internal-autofill-selected {
  background-color: transparent !important;
}
.center_block {
  position: relative;
  top: 0;
  left: 69px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 150px;
  .first_title_line {
    // display: flex;
    position: relative;
    z-index: 1;
  }
  .first_title_line,
  .second_title_line {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Cormorant";
    font-weight: 300;
    font-size: 200px;
    letter-spacing: 40px;
    text-transform: uppercase;
    line-height: 155px;
    text-align: center;
  }
  .second_title_line {
    margin-bottom: 60px;
    opacity: 0.95;
  }
}

.flower-overlay {
  width: 100%;
  background-image: url(../assets/images/firstTO.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 66% 0px;
  top: 0;
  left: 0;
}
.stains_overlay {
  background: radial-gradient(
        $lightGreeen-color 0%,
        transparent 72%,
        transparent 100%
      ) -92px 256px/463.9px 564.05px no-repeat,
    radial-gradient($pastelPinc-color 0%, transparent 74%, transparent 100%)
      970px 324px/390px 559px no-repeat;
  display: flex;
  margin-bottom: 30px;
  background-repeat: no-repeat;
}
</style>
<script>
// @ is an alias to /src
import smallForm from "@/components/smallForm.vue";
export default {
  name: "HomeView",
  components: {
    smallForm,
  },
  data() {},
};
</script>
