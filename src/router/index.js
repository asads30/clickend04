import { createRouter, createWebHistory } from 'vue-router'
import store from '../store/index'
import HomeView from '../views/HomeView.vue'
import StartView from '../views/StartView.vue'
import IdentView from '../views/IdentView.vue'
import PrizesView from '../views/PrizesView.vue'
import PrizesItemView from '../views/PrizesItemView.vue'
import PrizesItemChanceView from '../views/PrizesItemChanceView.vue'
import ChancesView from '../views/ChancesView.vue'
import ReferallView from '../views/ReferallView.vue'
import LiveView from '../views/LiveView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    beforeEnter: (to, from) => {
      if(from.name == 'fortuna' && store.state.activeFortune == true){
        return false
      }
    }
  },
  {
    path: '/start',
    name: 'start',
    component: StartView
  },
  {
    path: '/ident',
    name: 'ident',
    component: IdentView
  },
  {
    path: '/prizes',
    name: 'prizes',
    component: PrizesView,
    props: true
  },
  {
    path: `/prizes/:id`,
    name: 'prizesItem',
    component: PrizesItemView
  },
  {
    path: `/prizes/chance/:id`,
    name: 'prizesItemChance',
    component: PrizesItemChanceView
  },
  {
    path: '/chances',
    name: 'chances',
    component: ChancesView,
    props: true
  },
  {
    path: '/referall',
    name: 'referall',
    component: ReferallView
  },
  {
    path: '/live',
    name: 'live',
    component: LiveView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
