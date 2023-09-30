<template>
    <div class="aheader">
        <div class="container">
            <div class="header-left">
                <router-link :to="{name: leftText}" v-if="left && leftText">
                    <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="black" v-if="color == 'black'">
                        <path d="M8.00004 14.6668L1.33337 8.00016L8.00004 1.3335" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg" v-else>
                        <path d="M8.00004 14.6668L1.33337 8.00016L8.00004 1.3335" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </router-link>
                <router-link :to="{name: 'home'}" v-if="left && !leftText">
                    <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.00004 14.6668L1.33337 8.00016L8.00004 1.3335" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </router-link>
            </div>
            <div class="header-center">
                <div v-if="center" class="header-center-text" :style="(color == 'black') ? 'color: #000;' : ''">
                    {{ centerText }}
                </div>
            </div>
            <div class="header-right">
                <div v-if="right" class="header-right-text">
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HeaderComponent',
    props: {
        left: Boolean,
        leftText: String,
        center: Boolean,
        centerText: String,
        right: Boolean,
        rightText: String,
        color: String
    }
}
</script>

<style lang="scss" scoped>
    .aheader{
        padding: 30px 0 20px;
        .container{
            display: flex;
            align-items: center;
            justify-content: space-between;
            div{
                display: flex;
                align-items: center;
            }
            .header-left{
                width: 10px;
                a{
                    display: flex;
                    align-items: center;
                    width: 20px;
                    height: 20px;
                    justify-content: center;
                    svg{
                        path{
                            stroke: var(--text);
                        }
                    }
                    svg.black{
                        path{
                            stroke: #000;
                        }
                    }
                }
            }
            .header-center{
                width: calc(100% - 20px);
                font-size: 16px;
                font-weight: 600;
                color: var(--text);
                display: flex;
                text-align: center;
                justify-content: center;
                .header-center-text{
                    display: flex;
                    text-align: center;
                    justify-content: center;
                }
            }
            
            .header-right{
                display: flex;
                justify-content: flex-end;
                width: 10px;
                .header-right-text{
                    text-align: right;
                    display: flex;
                    justify-content: flex-end;
                }
                button{
                    background: none;
                    padding: 0;
                    border: 0;
                }
            }
        }
    }
    
</style>