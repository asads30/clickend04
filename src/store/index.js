import { createStore } from 'vuex'

export default createStore({
  state: {
    user: null,
    prizes: null,
    chances: null,
    web: null,
    referall: null,
    text: null,
    activeFortune: false,
    prizesChances: null,
    activeTab: false,
    winners: null
  },
  getters: {
    getUser(state){
      return state.user
    },
    getPrizes(state){
      return state.prizes
    },
    getPrizesChances(state){
      return state.prizesChances
    },
    getChances(state){
      return state.chances
    },
    getChancesBySearch(state){
      return state.chances
    },
    getWeb(state){
      return state.web
    },
    getReferall(state){
      return state.referall
    },
    getText(state){
      if(state.text){
        return state.text[1]
      }
    },
    getWheelText(state){
      if(state.text){
        return state.text[0]
      }
    },
    getRulesText(state){
      if(state.text){
        return state.text[2]
      }
    },
    getActiveFortune(state){
      return state.activeFortune
    },
    getActiveTab(state){
      return state.activeTab
    },
    getWinners(state){
      return state.winners
    }
  },
  mutations: {
    setUser: (state, user) => {
      state.user = user;
    },
    setPrizes: (state, prizes) => {
      state.prizes = prizes;
    },
    addPrizes: (state, prizes) => {
      state.prizes.data = state.prizes.data.concat(prizes.data);
      state.prizes.pagination.currentPage = prizes.pagination.currentPage
    },
    setPrizesChances: (state, prizesChances) => {
      state.prizesChances = prizesChances;
    },
    addPrizesChances: (state, prizesChances) => {
      state.prizesChances.data = state.prizesChances.data.concat(prizesChances.data);
      state.prizesChances.pagination.currentPage = prizesChances.pagination.currentPage
    },
    setChances: (state, chances) => {
      state.chances = chances;
    },
    addChances: (state, chances) => {
      state.chances.data = Object.assign({}, state.chances.data, chances.data)
      state.chances.current_page = chances.current_page
    },
    setWeb: (state, web) => {
      state.web = web;
    },
    setReferall: (state, referall) => {
      state.referall = referall;
    },
    setText: (state, text) => {
      state.text = text
    },
    setActiveFortune: (state, activeFortune) => {
      state.activeFortune = activeFortune
    },
    setActiveTab: (state, activeTab) => {
      state.activeTab = activeTab
    },
    setWinners: (state, winners) => {
      state.winners = winners
    }
  },
  actions: {
  }
})