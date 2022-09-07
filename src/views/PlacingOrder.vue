<template>
  <div class="stains_overlay">
    <div class="flower-overlay">
      <header id="header">
        <div class="container">
          <div class="flower_front"></div>
          <div class="center_block">
            <div class="first_title_line">оформлення</div>
            <div class="second_title_line">замовленння</div>
          </div>
        </div>
      </header>

      <main>
        <section class="order_info">
          <div class="container">
            <div class="form_wrap">
              <div class="title_main">оформлення замовленння</div>
              <div class="sup_title">Контактні дані</div>
              <form @submit.prevent="checkAndSend">
                <div class="form_input">
                  <label for="name">Ваше ім'я*</label>
                  <input
                    v-model="name"
                    @focus="resetError('name')"
                    tabindex="1"
                    type="text"
                    id="name"
                    name="name"
                    :class="{ is_invalid: errors.name !== '' }"
                    placeholder="Введіть ваше ім'я"
                  />
                  <div class="warning">{{ errors.name }}</div>
                </div>
                <div class="form_input">
                  <label for="phone-number">Ваш телефон*</label>
                  <input
                    v-model="phone"
                    @focus="resetError('phone')"
                    v-maska="'### ## ### ## ##'"
                    placeholder="### ## ### ## ##"
                    :class="{ is_invalid: errors.phone !== '' }"
                    tabindex="2"
                    type="tel"
                    id="phone-number"
                    name="phone-number"
                  />
                  <div class="warning">{{ errors.phone }}</div>
                </div>
                <div class="form_input">
                  <label for="email">Ваш e-mail*</label>
                  <input
                    :class="{ is_invalid: errors.email !== '' }"
                    v-model="email"
                    @focus="resetError('email')"
                    tabindex="3"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Введіть вашу пошту"
                  />
                  <div class="warning">{{ errors.email }}</div>
                </div>
                <div class="form_input">
                  <label for="phone-number"
                    >Телефон отримувача (необов'язково)</label
                  >
                  <input
                    tabindex="4"
                    type="tel"
                    :class="{ is_invalid: errors.recipient_phone !== '' }"
                    v-model="recipient_phone"
                    @focus="resetError('recipient_phone')"
                    id="phone-number"
                    name="phone-number"
                    v-maska="'### ## ### ## ##'"
                    placeholder="### ## ### ## ##"
                  />
                  <div class="warning">{{ errors.recipient_phone }}</div>
                </div>
                <div class="form_input">
                  <label for="name">Ім'я отримувача (необов'язково)</label>
                  <input
                    :class="{ is_invalid: errors.recipient_name !== '' }"
                    v-model="recipient_name"
                    @focus="resetError('recipient_name')"
                    tabindex="5"
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Введіть ім'я отримувача"
                  />
                  <div class="warning">{{ errors.recipient_name }}</div>
                </div>

                <div class="form_input comment">
                  <label for="comment">Коментар до замовленння</label>
                  <input
                    :class="{ is_invalid: errors.comment !== '' }"
                    v-model="comment"
                    @focus="resetError('comment')"
                    tabindex="6"
                    type="text"
                    id="comment"
                    name="comment"
                    placeholder="Примітки до замовлення, особливі побажання відділу доставки"
                  />
                  <div class="warning">{{ errors.comment }}</div>
                </div>

                <div class="sup_title">ДОСТАВКА</div>
                <div class="form_radio">
                  <div class="radio">
                    <input
                      v-model="delivery_method"
                      tabindex="7"
                      type="radio"
                      name="delivery"
                      id="selfPickup"
                      value="selfPickup"
                      @click="this.delivery = false"
                      checked
                    />
                    <label for="selfPickup" @click="this.delivery = false">
                      Самовивіз</label
                    >
                  </div>
                  <div class="radio">
                    <input
                      v-model="delivery_method"
                      @click="this.delivery = true"
                      tabindex="8"
                      type="radio"
                      id="courier"
                      value="courier"
                      name="delivery"
                    />
                    <label @click="this.delivery = true" for="courier"
                      >Доставка кур'єром</label
                    >
                  </div>
                </div>
                <div class="delivery_info" v-if="this.delivery">
                  <div class="form_input">
                    <label for="city">Місто*</label>
                    <input
                      :class="{ is_invalid: errors.city !== '' }"
                      v-model="city"
                      @focus="resetError('city')"
                      tabindex="9"
                      type="text"
                      id="city"
                      name="city"
                      placeholder="Введіть місто"
                    />
                    <div class="warning">{{ errors.city }}</div>
                  </div>
                  <div class="form_input">
                    <label for="street">Вулиця*</label>
                    <input
                      :class="{ is_invalid: errors.street !== '' }"
                      v-model="street"
                      @focus="resetError('street')"
                      tabindex="10"
                      type="text"
                      id="street"
                      name="street"
                      placeholder="Введіть вулицю"
                    />
                    <div class="warning">{{ errors.street }}</div>
                  </div>

                  <div class="small_input_wrap">
                    <div class="form_input small">
                      <label for="house">Будинок</label>
                      <input
                        v-model="house"
                        tabindex="11"
                        @focus="resetError('house')"
                        type="text"
                        id="house"
                        name="house"
                        placeholder="Номер будинку"
                      />
                      <div class="warning">{{ errors.house }}</div>
                    </div>
                    <div class="form_input small">
                      <label for="entrance">Під'їзд</label>
                      <input
                        v-model="entrance"
                        @focus="resetError('entrance')"
                        tabindex="12"
                        type="text"
                        id="entrance"
                        name="entrance"
                        placeholder="Номер під'їзду"
                      />
                      <div class="warning">{{ errors.entrance }}</div>
                    </div>
                    <div class="form_input small">
                      <label for="flat">Квартира</label>
                      <input
                        v-model="flat"
                        @focus="resetError('flat')"
                        tabindex="13"
                        type="text"
                        id="flat"
                        name="flat"
                        placeholder="Номер квартири"
                      />
                      <div class="warning">{{ errors.flat }}</div>
                    </div>
                  </div>
                  <div class="form_input set_time">
                    <label for="time">Час доставки</label>

                    <input
                      :class="{ is_invalid: errors.time !== '' }"
                      v-model="time"
                      @focus="resetError('time')"
                      type="time"
                      id="time"
                      name="time"
                      min="07:00"
                      max="24:00"
                    />
                    <div class="warning">{{ errors.time }}</div>
                  </div>
                </div>
                <div class="shipping_price">
                  Вартість доставки: {{ this.delivery_price }} UAN
                </div>
                <div class="to_pay title_main">
                  Загальна сума замовлення: {{ this.total }} UAN
                </div>

                <button type="submit" class="standart_green_btn to_pay_btn">
                  <span v-if="!this.valid"> ДО ОПЛАТИ</span>
                  <span v-else @click="$router.push('/PaymentProcess')">
                    ДО ОПЛАТИ</span
                  >
                </button>
              </form>
            </div>
            <div class="cart_side">
              <div class="title_cart">Ваше замовлення:</div>
              <div class="cart_body" @click="checkChanges()">
                <cartItem />
                <div class="cart_item"></div>
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
$pastelPinc-colorSpot: #8a10519d;
$lightGreeen-colorSpot: #43ffd399;

.container {
  display: flex;
  justify-content: space-between;
}
.cart_side {
  margin-top: 130px;
}
button a {
  color: black;
  // height: 100%;
  // width: 100%;
  text-decoration: none;
}
.form_wrap {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-start;
  max-width: 600px;
  width: auto;
}
.to_pay.title_main,
.title_cart {
  font-size: 20px;
  margin-bottom: 10px;
}
.title_cart {
  text-transform: uppercase;
  color: $lightGreeen-color;
}
.shipping_price {
  margin-bottom: 30px;
}
.flower-overlay {
  background-image: url(../assets/images/additional_pages/placing_order/pinkSm.png),
    url(../assets/images/additional_pages/placing_order/pinkSm2.png),
    url(../assets/images/additional_pages/placing_order/pinkSm2.png);
  background-size: auto;
  background-repeat: no-repeat;
  background-position: -400px -186px, 899px -274px, 855px -102px;
}
.order_info {
  padding-bottom: 200px;
}

.title_main {
  text-transform: uppercase;
  color: $lightGreeen-color;
  font-weight: 700;
  font-size: 30px;
  line-height: 44px;
  margin-bottom: 40px;
  letter-spacing: 1.7px;
}
.sup_title {
  text-transform: uppercase;
  color: $lightGreeen-color;
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
  margin-bottom: 20px;
  letter-spacing: 1px;
}
input[type="time"]::-webkit-calendar-picker-indicator {
  background: none;
  display: none;
}

.radio {
  display: flex;
  column-gap: 12px;
  label {
    text-transform: uppercase;
    font-family: "Oswald";
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 1.2px;
    line-height: 21px;
    margin-bottom: 12px;
    color: #ffffff;
  }
}
.form_wrap .form_input {
  padding: 0;

  margin-bottom: 20px;
}
input[type="radio"] {
  -webkit-appearance: none;
  appearance: none;
  background-color: #fff;
  margin: 0;
  color: #353535;
  background-color: transparent;
  position: relative;
  width: 16px;
  height: 16px;
  border: 1.8px solid #353535;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;
  &:before {
    content: "";
    margin-left: -0.3px;
    margin-top: 0.7px;
    width: 8px;
    height: 8px;
    color: #fff;
    border-radius: 50%;
    background-color: white;
    display: none;
  }
  &:checked::before {
    display: block;
  }
  &:checked {
    border: 1.8px solid #ffffff;
  }
}

.form_input {
  input {
    color: #fff;
    outline: none;
    border: 1px #555555 solid;
    background-color: transparent;
    padding: 20px;
    max-width: 540px;
    height: 60px;
    &::placeholder {
      color: #555555;
      font-family: "Oswald";
      font-size: 14px;
    }
  }

  display: flex;
  flex-direction: column;
  border: none;
  label {
    color: #fff;
    text-transform: none;
    font-weight: 400;
    font-size: 14px;
    margin-bottom: 4px;
  }
}
.to_pay_btn {
  width: 100%;
  font-size: 16px;
}
.form_input.comment {
  margin-bottom: 60px;
}
.small_input_wrap {
  display: flex;
  column-gap: 20px;
  input {
    max-width: 135px;
  }
}
.form_input.set_time {
  max-width: 160px;
}
.form_wrap {
  .form_input:active,
  .form_input:focus {
    outline: none;
    border: none;
  }
}
input:active,
input:focus,
input:hover {
  cursor: pointer;
  border: 1px solid white;
  outline: 1px solid white;
}

.is_invalid {
  border: 1px solid rgb(135, 20, 20);
  color: rgb(135, 20, 20);
  &::placeholder {
    color: rgb(135, 20, 20);
  }
}
.stains_overlay {
  background: radial-gradient(
        $pastelPinc-colorSpot 0,
        transparent 70%,
        transparent 52%
      ) -303% -596px/737px 527px no-repeat,
    radial-gradient($pastelPinc-colorSpot 0, transparent 71%, transparent 52%)
      181% 492px/850px 765px no-repeat,
    radial-gradient($pastelPinc-colorSpot 0, transparent 69%, transparent 52%) -64%
      503px/629px 517px no-repeat,
    radial-gradient($pastelPinc-colorSpot 0, transparent 71%, transparent 52%)
      181% 492px/805px 725px no-repeat,
    radial-gradient($pastelPinc-colorSpot 0, transparent 69%, transparent 52%) -64%
      503px/629px 517px no-repeat,
    radial-gradient($pastelPinc-colorSpot 0, transparent 71%, transparent 52%)
      181% 492px/955px 725px no-repeat,
    radial-gradient($lightGreeen-colorSpot 0, transparent 76%, transparent 52%) -64%
      503px/579px 817px no-repeat,
    radial-gradient($lightGreeen-colorSpot 0, transparent 71%, transparent 52%)
      181% 492px/605px 725px no-repeat,
    radial-gradient($lightGreeen-colorSpot 0, transparent 69%, transparent 52%) -64%
      503px/629px 517px no-repeat;

  background-position: -20% 197px, 144% -397px, 101% 438px, -34% 1000px,
    104% 2770px, 56% 1034px, 98% 722px, -21% 1674px, 124% 2719px;
}
.center_block {
  padding-top: 103px;
  .second_title_line {
    padding-left: 100px;
  }
}
input:autofill {
  background-color: transparent !important;
  background-image: none !important;
  color: -internal-light-dark(black, white) !important;
}
input:-internal-autofill-selected {
  background-color: transparent !important;
}
.center_block .first_title_line,
.center_block .second_title_line {
  font-weight: 400;
  font-size: 120px;
  letter-spacing: 2.5px;
  line-height: 130px;

  text-transform: uppercase;
  font-family: "Cormorant";
}
@media screen and (max-width: 1090px) {
  .center_block .first_title_line,
  .center_block .second_title_line {
    font-size: 95px;
    line-height: 111px;
  }
  .form_wrap {
    margin-top: 58px;
  }
}
@media screen and (max-width: 990px) {
  .order_info .container {
    .cart_side {
      margin-top: 37px;
      .title_cart {
        font-size: 30px;
      }
    }
    display: flex;
    flex-wrap: wrap-reverse;
    justify-content: center;
  }
}
@media screen and (max-width: 900px) {
  .center_block .first_title_line,
  .center_block .second_title_line {
    font-size: 77px;
    line-height: 81px;
  }
}

@media screen and (max-width: 740px) {
  .center_block .first_title_line,
  .center_block .second_title_line {
    font-size: 56px;
    line-height: 62px;
  }
  .form_wrap {
    padding-left: 5px;
    max-width: 95vw;
  }
  .to_pay_btn {
    max-width: 295px;
  }
}

@media screen and (max-width: 590px) {
  .center_block .first_title_line,
  .center_block .second_title_line {
    font-size: 52px;
    line-height: 62px;
  }
  .center_block .second_title_line {
    padding-left: 0px;
  }
  .form_input input {
    max-width: 300px;
  }
  .small_input_wrap {
    flex-wrap: wrap;
  }
}

@media screen and (max-width: 450px) {
  .center_block .first_title_line,
  .center_block .second_title_line {
    font-size: 32px;
    line-height: 42px;
  }
  .to_pay.title_main,
  .title_main,
  .title_cart {
    font-size: 16px;
  }
}
</style>

<script>
import axios from "axios";
// import Maska from "maska";
// import vueRouter from "vue-router";
// import VueMask from "v-mask";
import cartItem from "@/components/cartItem.vue";
export default {
  name: "PlacingOrder",
  components: {
    cartItem,
  },
  data() {
    return {
      API_BOT_ID: "5304811755:AAGAlQLe6tex_5H-dDWBO1oI4Ytwb0CMpVk",
      CHAT_ID: "-1001688345339",
      valid: false,
      cart: [],
      delivery: false,
      name: "",
      phone: "",
      email: "",
      recipient_name: "",
      recipient_phone: "",
      comment: "",
      delivery_method: "",
      city: "",
      checkValid: false,
      street: "",
      house: 0,
      flat: 0,
      entrance: 0,
      time: "",
      errors: {
        name: "",
        phone: "",
        email: "",
        recipient_name: "",
        recipient_phone: "",
        comment: "",
        delivery_method: "",
        city: "",
        street: "",
        house: "",
        flat: "",
        entrance: "",
        time: "",
      },
    };
  },
  computed: {
    delivery_price() {
      if (this.city === "Київ") {
        return 50;
      } else {
        return 150;
      }
    },
    total() {
      let sum = 0;

      this.cart.forEach((element) => {
        sum += element.total;
      });
      return sum + this.delivery_price;
    },
  },
  // add to LOCAL
  //  localStorage.setItem("products in cart", JSON.stringify(this.cart));
  created() {
    axios.get("data/flowers.json").then((resp) => {
      this.flowers = resp.data;
      this.cart = JSON.parse(localStorage.getItem("products in cart")) || [];
      // console.log(this.cart);
    });
  },
  watch: {
    selected: {
      handler: function () {
        this.sortByMarks();
      },
    },
  },
  methods: {
    checkChanges() {
      this.cart = JSON.parse(localStorage.getItem("products in cart")) || [];
    },
    checkAndSend() {
      let valid = true;
      if (this.name === "") {
        this.errors.name = "Введіть своє ім'я!";
        valid = false;
      }

      if (this.name.length === 1) {
        this.errors.name = "Мінімальна довжина імені 2 символа!";
        valid = false;
      }

      if (this.email === "") {
        this.errors.email = "Введіть email!";
        valid = false;

        /* eslint-disable no-alert, no-console */
      } else if (
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(this.email) // eslint-disable-line no-use-before-define
      ) {
        /* eslint-enable no-alert, no-console*/
        this.errors.email = "Введіть валідний email!";
        valid = false;
      }
      if (this.phone === "" || this.phone.length < 12) {
        this.errors.phone = "Введіть свій валідний телефон!";
        valid = false;
      }

      if (this.delivery_method === "courier") {
        if (this.city === "") {
          this.errors.city = "Введіть місто!";
          valid = false;
        }

        if (this.street === "") {
          this.errors.street = "Введіть вулицю";
          valid = false;
        }
      }

      if (valid) {
        this.valid = true;
        const message_text =
          "<i>ORDER INFORMATION:</i>" +
          "%0a<b>Name:</b>" +
          this.name +
          "%0a<b>Email:</b>" +
          this.email +
          "%0a<b>Phone Number:</b>" +
          this.phone +
          "%0a<b>Recipient name :</b>" +
          this.recipient_name +
          "%0a<b>Recipient phone :</b>" +
          this.recipient_phone +
          "%0a<b>Comment :</b>" +
          this.comment +
          "%0a<b>Delivery method :</b>" +
          this.delivery_method +
          "%0a<b>City :</b>" +
          this.city +
          "%0a<b>Street:</b>" +
          this.street +
          "%0a<b>House:</b>" +
          this.house +
          +"%0a<b>Flat:</b>" +
          this.flat +
          "%0a<b>Entrance:</b>" +
          this.entranse +
          "%0a<b>Time:</b>" +
          this.time;

        fetch(
          `https://api.telegram.org/bot${this.API_BOT_ID}/sendMessage?chat_id=${this.CHAT_ID}&text=${message_text}&parse_mode=HTML`
        ).then((resp) => {
          if (resp.ok) {
            this.name =
              this.email =
              this.phone =
              this.recipient_name =
              this.recipient_phone =
              this.comment =
              this.delivery_method =
              this.city =
              this.street =
              this.house =
              this.flat =
              this.entranse =
              this.time =
                "";
          }
        });
      }
    },
    resetError(fld) {
      this.errors[fld] = "";
    },
    isValidEmail(email) {
      if (email === "") {
        return Boolean();
        //   email.match(
        //     /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        //   )
      }
    },
    addToCart(id, price, title) {
      let qty = 1;
      if (this.cart.find((el) => el.id === id) === undefined) {
        this.cart.push({
          name: title,
          id: id,
          qty: qty,
          isBuy: false,
          price: price,
          total: parseFloat((qty * price).toFixed(2)),
        });
        localStorage.setItem("products in cart", JSON.stringify(this.cart));
        this.cart = JSON.parse(localStorage.getItem("products in cart")) || [];
      } else {
        if (this.cart.findIndex((el) => el.id === id) !== undefined) {
          const prodIndex = this.cart.findIndex((el) => el.id === id);
          const newQty = this.cart[prodIndex].qty + 1;
          this.cart[prodIndex].qty = newQty;
          this.cart[prodIndex].total = parseFloat(
            (newQty * this.cart[prodIndex].price).toFixed(2)
          );
        }

        localStorage.setItem("products in cart", JSON.stringify(this.cart));
        this.cart = JSON.parse(localStorage.getItem("products in cart")) || [];
      }
    },
  },
};
</script>
