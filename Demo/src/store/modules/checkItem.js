const state = {
  isShowChat: false
}
const getters = {}

const actions = {
  hideChat({commit}) {
    commit("hideChat")
  },
  showChat({commit}) {
    commit("showChat")
  }
}
const mutations = {
  hideChat(state) {
    state.isShowChat = false
  },
  showChat(state) {
    state.isShowChat = true
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
