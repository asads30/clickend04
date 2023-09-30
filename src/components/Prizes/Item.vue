<template>
    <div @click="goPrize" class="myprizes-item">
        <div class="myprizes-img" :style="'background: ' + background">
            <img :src="'https://dev-promo23.click.uz/' + img">
        </div>
        <div class="myprizes-text">
            <div class="myprizes-name" v-if="$i18n.locale == 'ru'">{{ text }}</div>
            <div class="myprizes-name" v-if="$i18n.locale == 'uz'">{{ textUZ }}</div>
            <div class="myprizes-name" v-if="$i18n.locale == 'en'">{{ textEN }}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PrizeComponent',
    props: {
        background: String,
        text: String,
        textEN: String,
        textUZ: String,
        id: Number,
        img: String
    },
    methods: {
        goPrize(){
            this.$router.push('/prizes/'+this.id)
            this.$store.commit('setActiveTab', false)
        }
    },  
}
</script>

<style lang="scss">
    .myprizes-item{
        width: calc(50% - 6px);
        background: var(--bg2);
        border-radius: 12px;
        text-decoration: none;
    }
    .myprizes-img{
        height: 105px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-top-left-radius: 12px;
        border-top-right-radius: 12px;
        background: linear-gradient(219deg, #F0F 0%, #0073FF 100%);
        img{
            max-height: 60px;
            max-width: 80px;
        }
    }
    .myprizes-text{
        padding: 6px 12px 12px;
    }
    .myprizes-name{
        font-size: 12px;
        color: var(--text);
        font-weight: 500;
        line-height: 16px;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style>