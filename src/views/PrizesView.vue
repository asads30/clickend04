<template>
    <div class="page">
        <div class="prizes" v-if="getPrizes?.data">
            <Header :left="true" :right="false" :center="true" :centerText="$t('home.home2')"/>
            <div class="prizes-tabes">
                <div class="container">
                    <ul class="nav nav-tabs prizes-tabs" id="prizesTab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button :class="getActiveTab == true ? 'nav-link' : 'nav-link active'" id="prizes-tab" data-bs-toggle="tab" data-bs-target="#prizes-tab-pane" type="button" role="tab" aria-controls="prizes-tab-pane" aria-selected="true">{{ $t('prizes.prizes') }}</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button :class="getActiveTab == false ? 'nav-link' : 'nav-link active'" id="chances-tab" data-bs-toggle="tab" data-bs-target="#chances-tab-pane" type="button" role="tab" aria-controls="chances-tab-pane" aria-selected="false">{{ $t('prizes.chances') }}</button>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="tab-content" id="prizesTabContent">
                <div :class="getActiveTab == true ? 'tab-pane fade' : 'tab-pane fade show active'" id="prizes-tab-pane" role="tabpanel" aria-labelledby="prizes-tab" tabindex="0">
                    <div class="prizes-wrapper" v-if="getPrizes?.data?.length > 0">
                        <div class="container">
                            <div class="prizes-list">
                                <Prize 
                                    v-for="item in getPrizes?.data"
                                    :key="item.id"
                                    :background="item.prize.background" 
                                    :text="item.prize.name_ru"
                                    :textEN="item.prize.name_en" 
                                    :textUZ="item.prize.name_uz" 
                                    :img="item.prize.photo"
                                    :id="item.id"
                                />
                            </div>
                            <button class="prizes-more" v-if="getPrizes?.pagination.total > getPrizes?.data?.length" @click="loadMore" :disabled="loading == true">{{ $t('prizes.more') }}</button>
                        </div>
                    </div>
                    <div class="prizes-not" v-else>
                        <div class="container">
                            <div class="prizes-not-img">
                                <img src="@/assets/images/prizes-not.svg" alt="">
                            </div>
                            <div class="prizes-not-text">{{ $t('prizes.not') }}</div>
                        </div>
                    </div>
                </div>
                <div :class="getActiveTab == false ? 'tab-pane fade' : 'tab-pane fade show active'" id="chances-tab-pane" role="tabpanel" aria-labelledby="chances-tab" tabindex="0">
                    <div class="prizes-wrapper" v-if="getPrizesChances?.data?.length > 0">
                        <div class="container">
                            <div class="prizes-list">
                                <Chance 
                                    v-for="item in getPrizesChances?.data"
                                    :key="item.id"
                                    :background="item.prize.background" 
                                    :text="item.prize.name_ru"
                                    :textEN="item.prize.name_en" 
                                    :textUZ="item.prize.name_uz" 
                                    :img="item.prize.photo"
                                    :id="item.id"
                                />
                            </div>
                            <button class="prizes-more" v-if="getPrizesChances?.pagination.total > getPrizesChances?.data?.length" @click="loadMoreChances" :disabled="loadingChances == true">{{ $t('prizes.more') }}</button>
                        </div>
                    </div>
                    <div class="prizes-not" v-else>
                        <div class="container">
                            <div class="prizes-not-img">
                                <img src="@/assets/images/prizes-not.svg" alt="">
                            </div>
                            <div class="prizes-not-text">{{ $t('prizes.not') }}</div>
                        </div>
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
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header'
import Prize from '@/components/Prizes/Item'
import Chance from '@/components/Prizes/Chance'
import {mapGetters} from 'vuex';

export default {
    name: 'PrizesView',
    data() {
        return {
            loading: false,
            loadingChances: false
        }
    },
    computed: {
        ...mapGetters([
            'getPrizes',
            'getWeb',
            'getUser',
            'getPrizesChances',
            'getActiveTab'
        ])
    },
    components: {
        Header,
        Prize,
        Chance
    },
    mounted() {
        if(!this.getPrizes){
            fetch(`/api/myPrizes?web_session=${this.getWeb}&page=1&type=a`).then(async response => {
                const data = await response.json();
                this.loading = false
                if(response.ok){
                    this.$store.commit('setPrizes', data)
                }
            })
        }
        if(!this.getPrizesChances){
            fetch(`/api/myPrizes?web_session=${this.getWeb}&page=1&type=b`).then(async response => {
                const data = await response.json();
                this.loadingChances = false
                if(response.ok){
                    this.$store.commit('setPrizesChances', data)
                }
            })
        }
    },
    methods: {
        loadMore(){
            this.loading = true;
            let nextPage = Number(this.getPrizes?.pagination?.currentPage) + 1;
            fetch(`/api/myPrizes?web_session=${this.getWeb}&page=${nextPage}&type=a`).then(async response => {
                const data = await response.json();
                this.loading = false
                if(response.ok){
                    this.$store.commit('addPrizes', data)
                }
            })
        },
        loadMoreChances(){
            this.loadingChances = true;
            let nextPage = Number(this.getPrizesChances?.pagination?.currentPage) + 1;
            fetch(`/api/myPrizes?web_session=${this.getWeb}&page=${nextPage}&type=b`).then(async response => {
                const data = await response.json();
                this.loadingChances = false
                if(response.ok){
                    this.$store.commit('addPrizesChances', data)
                }
            })
        }
    }
}
</script>

<style lang="scss">
  .prizes-wrapper{
    height: calc(100vh - 127px);
    overflow-y: auto;
  }
  .prizes-list{
        display: flex;
        gap: 12px;
        flex-wrap: wrap;
        padding-bottom: 20px;
    }
    .prizes-not{
        padding: 50px 0;
    }
    .prizes-not-img{
        text-align: center;
        img{
            width: 200px;
            margin-bottom: 50px;
        }
    }
    .prizes-not-text{
        font-size: 12px;
        color: var(--text);
        font-weight: 600;
        line-height: 135%; 
        letter-spacing: 0.5px;
    }
    .prizes-more{
        width: 100%;
        background: linear-gradient(0deg, #0073ff, #00c2ff);
        margin: 0 0 20px;
        color: #fff;
        border: 0;
        height: 40px;
        line-height: 40px;
        border-radius: 10px;
        font-size: 14px;
        font-weight: 500;
        &:disabled{
            background: #363744;
            color: #ccc;
            cursor: no-drop;
        }
    }
    .prizes{
        &-tabs{
            display: flex;
            border: 0;
            margin-bottom: 20px;
            .nav-item{
                width: 50%;
                flex-wrap: nowrap;
                .nav-link{
                    background: rgba(255, 255, 255, 0.12);
                    width: 100%;
                    border-radius: 0;
                    font-size: 12px;
                    color: #fff;
                    border: 0;
                    &.active{
                        background: #1F84FF;
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
    }
</style>