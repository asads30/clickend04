<template>
    <div class="start">
        <Header :left="false" :right="false" :center="true" :centerText="$t('stock')"/>
        <div class="start-box">
            <div class="start-top">
                <div class="start-text">
                    <div class="container">
                        <div class="start-toptitle">К сожалению, акция от Click уже закончилась. Тем не менее, вы можете наблюдать за финальным розыгрышем</div>
                        <div class="start-subtitle">Розыгрыш состоится</div>
                        <div class="start-title">7 октября</div>
                        <div class="start-bottomtitle">Следите за трансляцией на наших официальных страницах Click</div>
                        <div class="start-soc">
                            <div class="start-soc-item">
                                <div class="start-soc-item-img">
                                    <img src="@/assets/images/start/tg.svg" alt="">
                                </div>
                                <div class="start-soc-item-text">@click_uz</div>
                            </div>
                            <div class="start-soc-item">
                                <div class="start-soc-item-img">
                                    <img src="@/assets/images/start/insta.svg" alt="">
                                </div>
                                <div class="start-soc-item-text">@clickuz</div>
                            </div>
                            <div class="start-soc-item">
                                <div class="start-soc-item-img">
                                    <img src="@/assets/images/start/yt.svg" alt="">
                                </div>
                                <div class="start-soc-item-text">@clickuz6549</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="start-byd">
                    <img src="@/assets/images/start/byd.png" alt="">
                </div>
            </div>
            <div class="start-bottom">
                <div class="container">
                    <button type="button" class="start-offer" data-bs-toggle="offcanvas" data-bs-target="#infoModal" aria-controls="infoModal">Публичная оферта акции</button>
                </div>
            </div>
        </div>
        <div class="offcanvas offcanvas-bottom" tabindex="-1" id="infoModal" aria-labelledby="infoModalLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="infoModalLabel" v-if="$i18n.locale == 'ru'">{{ getRulesText?.title_ru }}</h5>
                <h5 class="offcanvas-title" id="infoModalLabel" v-if="$i18n.locale == 'uz'">{{ getRulesText?.title_uz }}</h5>
                <h5 class="offcanvas-title" id="infoModalLabel" v-if="$i18n.locale == 'en'">{{ getRulesText?.title_en }}</h5>
            </div>
            <div class="offcanvas-body">
                <div v-if="$i18n.locale == 'ru'" v-html="getRulesText?.description_ru"></div>
                <div v-if="$i18n.locale == 'uz'" v-html="getRulesText?.description_uz"></div>
                <div v-if="$i18n.locale == 'en'" v-html="getRulesText?.description_en"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import Header from '@/components/Header'

    export default {
        name: 'StartView',
        components: {
            Header
        },
        computed: {
            ...mapGetters([
                'getWeb',
                'getUser',
                'getRulesText'
            ]),
        },
        mounted() {
            if(this.getUser){
                this.$router.push('/')
            }
        }
    }
</script>

<style lang="scss">
    .start{
        background: url(../assets/images/start/background.jpg) 100% no-repeat;
        background-size: cover;
        background-position: left top;
        height: 100vh;
        color: #fff;
        &-box{
            height: calc(100vh - 74px);
            display: flex;
            justify-content: space-between;
            flex-direction: column;
        }
        &-text{
            padding-top: 20px;
        }
        &-toptitle{
            font-size: 18px;
            line-height: 18px;
            margin-bottom: 20px;
            color: #fff;
            @media screen and (max-width: 355px) {
                font-size: 16px;
            }
        }
        &-subtitle{
            font-size: 24px;
            font-weight: 700;
            line-height: 24px;
            @media screen and (max-width: 355px) {
                font-size: 22px;
                line-height: 22px;
            }
        }
        &-title{
            background: linear-gradient(54deg, #FCFE5D -3.58%, #FDDC08 23.61%, #FD9F83 50.44%, #F97DD3 75.18%, #C566E4 109.63%);
            background-clip: text;
            font-size: 40px;
            font-weight: 700;
            margin-bottom: 20px;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            line-height: 40px;
            @media screen and (max-width: 355px) {
                font-size: 32px;
                line-height: 32px;
            }
        }
        &-bottomtitle{
            font-size: 14px;
            margin-bottom: 15px;
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
        &-byd{
            img{
                width: calc(100% - 25px);
            }
        }
        &-bottom{
            padding-bottom: 20px;
            text-align: center;
        }
        &-offer{
            font-size: 10px;
            text-decoration: underline;
            background: none;
            padding: 0;
            border: 0;
            color: #fff;
        }
    }
    
</style>