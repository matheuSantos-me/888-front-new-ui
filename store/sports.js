export const state = () => ({
  prematchCategory: [],             // 왼쪽 패널을 위한 카테고리 (프리매치)
  inplayCategory: [],               // 왼쪽 패널을 위한 카테고리 (인플레이)
  queryList: {
    selectedSportsCategoryId: -1,   // -1: 모든, 나머지: 해당 스포츠종목 아이디
    selectedLocationId: -1,         // -1: 나라가 선택되지 않은 경우
    selectedLeagueId: -1,           // 선택된 리그목록 -1: 리그가 선택되지 않은 경우
    searchKey: '',                  // 검색 키워드
    isSearchToday: 0                // 1: 오늘의 경기검색, 0: 아님
  },
  page: 1,                          // 페이지넘버
  selectedFixtureId: -1,            // 세부배당노출를 위한 경기아이디
  sortType: true,                   // false: 인기순정렬, true: 시간대정렬
  favorite: [],
  isReloadGameList: false,
  isChangeBetSlip: false,
  isBetCounting: false
})

export const mutations = {
  SET_PREMATCH_CATEGORY (state, category) { state.prematchCategory = category },
  SET_INPLAY_CATEGORY (state, category) { state.inplayCategory = category },
  SET_QUERYLIST (state, query) {
    state.queryList.selectedSportsCategoryId = query.selectedSportsCategoryId
    state.queryList.selectedLocationId = query.selectedLocationId
    state.queryList.selectedLeagueId = query.selectedLeagueId
    state.queryList.searchKey = query.searchKey
    state.queryList.isSearchToday = query.isSearchToday
    state.selectedFixtureId = -1
    state.page = 1
    state.isReloadGameList = !state.isReloadGameList
  },
  Init_QUERYLIST (state) {
    state.queryList.selectedSportsCategoryId = -1
    state.queryList.selectedLocationId = -1
    state.queryList.selectedLeagueId = -1
    state.queryList.searchKey = ''
    state.queryList.isSearchToday = 0
    state.selectedFixtureId = -1
    state.page = 1
  },
  SET_PAGE( state, val ) { state.page = val },
  SET_CATEGORYID (state, id) { state.queryList.selectedSportsCategoryId = id },
  SET_IS_RELOAD_GAME_LIST (state, status) { state.isReloadGameList = status },
  SET_LEAGUEID (state, id) { state.queryList.selectedLeagueId = id },
  SET_SELECTED_FIXTURE_ID (state, id) { state.selectedFixtureId = id },
  SET_SORT_TYPE (state, type) { state.sortType = type },
  SET_FAVORITE(state, favorite) { state.favorite = favorite },
  DELETE_FAVORITE (state, id) {
    let index = state.favorite.findIndex(fav => fav._id === id)
    state.favorite.splice(index, 1)
  },
  SET_ISCHANGEDBETSLIP(state, val) { state.isChangeBetSlip = val },
  SET_ISBETCOUNTING (state, val) { state.isBetCounting = val }
}

export const getters = {
  getPrematchCategory (state) { return state.prematchCategory || null },
  getInplayCategory (state) { return state.inplayCategory || null },
  getQueryList (state) { return state.queryList },
  getCategoryId (state) { return state.queryList.selectedSportsCategoryId },
  getIsReloadGameList (state) { return state.isReloadGameList },
  getSortType (state) { return state.sortType },
  getFavorite (state) { return state.favorite },
  getSelectedFixtureId (state) { return state.selectedFixtureId },
  getIsSearchToday (state) { return state.queryList.isSearchToday },
  getIsChangeBetSlip (state) { return state.isChangeBetSlip },
  getIsBetCounting (state) { return state.isBetCounting },
  getPage (state) { return state.page }
}

export const actions = {
}
