/**
 * Created by ylf on 2017/2/13.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import core from './modules/core'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    core: {
      namespaced: true,
      ...core
    }
  }
})