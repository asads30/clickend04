<template>
    <div class="ident">
        <div class="container">
            <div class="ident-box">
                <div class="ident-top"></div>
                <div class="ident-center">
                    <div class="ident-center-img">
                        <img src="@/assets/images/ident/main.png" alt="">
                    </div>
                    <div class="ident-center-title">{{ $t('ident.ident1') }}</div>
                    <div class="ident-center-des">{{ $t('ident.ident2') }}</div>
                </div>
                <div class="ident-bottom">
                    <a href="https://my.click.uz/app/identification" class="ident-bottom-btn">{{ $t('ident.ident3') }}</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'IdentComponent'
    }
</script>

<style lang="scss">
    .ident{
        &-box{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 100vh;
        }
        &-top{
            height: 80px;
        }
        &-center{
            &-img{
                margin-bottom: 40px;
                img{
                    width: 100%;
                }
            }
            &-title{
                font-size: 25px;
                font-weight: 700;
                line-height: 110%;
                margin-bottom: 15px;
            }
            &-des{
                font-size: 14px;
                line-height: 135%;
            }
        }
        &-bottom{
            padding-bottom: 40px;
            &-btn{
                border-radius: 10px;
                background: linear-gradient(0deg, #0073FF 0%, #00C2FF 100%), #FFF;
                height: 40px;
                line-height: 40px;
                border: 0;
                width: 100%;
                color: #fff;
                display: block;
                text-align: center;
                text-decoration: none;
                font-size: 14px;
                font-weight: 700;
            }
        }
    }
</style>