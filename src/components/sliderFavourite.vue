<template>
  <div class="carousel">
    <carousel
      :items-to-show="3"
      :settings="sliderSettings"
      :breakpoints="breakpoints"
    >
      <slide v-for="flower in flowers" :key="flower">
        <!-- <oneProduct /> -->
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
      </slide>

      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>
  </div>
</template>

<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import "vue3-carousel/dist/carousel.css";
import axios from "axios";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
// import oneProduct from "@/components/oneProduct.vue";
export default {
  name: "sliderFavorite",
  components: {
    // oneProduct,
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      cart: [],
      flowers: [],
      newQtyItem: 0,
      sliderSettings: {
        itemsToShow: 3,
        // transition: 800,
        // itemsToScroll: 1,
        // infiniteLoop: true,
        // snapAlign: "start",
        // wrapAround: true,
      },

      breakpoints: {
        1024: {
          itemsToShow: 3,
        },
        700: {
          itemsToShow: 2,
        },
        480: {
          itemsToShow: 1,
        },

        // 1024 and up
      },
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
</script>

<style lang="scss" scoped>
$lightGreeen-color: #43ffd2;
$pastelPinc-color: #d978ac;
$pastelPinc-colorSpot: #d978ac8b;
$lightGreeen-colorSpot: #43ffd399;

@mixin triangle {
  content: "";
  position: absolute;
  top: 20px;
  left: -32px;
  transform: rotate(323deg);
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid $lightGreeen-color;
}

.flower_card {
  position: relative;
}

.flag_wrap {
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  position: absolute;
  top: 10px;
  left: 315px;
}

.sale,
.new {
  position: absolute;
  top: 10px;
  left: 315px;
  padding-top: 13px;
  text-align: center;
  width: 60px;
  z-index: 3;
  height: 60px;
  border-radius: 50%;
  color: black;
  font-weight: 300;
  font-size: 20px;
}
.sale {
  background-color: #31985a;
}
.new {
  background-color: #d978ac;
}
.flag_wrap {
  .sale,
  .new {
    position: static;
  }
}
img {
  min-width: 300px;
  max-width: 350px;
  max-height: 450px;
  padding-bottom: 10px;
  filter: grayscale(100%);
  &:hover,
  &:focus {
    filter: grayscale(0%);
  }
}

.price {
  padding-bottom: 20px;
  font-weight: 700;
  letter-spacing: 0.9px;
}
.bouquet_name {
  text-transform: uppercase;
  font-size: 20px;
  flex-wrap: 400;
  letter-spacing: 1.7px;
  padding-bottom: 10px;
}
.price {
  font-size: 14px;
  color: #fff;
  font-family: "Oswald";
  font-weight: 700;
  margin-bottom: 0;
  line-height: 16px;
  .old_price {
    color: #939393;
    font-weight: 300;
    text-decoration: line-through;
    padding-left: 10px;
    line-height: 16px;
  }
}
.carousel__pagination {
  display: none;
}
.carousel__slide {
  width: 200px !important;
}

.carousel__slide[data-v-6b2292e8] {
  width: 350px !important;
  margin-right: 30px;
  margin-left: 10px;
}
.flower_card {
  text-align: left;
}

// RESPONSIVE SLIDER
@media screen and (max-width: 860px) {
  .flower_card {
    img {
      min-width: 280px;
      max-width: 283px !important;
      width: 280px !important;
      height: 394px;
    }
  }
  .carousel__slide {
    margin-right: 1px !important;
    margin-left: -10px !important ;

    .new,
    .sale {
      left: 288px;
    }
    .flag_wrap {
      left: 288px;
    }
  }
}

// RESPONSIVE SLIDER END
</style>
