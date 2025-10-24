export const state = () => ({
  isVisible: false,
  title: '',
  content: '',
  buttonValue: '',
  type: 1       // 0: 실패, 1: 성공, 2: 경고
})

export const mutations = {
  SET_DIALOG_DATA (state, data) { 
    state.isVisible = !state.isVisible
    state.title = data.title
    state.content = data.content
    state.buttonValue = data.buttonValue
    state.type = data.type
  },
  SET_ISVISIBLE (state, val) { state.isVisible = val }
}

export const getters = {
  getTitle (state) { return state.title },
  getContent (state) { return state.content },
  getButtonValue (state) { return state.buttonValue },
  isVisible (state) { return state.isVisible },
  getType (state) { return state.type }
}

export const actions = {
}
