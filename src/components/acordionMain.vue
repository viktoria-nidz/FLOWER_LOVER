<template>
  <div class="faq_blok">
    <div class="question_wrap" @click="toggleFaq()">
      <div class="block_wrap">
        <div class="question">{{ faq.question }}</div>
        <button type="button" v-if="isOpen">-</button>
        <button type="button" v-else>+</button>
      </div>

      <div v-if="isOpen" class="answer">{{ faq.answer }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FAQ",
  props: ["faq", "i"],

  data() {
    return {
      isOpen: false,
    };
  },

  methods: {
    toggleFaq() {
      if (this.isOpen === false) {
        this.isOpen = true;
      } else {
        this.isOpen = false;
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

// FAQ PAGE START
.block_wrap {
  display: flex;
  justify-content: space-between;
}
.faq {
  .faq_block {
    padding-bottom: 200px;
  }
  .question {
    max-width: 825px;
    margin-bottom: 15px;
    font-weight: 400;
    color: $lightGreeen-color;
    text-transform: uppercase;
    font-size: 20px;
  }
  .question_wrap {
    padding: 20px;
    margin-bottom: 10px;
    border: 1px solid $lightGreeen-color;
  }

  .answer {
    max-width: 825px;
    font-size: 18px;
    line-height: 29px;
    font-weight: 300;
    font-family: "Oswald";
    letter-spacing: 1px;
  }
}
// FAQ PAGE END
</style>
