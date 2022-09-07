<template>
  <div class="flower-overlay">
    <div class="stains_overlay">
      <header class="header">
        <div class="">
          <div class="container">
            <div class="menu_wrap"></div>
            <div class="right_block">
              <div class="mail_wrap">
                <a href="mailto:zakaz@loverflower.by">zakaz@loverflower.by</a>
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
                    <a
                      href="https://www.instagram.com/"
                      title="instagram"
                      target="_blank"
                      rel="noopenner noreferrer"
                    >
                      <span class="icon-instagram"></span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.whatsapp.com/?lang=uk"
                      title="whatsapp"
                      target="_blank"
                      rel="noopenner noreferrer"
                    >
                      <span class="icon-whatsapp"></span>
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://www.viber.com/en/"
                      title="viber"
                      target="_blank"
                      rel="noopenner noreferrer"
                    >
                      <span class="icon-viber"></span>
                    </a>
                  </li>
                </ul>
              </div>

              <div class="tel_wrap">
                <a href="tel:+375 (29) 113-69-69">+375 (29) 113-69-69 </a>
                <div class="btn_wrap">
                  <span class="icon-phone"></span>
                  <button type="button">
                    <a href="tel:+375 (29) 113-69-69">Замовити дзвінок</a>
                  </button>
                </div>
              </div>
            </div>

            <div class="flower_front"></div>
            <div class="center_block main_page">
              <div class="first_title_line">lover</div>
              <div class="second_title_line">flower</div>
              <div class="desc">
                Створюємо для тих, хто цінує свіжість та витонченість квітки
              </div>
              <router-link to="/CatalogView">
                <button class="standart_green_btn" type="button">
                  Дивитись Каталог
                </button>
              </router-link>
            </div>
          </div>
        </div>
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
                <router-link to="/CatalogView">
                  <button class="watch_catalog_btn" type="button">
                    Дивитись каталог
                  </button>
                </router-link>
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
                <router-link to="/CatalogView">
                  <button class="watch_catalog_btn" type="button">
                    Дивитись каталог
                  </button>
                </router-link>
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
                <router-link to="/CatalogView">
                  <button class="watch_catalog_btn" type="button">
                    Дивитись каталог
                  </button>
                </router-link>
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
              <sliderFavourite />
            </div>
            <router-link to="/CatalogView">
              <div class="btn_wrap_catalog">
                <button class="watch_catalog_btn" type="button">
                  Дивитись увесь каталог
                </button>
              </div>
            </router-link>
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
          <!-- <div class="signature">Lover <span>Flower</span></div> -->
        </div>
      </div>
    </section>
    <!-- HOW TO ORDER END-->
    <!-- SPECIAL OCCASION -->
    <section class="special_occasion">
      <div class="spot">
        <div class="container">
          <div class="title_line">
            <h3 class="smaller_h3">Особливий <span>привід?</span></h3>
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
              <router-link to="/CatalogView">
                <button class="standart_green_btn" type="button">
                  <router-link to="/Error404View"
                    >зібрати індивідуальний букет</router-link
                  >
                </button>
              </router-link>
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
          <div class="signature question">have any questions?</div>
          <div class="container">
            <h3 class="tit_form">Залишились <span>запитання?</span></h3>

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
                  персональних даних.
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
                  <a
                    href="https://www.instagram.com/"
                    title="instagram"
                    target="_blank"
                    rel="noopenner noreferrer"
                  >
                    <span class="icon-instagram"></span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.whatsapp.com/?lang=uk"
                    title="whatsapp"
                    target="_blank"
                    rel="noopenner noreferrer"
                  >
                    <span class="icon-whatsapp"></span>
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.viber.com/en/"
                    title="viber"
                    target="_blank"
                    rel="noopenner noreferrer"
                  >
                    <span class="icon-viber"></span>
                  </a>
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

.popular_slider_wrapper {
  margin-bottom: 30px;
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
.standart_green_btn a {
  color: black;
  text-decoration: none;
}

// @media screen and (max-width: 1377px) {
//   .carousel__prev::before,
//   .carousel__next::before {
//     width: 40px !important;
//     left: -35px;
//   }

//   .carousel__prev::after {
//     content: "";
//     left: -41px;
//   }
// }
@media screen and (max-width: 1340px) {
  .questions_form .signature {
    right: -423px;
  }
  .questions_form {
    h3 {
      font-size: 87px;
      line-height: 76px;
    }
  }
}

@media screen and (max-width: 1165px) {
  .special_occasion {
    h3 {
      font-size: 80px;
      line-height: 89px;
      max-width: 720px;
      span::before {
        top: 52px;
      }
    }
    .img_line {
      column-gap: 10vw;
      justify-content: center;
      img {
        max-width: 300px;
        max-height: 295px;
      }
    }
  }
  .signature.question {
    display: none;
  }
  .questions_form .signature {
    top: -373px;
    line-height: 35px;
    left: 76%;
  }
  .img_block_wrap::before {
    right: -1px;
  }

  .questions_form {
    .img_block_wrap {
      flex-wrap: nowrap;
    }
    .social_networks {
      align-items: flex-start;
      margin-top: 25px;
      padding-right: 5px;
      &:before {
        left: -159px;
        top: -44px;
      }
    }
    h3 {
      font-size: 87px;
      line-height: 76px;
    }
  }
}
@media screen and (max-width: 965px) {
  .about_catalog_page .second_line {
    padding-bottom: 55px;
  }
  .popular_bouquets {
    .btn_wrap_catalog {
      padding-bottom: 97px;
    }
  }

  .questions_form {
    .signature {
      top: -295px;
    }
    .img_block_wrap {
      padding-bottom: 0;
    }
    .social_networks {
      margin-bottom: 10px;

      height: auto;
    }
  }
}
@media screen and (max-width: 975px) {
  .about_catalog_page {
    .block {
      min-width: 320px;
    }
    .block li {
      font-size: 16px;
    }

    h3 {
      padding-top: 61px;
      padding-bottom: 65px;
      font-size: 85px;
      line-height: 87px;
    }
    p {
      font-size: 18px;
    }
  }
  .special_occasion h3 span[data-v-9ea40744]::before {
    top: 43px;
  }
  .special_occasion {
    h3 {
      font-size: 70px;
      line-height: 75px;
      padding-left: 15px;
      max-width: 620px;
    }
    .img_line {
      column-gap: 7vw;
    }
  }
}
@media screen and (max-width: 905px) {
  .flower-overlay .header {
    margin-bottom: -103px;
    padding-bottom: 217px;
  }
  .questions_form .signature {
    line-height: 35px;
    left: 76%;
    top: -120px;
  }

  .questions_form {
    .social_wrap {
      width: 100%;
    }
    .img_line {
      gap: 15px;
    }
    .social_networks {
      align-items: flex-start;

      margin-top: 25px;
      padding-right: 5px;
      &:before {
        left: -159px;
        top: -44px;
      }
    }
    h3 {
      font-size: 87px;
      line-height: 76px;
    }
  }
  .questions_form {
    .signature_shadow {
      background-position: -26vw -44vw;
    }
    .leaves {
      background-position: -17vw -35vw;
    }
  }
}
@media screen and (max-width: 830px) {
  .questions_form {
    h3 {
      font-size: 70px;
    }
    .form_wrap .form_instr:before {
      top: -22px;
    }
    .signature_shadow {
      background-position: -36vw -61vw;
    }
    .leaves {
      background-position: -27vw -55vw;
    }
  }
}

@media screen and (max-width: 766px) {
  .questions_form .social_wrap {
    width: 88%;
  }
  .questions_form .signature {
    left: 54%;
    top: -205px;
  }
  .special_occasion h3 span[data-v-9ea40744][data-v-9ea40744]::before {
    top: 32px;
  }
  .special_occasion {
    h3 {
      font-size: 55px;
      line-height: 65px;
      margin-right: 10px;
      padding-left: 15px;
      max-width: 620px;
      span::before {
        top: 52px;
      }
    }
    .img_line {
      column-gap: 7vw;
      justify-content: center;
      img {
        max-width: 300px;
        max-height: 295px;
      }
    }
  }

  .questions_form {
    .social_wrap {
      margin-top: -137px;
      .social_networks {
        &:before {
          left: -174px;
          top: -54px;
        }
      }
      .signature {
        top: -205px;
      }
    }
  }
}

@media screen and (max-width: 720px) {
  .special_occasion h3 {
    font-size: 51px;
    line-height: 65px;
    padding-left: 0px;
  }
  .about_catalog_page {
    .first_line .catalog_desc {
      margin-left: -9%;
    }
    h3 {
      padding-top: 51px;
      padding-bottom: 45px;
      padding-left: 40px;
      font-size: 70px;
      line-height: 77px;
    }
    p {
      font-size: 17px;
    }
  }
  .special_occasion h3 {
    padding-top: 50px;
  }
  .questions_form {
    h3 {
      padding-left: 10px;
      padding-bottom: 6px;
    }
    .signature_shadow {
      background-image: none;
    }
    .leaves {
      background-image: none;
      display: none;
    }
    .form_wrap {
      justify-content: center;
      align-items: center;
    }
    .questions_form {
      h3 {
        font-size: 60px;
      }
    }
  }
  @media screen and (max-width: 600px) {
    .questions_form {
      h3.tit_form {
        font-size: 60px;
        line-height: 64px;
        span {
          margin-left: 0%;
        }
      }
    }
  }

  @media screen and (max-width: 566px) {
    .special_occasion .title_line {
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      h3 {
        max-width: 320px;
        text-align: center;
        line-height: 60px;
        span {
          padding-left: 82px;
          &:before {
            width: 12vw;
          }
        }
      }
    }
    .questions_form .signature {
      left: 45%;
      top: -127px;
    }
    .questions_form {
      .img_block_wrap .img_line {
        justify-content: center;
        gap: 30px;
      }
      .img_block_wrap::before {
        top: 461px;
        right: -146;
        font-size: 158px;
      }
      .social_networks {
        margin-top: 127px;
        &:before {
          left: -128px;
          top: -55px;
        }
      }
      .social_wrap {
        margin-top: -137px;
        .social_networks {
          &:before {
            left: -174px;
            top: -54px;
          }
        }
        .signature {
          top: -391px;
        }
      }
    }
  }

  @media screen and (max-width: 490px) {
    .special_occasion .title_line h3 {
      font-size: 50px;
      line-height: 60px;
    }
    .questions_form {
      h3.tit_form {
        font-size: 49px;
        line-height: 54px;
        margin-bottom: 10px;
      }
      .form_wrap {
        .sup_inst_wrap {
          width: 334px;
        }
        form {
          max-width: 340px;
          min-width: 340px;

          justify-content: center;
        }
      }
    }
  }
  .about_catalog_page {
    h3 {
      padding-top: 41px;
      padding-bottom: 25px;
      padding-left: 30px;
      font-size: 50px;
      line-height: 57px;
    }
    .first_line .catalog_desc {
      margin-left: -10%;
      min-width: 290px;
      width: 315px;
    }
  }

  .popular_bouquets {
    .sub_text {
      padding-left: 2.5%;
      font-weight: 300;
      font-size: 19px;
      letter-spacing: 1px;
      padding-bottom: 58px;
    }
    h3 {
      font-size: 50px;
      line-height: 53px;
      padding-left: 6px;
      span {
        padding-left: 24%;
      }
    }
  }

  @media screen and (max-width: 490px) {
    .questions_form {
      h3.tit_form {
        font-size: 42px;
        line-height: 45px;
        padding-left: 0;
      }
      .form_wrap {
        .sup_inst_wrap {
          width: 300px;
        }
        form {
          max-width: 310px;
          min-width: 310px;

          justify-content: center;
        }
      }
    }
  }

  @media screen and (max-width: 400px) {
    .about_catalog_page .block {
      padding: 25px 26px;
      margin: 5px;
      min-width: 300px;
    }
  }
}
</style>
<script>
import smallForm from "@/components/smallForm.vue";
import sliderFavourite from "@/components/sliderFavourite.vue";
export default {
  name: "HomeView",
  components: {
    smallForm,
    sliderFavourite,
  },
  data() {},
};
</script>
