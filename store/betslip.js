export const state = () => ({
  totalOdds: 0,
  totalOddsMoney: 0,
  betMoney: 0,
  betMinAmount: 0,
  betMaxAmount: 0,
  maxWinMoney: 0,
  maxBetOdds: 0,
  isLock: false,
  betSlipList: []
})

export const mutations = {
  SET_BETSLIPLIST (state, betSlipList) { // 상태변수: 현재유저를 설정하는 함수
    if (betSlipList.length === 0) {
      state.betSlipList.splice(0, state.betSlipList.length)
      state.totalOdds = 0
      state.totalBetMoeny = 0
    }
    else  {
      state.betSlipList.push(betSlipList)
      let totalodds = 1
      let totalBetMoeny = 0
      for(let i = 0; i < state.betSlipList.length; i++) {
        totalodds *= state.betSlipList[i].odds
      }

      let with2Decimals = totalodds.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0]
      totalodds = parseFloat(with2Decimals)

      state.totalOdds = totalodds
      totalBetMoeny = totalodds * state.betMoney
      state.totalOddsMoney = totalBetMoeny
    }
  },
  DELETE_BETSLIPONE (state, index) {
    state.betSlipList.splice(index , 1)
    let totalodds = 1
    let totalBetMoeny = 0
    for(let i = 0; i < state.betSlipList.length; i++) {
      totalodds *= state.betSlipList[i].odds
    }
    if(totalodds == 1) {
      totalodds = 0
    }

    let with2Decimals = totalodds.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0]
    totalodds = parseFloat(with2Decimals)

    state.totalOdds = totalodds
    totalBetMoeny = totalodds * state.betMoney
    state.totalOddsMoney = totalBetMoeny
  },
  UPDATE_BETSLIPBETVALUE (state, data) {
    state.betSlipList[data.index].odds = data.price
    state.betSlipList[data.index].Status = data.status
    let totalodds = 1
    let totalBetMoeny = 0
    for(let i = 0; i < state.betSlipList.length; i++) {
      totalodds *= state.betSlipList[i].odds
    }
    
    if(totalodds == 1) {
      totalodds = 0
    }
    
    let with2Decimals = totalodds.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0]
    totalodds = parseFloat(with2Decimals)

    state.totalOdds = totalodds
    totalBetMoeny = totalodds * state.betMoney
    state.totalOddsMoney = totalBetMoeny
  },
  UPDATE_BETSLIPCROSSODDS(state, data) {
    state.betSlipList[data.index].odds = data.price
    state.betSlipList[data.index].BetName = data.betName
  },
  UPDATE_BETSLIPCROSSBET(state, data) {
    state.betSlipList[data.index].odds = data.price
    state.betSlipList[data.index].BetName = data.betName
    state.betSlipList[data.index].Bets[0].Id = data.Bets[0].Id
    state.betSlipList[data.index].Bets[1].Id = data.Bets[1].Id
  },
  UPDATE_BETSLIPBET (state, data) {
    if(data.MarketId == 0) {
      state.betSlipList[data.index].Bets[0].Id = data.Bets[0].Id
      state.betSlipList[data.index].Bets[1].Id = data.Bets[1].Id
    } else {
      state.betSlipList[data.index].odds = data.Price
      state.betSlipList[data.index].Bets[0].Price = data.Price
      state.betSlipList[data.index].Bets[0].Status = data.status
    }
    let totalodds = 1
    let totalBetMoeny = 0
    for(let i = 0; i < state.betSlipList.length; i++) {
      totalodds *= state.betSlipList[i].odds
    }
    
    if(totalodds == 1) {
      totalodds = 0
    }
    
    let with2Decimals = totalodds.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0]
    totalodds = parseFloat(with2Decimals)

    state.totalOdds = totalodds
    totalBetMoeny = totalodds * state.betMoney
    state.totalOddsMoney = totalBetMoeny
  },
  UPDATE_BETSLIPONE (state, data) {
    state.betSlipList[data.SlipIndex].MarketId = data.MarketId
    state.betSlipList[data.SlipIndex].BetId = data.BetId
    state.betSlipList[data.SlipIndex].odds = data.odds
    if(data.MarketId == 0) {
      state.betSlipList[data.SlipIndex].Bets[0].Id = data.Bets[0].Id
      state.betSlipList[data.SlipIndex].Bets[1].Id = data.Bets[1].Id
    } else {
      state.betSlipList[data.SlipIndex].Bets[0].Id = data.Bets[0].Id
    }
    state.betSlipList[data.SlipIndex].BetName = data.BetName

    let totalodds = 1
    let totalBetMoeny = 0
    for(let i = 0; i < state.betSlipList.length; i++) {
      totalodds *= state.betSlipList[i].odds
    }
    
    if(totalodds == 1) {
      totalodds = 0
    }
    
    let with2Decimals = totalodds.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0]
    totalodds = parseFloat(with2Decimals)

    state.totalOdds = totalodds
    totalBetMoeny = totalodds * state.betMoney
    state.totalOddsMoney = totalBetMoeny
  },
  UPDATE_VIRTULAL_BETSLIPONE (state, data) {
    state.betSlipList[data.SlipIndex].marketName = data.marketName
    state.betSlipList[data.SlipIndex].betName = data.betName
    state.betSlipList[data.SlipIndex].odds = data.odds
    state.betSlipList[data.SlipIndex].number = data.number

    let totalodds = 1
    let totalBetMoeny = 0
    for(let i = 0; i < state.betSlipList.length; i++) {
      totalodds *= state.betSlipList[i].odds
    }
    
    if(totalodds == 1) {
      totalodds = 0
    }
    
    let with2Decimals = totalodds.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0]
    totalodds = parseFloat(with2Decimals)

    state.totalOdds = totalodds
    totalBetMoeny = totalodds * state.betMoney
    state.totalOddsMoney = totalBetMoeny
  },
  SET_TOTAL_ODDS (state, val) { state.totalOdds = val },
  SET_TOTAL_ODDS_MONEY (state, val) { state.totalOddsMoney = val },
  SET_MIN_BET_MONEY (state, val) { state.betMinAmount = val },
  SET_MAX_BET_MONEY (state, val) { state.betMaxAmount = val },
  SET_MAX_WIN_MONEY (state, val) { state.maxWinMoney = val },
  SET_MAX_BET_ODDS (state, val) { state.maxBetOdds = val },
  SET_IS_LOCK (state, val) { state.isLock = val },
  SET_BET_MONEY (state, val) { 
    state.betMoney = val 
    state.totalOddsMoney = state.totalOdds * state.betMoney
  },
}

export const getters = {
  getBetSlipList (state) { return state.betSlipList || null },
  getTotalOdds (state) { return state.totalOdds },
  getTotalOddsMoney (state) { return state.totalOddsMoney },
  getBetMinAmount (state) { return state.betMinAmount },
  getBetMaxAmount (state) { return state.betMaxAmount },
  getMaxWinMoney (state) { return state.maxWinMoney },
  getMaxBetOdds (state) { return state.maxBetOdds },
  isLock (state) { return state.isLock },
}

export const actions = {
}
