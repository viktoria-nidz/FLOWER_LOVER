<template>
  <MainHeader />
  <router-view />
  <mainFooter />
</template>

<script>
import MainHeader from "@/components/mainHeader.vue";
import MainFooter from "@/components/mainFooter.vue";
export default {
  
  components: {
    MainHeader,
    MainFooter,
  },
};
</script>
