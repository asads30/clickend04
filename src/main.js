import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/styles/main.scss'
import { languages } from './i18n'
import { defaultLocale } from './i18n'

import { createI18n } from 'vue-i18n'

const messages = Object.assign(languages)

const i18n = createI18n({
    locale: defaultLocale,
    fallbackLocale: 'ru',
    messages
})

createApp(App).use(store).use(router).use(i18n).mount('#app')
