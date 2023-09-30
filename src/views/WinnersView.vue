<template>
    <div class="page">
        <div class="winners">
            <div class="winners-top">
                <Header :left="true" :right="false" :center="true" :centerText="'Победители'"/>
                <div class="winners-toptitle">
                    <div class="container">
                        <div class="winners-title">Поздравляем победителей акции от Click</div>
                    </div>
                </div>
            </div>
            <div class="winners-body">
                <div class="container">
                    <div class="winners-list">
                        <div class="winners-item" v-for="winner in getWinners" :key="winner.id">
                            <div class="winners-item-left">
                                <div class="winners-item-name">
                                    <img src="@/assets/images/winner.svg" alt="">
                                    <span>{{ winner.chance.user.name }}</span>
                                </div>
                                <div class="winners-item-phone">{{ winner.chance.user.phone_number }}</div>
                            </div>
                            <div v-if="$i18n.locale == 'ru'" class="winners-item-right">{{ winner.prize.name_ru }}</div>
                            <div v-if="$i18n.locale == 'uz'" class="winners-item-right">{{ winner.prize.name_uz }}</div>
                            <div v-if="$i18n.locale == 'en'" class="winners-item-right">{{ winner.prize.name_en }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header'
import {mapGetters} from 'vuex';

export default {
    name: 'WinnersView',
    components: {
        Header
    },
    computed: {
        ...mapGetters([
            'getWeb',
            'getWinners'
        ])
    },
    mounted() {
        if(!this.getWinners){
            fetch(`/api/winners?web_session=${this.getWeb}`).then(async response => {
                const data = await response.json();
                if(response.ok){
                    this.$store.commit('setWinners', data)
                }
            })
        }
    },
}
</script>

<style lang="scss" scoped>
    .winners{
        &-toptitle{
            padding-bottom: 34px;
        }
        &-title{
            font-size: 20px;
            line-height: 24px;
            font-weight: 700;
            text-align: center;
        }
        &-item{
            display: flex;
            justify-content: space-between;
            padding: 10px 0;
            border-bottom: 1px solid var(--hr);
            &-left{
                display: flex;
                flex-direction: column;
                gap: 4px;
                width: 50%;
            }
            &-name{
                gap: 7px;
                display: flex;
                align-items: center;
            }
            &-phone{
                font-size: 12px;
                line-height: 16px;
                color: var(--text3);
                font-weight: 600;
            }
            &-right{
                font-size: 14px;
                line-height: 16px;
                font-weight: 600;
                width: 50%;
                text-align: right;
            }
        }
        &-item:last-child{
            border-bottom: 0;
        }
        &-body{
            height: calc(100vh - 156px);
            overflow-y: auto;
        }
    }
</style>