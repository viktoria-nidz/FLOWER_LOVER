<template>
  <main>
    <section class="success_pay">
      <div class="spots">
        <div class="container">
          <h3>Оплата пройшла <span>успішно!</span></h3>
          <div class="message_block">
            <div class="order_num">Ваш номер замовлення – 395808599</div>
            <div class="message">
              <div>Спасибі за замовлення!</div>
              Ви отримаєте повідомлення про статус вашого замовлення
            </div>
            <router-link class="to_main" to="/"
              >Повернутися на головну</router-link
            >
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default { name: "PaymentSuccessView" };
</script>

<style lang="scss" scoped>
$lightGreeen-color: #43ffd2;
$pastelPinc-color: #d978ac;
$pastelPinc-colorSpot: #d978ac8b;
$lightGreeen-colorSpot: #43ffd399;
// PAYMENT_SUCCESS PAGE #header { padding-bottom: 1px; margin-bottom: 73px; }

.menu_wrap {
  max-width: 1107px;
}
.right_block_menu {
  padding-top: 8px;
  display: flex;
  padding-left: 153px;
  .tel_wrap {
    padding-right: 21px;
    align-self: center;
    padding-top: 12px;
  }
}
.cart {
  &:hover {
    cursor: pointer;
    color: $lightGreeen-color;
  }
}
.success_pay {
  text-transform: uppercase;
  letter-spacing: 1px; // position: relative; z-index: 0;
  background-image: url(../assets/images/additional_pages/payment_success/flowerback.png);
  background-repeat: no-repeat;
  background-position: 101% 267px;
  .spots {
    // position: relative;
    // z-index: -1;
    background: radial-gradient(
          $lightGreeen-colorSpot 0,
          transparent 70%,
          transparent 52%
        ) -23% -124px/532px 427px no-repeat,
      radial-gradient(
          $pastelPinc-colorSpot 0,
          transparent 71%,
          transparent 52%
        ) -24% 596px/605px 725px no-repeat,
      radial-gradient(
          $pastelPinc-colorSpot 0,
          transparent 69%,
          transparent 52%
        )
        141% -147px/666px 517px no-repeat,
      radial-gradient(
          $lightGreeen-colorSpot 0,
          transparent 72%,
          transparent 52%
        )
        79% 619px/664px 517px no-repeat;
  }
  .message_block {
    padding-bottom: 408px;
    margin-left: 160px;
    .to_main {
      color: $lightGreeen-color;
      text-transform: uppercase;
      font-weight: 700;
      &:hover,
      &:active {
        cursor: pointer;
        text-decoration: none;
      }
    }
    line-height: 21px;
    max-width: 400px;
    .order_num {
      padding-bottom: 20px;
    }
    .message {
      padding-bottom: 61px;
      div {
        padding-bottom: 4px;
      }
    }
  }
  h3 {
    padding-top: 113px;
    padding-bottom: 30px;
    position: relative;
    span {
      padding-left: 42%;
      &::before {
        content: "";
        width: 349px;
        height: 1px;
        position: absolute;
        top: 263px;
        left: 159px;
        background-color: $pastelPinc-color;
      }
    }
  }
}
#footer {
  padding-top: 25px;
}
.message_block {
  &:hover {
    cursor: pointer;
  }
  position: relative;
  z-index: 2;
}

//PAYMENT_SUCCESS PAGE END
// PAYMENT SUCCESS PAGE  RESPONSIVE START
@media screen and (max-width: 1215px) {
  .success_pay {
    h3 {
      font-size: 80px;
      line-height: 80px;
      span {
        padding-left: 300px;
        &::before {
          top: 231px;
          left: 152px;
          width: 230px;
        }
      }
    }
  }
}

@media screen and (max-width: 980px) {
  .success_pay {
    background-position: 280px 207px;
    .message_block {
      margin-left: 35px;
      padding-bottom: 102px;
    }
    h3 {
      font-size: 70px;
      line-height: 70px;
      padding-left: 25px;
      span {
        padding-left: 300px;
        &::before {
          top: 220px;
          left: 42px;
          width: 230px;
        }
      }
    }
  }
}

@media screen and (max-width: 795px) {
  .success_pay {
    background-position: 280px 207px;
    .message_block {
      margin-left: 35px;
      padding-bottom: 102px;
      .message {
        padding-bottom: 33px;
      }
    }
    h3 {
      font-size: 60px;
      line-height: 60px;
      padding-left: 25px;
      span {
        padding-left: 270px;
        &::before {
          top: 205px;
          left: 42px;
        }
      }
    }
  }
}

@media screen and (max-width: 680px) {
  .success_pay {
    background-position: 270px 200px;
    h3 {
      font-size: 50px;
      line-height: 50px;

      span {
        padding-left: 3px;
        &::before {
          width: 0;
          display: none;
        }
      }
    }
  }
}
// PAYMENT SUCCESS PAGE  RESPONSIVE END
</style>
