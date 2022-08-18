<template>
  <section class="methods_wrap">
    <div class="container">
      <div class="methods">
        <h3>Виберіть спосіб оплати:</h3>
        <router-link to="/PaymentSuccessView">
          <button type="button" class="success standart_green_btn">
            Оплата через Privat24
          </button>
        </router-link>
        <router-link to="/PaymentFailView">
          <button type="button" class="fail transparent_btn">
            Альтернативна форма оплати
          </button>
        </router-link>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.methods_wrap {
  background-image: url(../assets/images/additional_pages/placing_order/pinkSm.png),
    url(../assets/images/additional_pages/placing_order/pinkSm2.png),
    url(../assets/images/additional_pages/placing_order/pinkSm2.png);
  background-size: auto;
  background-repeat: no-repeat;
  background-position: -400px -186px, 899px -274px, 855px -102px;
}
.methods {
  h3 {
    margin-left: -160px;
    font-size: 90px;
    max-width: 60vw;
    padding-bottom: 70px;
  }
  button {
    max-width: 25vw;
    width: 25vw;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 15px;
  padding-top: 100px;
  padding-bottom: 150px;
}
</style>

<script></script>
