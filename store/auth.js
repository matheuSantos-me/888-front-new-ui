import feathers from '@/plugins/feathers'

export const state = () => ({
  user: null,
  isLogined: false
})

export const mutations = {
  SET_USER (state, user) {
    if (user) delete user.password
    state.user = user || null
    if (user) {
      state.user.cash.sportsmoney = user.cash.sportsmoney
      state.user.cash.casinomoney = user.cash.casinomoney
    }
  },
  SET_USER_CASH (state, cash) {
    if (state.user) {
      state.user.cash = cash
      state.user.cash.sportsmoney = cash.sportsmoney
      state.user.cash.casinomoney = cash.casinomoney
    }
  },
  SET_ISLOGINED (state, val) {state.isLogined = val}
}

export const getters = {
  isAuthenticated (state) { return !!state.user },
  currentUser (state) { return state.user || null },
  getIsLogined (state) { return state.isLogined }
}

export const actions = {
  login ({ state, commit, dispatch }, userInfo) { // 로그인하는 함수
  },
  logout ({ state, commit, dispatch }) { // 로그아웃하는 함수
    if (!state.user) {
      return
    }
    return feathers.logout()
      .then((res) => {
        commit('SET_USER', null);
        commit('SET_ISLOGINED', false);
        this.$router.push('/')
      })
      .catch((err) => { console.log(err) })
  },
  addUserLog ({ commit }, data) { // 사용자가 방문할때마다 로그내역을 보관하는 함수
    let userLogService = feathers.service('client-userlog')
    userLogService.timeout = 60000
    return userLogService.create(data)
  }
}
