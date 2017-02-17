
// 添加组件
const ADD_COMPONENTS = 'ADD_COMPONENTS'

const global = {
  namespaced: true,
  state : {
    comps : []
  },
  mutations: {
    [ADD_COMPONENTS](state,payload){
      state.comps.push(payload)
    }
  },
  actions :{
    addAction({commit},payload) {
      commit(ADD_COMPONENTS,payload)
    }
  },
  getters : {
    getComponents(state){
      return state.comps
    }
  }
}


export default global