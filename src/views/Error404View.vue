<template>
  <main>
    <div class="spots err">
      <section class="error_404">
        <div class="container">
          <div class="error_num">
            <div class="four1 error_num">4</div>
            <div class="zero error_num">0</div>
            <div class="four error_num">4</div>
          </div>

          <div class="message_wrapper">
            <div class="message_block">
              <div class="error">Помилка 404</div>
              <div class="message">Упс ... Такої сторінки немає</div>
              <router-link to="/" class="to_main">На головну</router-link>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
export default { name: "Error404View" };
</script>

<style lang="scss" scoped>
$lightGreeen-color: #43ffd2;
$pastelPinc-color: #d978ac;
$pastelPinc-colorSpot: #d978ac8b;
$lightGreeen-colorSpot: #43ffd399;
// ERROR 404 PAGE
.spots.err {
  background: radial-gradient(
        rgba(22, 61, 143, 0.5) 0,
        transparent 70%,
        transparent 52%
      ) -303% -596px/700px 427px no-repeat,
    radial-gradient(rgba(22, 61, 143, 0.5) 0, transparent 71%, transparent 52%)
      181% 492px/705px 725px no-repeat,
    radial-gradient(rgba(22, 61, 143, 0.5) 0, transparent 69%, transparent 52%) -64%
      503px/729px 517px no-repeat;
  background-position: 119% -137px, -31% 480px, 123% 661px;
}
body {
  background-color: #040a0b;
}
.error_404 {
  background-repeat: no-repeat;
  background-image: url(../assets/images/additional_pages/error404/errFlower.png),
    url(../assets/images/additional_pages/error404/blueleaf1.png),
    url(../assets/images/additional_pages/error404/blueleaf2.png);
  background-position: 27% -143px, 147% 486px, 139% 71px;

  .error_num {
    display: flex;
    font-family: "Cormorant";
    font-weight: 400;
    font-size: 600px;
    line-height: 402.6px;
    background: linear-gradient(
      180deg,
      #163d8f 0%,
      #163d8f 0%,
      #4f6cab 54.69%,
      #b6cdff 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    .zero {
      margin-left: -42px;
      margin-top: 82px;
      background: linear-gradient(
        180deg,
        #163d8f 0%,
        #163d8f 0%,
        #4f6cab 54.69%,
        #b6cdff 100%
      );

      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .four {
      position: relative;
      z-index: -3;
      margin-left: -98px;
      margin-top: -168px;
    }
    .four1 {
      position: relative;
      z-index: -3;
      margin-left: 108px;
      margin-top: -92px;
    }
  }

  text-transform: uppercase;

  .message_wrapper {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    margin-top: 300px;
    width: 100%;
  }
  .message_block {
    padding-bottom: 180px;
    padding-right: 197px;
    align-self: flex-end;
    justify-self: flex-end;

    text-align: left;
    .to_main {
      color: $lightGreeen-color;
      text-transform: uppercase;
      font-weight: 700;
      &:hover,
      &:active {
        cursor: pointer;
        text-decoration: none;
      }
    }
  }
}
// ERROR 404 PAGE END

// ERROR PAGE RESPONSIVE START
@media screen and (max-width: 1100px) {
  .error_404 {
    background-image: url(../assets/images/additional_pages/error404/errFlower.png);
    background-position: 27% -143px;
    .message_block {
      padding-right: 67px;
    }
  }
}

@media screen and (max-width: 900px) {
  .error_404 {
    .error_num {
      font-size: 506px;
    }

    background-position: 20% -143px;
  }
}

@media screen and (max-width: 760px) {
  .error_404 {
    .error_num {
      .zero {
        margin-top: 51px;
      }
      font-size: 406px;
    }

    background-position: 15% -81px;
  }
}

@media screen and (max-width: 640px) {
  .error_404 {
    .message_wrapper {
      margin-top: -90px;
      margin-left: 89px;
    }
    .error_num {
      .zero {
        margin-top: 8px;
        margin-left: -5px;
      }

      font-size: 324px;
    }

    background-position: 15% -81px;
  }
}

@media screen and (max-width: 520px) {
  .error_404 {
    .error_num {
      font-size: 324px;
      margin-left: -118px;
    }
  }
}
// ERROR PAGE RESPONSIVE END
</style>
