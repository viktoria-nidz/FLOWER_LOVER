<template>
  <!-- CART BLOCK START -->
  <div class="cart_side">
    <div class="cart_header">
      <h4>Ваша корзина</h4>
      <div @click="toggleCart()" class="close"></div>
    </div>
    <div class="cart_body">
      <div class="cart_item" v-for="flower in cart" :key="flower">
        <div class="center_block">
          <img
            :src="require(`@/assets/images/flowers/${flower.id}.1.jpg`)"
            class="card-img-top"
            :alt="flower.title"
          />

          <div class="wrap_qty_title">
            <div class="flower_title">
              {{ flower.name }}
            </div>
            <div class="qty_change">
              <button
                type="button"
                class="_inc"
                @click="changeProductQty(flower.id, 'inc')"
              >
                +
              </button>
              <div>{{ flower.qty }}</div>
              <button
                type="button"
                class="qty_dec"
                @click="changeProductQty(flower.id, 'dec')"
              >
                -
              </button>
            </div>
          </div>
        </div>
        <div class="total_block">
          <div class="price_item">{{ flower.total }} UAN</div>
          <button
            type="button"
            class="delete_btn"
            @click="askProdDel(flower.id)"
          >
            видалити
          </button>
        </div>
      </div>
    </div>
    <div class="cart_footer">
      <div class="to_pay">До сплати: {{ this.total }} UAN</div>
      <div class="warning">
        Щоб дізнатися про вартість доставки, перейдіть до оформлення замовлення.
      </div>

      <router-link to="/PlacingOrder">
        <button
          class="transparent_btn btn_pay"
          @click="toggleCart()"
          type="button"
        >
          Оформити замовленння
        </button>
      </router-link>
    </div>
  </div>
  <!-- CART BLOCK END -->
</template>
<script>
import axios from "axios";
export default {
  name: "shopCart",

  props: {},
  data() {
    return {
      cart: [],
      flowers: [],
    };
  },
  created() {
    this.cart = JSON.parse(localStorage.getItem("products in cart")) || [];
    axios.get("/data/flowers.json").then((resp) => {
      this.flowers = resp.data;
    });
  },
  computed: {
    newQty() {
      return this.cart.length;
    },
    total() {
      let sum = 0;
      this.cart.forEach((element) => {
        sum += element.total;
      });
      return sum;
    },
  },
};
</script>

<style lang="scss" scoped></style>
