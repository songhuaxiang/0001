import Vue from "vue";
import Vuex from "vuex";
import * as nets from '../nets'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userinfo: {},
    userinfo2: {}
  },
  mutations: {
    ['m_getuserinfo'](state, payload) {
      state.userinfo = payload
    },
    ['m_clearuserinfo'](state, payload) {
      state.userinfo = payload
    }
  },
  actions: {
    async ['a_getuserinfo']({
      commit
    }, payload) {
      let res = await nets.login(payload)
      if (res.status == 200) {
        commit('m_getuserinfo', payload)
      }
      return res
    },
    async ['a_clearuserinfo']({
      commit
    }, payload) {
      let resClear = await nets.logout(payload)
      if (resClear.status == 200) {
        commit('m_clearuserinfo', payload)
      }
      return resClear
    }
  },
  modules: {}
});