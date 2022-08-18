<template>
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
      <button type="button" class="delete_btn" @click="askProdDel(flower.id)">
        видалити
      </button>
    </div>
  </div>
  <div class="cart_footer">
    <div class="to_pay">До сплати: {{ this.total }} UAN</div>
    <div class="warning">
      Вартість з доставкою відображується при оформленні замовлення.
    </div>
  </div>
</template>

<style lang="scss" scoped>
$lightGreeen-color: #43ffd2;
$pastelPinc-color: #d978ac;

.flower_title {
  color: #fff;
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 1.2px;
  padding-bottom: 20px;
  max-width: 120px;
  line-height: 16px;
}
.product_qty {
  position: absolute;
  top: 14px;
  left: 36px;
  width: 20px;
  height: 20px;
  font-size: 14px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: $lightGreeen-color;
  color: black;
}

// CART BLOCK START
.cart_side {
  .to_pay {
    text-transform: uppercase;
    margin-top: 25px;
    font-size: 16px;
    color: $lightGreeen-color;
  }
  .warning {
    color: white;
    text-transform: uppercase;
    font-size: 12px;
    line-height: 17px;
    letter-spacing: 1.2px;
  }
  .delete_btn {
    background-color: transparent;
    border: none;
    color: white;
    border-bottom: 1px solid white;
    text-transform: uppercase;
    margin-top: 15px;
    font-family: "Oswald";
    font-weight: 500;
    &:hover {
      cursor: pointer;
    }
  }
  .qty_change {
    width: 100px;
    height: 30px;
    display: flex;
    justify-content: center;
    border: 1px solid #9f9f9f;
    div {
      padding-left: 22px;
      padding-right: 22px;
      display: flex;
      font-size: 12px;
      justify-content: center;
      align-items: center;
    }
    button {
      &:hover {
        cursor: pointer;
      }
      background-color: transparent;
      border: none;
      display: flex;

      align-items: center;
      color: #9f9f9f;
      font-family: "Oswald";
      font-weight: 400;
      font-size: 20px;
    }
    .qty_inc {
      justify-content: center;
    }
    .qty_dec {
      margin-top: -4px;
    }
  }
  .center_block {
    display: flex;
    flex-direction: row;
    column-gap: 10px;
  }
  .cart_header {
    border-bottom: 1px #555555 solid;
    display: flex;
    justify-content: space-between;
    h4 {
      text-transform: uppercase;
      font-size: 30px;
      line-height: 45px;
      letter-spacing: 2px;
      font-weight: 700;
      padding-bottom: 16px;
    }
  }
  .cart_item {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px #555555 solid;
    padding: 20px 10px;
    img {
      max-width: 60px;
      height: 80px;
      margin-right: 10px;
    }
  }

  width: 25vw;
  min-width: 400px;
  position: fixed;
  right: 0;
  top: 0;
  background-color: #0a0b0e;
  color: $lightGreeen-color;
  padding: 30px;
  height: 100vh;
  overflow: scroll;
  z-index: 3000;

  .price_item {
    font-size: 16px;
    color: $lightGreeen-color;
  }
}
// CART BLOCK END
</style>

<script>
import axios from "axios";

export default {
  name: "cartItem",
  data() {
    return {
      cart: [],
      flower: [],
      newQtyItem: 0,
    };
  },
  created() {
    window.addEventListener("scroll", this.fixedHeader);
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
      localStorage.setItem("products in cart", JSON.stringify(this.cart));
      return sum;
    },
  },
  methods: {
    changeProductQty(id, action) {
      const index = this.flowers.findIndex((el) => el.id === id);
      const indexCart = this.cart.findIndex((el) => el.id === id);
      if (this.flowers[index].id === id) {
        if (action === "inc") {
          this.newQtyItem = this.flowers[index].qty + 1;
        } else {
          if (this.flowers[index].qty >= 2) {
            this.newQtyItem = this.flowers[index].qty - 1;
          } else {
            return false;
          }
        }
        this.flowers[index].qty = this.newQtyItem;
        this.cart[indexCart].qty = this.newQtyItem;
        this.cart[indexCart].total =
          this.cart[indexCart].price * this.newQtyItem;
        // this.calculateTotal();
        localStorage.setItem("products in cart", JSON.stringify(this.cart));
      }
    },
    askProdDel(id) {
      // this.calculateTotal();
      const index = this.cart.findIndex((element) => element.id === id);
      this.cart.splice(index, 1);
      localStorage.setItem("products in cart", JSON.stringify(this.cart));
    },
  },
};
</script>
