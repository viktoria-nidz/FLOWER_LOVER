<!-- <template>
  <div>
    <div v-for="flower in flowers" :key="flower">
      <div class="flag_wrap">
        <div v-if="flower.isSale" class="sale">SALE</div>
        <div v-if="flower.isNew" class="new">NEW</div>
      </div>

      <div class="flower_card">
        <img
          :src="require(`@/assets/images/flowers/${flower.images[0]}`)"
          class="card-img-top"
          :alt="flower.title"
        />
        <div class="bouquet_name">{{ flower.title }}</div>
        <div class="price">
          {{ flower.price }} UAN
          <span class="old_price" v-if="flower.isSale"
            >{{ flower.old_price }} UAN</span
          >
        </div>
        <button
          class="transparent_btn"
          type="button"
          @click="addToCart(flower.id, flower.price, flower.title)"
        >
          У корзину
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "oneProduct",
  data() {
    return {
      cart: [],
      flowers: [],
      newQtyItem: 0,
    };
  },
  created() {
    axios.get("/data/flowers.json").then((resp) => {
      this.flowers = resp.data;
    });
    this.cart = JSON.parse(localStorage.getItem("products in cart")) || [];
  },
  methods: {
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
</script> -->
