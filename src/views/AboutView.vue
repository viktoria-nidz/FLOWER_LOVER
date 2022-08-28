<template>
  <main>
    <section class="about">
      <div class="spots">
        <div class="flowers">
          <div class="container first_screen">
            <h3>Про нас</h3>
            <div class="title">Lover flower</div>
            <div class="info_block">
              <div>молода команда різних людей з однаковими цінностями.</div>
              <p>
                Ми вважаємо, що задоволення від якості триває довше, ніж
                задоволення від найнижчої ціни. І тому у створення нашої
                букетерії ми вклали все, чим маємо: душу, серце, час і мрії! Ми
                готові обіцяти вам лише те, що можемо зробити. А робимо ми лише
                найякісніше, найцікавіше та обов'язково унікальне. Ми завжди
                чесні зі своїми клієнтами у всьому – у нашому каталозі тільки ті
                букети, які ви справді зможете купити.
              </p>
            </div>
          </div>
          <div class="container second_screen">
            <div class="info_block">
              <div class="title">Гарантії</div>
              <p>
                Кожна квітка унікальна і щоб ви були впевнені в якості, ми
                надішлемо вам фотографію саме вашого букета до його відправки
                одержувачу. Вся надана Вами інформація є конфіденційною і буде
                відома тільки нам та кур'єру для здійснення доставки.
              </p>
            </div>
            <div class="info_block">
              <div class="title">
                Замовлення букетів на сайті компанії Lower Flower – це:
              </div>
              <ul>
                <li>вибір відтінків та сортів квітів у будь-яку пору року;</li>
                <li>відправка фото готової композиції перед відправкою;</li>
                <li>можливість замовити квіти із доставкою протягом години;</li>
                <li>
                  вигідні ціни – на сайті лише ті варіанти, які Ви зможете
                  купити;
                </li>
                <li>повна конфіденційність на замовлення;</li>
                <li>
                  ми підбираємо листівку, повітряну кулю, подарунок за Вашим
                  бажанням;
                </li>
                <li>
                  у нашому затишному квітковому магазині квіти, які приємно
                  дарувати.
                </li>
              </ul>
            </div>
          </div>
          <div class="container third_screen">
            <div class="title">
              Природна гармонія кольору, неповторність бутонів та Ваші почуття у
              ніжних пелюстках не залишать нікого байдужим.
            </div>
            <p>Ви вибираєте квітковий сюрприз, а ми вкладаємо в нього душу!</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default { name: "AboutView" };
</script>

<style lang="scss" scoped>
$lightGreeen-color: #43ffd2;
$pastelPinc-color: #d978ac;
$pastelPinc-colorSpot: #d978ac8b;
$lightGreeen-colorSpot: #43ffd399;
// ABOUT PAGE START
.about {
  .spots {
    background: radial-gradient(
          rgba(200, 161, 86, 0.5) 0,
          transparent 69%,
          transparent 50%
        ) -64% 503px/629px 517px no-repeat,
      radial-gradient(
          rgba(200, 161, 86, 0.5) 0,
          transparent 71%,
          transparent 50%
        )
        181% 492px/605px 725px no-repeat,
      radial-gradient(
          rgba(200, 161, 86, 0.5) 0,
          transparent 69%,
          transparent 50%
        ) -64% 503px/629px 517px no-repeat,
      radial-gradient(
          rgba(200, 161, 86, 0.5) 0,
          transparent 71%,
          transparent 50%
        )
        181% 492px/605px 725px no-repeat,
      radial-gradient(
          rgba(200, 161, 86, 0.5) 0,
          transparent 69%,
          transparent 50%
        ) -64% 503px/629px 517px no-repeat;

    background-position: -48% -307px, 33% 243px, 88% 17px, -42% 1855px,
      128% 1906px;
  }
  .flowers {
    background-image: url(../assets/images/additional_pages/about/yelSmall.png),
      url(../assets/images/additional_pages/about/yelSmall.png),
      url(../assets/images/additional_pages/about/yellFlowBig.png);
    background-repeat: no-repeat;
    background-position: -78% -153px, 121% -196px, 660px 1019px;
  }
}
h3 {
  padding-top: 160px;
  padding-left: 100px;
  padding-bottom: 98px;
}
.title {
  color: $lightGreeen-color;
  font-size: 60px;
  line-height: 64px;
  letter-spacing: 1px;
  font-family: "Cormorant";
  text-transform: uppercase;
}

.first_screen {
  .title {
    max-width: 242px;
    padding-bottom: 18px;
    position: relative;
    padding-left: 190px;
    &:after {
      content: "";
      width: 60px;
      height: 1px;
      position: absolute;
      top: 94px;
      left: 452px;
      background-color: $lightGreeen-color;
    }
  }
  .info_block {
    padding: 40px 20px;
    margin-left: 32%;
    font-family: "Oswald";
    font-weight: 300;
    line-height: 26px;
    letter-spacing: 1px;
    background: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(20px);
    font-size: 20px;
    margin-bottom: 100px;
    width: min-content;
    div {
      text-transform: uppercase;
      padding-bottom: 20px;
    }
    p {
      max-width: 750px;
      min-width: 650px;
    }
  }
}

.second_screen {
  font-size: 20px;
  font-weight: 300;
  padding-left: 190px;
  letter-spacing: 1px;
  .title {
    padding-bottom: 20px;
    max-width: 695px;
  }
  p {
    line-height: 29.64px;

    text-transform: uppercase;
    max-width: 825px;

    padding-bottom: 100px;
  }
  ul {
    padding-left: 290px;
    padding-bottom: 162px;

    li {
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
  }
}

.third_screen {
  font-size: 20px;
  font-weight: 300;
  padding-bottom: 200px;
  .title {
    color: #fff;
    max-width: 960px;
    padding-bottom: 40px;
  }
  p {
    padding-left: 190px;
    text-transform: uppercase;
    max-width: 510px;
    letter-spacing: 1px;
  }
}
// ABOUT PAGE RESPONSIVE START
@media screen and (max-width: 1295px) {
  .about {
    .flowers {
      background-image: url(../assets/images/additional_pages/about/yelSmall.png),
        url(../assets/images/additional_pages/about/yelSmall.png),
        url(../assets/images/additional_pages/about/yellFlowBig.png);
      background-repeat: no-repeat;
      background-position: -78% -153px, 121% -196px, -131% 1019px;
    }
  }
}
@media screen and (max-width: 1095px) {
  .about {
    .flowers {
      background-image: url(../assets/images/additional_pages/about/yelSmall.png),
        url(../assets/images/additional_pages/about/yelSmall.png),
        url(../assets/images/additional_pages/about/yellFlowBig.png);
      background-repeat: no-repeat;
      background-position: -78% -153px, 121% -196px, 254px 1019px;
    }
    .first_screen .title:after {
      left: 365px;
    }
    .first_screen .title {
      padding-left: 101px;
    }
    h3 {
      font-size: 90px;
    }
  }

  .about .first_screen .info_block {
    margin-left: 18%;
    line-height: 23px;
    font-size: 18px;
  }

  .second_screen {
    padding-left: 112px;
    .title {
      font-size: 55px;
      line-height: 57px;
    }
    p {
      font-size: 18px;
      max-width: 710px;
    }
    ul {
      padding-left: 230px;
      font-size: 19px;
      max-width: 700px;
      line-height: 27px;
    }
  }
  .third_screen {
    p {
      margin-left: 2%;
      min-width: 250px;
    }
    .title {
      font-size: 50px;
      line-height: 57px;
      max-width: 850px;
    }
  }
}

@media screen and (max-width: 850px) {
  .about {
    .flowers {
      background-image: url(../assets/images/additional_pages/about/yelSmall.png),
        url(../assets/images/additional_pages/about/yelSmall.png),
        url(../assets/images/additional_pages/about/yellFlowBig.png);
      background-repeat: no-repeat;
      background-position: -78% -153px, 121% -196px, 145px 1019px;
    }
    .first_screen .title:after {
      left: 335px;
    }
    .first_screen .title {
      padding-left: 60px;
    }

    h3 {
      font-size: 80px;
      padding-top: 113px;
      padding-left: 6px;
    }
  }

  .about .first_screen .info_block {
    margin-left: 18%;
    p {
      max-width: 570px;
      min-width: 500px;
    }
  }

  .second_screen {
    padding-left: 112px;
    .title {
      font-size: 45px;
      line-height: 52px;
    }
    p {
      max-width: 610px;
    }
    ul {
      padding-left: 80px;
      font-size: 18px;
      max-width: 850px;
      line-height: 27px;
    }
  }
  .third_screen {
    p {
      margin-left: 6%;
      min-width: 250px;
    }
    .title {
      font-size: 35px;
      line-height: 40px;
      max-width: 850px;
    }
  }
}

@media screen and (max-width: 680px) {
  .about .first_screen .info_block {
    margin-left: 1%;
    max-width: 550px;
    p {
      max-width: 350px;
    }
  }
  .about {
    .first_screen .title:after {
      left: 335px;
    }
    .first_screen .title {
      padding-left: 60px;
    }

    h3 {
      font-size: 75px;
      padding-bottom: 30px;
    }
  }

  .second_screen {
    padding-left: 112px;
    .title {
      font-size: 40px;
      line-height: 40px;
    }
    p {
      max-width: 610px;
      font-size: 18px;
    }
    ul {
      padding-left: 20px;
      font-size: 18px;
      max-width: 850px;
      line-height: 27px;
    }
  }
  .third_screen {
    .title {
      font-size: 30px;
    }
    p {
      font-size: 16px;
      line-height: 20px;
    }
  }
}

@media screen and (max-width: 580px) {
  .about {
    .first_screen .info_block {
      font-size: 17px;
      padding-bottom: 16px;
      margin-left: 25%;
      p {
        max-width: 300px;
        min-width: 295px;
      }
    }
  }
  .second_screen {
    padding-left: 50px;
    ul {
      padding-bottom: 89px;
    }
  }

  .third_screen {
    .title {
      font-size: 25px;
    }
    p {
      font-size: 15px;
      padding-left: 121px;
    }
  }
}

@media screen and (max-width: 480px) {
  .about {
    h3 {
      font-size: 70px;
    }
    .first_screen .title {
      padding-left: 24px;
      &:after {
        left: 287px;
      }
    }
    .first_screen .info_block {
      font-size: 17px;
      padding-bottom: 16px;
      margin-left: 6%;
      p {
        max-width: 320px;
        min-width: 300px;
      }
    }
  }
  .second_screen {
    padding-left: 20px;

    p {
      font-size: 16px;
      padding-bottom: 60px;
    }
    .title {
      font-size: 31px;
      line-height: 32px;
    }
    ul li {
      font-size: 16px;
      &::before {
        top: 13.5px;
      }
    }
  }
  .third_screen {
    .title {
      line-height: 32px;
      font-size: 24px;
    }
  }
}
@media screen and (max-width: 420px) {
  .about .first_screen .title::after {
    width: 0;
  }
  .first_screen .info_block {
    padding: 38px 8px;
  }
  .about .first_screen .info_block {
    margin-left: -2%;
  }
}

@media screen and (max-width: 370px) {
  .about {
    h3 {
      font-size: 60px;
    }
  }
}

// ABOUT PAGE RESPONSIVE END
// ABOUT PAGE END
</style>
