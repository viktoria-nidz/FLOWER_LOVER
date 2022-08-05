<template>
  <!-- FOOTER START -->
  <footer id="footer">
    <div class="container">
      <div class="col_1">
        <router-link to="/"
          ><img class="logo" src="../assets/images/logo.svg" alt="logo"
        /></router-link>
        <div class="green_text">Реквізити</div>
        <div class="adress">
          ТОВ "Ловефлове" 220035, Україна, м.Київ, вул. Тимірязєва буд. 67,
          кімн. 112 (прим.11) УНП 193263781, р/р BY55MTBK30120001093300096372
          ЗАТ «МТБанк», БІК MTBKBY22 220007, м. Київ, вулиця Байракта
        </div>
      </div>
      <ul class="col_2">
        <li class="green_text">Каталог</li>
        <li><router-link to=""> Популярне </router-link></li>
        <li><router-link to=""> Сухоцвіти </router-link></li>
        <li><router-link to=""> Букети троянд </router-link></li>
        <li><router-link to=""> Композиції з квітів </router-link></li>
        <li><router-link to=""> Ідеальний букет </router-link></li>
        <li><router-link to=""> Букет на свято </router-link></li>
        <li><router-link to=""> Упакування подарунку </router-link></li>
        <li><router-link to=""> Кульки </router-link></li>
        <li><router-link to=""> Листівки </router-link></li>
        <li><router-link to=""> Конверти </router-link></li>
      </ul>
      <ul class="col_3">
        <li class="green_text">Букет</li>
        <li><router-link to=""> Для дівчини </router-link></li>
        <li><router-link to=""> Для чоловіка </router-link></li>
        <li><router-link to=""> Для дружини </router-link></li>
        <li><router-link to=""> Для мами </router-link></li>
        <li><router-link to=""> Для колеги </router-link></li>
        <li><router-link to=""> Для начальника </router-link></li>
        <li><router-link to=""> Для дочки </router-link></li>
        <li><router-link to=""> Для дітей </router-link></li>
        <li><router-link to=""> Для жінки </router-link></li>
      </ul>
      <ul class="col_4 green_text">
        <li><router-link to=""> Доставка і оплата </router-link></li>
        <li><router-link to=""> Про нас </router-link></li>
        <li><router-link to=""> FAQ </router-link></li>
        <li><router-link to=""> Контакти </router-link></li>
        <li><router-link to=""> Для корпоративних клієнтів </router-link></li>
      </ul>
      <div class="col_5">
        <div class="mail_wrap">
          <router-link
            to=""
            class="bigger link"
            href="mailto:zakaz@loverflower.by"
            >zakaz@loverflower.by</router-link
          >
          <div class="smaller">Доставка 24/7 по домовленості с оператором</div>
        </div>
        <div class="address_wrap">
          <div class="adress bigger">вул. Тимірязєва 67</div>
          <div class="schedule smaller">10:00 до 21:00</div>
          <div class="schedule smaller">без вихідний</div>
        </div>
        <div class="tel_wrap">
          <router-link to="" class="bigger" href="tel:+375 (29) 113-69-69"
            >+375 (29) 113-69-69</router-link
          >
          <div class="smaller">Прийом дзвінків цілодобово</div>
        </div>
        <div class="social_wrap">
          <ul class="social_networks">
            <li>
              <router-link
                to=""
                title="instagram"
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopenner noreferrer"
              >
                <span class="icon-instagram"></span>
              </router-link>
            </li>
            <li>
              <router-link
                to=""
                title="whatsapp"
                href="https://www.whatsapp.com/?lang=uk"
                target="_blank"
                rel="noopenner noreferrer"
              >
                <span class="icon-whatsapp"></span>
              </router-link>
            </li>

            <li>
              <router-link
                to=""
                title="viber"
                href="https://www.viber.com/en/"
                target="_blank"
                rel="noopenner noreferrer"
              >
                <span class="icon-viber"></span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
  <!-- FOOTER END -->
</template>
