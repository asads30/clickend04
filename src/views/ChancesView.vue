<template>
    <div class="page">
        <div class="chancesview" v-if="getChances">
            <Header :left="true" :right="false" :center="true" :centerText="$t('chances.chance3')"/>
            <div class="chancesview-wrapper">
                <div class="chances-top">
                    <div class="container">
                        <div class="chances-title">{{ $t('chances.chance1') }}: <span>{{ getUser.score }}</span></div>
                    </div>
                </div>
                <div class="chances-des">
                    <div class="container">
                        <p>{{ $t('chances.chance2') }}</p>
                    </div>
                </div>
                <div class="chances-search">
                    <div class="container">
                        <div class="chances-search-box">
                            <input type="text" :placeholder="$t('chances.search')" v-model="search" pattern="[0-9]*" maxlength="7" inputmode="decimal">
                            <button type="button" @click="doSearch" :disabled="loading" v-if="search.length > 0">{{ $t('chances.search2') }}</button>
                        </div>
                    </div>
                </div>
                <div class="chances-items">
                    <div class="container">
                        <div class="chances-list" v-if="!loading">
                            <div class="chances-item" v-for="(chance, key) in getChances.data" :key="chance">
                                <div class="chances-date">{{ key }}</div>
                                <div class="chances-group" v-for="(category, key2) in chance" :key="category">
                                    <div class="chances-group-item" v-for="(item, key3) in category" :key="item">
                                        <div class="chances-group-left">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" v-if="key3 == 1" class="type1">
                                                <path d="M9.99935 18.3332C5.39685 18.3332 1.66602 14.6023 1.66602 9.99984C1.66602 5.39734 5.39685 1.6665 9.99935 1.6665C14.6018 1.6665 18.3327 5.39734 18.3327 9.99984C18.3327 14.6023 14.6018 18.3332 9.99935 18.3332Z" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M9.99935 13.3332C9.11529 13.3332 8.26745 12.982 7.64233 12.3569M9.99935 13.3332C10.8834 13.3332 11.7313 12.982 12.3564 12.3569M9.99935 13.3332V18.3332M7.64233 12.3569C7.0172 11.7317 6.66602 10.8839 6.66602 9.99984M7.64233 12.3569L4.10685 15.8923M6.66602 9.99984C6.66602 9.11578 7.0172 8.26794 7.64233 7.64281C8.26745 7.01769 9.11529 6.6665 9.99935 6.6665M6.66602 9.99984H1.66602M9.99935 6.6665C10.8834 6.6665 11.7313 7.01769 12.3564 7.64281M9.99935 6.6665V1.6665M12.3564 7.64281C12.9815 8.26794 13.3327 9.11578 13.3327 9.99984M12.3564 7.64281L15.8918 4.10734M13.3327 9.99984C13.3327 10.8839 12.9815 11.7317 12.3564 12.3569M13.3327 9.99984H18.3327M12.3564 12.3569L15.8918 15.8923M4.10685 4.10734L7.64268 7.6415" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none" v-if="key3 == 2" class="type2">
                                                <path d="M3.58268 3.83333C3.58268 2.68274 4.51542 1.75 5.66602 1.75C6.81661 1.75 7.74935 2.68274 7.74935 3.83333C7.74935 4.98392 6.81661 5.91667 5.66602 5.91667C4.51542 5.91667 3.58268 4.98392 3.58268 3.83333ZM5.66602 0.5C3.82507 0.5 2.33268 1.99238 2.33268 3.83333C2.33268 5.67428 3.82507 7.16667 5.66602 7.16667C7.50693 7.16667 8.99935 5.67428 8.99935 3.83333C8.99935 1.99238 7.50693 0.5 5.66602 0.5ZM11.916 4.66667C11.916 3.97631 12.4757 3.41667 13.166 3.41667C13.8563 3.41667 14.416 3.97631 14.416 4.66667C14.416 5.35702 13.8563 5.91667 13.166 5.91667C12.4757 5.91667 11.916 5.35702 11.916 4.66667ZM13.166 2.16667C11.7853 2.16667 10.666 3.28596 10.666 4.66667C10.666 6.04737 11.7853 7.16667 13.166 7.16667C14.5468 7.16667 15.666 6.04737 15.666 4.66667C15.666 3.28596 14.5468 2.16667 13.166 2.16667ZM2.54102 8.83333C1.50548 8.83333 0.666016 9.67283 0.666016 10.7083V10.9176V10.9185L0.666024 10.9207L0.666074 10.9259L0.666307 10.9398C0.666549 10.9505 0.666991 10.9642 0.667766 10.9809C0.669316 11.0141 0.672224 11.0587 0.677666 11.1132C0.688524 11.2217 0.709624 11.3708 0.750724 11.547C0.832641 11.898 0.996466 12.367 1.32587 12.8376C2.00823 13.8124 3.30917 14.6667 5.66602 14.6667C6.80682 14.6667 7.70027 14.4665 8.39585 14.1494C8.27168 13.7376 8.19518 13.305 8.17285 12.8583C7.63543 13.1757 6.84324 13.4167 5.66602 13.4167C3.64787 13.4167 2.7613 12.7084 2.34991 12.1207C2.13244 11.8101 2.02283 11.4978 1.96802 11.2629C1.94077 11.1461 1.92768 11.051 1.92146 10.9888C1.91836 10.9578 1.91699 10.9352 1.91641 10.9227L1.91602 10.9123V10.7083C1.91602 10.3632 2.19584 10.0833 2.54102 10.0833H8.77618C8.98327 9.68608 9.2381 9.31775 9.5331 8.98592C9.30552 8.88775 9.0546 8.83333 8.79102 8.83333H2.54102ZM18.166 12.5833C18.166 10.052 16.114 8 13.5827 8C11.0514 8 8.99935 10.052 8.99935 12.5833C8.99935 15.1147 11.0514 17.1667 13.5827 17.1667C16.114 17.1667 18.166 15.1147 18.166 12.5833ZM13.9999 13L14.0003 15.0862C14.0003 15.3164 13.8138 15.5029 13.5836 15.5029C13.3535 15.5029 13.1669 15.3164 13.1669 15.0862L13.1665 13H11.079C10.8491 13 10.6628 12.8135 10.6628 12.5833C10.6628 12.3532 10.8491 12.1667 11.079 12.1667H13.1664L13.166 10.0827C13.166 9.85258 13.3526 9.66608 13.5827 9.66608C13.8128 9.66608 13.9993 9.85258 13.9993 10.0827L13.9998 12.1667H16.0798C16.3098 12.1667 16.4961 12.3532 16.4961 12.5833C16.4961 12.8135 16.3098 13 16.0798 13H13.9999Z"/>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" v-if="key3 == 3" class="type2">
                                                <path d="M10 3.125C7.5625 3.125 5.625 5.0625 5.625 7.5C5.62073 8.21679 5.79365 8.92353 6.1284 9.55737C6.46315 10.1912 6.94934 10.7325 7.54375 11.1331C5.31875 12.0912 3.75 14.3075 3.75 16.875H5C5 14.125 7.25 11.875 10 11.875C12.4375 11.875 14.375 9.9375 14.375 7.5C14.375 5.0625 12.4375 3.125 10 3.125ZM10 4.375C11.75 4.375 13.125 5.75 13.125 7.5C13.125 9.25 11.75 10.625 10 10.625C8.25 10.625 6.875 9.25 6.875 7.5C6.875 5.75 8.25 4.375 10 4.375ZM13.125 11.875C12.4375 11.875 11.875 12.4375 11.875 13.125V15.875L15.625 19.625C15.875 19.875 16.1875 20 16.5 20C16.8125 20 17.125 19.875 17.375 19.625L19.625 17.375C19.875 17.125 20 16.8125 20 16.5C20 16.1875 19.875 15.875 19.625 15.625L15.875 11.875H13.125ZM13.125 13.125H15.375L18.75 16.5L16.5 18.75L13.125 15.375V13.125ZM14.375 13.75C14.2092 13.75 14.0503 13.8158 13.9331 13.9331C13.8158 14.0503 13.75 14.2092 13.75 14.375C13.75 14.5408 13.8158 14.6997 13.9331 14.8169C14.0503 14.9342 14.2092 15 14.375 15C14.5408 15 14.6997 14.9342 14.8169 14.8169C14.9342 14.6997 15 14.5408 15 14.375C15 14.2092 14.9342 14.0503 14.8169 13.9331C14.6997 13.8158 14.5408 13.75 14.375 13.75Z"/>
                                            </svg>
                                            <span>{{ key2 }}</span>
                                        </div>
                                        <div class="chances-group-right">
                                            <div class="chanc" v-for="cat in item" :key="cat">{{ cat.id }}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button class="prizes-more" v-if="getChances?.total > Object.keys(getChances.data).length" @click="loadMore" :disabled="loading == true">{{ $t('prizes.more') }}</button>
                        </div>
                        <div class="chances-loading" v-else>
                            <div class="spinner-border text-primary" role="status">
                                <span class="visually-hidden">{{ $t('preloader') }}</span>
                            </div>
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
import {mapGetters} from 'vuex'

export default {
    name: 'ChancesView',
    components: {
        Header,
    },
    data() {
        return {
            search: '',
            loading: false
        }
    },
    watch: {
        search() {
            this.goSearch();
        }
    },
    computed: {
        ...mapGetters([
            'getChances',
            'getWeb',
            'getUser'
        ]),
    },
    methods: {
        doSearch() {
            this.loading = true
            fetch(`/api/chancesList?web_session=${this.getWeb}&chanceNumber=${this.search}`).then(async response => {
                const data = await response.json();
                this.loading = false
                if(response.ok){
                    this.$store.commit('setChances', data.data)
                }
            })
        },
        goSearch(){
            if(this.search.length == 0){
                this.loading = true
                fetch(`/api/chancesList?web_session=${this.getWeb}&chanceNumber=${this.search}`).then(async response => {
                    const data = await response.json();
                    this.loading = false
                    if(response.ok){
                        this.$store.commit('setChances', data.data)
                    }
                })
            }
        },
        loadMore(){
            this.loading = true;
            let nextPage = Number(this.getChances?.current_page) + 1;
            fetch(`/api/chancesList?web_session=${this.getWeb}&page=${nextPage}`).then(async response => {
                const data = await response.json();
                this.loading = false
                if(response.ok){
                    this.$store.commit('addChances', data.data)
                }
            })
        }
    },
    mounted(){
        fetch(`/api/chancesList?web_session=${this.getWeb}`).then(async response => {
            const data = await response.json();
            this.loading = false
            if(response.ok){
                this.$store.commit('setChances', data.data)
            }
        })
    }
}
</script>

<style lang="scss">
    .chancesview{
        height: 100vh;
        overflow: hidden;
    }
    .chancesview-wrapper{
        height: calc(100vh - 74px);
        overflow: hidden;
    }
    .chances{
        padding: 40px 0 20px;
        height: 100%;
        &-loading{
            text-align: center;
        }
        &-items{
            height: calc(100vh - 278px);
            overflow-y: auto;
            padding: 20px 0;
        }
        &-title{
            font-size: 16px;
            text-align: center;
            color: var(--text);
            margin-bottom: 30px;
            span{
                font-weight: 700;
            }
        }
        &-des{
            max-height: 110px;
            overflow: hidden;
            p{
                font-size: 12px;
                color: var(--text);
                margin-bottom: 20px;
                font-weight: 400;
                line-height: 18px;
                font-family: 'Golos Text';
                letter-spacing: 0.5px;
            }
        }
        &-list{
            display: flex;
            flex-direction: column;
            gap: 30px;
        }
        &-date{
            color: var(--text3);
            font-size: 14px;
            font-weight: 600;
            line-height: 16px;
            margin-bottom: 12px;
        }
        &-group{
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            &-left{
                display: flex;
                align-items: center;
                gap: 4px;
                max-width: 75px;
                padding: 8px 0;
                svg.type1{
                    path{
                        stroke: var(--text);
                    }
                }
                svg.type2{
                    path{
                        fill: var(--text);
                    }
                }
                span{
                    color: var(--text3);
                    font-size: 12px;
                    line-height: 16px;
                }
            }
            &-right{
                width: calc(100% - 90px);
                padding: 8px 0;
                display: flex;
                justify-content: flex-end;
                flex-wrap: wrap;
                gap: 4px;
                border-bottom: 1px solid var(--border2);
            }
        }
        &-group:last-child{
            &-right{
                border-bottom: 0;
            }
        }
    }
    .chanc{
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
    .chancesview{
        .chances-group{
            display: block;
            .chances-group-item{
                display: flex;
                align-items: flex-start;
                justify-content: space-between;
                .chances-group-left{
                    display: flex;
                    align-items: center;
                    flex-direction: row;
                }
            }
        }
    }
    .chances-search{
        &-box{
            display: flex;
            align-items: center;
            border: 1px solid rgba(255, 255, 255, 0.20);
            border-radius: 10px;
            background: var(--bg2);
            input{
                width: 100%;
                height: 40px;
                line-height: 40px;
                padding: 10px 10px 10px 35px;
                font-size: 12px;
                color: var(--text);
                background: var(--bg2) url(../assets/images/search.svg) 100% no-repeat;
                background-position: 10px;
                background-size: 16px;
                border-radius: 10px;
                border: 0;
                -webkit-user-select: none !important;
                &::placeholder{
                    color: var(--text4);
                }
                &:-ms-input-placeholder{
                    color: var(--text4);
                }
                &:focus{
                    outline: 0;
                }
            }
            button{
                height: 40px;
                line-height: 40px;
                border: 0;
                border-radius: 10px;
                background: linear-gradient(0deg, #0073ff, #00c2ff);
                padding: 0 15px;
                font-size: 14px;
                color: #fff;
                font-weight: 500;
                &:disabled{
                    background: #363744;
                    color: #ccc;
                    cursor: no-drop;
                }
            }
        }
    }
    .spinner-border{
        text-align: center;
    }
</style>