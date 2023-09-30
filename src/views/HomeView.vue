<template>
  <div class="page">
    <div class="home" v-if="getUser">
      <Header :left="false" :right="false" :center="true" :centerText="$t('stock')"/>
      <div class="home-wrapper">
        <div class="home-box">
          <div class="home-top">
            <div class="prizes">
              <div class="container">
                  <div class="prizes-box">
                      <div class="prizes-left">
                        <button type="button" data-bs-toggle="offcanvas" data-bs-target="#infoModal" aria-controls="infoModal">
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M10 1.64798C7.7691 1.64798 5.67172 2.51674 4.09423 4.09423C2.51674 5.67172 1.64798 7.7691 1.64798 10C1.64798 12.2309 2.51674 14.3283 4.09423 15.9058C5.67172 17.4833 7.7691 18.352 10 18.352C12.2309 18.352 14.3283 17.4833 15.9058 15.9058C17.4833 14.3283 18.352 12.2309 18.352 10C18.352 7.7691 17.4833 5.67172 15.9058 4.09423C14.3283 2.51674 12.2309 1.64798 10 1.64798ZM10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0Z" fill="#0073FF"/>
                              <path d="M9.72397 8.50619C9.58866 8.50817 9.45945 8.56281 9.36376 8.6585C9.26807 8.75419 9.21344 8.8834 9.21145 9.01871V14.2247C9.21344 14.36 9.26807 14.4892 9.36376 14.5849C9.45945 14.6806 9.58866 14.7352 9.72397 14.7372H10.292C10.4273 14.7352 10.5565 14.6806 10.6522 14.5849C10.7479 14.4892 10.8025 14.36 10.8045 14.2247V9.01871C10.8025 8.8834 10.7479 8.75419 10.6522 8.6585C10.5565 8.56281 10.4273 8.50817 10.292 8.50619H9.72397ZM10.0426 5.33547C9.91525 5.32684 9.78749 5.3444 9.6672 5.38706C9.54692 5.42973 9.43666 5.4966 9.34322 5.58355C9.24979 5.6705 9.17517 5.77567 9.12397 5.89258C9.07278 6.00949 9.04609 6.13566 9.04556 6.26329C9.03911 6.39597 9.0605 6.52854 9.10837 6.65246C9.15623 6.77638 9.22949 6.88891 9.32345 6.98282C9.41741 7.07672 9.52998 7.14993 9.65393 7.19772C9.77787 7.24551 9.91045 7.26683 10.0431 7.26031C10.1696 7.25793 10.2943 7.22987 10.4096 7.17786C10.5249 7.12584 10.6284 7.05094 10.7139 6.95771C10.7993 6.86447 10.865 6.75484 10.9068 6.63548C10.9486 6.51611 10.9658 6.38948 10.9572 6.26329C10.9599 6.14186 10.9383 6.02112 10.8935 5.90822C10.8487 5.79532 10.7817 5.69257 10.6964 5.60605C10.6112 5.51952 10.5094 5.45099 10.3972 5.40452C10.285 5.35804 10.164 5.33456 10.0426 5.33547Z" fill="#0073FF"/>
                          </svg>
                        </button>
                        <div class="prizes-title">{{ $t('home.home1') }}</div>
                      </div>
                      <router-link :to="{name: 'prizes'}" class="prizes-right">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg">
                          <path d="M22.1538 6.72121H18.1062C18.1512 6.68161 18.1973 6.64321 18.2412 6.60121C18.5916 6.27745 18.874 5.88197 19.0708 5.43952C19.2675 4.99706 19.3744 4.51715 19.3846 4.02979C19.3998 3.49664 19.31 2.96589 19.1208 2.47013C18.9315 1.97436 18.6469 1.52405 18.2843 1.14683C17.9216 0.769616 17.4887 0.473453 17.012 0.276528C16.5353 0.0796036 16.025 -0.0139281 15.5123 0.00167525C15.0435 0.0121767 14.5818 0.123209 14.1561 0.327821C13.7304 0.532433 13.3499 0.82622 13.0385 1.19079C12.6075 1.71023 12.2571 2.29645 12 2.92827C11.7429 2.29645 11.3925 1.71023 10.9615 1.19079C10.6501 0.82622 10.2696 0.532433 9.84392 0.327821C9.41824 0.123209 8.95653 0.0121767 8.48769 0.00167525C7.975 -0.0139281 7.46466 0.0796036 6.98799 0.276528C6.51131 0.473453 6.07838 0.769616 5.71575 1.14683C5.35312 1.52405 5.06846 1.97436 4.87924 2.47013C4.69002 2.96589 4.60023 3.49664 4.61538 4.02979C4.62564 4.51715 4.73249 4.99706 4.92924 5.43952C5.12599 5.88197 5.40841 6.27745 5.75885 6.60121C5.80269 6.64081 5.84885 6.67921 5.89385 6.72121H1.84615C1.35652 6.72121 0.886947 6.92348 0.540726 7.28352C0.194505 7.64357 0 8.13189 0 8.64107V12.4808C0 12.99 0.194505 13.4783 0.540726 13.8384C0.886947 14.1984 1.35652 14.4007 1.84615 14.4007V22.0801C1.84615 22.5893 2.04066 23.0776 2.38688 23.4377C2.7331 23.7977 3.20268 24 3.69231 24H20.3077C20.7973 24 21.2669 23.7977 21.6131 23.4377C21.9593 23.0776 22.1538 22.5893 22.1538 22.0801V14.4007C22.6435 14.4007 23.1131 14.1984 23.4593 13.8384C23.8055 13.4783 24 12.99 24 12.4808V8.64107C24 8.13189 23.8055 7.64357 23.4593 7.28352C23.1131 6.92348 22.6435 6.72121 22.1538 6.72121ZM14.4231 2.4627C14.5692 2.29486 14.7472 2.16025 14.9457 2.06733C15.1443 1.97441 15.3592 1.92518 15.5769 1.92274H15.6335C15.8887 1.9244 16.141 1.97901 16.3756 2.08338C16.6102 2.18774 16.8225 2.33976 16.9999 2.53052C17.1773 2.72128 17.3164 2.94695 17.4088 3.1943C17.5013 3.44165 17.5454 3.70571 17.5385 3.971C17.5361 4.19742 17.4888 4.42089 17.3994 4.62738C17.3101 4.83387 17.1806 5.01892 17.0192 5.17091C15.9242 6.17884 14.1069 6.53402 12.9808 6.65881C13.1192 5.3881 13.5 3.54143 14.4231 2.4627ZM7.02808 2.5059C7.3857 2.13403 7.87004 1.92403 8.37577 1.92154H8.43231C8.65004 1.92398 8.86493 1.97321 9.06349 2.06613C9.26205 2.15905 9.44 2.29366 9.58615 2.4615C10.5542 3.59902 10.8958 5.48529 11.0158 6.65161C9.89423 6.53162 8.08039 6.17164 6.98654 5.16491C6.82514 5.01292 6.6957 4.82787 6.60635 4.62138C6.51699 4.41489 6.46966 4.19142 6.46731 3.965C6.46015 3.6953 6.50576 3.4269 6.60136 3.17608C6.69696 2.92526 6.84057 2.69726 7.02346 2.5059H7.02808ZM1.84615 8.64107H11.0769V12.4808H1.84615V8.64107ZM3.69231 14.4007H11.0769V22.0801H3.69231V14.4007ZM20.3077 22.0801H12.9231V14.4007H20.3077V22.0801ZM22.1538 12.4808H12.9231V8.64107H22.1538V12.4808Z" fill="white"/>
                        </svg>
                        <div class="prizes-right-title">{{ $t('home.home2') }}</div>
                        <div class="prizes-number">{{ getUser?.prizes_count }}</div>
                      </router-link>
                  </div>
              </div>
            </div>
            <User :name="getUser?.name + ' ' + getUser?.surname" :phone="getUser?.phone_number" />
            <div class="shot">
              <div class="container">
                <router-link :to="{name: 'chances'}" class="shot-box">
                  <div class="shot-left">
                    <div class="shot-rating">
                      <div class="shot-rating-icon">
                        <img src="@/assets/images/shot.svg" alt="">
                      </div>
                      <div class="shot-rating-number">{{ getUser?.score }}</div>
                    </div>
                    <div class="shot-title">
                      {{ $t('home.home3') }}<br />{{ $t('home.home3-2') }}
                    </div>
                  </div>
                  <div class="shot-right">
                    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 9 16" fill="none">
                      <path d="M1 1L7.25 7.875L1 14.75" stroke="#B3B7CE" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                </router-link>
              </div>
            </div>
            <div class="draw">
              <div class="container">
                <div class="draw-toptitle">Розыгрыш состоится</div>
                <div class="draw-title">7 октября</div>
                <div class="draw-img">
                  <img src="@/assets/images/super.png" alt="">
                </div>
                <div class="draw-bottomtitle">Следите за трансляцией на наших официальных страницах</div>
                <div class="draw-soc">
                  <div class="draw-soc-item">
                      <div class="draw-soc-item-img">
                          <img src="@/assets/images/start/tg.svg" alt="">
                      </div>
                      <div class="draw-soc-item-text">@click_uz</div>
                  </div>
                  <div class="draw-soc-item">
                      <div class="draw-soc-item-img">
                          <img src="@/assets/images/start/insta.svg" alt="">
                      </div>
                      <div class="draw-soc-item-text">@clickuz</div>
                  </div>
                  <div class="draw-soc-item">
                      <div class="draw-soc-item-img">
                          <img src="@/assets/images/start/yt.svg" alt="">
                      </div>
                      <div class="draw-soc-item-text">@clickuz6549</div>
                  </div>
              </div>
              </div>
            </div>
            <div class="cfooter">
              <div class="container">
                <button class="cfooter-btn" @click="goRef">
                  <span>{{ $t('referall.title') }}</span>
                </button>
              </div>
            </div>
          </div>
          <div class="home-bottom">
            <div class="container">
              <button type="button" class="home-offer" data-bs-toggle="offcanvas" data-bs-target="#infoModal" aria-controls="infoModal">Публичная оферта акции</button>
            </div>
          </div>
        </div>
        <div class="offcanvas offcanvas-bottom" tabindex="-1" id="infoModal" aria-labelledby="infoModalLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="infoModalLabel" v-if="$i18n.locale == 'ru'">{{ getText?.title_ru }}</h5>
            <h5 class="offcanvas-title" id="infoModalLabel" v-if="$i18n.locale == 'uz'">{{ getText?.title_uz }}</h5>
            <h5 class="offcanvas-title" id="infoModalLabel" v-if="$i18n.locale == 'en'">{{ getText?.title_en }}</h5>
          </div>
          <div class="offcanvas-body">
            <div v-if="$i18n.locale == 'ru'" v-html="getText?.description_ru"></div>
            <div v-if="$i18n.locale == 'uz'" v-html="getText?.description_uz"></div>
            <div v-if="$i18n.locale == 'en'" v-html="getText?.description_en"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="preloader" v-else>
      <div class="preloader-img">
        <img src="@/assets/images/loader.svg" alt="">
      </div>
      <div class="preloader-text">
        {{ $t('preloader') }}<br />{{ $t('preloader2') }}
      </div>
      <div class="session">{{ cookie }}</div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import User from '@/components/Home/User'
import {getCookie} from '@/boot/util'
import {mapGetters} from 'vuex'

export default {
  name: 'HomeView',
  computed: {
    cookie(){
      return getCookie('web-session')
    },
    ...mapGetters([
      'getUser',
      'getWeb',
      'getText'
    ])
  },
  components: {
    Header,
    User
  },
  async created() {
    const data = {
      web_session: (this.cookie) ? this.cookie : this.getWeb
    }
    let theme = getCookie('theme');
    if(theme && theme == 'light'){
      document.documentElement.setAttribute('theme', 'light');
    }
    let lang = getCookie('lang');
    if(lang && lang == 'uz'){
      this.$i18n.locale = 'uz'
    }
    if(lang && lang == 'en'){
      this.$i18n.locale = 'en'
    }
    const request = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }
    let response = await fetch('/api/me', request);
    let json = await response.json();
    if(json.status == 200){
      this.$store.commit('setUser', json.data)
    } else{
      if(json.error.code == 1000){
        this.$router.push({name: 'start'})
      }
      if(json.error.code == 1001){
        this.$router.push({name: 'ident'})
      }
    }
    this.$store.commit('setWeb', data.web_session)
    if(!this.getText){
      await fetch(`/api/getTexts`).then(async response => {
          const data = await response.json();
          this.loading = false
          if(response.ok){
            this.$store.commit('setText', data)
          }
      })
    }
  },
  methods: {
    goRef(){
      this.$router.push({name: 'referall'})
    },
  },
}
</script>

<style lang="scss" scoped>
  .home{
    height: 100vh;
    overflow: hidden;
    position: relative;
    &-box{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
    }
  }
  .home-wrapper{
    height: calc(100vh - 74px);
    overflow-y: auto;
    position: relative;
  }
  .shot {
    margin: 0 0 30px;
    .shot-box{
      background: var(--bg2);
      justify-content: space-between;
      padding: 10px 15px;
      border-radius: 10px;
      display: flex;
      align-items: center;
      text-decoration: none;
      .shot-left{
        display: flex;
        align-items: center;
        .shot-rating {
          gap: 9px;
          padding-right: 25px;
          display: flex;
          align-items: center;
          .shot-rating-icon{
            height: 19px;
            img{
              vertical-align: baseline;
            }
          }
          .shot-rating-number {
            font-size: 20px;
            font-weight: 700;
            color: var(--text);
          }
        }
        .shot-title{
          font-size: 14px;
          color: var(--text);
          font-weight: 600;
          padding-left: 15px;
          border-left: 1px solid #ccc;
        }
      }
      .shot-right{
        svg{
          path{
            stroke: var(--right);
          }
        }
      }
    }
  }
  .prizes{
    .prizes-box{
      padding-top: 0;
      padding-bottom: 15px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .prizes-left{
        display: flex;
        align-items: center;
        gap: 4px;
        button{
          background: none;
          padding: 0;
          border: 0;
          height: 20px;
          svg{
            vertical-align: baseline;
          }
          &:focus{
            outline: 0;
            border: 0;
            box-shadow: none;
          }
        }
        .prizes-title{
          font-size: 12px;
          color: var(--text);
          font-weight: 500;
          line-height: 135%;
          margin-bottom: 0;
        }
      }
      .prizes-right{
        display: flex;
        align-items: center;
        gap: 4px;
        text-decoration: none;
        .svg{
          width: 16px;
          path{
            fill: var(--text);
          }
        }
        .prizes-right-title{
          font-size: 12px;
          font-weight: 500;
          color: var(--text);
        }
        .prizes-number{
          font-size: 12px;
          font-weight: 500;
          color: #fff;
          border-radius: 20px;
          height: 20px;
          padding: 0 8px;
          background: #0073ff;
          display: flex;
          align-items: center;
          justify-content: center;
          line-height: 20px;
        }
      }
    }   
  }
  .cmodal-chances{
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
    gap: 4px;
  }
  .cmodal-chance{
    border-radius: 30px;
    background: #0073FF;
    padding: 0 8px;
    line-height: 24px;
    height: 24px;
    color: #fff;
    font-size: 14px;
    letter-spacing: 0.14px;
    font-weight: 700;
  }
  .cfooter{
    padding: 30px 0 20px;
    .cfooter-btn {
      background: linear-gradient(0deg,#0073ff,#00c2ff);
      height: 40px;
      border-radius: 10px;
      line-height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      border: 0;
      gap: 10px;
      position: relative;
      overflow: hidden;
      &.notscore{
        background: #363744;
        span{
          color: #575965;
        }
      }
      span{
        font-size: 14px;
        font-weight: 600;
        color: #fff;
        font-family: Golos Text,sans-serif!important;
      }
      .cfooter-btn__label {
        height: 25px;
        border-radius: 25px;
        background: #000;
        line-height: 25px;
        font-size: 12px;
        font-weight: 500;
        padding: 0 10px;
        color: #fff;
        font-family: Golos Text,sans-serif!important;
      }
      .flare {
        position: absolute;
        top: 0;
        height: 100%;
        width: 45px;
        transform: skewX(-45deg);
        animation: flareAnimation;
        left: -150%;
        background: linear-gradient(90deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,.4));
        animation: flareAnimation 3s linear infinite;
      }
      &:disabled{
        background: #363744;
        span{
          color: #575965;
        }
      }
    }
    .cfooter-link {
      text-align: center;
      .cfooter-link-btn {
        color: var(--text-secondary);
        text-decoration: underline;
        font-size: 12px;
        line-height: 16px;
      }
    }
    .cfooter-hr{
      background: var(--hr);
      width: 100%;
      height: 1px;
      margin-bottom: 20px;
    }
  }
  @keyframes flareAnimation {
    0% {
        left: -150%;
    }
    100% {
        left: 150%;
    }
  }
  .draw{
    background: url(../assets/images/draw.png) 100% no-repeat;
    background-size: cover;
    border-radius: 24px;
    background-position: left top;
    padding: 20px 0;
    &-toptitle{
      font-size: 20px;
      line-height: 20px;
      color: #fff;
    }
    &-title{
      background: linear-gradient(54deg, #FCFE5D -3.58%, #FDDC08 23.61%, #FD9F83 50.44%, #F97DD3 75.18%, #C566E4 109.63%);
      background-clip: text;
      font-size: 24px;
      font-weight: 700;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      line-height: 24px;
    }
    &-img{
      text-align: right;
      margin-bottom: 10px;
      img{
        width: calc(100% - 43px);
        margin-right: -20px;
        margin-top: -15px;
      }
    }
    &-bottomtitle{
      font-size: 14px;
      line-height: 14px;
      color: #fff;
      margin-bottom: 20px;
    }
    &-soc{
      display: flex;
      gap: 15px;
      &-item{
          display: flex;
          align-items: center;
          gap: 4px;
          &-img{
              width: 25px;
              height: 25px;
              border-radius: 25px;
              display: flex;
              align-items: center;
              justify-content: center;
              background: #fff;
              img{
                  width: 19px;
              }
          }
          &-text{
              font-size: 12px;
          }
      }
      @media screen and (max-width: 355px) {
          gap: 8px;
          &-item{
              gap: 4px;
              &-img{
                  width: 22px;
                  height: 22px;
                  img{
                      width: 16px;
                  }
              }
              &-text{
                  font-size: 10px;
              }
          }
      }
    }
  }
  .home-bottom{
    padding-bottom: 20px;
    text-align: center;
  }
  .home-offer{
    font-size: 10px;
    text-decoration: underline;
    background: none;
    padding: 0;
    border: 0;
    color: #fff;
  }
</style>