import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  sidebarShow: 'responsive',
  sidebarMinimize: false,
  loadingIndicatorFlag: false
}

const mutations = {
  toggleSidebarDesktop (state) {
    const sidebarOpened = [true, 'responsive'].includes(state.sidebarShow)
    state.sidebarShow = sidebarOpened ? false : 'responsive'
  },
  toggleSidebarMobile (state) {
    const sidebarClosed = [false, 'responsive'].includes(state.sidebarShow)
    state.sidebarShow = sidebarClosed ? true : 'responsive'
  },
  set (state, [variable, value]) {
    state[variable] = value
  },
  enableLoadingIndicator(state) {
    state.loadingIndicatorFlag = true;
  },
  disableLoadingIndicator(state) {
    state.loadingIndicatorFlag = false;
  }
}

const actions = {
  enableLoadingIndicator({ commit }) {
    commit('enableLoadingIndicator')
  },
  disableLoadingIndicator({ commit }) {
    commit('disableLoadingIndicator')
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})