<template>
  <header id="header" class="ad_page">
    <div class="container">
      <div class="menu_wrap">
        <div class="logo_wrap">
          <router-link to="" href="#"
            ><img class="logo" src="../assets/images/logo.svg" alt="logo" />
          </router-link>
        </div>
        <ul>
          <li><router-link to="/">Каталог</router-link></li>
          <li>
            <router-link to="/DeliveryPaymentView"
              >Доставка і оплата
            </router-link>
          </li>
          <li>
            <router-link to="/AboutView">Про нас</router-link>
          </li>
          <li><router-link to="/ContactsView">Контакти</router-link></li>
          <li><router-link to="/FaqView">FAQ </router-link></li>
        </ul>
        <div class="right_block_menu">
          <div class="tel_wrap">
            <router-link to="tel:+375 (29) 113-69-69">
              <span class="icon-phone"></span> +375 (29) 113-69-69</router-link
            >
          </div>
          <button class="cart" type="button">
            <span class="icon-shopping-bag"></span>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>
