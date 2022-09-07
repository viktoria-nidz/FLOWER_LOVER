<template>
  <form @submit.prevent="checkAndSend">
    <input
      v-model.trim="name"
      @focus="resetError('name')"
      type="text"
      name="full_name"
      id="form_name"
      class="form_input name"
      placeholder="Ваше ім'я"
      :class="{ invalid: errors.name !== '' }"
    />
    <div class="warning">{{ errors.name }}</div>
    <input
      v-model.trim="phone"
      @focus="resetError('phone')"
      type="tel"
      name="tel"
      id="form_phone"
      class="form_input phone"
      v-maska="'### ## ### ## ##'"
      placeholder="### ## ### ## ##"
      :class="{ invalid: errors.phone !== '' }"
    />
    <div class="warning">{{ errors.phone }}</div>
    <textarea
      v-model.trim="comment"
      @focus="resetError('comment')"
      cols="30"
      rows="5"
      class="form_input massage"
      placeholder="Ваш коментар"
      :class="{ invalid: errors.comment !== '' }"
      id="form_massage"
    ></textarea>
    <div class="warning">{{ errors.comment }}</div>
    <button type="submit" class="standart_green_btn submit">Відправити</button>
  </form>
</template>

<style lang="scss" scoped>
$lightGreeen-color: #43ffd2;
$pastelPinc-color: #d978ac;
$pastelPinc-colorSpot: #d978ac8b;
$lightGreeen-colorSpot: #43ffd399;
input:-internal-autofill-selected {
  background-color: transparent !important;
}

.desc {
  font-size: 20px;
  letter-spacing: 1px;
  text-align: center;
  padding-bottom: 47px;
}

.invalid {
  border: 1px solid rgb(135, 20, 20);
  color: rgb(135, 20, 20);
  &::placeholder {
    color: rgb(135, 20, 20);
  }
}
input:autofill {
  background-color: transparent;
}
</style>
<script>
export default {
  name: "SmallForm",
  components: {},
  data() {
    return {
      API_BOT_ID: "5304811755:AAGAlQLe6tex_5H-dDWBO1oI4Ytwb0CMpVk",
      CHAT_ID: "-1001688345339",
      name: "",
      phone: "",
      comment: "",
      errors: {
        phone: "",
        name: "",
        comment: "",
      },
    };
  },
  methods: {
    checkAndSend() {
      let valid = true;
      if (this.name === "") {
        this.errors.name = "Введіть своє ім'я!";
        valid = false;
      }

      if (this.name.length === 1) {
        this.errors.name = "Мінімальна довжина імені - два символи!";
        valid = false;
      }

      if (this.phone === "" || this.phone.length < 12) {
        this.errors.phone = "Введіть валідний номер телефону";
        valid = false;
      }
      if (this.comment === "") {
        this.errors.comment = "Введіь своє повідомлення";
        valid = false;
      }

      if (valid) {
        const message_text =
          "<i>HOME FORM:</i>" +
          "%0a<b>Name:</b>" +
          this.name +
          "%0a<b>Email:</b>" +
          this.phone +
          "%0a<b>Message:</b>" +
          this.comment;

        fetch(
          `https://api.telegram.org/bot${this.API_BOT_ID}/sendMessage?chat_id=${this.CHAT_ID}&text=${message_text}&parse_mode=HTML`
        ).then((resp) => {
          if (resp.ok) {
            this.name = this.phone = this.message = "";
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
        // email.match(
        //   /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        // )
      }
    },
  },
};
</script>
