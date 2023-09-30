<template>
    <div class="page">
        <div class="referall">
            <Header :left="true" :right="false" :center="true" :centerText="$t('referall.title')"/>
            <div class="referall-wrapper">
                <div class="chances" v-if="getReferall?.referrals_count">
                    <div class="chances-top">
                        <div class="container">
                            <div class="chances-title">{{ $t('chances.chance1') }} <span>{{ getReferall?.referrals_count }}</span></div>
                        </div>
                    </div>
                    <div class="chances-items">
                        <div class="container">
                            <div class="chances-list">
                                <div class="chances-item" v-for="(referall, key) in getReferall?.referrals" :key="referall">
                                    <div class="chances-date">{{ key }}</div>
                                    <div class="chances-group" v-for="group in referall" :key="group">
                                        <div class="chances-group-left">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 11C0 4.92487 4.92487 0 11 0C17.0751 0 22 4.92487 22 11C22 17.0751 17.0751 22 11 22C4.92487 22 0 17.0751 0 11Z" fill="#4CAF50"/>
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.3107 7.04297C16.7012 7.43349 16.7012 8.06666 16.3107 8.45718L10.1036 14.9572C9.71307 15.3477 9.0799 15.3477 8.68938 14.9572L5.68938 11.9572C5.29885 11.5667 5.29885 10.9335 5.68938 10.543C6.0799 10.1524 6.71307 10.1524 7.10359 10.543L9.39648 12.8359L14.8965 7.04297C15.287 6.65244 15.9202 6.65244 16.3107 7.04297Z" fill="white"/>
                                            </svg>
                                            <span>{{ format_date(group?.created_at) }}</span>
                                        </div>
                                        <div class="chances-group-right">
                                            <div class="chanc">{{ group?.phone_number }}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="prizes-not" v-else>
                    <div class="container">
                        <div class="prizes-not-img">
                            <img src="@/assets/images/referall-not.svg" alt="">
                        </div>
                        <div class="prizes-not-text">{{ $t('referall.not') }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header'
import {mapGetters} from 'vuex'

export default {
    name: 'ReferallView',
    components: {
        Header,
    },
    methods: {
        format_date(value){
            var data = new Date(value);
            return data.toLocaleTimeString();
        },
    },
    computed: {
        ...mapGetters([
            'getReferall',
            'getUser',
            'getWeb'
        ])
    },
    mounted(){
        fetch(`/api/myReferrals?web_session=${this.getWeb}`).then(async response => {
            const data = await response.json();
            this.loading = false
            if(response.ok){
                this.$store.commit('setReferall', data.data)
            }
        })
    }
}
</script>

<style lang="scss">
.ref-tabs{
    display: flex;
    border: 0;
    .nav-item{
        width: 50%;
        flex-wrap: nowrap;
        .nav-link{
            background: var(--bg2);
            width: 100%;
            border-radius: 0;
            font-size: 12px;
            color: var(--text3);
            border: 0;
            &.active{
                background: #1F84FF;
                color: #fff;
            }
        }
        &:first-child{
            .nav-link{
                border-top-left-radius: 10px;
                border-bottom-left-radius: 10px;
            }
        }
        &:last-child{
            .nav-link{
                border-top-right-radius: 10px;
                border-bottom-right-radius: 10px;
            }
        }
    }
}
.ref-content{
    height: calc(100vh - 107px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.ref-box-top{
    padding-top: 20px;
}
.ref-img{
    text-align: center;
    margin-bottom: 35px;
}
.ref-title{
    font-size: 24px;
    color: var(--text);
    font-weight: 600;
    margin-bottom: 15px;
}
.ref-des{
    line-height: 16px;
    letter-spacing: 0.5px;
    font-size: 12px;
    margin-bottom: 20px;
}
.ref-box-bottom{
    padding-bottom: 40px;
    padding-top: 40px;
    border-radius: 24px 24px 0 0;
    background: var(--bg2);
    .referall-codebox{
        display: flex;
        flex-direction: column;
        gap: 4px;
        width: 100%;
        .code-title{
            font-size: 12px;
            color: var(--text3);
            font-weight: 600;
            text-align: center;
        }
        input{
            border-radius: 10px;
            border: 1px solid var(--border);
            width: 100%;
            height: 36px;
            line-height: 36px;
            padding: 0 12px;
            background: none;
            color: var(--text);
            font-size: 18px;
            font-weight: 700;
            text-align: center;
        }
    }
    .referall-copy{
        border-radius: 10px;
        background: var(--text);
        border: 0;
        padding: 0 12px;
        height: 36px;
        line-height: 36px;
        display: flex;
        align-items: center;
        gap: 4px;
        width: 119px;
        span{
            font-size: 12px;
            color: var(--bg2);
            font-weight: 600;
        }
    }
}
.ref-invite>button{
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
    gap: 8px;
    svg{
        path{
            fill: #fff;
        }
    }
}
.referall-code{
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: flex-end;
    &-des{
        font-size: 12px;
        font-weight: 700;
        letter-spacing: 0.5px;
        line-height: 135%;
    }
}
.code-number{
    -moz-user-select: auto;
    -webkit-touch-callout: auto;
    -webkit-user-select: auto;
    -khtml-user-select: auto;
    -moz-user-select: auto;
    -ms-user-select: auto;
    user-select: auto;
}
.ref-push{
    border-top: 1px solid #3A3A42;
    border-bottom: 1px solid #3A3A42;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    &-title{
        font-size: 14px;
        line-height: 135%;
        margin-bottom: 7px;
    }
    &-des{
        font-size: 12px;
        color: #B3B7CE;
        line-height: 135%;
    }
    .form-check-input{
        --bs-form-switch-bg: none;
        border-radius: 24px;
        opacity: 0.5;
        background: #34353F;
        width: 34px;
        height: 14px;
        border: 0;
        position: relative;
        &::before{
            content: '';
            width: 20px;
            height: 20px;
            position: absolute;
            left: -3px;
            top: -3px;
            background: #fff;
            border-radius: 20px;
            transition: 0.3s;
        }
        &:checked{
            background: rgba(0, 115, 255, 0.5);
            opacity: 1;
        }
        &:checked::before{
            background: #0073FF;
            left: auto;
            transform: translateX(20px);
        }
    }
}
</style>