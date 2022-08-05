<template>
  <main>
    <section class="deliv_paym">
      <div class="spots">
        <div class="flowers">
          <div class="container">
            <h3>Доставка <span>і оплата</span></h3>
            <div class="warning">
              <div class="title">Дорогі клієнти!</div>
              <p>
                Під час пандемії (COVID-19) компанія Lover Flower закликає всіх
                менше контактувати з іншими для захисту себе та своїх близьких.
                Саме тому ми організували
                <span class="highlighted"> БЕЗКОНТАКТНУ ДОСТАВКУ</span>
              </p>
            </div>

            <div class="paym_methods">
              <div class="title">Способи оплати:</div>
              <div class="methods_wrap">
                <div class="method">
                  БАНКІВСЬКОЮ КАРТОЮ ПРИ ОФОРМЛЕННІ ЗАМОВЛЕННЯ ЧЕРЕЗ САЙТ або за
                  посиланням
                </div>
                <div class="method">
                  Готівкою, БАНКІВСЬКОЮ КАРТОЮ ПРИ САМОВИВОЗІ або з
                  розрахункового рахунку організації
                </div>
                <div class="method">Готівкою при доставці кур'єром</div>
                <div class="method">КРИПТОВАЛЮТОЮ</div>
              </div>
            </div>
          </div>
          <div class="container">
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
                  Також ви можете забрати ваше замовлення самостійно за адресою:

                  <span class="highlighted">
                    м.Київ, вул. Анни Ахматової, 25, кімн. 112 щоденно з 10.00
                    до 21.00
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
                  <span class="highlighted"> обговорюються з менеджеромь </span>
                </li>
              </ul>
            </div>
          </div>
          <div class="container wrap">
            <div class="additional_info">
              <div class="title">Додатково:</div>
              <div class="info">
                <p>
                  Доставка іншій особі можлива лише у разі оплати замовлення
                  замовником. Доставка здійснюється не раніше ніж через 2 години
                  після оплати замовлення, але може бути раніше, якщо букет є у
                  наявності або за домовленістю з менеджером.
                </p>
                <p>
                  Час очікування кур'єра складає 15 хвилин.<br />
                  Якщо на момент доставки кольорів одержувача немає або немає
                  можливості з інших причин зробити доставку (зазначена неточна
                  адреса, закриті вхідні двері, контрольно-пропускна система та
                  ін), ми залишаємо за собою право на свій вибір:
                </p>
                <ul>
                  <li>залишити квіти тому, хто відчинив двері;</li>
                  <li>
                    із замовником погодити повторну доставку, що додатково
                    оплачується;
                  </li>
                  <li>
                    відмовитися від передачі квітів без повернення коштів.
                  </li>
                </ul>
                <div class="down_info">
                  Якщо ви або інший одержувач не отримали замовлення, вам
                  необхідно повідомити про це менеджера по телефону:
                  <div>
                    <router-link to="tel:+375 (29) 113-69-69" class="number">
                      +375 29 113 69 69</router-link
                    >
                  </div>
                </div>
              </div>

              <div class="cash_back">
                <div class="title">Повернення грошей:</div>
                <p>
                  При відмові замовника від замовлення протягом двох годин, якщо
                  замовлення ще не почало готуватися, кошти повертаються в
                  повному обсязі. Якщо ж флорист почав підготовку, то замовник
                  має право на повернення 50% вартості, або, якщо ще не було
                  сплачено, то має сплатити 50%.
                </p>
                <p>
                  Квіти належної якості поверненню та обміну не підлягають, а
                  якщо є якісь недоліки в кольорах – повернення проводиться лише
                  якщо ці недоліки не є природними та природними вадами рослини.
                  Повернення коштів здійснюється негайно на той рахунок, з якого
                  відбулася оплата, їх же надходження на рахунок залежить від
                  платіжної системи.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default { name: "DeliveryPaymentView" };
</script>

<style lang="scss" scoped>
$lightGreeen-color: #43ffd2;
$pastelPinc-color: #d978ac;
$pastelPinc-colorSpot: #d978ac8b;
$lightGreeen-colorSpot: #43ffd399;
// DELIVERY AMD PAYMENT PAGE START
.deliv_paym {
  .container.wrap {
    padding-bottom: 230px;
  }
  .spots {
    background: radial-gradient(
          rgba(107, 83, 95, 0.5) 0,
          transparent 70%,
          transparent 100%
        ) -303% -596px/532px 427px no-repeat,
      radial-gradient(
          rgba(107, 83, 95, 0.5) 0,
          transparent 71%,
          transparent 100%
        )
        181% 492px/605px 725px no-repeat,
      radial-gradient(
          rgba(107, 83, 95, 0.5) 0,
          transparent 69%,
          transparent 100%
        ) -64% 503px/629px 517px no-repeat,
      radial-gradient(
          rgba(107, 83, 95, 0.5) 0,
          transparent 71%,
          transparent 100%
        )
        181% 492px/605px 725px no-repeat,
      radial-gradient(
          rgba(107, 83, 95, 0.5) 0,
          transparent 69%,
          transparent 100%
        ) -64% 503px/629px 517px no-repeat,
      radial-gradient(
          rgba(107, 83, 95, 0.5) 0,
          transparent 71%,
          transparent 100%
        )
        181% 492px/605px 725px no-repeat,
      radial-gradient(
          rgba(107, 83, 95, 0.5) 0,
          transparent 69%,
          transparent 100%
        ) -64% 503px/629px 517px no-repeat;

    background-position: -37% -278px, 12% 206px, 103% 167px, -31% 1771px,
      -91% 790px, 152% 918px, 188% 1716px;
  }
  .flowers {
    background-image: url(../assets/images/additional_pages/delivery_payment/FlowerSmall.png),
      url(../assets/images/additional_pages/delivery_payment/FlowerSmall.png),
      url(../assets/images/additional_pages/delivery_payment/FlowerBig.png);
    background-repeat: no-repeat;
    background-position: -88% 1272px, 81% 67px, 403% 1244px;
  }
  .title {
    font-family: "Oswald";
    font-weight: 700;
    font-size: 20px;
    padding-bottom: 20px;
    letter-spacing: 1px;
    color: $pastelPinc-color;
    text-transform: uppercase;
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

  .warning {
    position: relative;
    &::before {
      content: "";
      position: absolute;
      top: 24px;
      left: 111px;
      width: 0;
      height: 0;
      border-left: 5px solid transparent;
      border-right: 7px solid transparent;
      border-radius: 4px;
      border-top: 60px solid $pastelPinc-color;
    }
    &::after {
      content: "";
      width: 9px;
      height: 9px;
      position: absolute;
      top: 93.5px;
      left: 111px;
      background-color: $pastelPinc-color;
      border-radius: 50%;
    }
    padding-left: 143px;
    padding-bottom: 100px;
    letter-spacing: 1.2px;
    line-height: 20.75px;
    .title {
      font-size: 14px;
      padding-bottom: 10px;
    }
    p {
      text-transform: uppercase;
      max-width: 500px;
      font-weight: 400;
      font-size: 14px;
    }
    .highlighted {
      font-size: 14px;
    }
  }

  .paym_methods {
    .methods_wrap {
      padding-bottom: 100px;
      display: flex;
      justify-content: space-between;
      .method {
        padding: 30px;
        padding-bottom: 20px;
        height: 211px;
        display: flex;
        letter-spacing: 0.6px;
        justify-content: center;
        align-items: center;
        width: 255px;
        text-transform: uppercase;
        text-align: center;
        font-weight: 300;
        line-height: 26px;
        font-size: 20px;
        background-color: rgba(0, 0, 0, 0.2);
        backdrop-filter: blur(20px);
        border-radius: 20px;
        position: relative;
        &::before {
          content: "";
          width: 11px;
          height: 11px;
          position: absolute;
          top: 20px;
          left: 48%;
          background-color: #6b535f;
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
    max-width: 700px;
    padding-bottom: 100px;
    padding-left: 100px;
  }
  .conditions_info {
    max-width: 880px;
    padding-bottom: 100px;
  }

  .additional_info {
    padding: 30px;

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
// DELIVERY AMD PAYMENT PAGE END

// DELIVERY AND PAYMENT PAGE RESPONSIVE

@media screen and (max-width: 1200px) {
  .deliv_paym {
    .paym_methods .methods_wrap .method {
      font-size: 17px;
      padding: 23px 15px 15px;
      width: 226px;
    }
  }
}

@media screen and (max-width: 1070px) {
  .deliv_paym {
    .paym_methods .methods_wrap {
      justify-content: center;
      flex-wrap: wrap;
      .method {
        width: 250px;
      }
      row-gap: 25px;
      column-gap: 120px;
    }
    .paym_methods .title {
      padding-left: 70px;
    }
  }
}

@media screen and (max-width: 900px) {
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
