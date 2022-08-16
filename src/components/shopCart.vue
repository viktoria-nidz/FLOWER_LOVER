<template>
  <div class="shopCart">
    <h1>CART</h1>
    <cartItem v-if="cart.len" />
  </div>
</template>
<script>
import cartItem from "./cartItem";
export default {
  name: "shopCart",
  components: {
    cartItem,
  },
  props: {},
  data() {
    return {};
  },
};
</script>
