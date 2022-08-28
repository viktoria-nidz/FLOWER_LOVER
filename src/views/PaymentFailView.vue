<template>
  <main>
    <section class="fail_payment">
      <div class="spots">
        <div class="container">
          <h3>Помилка <span>Платежу</span></h3>
          <div class="message_block">
            <div class="error">Виникла помилка....</div>
            <div class="message">Спробуйте сплатити ще раз!</div>
            <div class="buttons">
              <router-link to="/PaymentProcess">
                <button class="standart_green_btn" type="button">
                  Сплатити ще раз
                </button>
              </router-link>

              <router-link class="to_main" to="/"
                >Повернутися на головну</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default { name: "PaymentFailView" };
</script>

<style lang="scss" scoped>
$lightGreeen-color: #43ffd2;
$pastelPinc-color: #d978ac;
$pastelPinc-colorSpot: #d978ac8b;
$lightGreeen-colorSpot: #43ffd399;

// PAYMENT_FAIL PAGE
.fail_payment {
  background-image: url(../assets/images/additional_pages/payment_fail/failFlow.png);
  background-repeat: no-repeat;
  position: relative;
  z-index: 0;
  background-position: 101% -102px;
  .spots {
    position: relative;
    z-index: -1;

    background: radial-gradient(
          $pastelPinc-colorSpot 0,
          transparent 71%,
          transparent 50%
        )
        123% -456px/605px 725px no-repeat,
      radial-gradient($pastelPinc-colorSpot 0, transparent 67%, transparent 50%) -34%
        640px/629px 517px no-repeat,
      radial-gradient($pastelPinc-colorSpot 0, transparent 72%, transparent 50%)
        116% 515px/605px 725px no-repeat;
  }
  text-transform: uppercase;

  h3 {
    padding-top: 113px;
    padding-bottom: 30px;
    span {
      padding-left: 18%;
    }
  }
  .message_block {
    position: relative;
    z-index: 2;
    padding-left: 213px;
    letter-spacing: 1px;
    padding-bottom: 441px;
    .to_main {
      font-weight: 300;
      color: #fff;
      &:hover,
      &:active {
        cursor: pointer;
        text-decoration: none;
      }
    }
    .standart_green_btn {
      margin-right: 50px;
      cursor: pointer;
      background-color: #7d2253;
      font-family: "Oswald";
      font-weight: 700;
      letter-spacing: 2px;
      font-size: 12px;
      color: #fff;
      border: none;
      text-transform: uppercase;
      padding: 16px 51px;
      &:active {
        color: #1b000e;
        background-color: $lightGreeen-color;
        box-shadow: inset 0px 0px 10px #1b000e;
      }
      &:hover {
        color: #1b000e;
        background-color: $lightGreeen-color;
      }
    }
  }
  .error {
    padding-bottom: 30px;
  }
}

// PAYMENT_FAIL PAGE END

// PAYMENT FAIL PAGE  RESPONSIVE START
@media screen and (max-width: 1040px) {
  .fail_payment {
    .spots {
      background: radial-gradient(#d978ac 0, transparent 71%, transparent 50%)
          71% -412px/466px 725px no-repeat,
        radial-gradient(#d978ac 0, transparent 69%, transparent 50%) -94% 644px/483px
          517px no-repeat,
        radial-gradient(#d978ac 0, transparent 72%, transparent 50%) 170% 448px/540px
          725px no-repeat;
    }
  }
}

@media screen and (max-width: 1040px) {
  .fail_payment {
    .message_block {
      padding-left: 51px;
    }
    h3 {
      padding-left: 20px;
      padding-bottom: 25px;
    }
  }
}

@media screen and (max-width: 570px) {
  .fail_payment {
    .message_block {
      padding-bottom: 316px;
      padding-left: 51px;
      font-size: 15px;
      .standart_green_btn {
        margin-right: 20px;
        padding: 15px 43px;
      }
    }
    h3 {
      font-size: 70px;
      line-height: 70px;
      padding-left: 10px;
    }
  }
}

@media screen and (max-width: 470px) {
  .fail_payment {
    .message_block {
      padding-left: 2px;
      padding-bottom: 216px;
      .buttons {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
      }
    }
    h3 {
      padding-top: 95px;
      text-align: center;
      span {
        padding-left: 0;
      }
      font-size: 60px;
      line-height: 65px;
      padding-left: 2px;
    }
  }
}
// PAYMENT FAIL PAGE  RESPONSIVE END
</style>
