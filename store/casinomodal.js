export const state = () => ({
  isVisible: 0,
  title: '',
  content: '',
  buttonValue: '',
  thirdPartyCode: 0,
  gameId: "",
  isLive: true
})

export const mutations = {
  SET_DIALOG_DATA (state, data) { 
    state.isVisible = !state.isVisible
    state.title = data.title
    state.content = data.content
    state.buttonValue = data.buttonValue
    state.thirdPartyCode = data.thirdPartyCode
    state.gameId = data.gameId
    state.isLive = data.isLive
  },
  SET_ISVISIBLE (state) { state.isVisible++ }
}

export const getters = {
  getTitle (state) { return state.title },
  getContent (state) { return state.content },
  getButtonValue (state) { return state.buttonValue },
  isVisible (state) { return state.isVisible },
  getCasinoInfo(state) { return { thirdPartyCode: state.thirdPartyCode, gameId: state.gameId, isLive: state.isLive }}
}

export const actions = {
}
