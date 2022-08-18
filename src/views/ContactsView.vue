<template>
  <main>
    <section class="contacts">
      <div class="spots">
        <div class="flowers">
          <div class="container">
            <div class="contacts_block">
              <h3>КОНТАКТИ</h3>
              <div class="contacts_wrap">
                <div class="contact">
                  <div class="title">час роботи</div>
                  з 10:00 до 21:00 без вихідних
                </div>
                <div class="contact">
                  <div class="title">Адреса</div>
                  м.Київ, вул. Анни Ахматової, 25 кв. 112
                </div>
                <div class="contact">
                  <div class="title">Телефон</div>
                  +375 (29) 113-69-69
                </div>
                <div class="contact">
                  <div class="title">E-mail</div>
                  zakaz@loverflower.by
                </div>
              </div>
            </div>
            <div class="form_block">
              <h3>Напишіть <span>нам</span></h3>
              <div class="form_wrap question">
                <p class="form_instr">
                  Надішліть ваше запитання,<br />
                  замовлення або скаргу через форму зворотного зв'язку, і наш
                  спеціаліст зв'яжеться з вами протягом 15 хвилин.
                </p>

                <smallForm />
                <div class="sup_inst_wrap">
                  <p class="sup_instr">
                    Натискаючи на кнопку «Надіслати», я даю свою згоду на
                    обробку персональних даних відповідно до
                    <span> Політики конфіденційності</span>
                  </p>
                </div>
              </div>
              <!-- QUESTIONS_FORM END-->
            </div>

            <div class="map_block">
              <div class="title">ми на карті</div>
              <div id="map">
                <router-link to="javascript:void(0)" id="map_cover">
                  <img
                    class="map-screen lazy"
                    src="../assets/images/additional_pages/contacts/Screenshot_2.jpg"
                    alt="map_screen"
                  />
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

  <!-- </html> -->
</template>

<script>
import smallForm from "@/components/smallForm.vue";
export default {
  name: "ContactsView",
  components: {
    smallForm,
  },
};
</script>

<style lang="scss" scoped>
// CONTACTS PAGE START
$lightGreeen-color: #43ffd2;
$pastelPinc-color: #d978ac;
$pastelPinc-colorSpot: #d978ac8b;
$lightGreeen-colorSpot: #43ffd399;
.contacts {
  .spots {
    background: radial-gradient(
          rgba(146, 45, 45, 0.5) 0,
          transparent 70%,
          transparent 100%
        ) -303% -596px/800px 427px no-repeat,
      radial-gradient(
          rgba(146, 45, 45, 0.5) 0,
          transparent 71%,
          transparent 100%
        )
        181% 492px/800px 725px no-repeat,
      radial-gradient(
          rgba(146, 45, 45, 0.5) 0,
          transparent 71%,
          transparent 100%
        )
        181% 492px/790px 725px no-repeat;

    background-position: 155% 2000px, -44% 1900px, 132% -164px;
  }
  .flowers {
    background-image: url(../assets/images/additional_pages/contacts/redFlow1.png),
      url(../assets/images/additional_pages/contacts/redFlow2.png);
    background-repeat: no-repeat;
    background-position: -510px 178px, 773px -102px;
  }
  h3 {
    margin-bottom: 40px;
    padding-top: 60px;
    padding-left: 100px;
  }
  .contacts_wrap {
    padding-bottom: 140px;
    display: flex;
    justify-content: space-between;
    font-style: 20px;
    .contact {
      font-weight: 300;
      padding: 25px;

      padding-bottom: 25px;
      font-size: 20px;
      height: 211px;
      display: flex;
      letter-spacing: 0.6px;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 255px;
      text-transform: none;
      text-align: center;
      font-weight: 300;
      line-height: 26px;
      font-size: 20px;
      background-color: rgba(0, 0, 0, 0.2);
      backdrop-filter: blur(20px);
      border-radius: 20px;
      .title {
        text-transform: uppercase;
        align-self: center;
        justify-self: start;
        font-family: "Oswald";
        margin-bottom: 15px;
        color: $lightGreeen-color;
        font-size: 20px;
        font-weight: 700;
        letter-spacing: 1.2px;
      }
    }
  }
  .form_block {
    h3 {
      letter-spacing: 1px;
      align-self: flex-start;
      padding-left: 0;
      margin-left: 6px;
      max-width: 604px;
      span {
        padding-left: 52.5%;
      }
    }
    margin-bottom: 100px;
    margin-right: 70px;
    .form_wrap.question {
      margin-top: -149px;

      .form_input {
        border: 1px solid #555555;
        color: #555555;
        &::placeholder {
          color: #555555;
        }
        &:active,
        &:focus {
          border: 1px solid #fff;
          color: #fff;
          &::placeholder {
            color: #fff;
          }
        }
      }
    }
  }
  .map_block {
    padding-bottom: 200px;
    .title {
      margin-bottom: 20px;
      color: $lightGreeen-color;
      font-weight: 700;
      font-size: 20px;
      text-transform: uppercase;
    }
  }
}
// CONTACTS PAGE END

// CONTACTS PAGE RESPONSIVE START
@media screen and (max-width: 1250px) {
  .contacts {
    .contacts_wrap .contact {
      width: 220px;
      font-size: 19px;
      padding-top: 0;
    }
    .flowers {
      background-image: url(../assets/images/additional_pages/contacts/redFlow1.png),
        url(../assets/images/additional_pages/contacts/redFlow2.png);
      background-repeat: no-repeat;
      background-position: -510px 178px, 573px -102px;
    }
  }
}

@media screen and (max-width: 1040px) {
  .contacts {
    .contacts_wrap .contact {
      width: 200px;
      font-size: 18px;
      height: 162px;
    }
    .form_block {
      h3 {
        font-size: 80px;
        max-width: 503px;
        line-height: 71px;
      }
    }
  }
}
@media screen and (max-width: 950px) {
  .contacts {
    .form_block .form_wrap.question {
      margin-top: -19px;
    }
    .form_instr:before {
      top: -31px;
    }
  }
}

@media screen and (max-width: 900px) {
  .contacts {
    .flowers {
      background-image: url(../assets/images/additional_pages/contacts/redFlow1.png),
        url(../assets/images/additional_pages/contacts/redFlow2.png);
      background-repeat: no-repeat;
      background-position: -510px 178px, 373px -62px;
    }
    h3 {
      margin-bottom: -3px;
      padding-left: 35px;
    }
    .contacts_wrap {
      flex-wrap: wrap;
      column-gap: 120px;
      row-gap: 25px;
      justify-content: center;
    }
  }
}

@media screen and (max-width: 640px) {
  .contacts {
    .flowers {
      background-image: url(../assets/images/additional_pages/contacts/redFlow1.png),
        url(../assets/images/additional_pages/contacts/redFlow2.png);
      background-repeat: no-repeat;
      background-position: -510px 178px, 173px -23px;
    }
    .contacts_wrap {
      column-gap: 85px;
      row-gap: 20px;
    }
    h3 {
      padding-left: 25px;
      font-size: 80px;
    }
    .form_block {
      h3 {
        font-size: 70px;
        span {
          padding-left: 70.5%;
        }
      }
    }
    .form_wrap {
      padding-left: 30px;
      justify-content: flex-start;
      align-items: flex-start;
    }
  }
}

@media screen and (max-width: 540px) {
  .contacts {
    h3 {
      margin-bottom: -20px;
      font-size: 65px;
      padding-left: 10px;
    }
    .form_block {
      margin-bottom: 30px;
      h3 {
        line-height: 51px;
        font-size: 60px;
      }
    }
    .form_wrap {
      .form_instr {
        max-width: 343px;
      }
      .sup_instr {
        max-width: 280px;
      }
      form {
        max-width: 353px;
        min-width: 363px;
      }
      padding-left: 20px;
    }
  }
}

@media screen and (max-width: 400px) {
  .contacts {
    h3 {
      margin-bottom: -60px;
      font-size: 50px;
    }
  }
}
// CONTACTS PAGE RESPONSIVE END
</style>
