
// 添加组件
const ADD_COMPONENTS = 'ADD_COMPONENTS'
// 更新容器尺寸
const UPDATE_SCREEN_SIZE = "UPDATE_SCREEN_SIZE"
// 设置当前组件尺寸
const SET_SELECTOR_SIZE = "SET_SELECTOR_SIZE"

const state = {
  comps : [],
  curSelect:{size:{}},
  screenSize:{
    right : 239,
    left : 180
  }
}


const mutations = {
  [ADD_COMPONENTS](state,payload){
    state.comps.push(payload)
  },
  [SET_SELECTOR_SIZE](state,payload){
    state.curSelect.size = payload;
  },
  [UPDATE_SCREEN_SIZE](state,payload){
    let _right = payload.right;
    let _left = payload.left;
    let rightNum = 140 ;
    if(_left > 0){
      state.screenSize.left = _left;
    }
    if(_right === 0){
      state.screenSize.right += rightNum;
    }else if(_right > 0){
      state.screenSize.right -= rightNum;
    }
  }
}


const actions = {
  // 添加组件
  addAction({commit},payload) {
    commit(ADD_COMPONENTS,payload)
  },
  // 设置中心屏幕尺寸
  setScreenSize({commit},payload){
    commit(UPDATE_SCREEN_SIZE,payload)
  },
  // 设置当前选中尺寸
  selectorSize({commit} , payload){
    commit(SET_SELECTOR_SIZE,payload);
  }
}

const getters = {
  getComponents(state){
    return state.comps
  },
  getScreenSize(state){
    return state.screenSize
  },
  getCurCompSize(state){
    return state.curSelect.size
  }
}



export default {
  namespaced : true,
  state ,
  mutations,
  actions ,
  getters
}