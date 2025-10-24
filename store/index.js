import Cookies from "js-cookie";
import feathers from "@/plugins/feathers";
// import { storeMyIp } from "assets/js/data/store";
const cookieName = "feathers-jwt";

export const state = () => ({
  referrer: "",
  locales: ["en", "ko"],
  locale: Cookies.get("language") || "en",
  timeLeft: 21600,
  initializable: true,
  timeCountService: null,
  your_ip: null, // 유저아이피주소
  isBlock: false, // 유저아이피주소 블록상태
  isMobile: false,
  site: "",
  isShowedPopup: false, // 로그인후 팝업을 보여주었는가?
  popupList: [],
  pokerRedirect: false,
  // 클라이언트페이지에 이용할 store변수들
  client: {
    isCollapsed: true,
    myMoneyLogList: [], // 클라이언트/추천인내역의 나의 머니로그목록
    bspEventList: {},
    isUseDoor: false,
    siteTitle: "스포츠코어",
    siteChongpanCode: "",
    chatActive: false,
    paymentSelected: -1,
    noteCount: 0, // 쪽지Count
    turnOnSound: true,
    pointTransformVisibleCount: 0,
    loginDialogVisible: 0,
    coinDialogVisible: 0,
    pokerDialogVisible: 0,
    signupDialogVisible: 0,
    orangeDialogVisible: 0,
    roulleteDialogVisible: 0,
    eventDialogVisible: 0,
    proivderDialogVisible: 0,
    selectedEvent: null,
    signUpPopupVisible: 0,
    casinoDialogInfo: null,
    tokenDialogInfo: null,
    leftSideMenuType: 0,
    screenWidth: 0,
    screenHeight: 0,
    mainMenuHeight: 0,
    miniMenuHeight: 0,
    showLeftPanel: false,
    showRightPanel: false,
    showRightPanelYellow4: false,
    showSportsRule: false,
    contentMarginTop: 0,
    contentMarginLeft: 0,
    contentMarginRight: 0,
    showMiniTab: false,
    miniGameType: 0,
    orangeDialogType: 0,
    orangeDialogTab: 0,
    bettingHistoryTab: 0,
  },
  isJustShowRightPanel: false,
  casinoButtonDisable: false,
  customerCount: 0,
  gameSettings: null,
  isShowChatDialog: false,
  customerDelay: 0,
  themeType: null,
  layoutType: null,
  isBlackMode: false,
  mobileMenu: [],
  topMenu: [],
  leftMenu: [],
  banners: [],
  canChat: false,
  solutionTitle: "",
  lowOddsStandard: 1.55,
  miniBettingEndText: "배팅마감",
  isUseSignUpPopup: false,
  isUseAutoAnswer: true,
  noticeSettings: null,
  payInSettings: null,
  adminCode: "7979",
  payOutSettings: null,
  blockUserMessage: "",
  bettingHistorySaveTime: 72,
  isUseQuickQuestion: false,
  bonusRolling: [],
  fameSettings: null,
  isUseEventSignup: false,
  isUseNoteRead: false,
  attendance: null,
  friend: null,
  newNote: null,
  isUseRecaptcha: false,
  isUseLoginRecaptcha: false,
  payInPlus: null,
  newUserBonus: null,
  isDivideCasino: false,
  casinoType: 0,
  isUseChangePass: false,
  isUseAuth: false,
  loginData: null,
  loginResult: null,
  smsData: null,
  smsUserId: null,
  recaptchaValue: 0,
  isLoginCaptcha: 1,
  isSendSMSVerifyCode: false,
  isWeekAttendance: true,
  attIsUseAutoMode: false,
  paybackIsUseAutoMode: false,
  rollIsUseAutoMode: false,
  lostIsUseAutoMode: false,
  isAvailCasino: true,
  isNewUser: true,
  sportDomain: "",
  PowerBallBet: 1,
  NtryPLadderBet: 1,
  NtryKLadderBet: 1,
  NtrySpeedKenoBet: 1,
  EOSPowerBall1Bet: 1,
  EOSPowerBall2Bet: 1,
  EOSPowerBall3Bet: 1,
  EOSPowerBall4Bet: 1,
  EOSPowerBall5Bet: 1,
  BetEastFootballBet: 1,
  NamedFX1Bet: 1,
  NamedFX2Bet: 1,
  NamedFX3Bet: 1,
  NamedFX4Bet: 1,
  NamedFX5Bet: 1,
  NamedRacingBet: 1,
  NamedPowerBall3Bet: 1,
  NamedPowerBall5Bet: 1,
  NamedLadder3Bet: 1,
  NamedLadder5Bet: 1,
  NamedRedPowerBallBet: 1,
  NamedRedLadderBet: 1,
  SurePowerBall1Bet: 1,
  SurePowerBall2Bet: 1,
  SurePowerBall3Bet: 1,
  SureLadder1Bet: 1,
  SureLadder2Bet: 1,
  SureLadder3Bet: 1,
  SureRacing1Bet: 1,
  SureRacing2Bet: 1,
  SureRacing3Bet: 1,
  CompanionSpeedKenoBet: 1,
  CompanionKenoLadderBet: 1,
  CompanionPowerBallBet: 1,
  CompanionPowerLadderBet: 1,
  TokenPowerBallBet: 1,
  TokenRoulleteBet: 1,
  TokenHiloBet: 1,
  TokenHilo5Bet: 1,
  TokenGraphBet: 1,
  TokenBaccaratBet: 1,
  TokenHorseBet: 1,
  TokenWheelBet: 1,
  TokenRacing3Bet: 1,
  TokenRacing4Bet: 1,
  LivescorePowerFreeKickBet: 1,
  LivescoreSpeedHomeRunBet: 1,
  LivescorePowerSpeedDunkBet: 1,
  BubblePowerBallBet: 1,
  BubbleLadderBet: 1,
  BoscoreLadder1Bet: 1,
  BoscoreLadder2Bet: 1,
  BoscoreLadder3Bet: 1,
  BoscorePowerBallBet: 1,
  LotusBaccarat1Bet: 1,
  LotusEvenOddBet: 1,
  MGMBaccarat1Bet: 1,
  MGMBaccarat2Bet: 1,
  MGMBaccarat3Bet: 1,
  MGMEvenOddBet: 1,
  MGMGoStopBet: 1,
  BetGameDiceDuelBet: 1,
  BetGameWheelBet: 1,
  BetGameLucky7Bet: 1,
  BetGameLucky6Bet: 1,
  BetGameLucky5Bet: 1,
  BetGameBaccaratBet: 1,
  BetGamePokerBet: 1,
  BetGameBetBet: 1,
  loginSideVerify: false,
  loginSideUserId: null,
  selectedProvider: 0,
  isUseCoupon: false,
  isUseRolling: false,
  isUseLost: false,
  isUsePayback: false,
  isShowRollingMoney: true,
  isShowLostMoney: true,
  isShowPaybackMoney: true,
  isUseNewTracker: false,
  sportsAPI: false,
  isConnectedSocket: true,
  topGameList: null,
  topLeagueList: null,
  emergencyPercentSports: 0,
  emergencyPercentCasino: 0,
  emergencyMax: 0,
  isUseAlarm: true,
  roulleteMoney: [0, 0, 0, 0, 0, 0, 0, 0],
  roulleteId: "",
  roulleteIndex: 0,
  couponMsgSuccess: "",
  couponMsgError: "",
  isRenew: false,
  noticeBoardTitle: "",
  noticeBoardIsUse: true,
  isUsePoker: false,
  currentPageName: "Home",
});

export const mutations = {
  SET_CURRENTPAGENAME(state, val) {
    state.currentPageName = val;
  },
  SET_BANNERS(state, val) {
    state.banners = val;
  },
  SET_MOBILEMENU(state, val) {
    state.mobileMenu = val;
  },
  SET_TOPMENU(state, val) {
    state.topMenu = val;
  },
  SET_LEFTMENU(state, val) {
    state.leftMenu = val;
  },
  SET_POKERREDIRECT(state, val) {
    state.pokerRedirect = val;
  },
  SET_ISUSEPOKER(state, val) {
    state.isUsePoker = val;
  },
  SET_NOTICEBOARDTITLE(state, val) {
    state.noticeBoardTitle = val;
  },
  SET_NOTICEBOARDISUSE(state, val) {
    state.noticeBoardIsUse = val;
  },
  SET_ISRENEW(state, val) {
    state.isRenew = val;
  },
  SET_COUPONMSGSUCCESS(state, val) {
    state.couponMsgSuccess = val;
  },
  SET_COUPONMSGERROR(state, val) {
    state.couponMsgError = val;
  },
  SET_ROULLETEINDEX(state, val) {
    state.roulleteIndex = val;
  },
  SET_ROULLETEID(state, val) {
    state.roulleteId = val;
  },
  SET_ROULLETEMONEY(state, val) {
    state.roulleteMoney = val;
  },
  SET_ISUSEALARM(state, val) {
    state.isUseAlarm = val;
  },
  SET_EMERGENCYPERCENTSPORTS(state, val) {
    state.emergencyPercentSports = val;
  },
  SET_EMERGENCYPERCENTCASINO(state, val) {
    state.emergencyPercentCasino = val;
  },
  SET_EMERGENCYMAX(state, val) {
    state.emergencyMax = val;
  },
  SET_ISCONNECTEDSOCKET(state, val) {
    state.isConnectedSocket = val;
  },
  SET_ORANGEDIALOGTAB(state, val) {
    state.client.orangeDialogTab = val;
    if (val == 5) {
      state.client.bettingHistoryTab = "sports";
    }
  },
  SET_BETTINGHISTORYTAB(state, val) {
    state.client.bettingHistoryTab = val;
  },
  SET_REFERRER(state, val) {
    state.referrer = val;
  },
  SET_SPORTDOMAIN(state, val) {
    state.sportDomain = val;
  },
  SET_ISNEWUSER(state, val) {
    state.isNewUser = val;
  },
  SET_ISSHOWEDPOPUP(state, val) {
    state.isShowedPopup = val;
  },
  SET_CASINO_BUTTON_DISABLE(state, val) {
    state.casinoButtonDisable = val;
  },
  decreaseTimeLeft(state) {
    state.timeLeft--;
  },
  initTimeLeft(state, bForce = false) {
    if (bForce || state.initializable) state.timeLeft = 21600;
    else state.initializable = true;
  },
  disableInitializableTTL(state) {
    state.initializable = false;
  },
  setTimeLeft(state, nValue) {
    state.timeLeft = nValue;
  },
  clearTTLService(state) {
    clearTimeout(state.timeCountService);
    state.timeCountService = null;
  },
  setTTLService(state, TTLService) {
    state.timeCountService = TTLService;
  },
  SET_LANG(state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale;
    }
  },
  SET_ISMOBILE(state, isMobile) {
    state.isMobile = isMobile;
  },
  SET_CLIENT_SCREENWIDTH(state, width) {
    state.client.screenWidth = width;
  },
  SET_CLIENT_SCREENHEIGHT(state, height) {
    state.client.screenHeight = height;
  },
  SET_MAINMENU_HEIGHT(state, height) {
    state.client.mainMenuHeight = height;
  },
  SET_MINIMENU_HEIGHT(state, height) {
    state.client.miniMenuHeight = height;
  },
  SET_ISUSEDOOR(state, val) {
    state.client.isUseDoor = val;
  },
  SET_SITETITLE(state, val) {
    state.client.siteTitle = val;
  },
  SET_MYIP(state, ipAdd) {
    state.your_ip = ipAdd;
  },
  SET_NOTECOUNT(state, nNoteCount) {
    state.client.noteCount = nNoteCount;
  },
  SET_TURNONSOUND(state, status) {
    state.client.turnOnSound = status;
  },
  SET_SITE(state, site) {
    state.site = site;
  },
  SET_LOGINDIALOGVISIBLE(state) {
    state.client.loginDialogVisible++;
  },
  SET_COINDIALOGVISIBLE(state) {
    state.client.coinDialogVisible++;
  },
  SET_POKERDIALOGVISIBLE(state) {
    state.client.pokerDialogVisible++;
  },
  SET_SIGNUPDIALOGVISIBLE(state) {
    state.client.signupDialogVisible++;
  },
  SET_ORANGEDIALOGVISIBLE(state) {
    state.client.orangeDialogVisible++;
  },
  SET_ROULLETEDIALOGVISIBLE(state) {
    state.client.roulleteDialogVisible++;
  },
  SET_PROVIDERDIALOGVISIBLE(state) {
    state.client.proivderDialogVisible++;
  },
  SET_EVENTDIALOGVISIBLE(state) {
    state.client.eventDialogVisible++;
  },
  SET_EVENT(state, val) {
    state.client.selectedEvent = val;
  },
  SET_SIGNUPPOPUPVISIBLE(state) {
    state.client.signUpPopupVisible++;
  },
  SET_CASINODIALOGINFO(state, casinoInfo) {
    state.client.casinoDialogInfo = casinoInfo;
  },
  SET_TOKENDIALOGINFO(state, tokenInfo) {
    state.client.tokenDialogInfo = tokenInfo;
  },
  SET_LEFTSIDEMENUTYPE(state, type) {
    state.client.leftSideMenuType = type;
  },
  SET_SHOWLEFTPANEL(state, type) {
    state.client.showLeftPanel = type;
  },
  SET_SHOWRIGHTPANEL(state, type) {
    state.client.showRightPanel = type;
  },
  SET_SHOWRIGHTPANELYELLOW4(state, type) {
    state.client.showRightPanelYellow4 = type;
  },
  SET_ISJUSTSHOWRIGHTPANEL(state, type) {
    state.isJustShowRightPanel = type;
  },
  SET_SHOWMINITAB(state, type) {
    state.client.showMiniTab = type;
  },
  SET_SHOWSPORTSRULE(state, type) {
    state.client.showSportsRule = type;
  },
  SET_CONTENTMARGINTOP(state, top) {
    state.client.contentMarginTop = top;
  },
  SET_CONTENTMARGINLEFT(state, left) {
    state.client.contentMarginLeft = left;
  },
  SET_CONTENTMARGINRIGHT(state, right) {
    state.client.contentMarginRight = right;
  },
  SET_ISBLOCK(state, nBlock) {
    state.isBlock = nBlock;
  },
  SET_CUSTOMERCOUNT(state, count) {
    state.customerCount = count;
  },
  SET_GAMESETTINGS(state, settings) {
    state.gameSettings = settings;
  },
  SET_MiniBet(state, settings) {
    if (settings.gameType == "PowerBall") {
      state.gameSettings.PowerBall.gameStatus_auto = settings.status;
      state.PowerBallBet = settings.status;
    } else if (settings.gameType == "NtryPLadder") {
      state.gameSettings.NtryPLadder.gameStatus_auto = settings.status;
      state.NtryPLadderBet = settings.status;
    } else if (settings.gameType == "NtryKLadder") {
      state.gameSettings.NtryKLadder.gameStatus_auto = settings.status;
      state.NtryKLadderBet = settings.status;
    } else if (settings.gameType == "NtrySpeedKeno") {
      state.gameSettings.NtrySpeedKeno.gameStatus_auto = settings.status;
      state.NtrySpeedKenoBet = settings.status;
    } else if (settings.gameType == "EOSPowerBall1") {
      state.gameSettings.EOSPowerBall1.gameStatus_auto = settings.status;
      state.EOSPowerBall1Bet = settings.status;
    } else if (settings.gameType == "EOSPowerBall2") {
      state.gameSettings.EOSPowerBall2.gameStatus_auto = settings.status;
      state.EOSPowerBall2Bet = settings.status;
    } else if (settings.gameType == "EOSPowerBall3") {
      state.gameSettings.EOSPowerBall3.gameStatus_auto = settings.status;
      state.EOSPowerBall3Bet = settings.status;
    } else if (settings.gameType == "EOSPowerBall4") {
      state.gameSettings.EOSPowerBall4.gameStatus_auto = settings.status;
      state.EOSPowerBall4Bet = settings.status;
    } else if (settings.gameType == "EOSPowerBall5") {
      state.gameSettings.EOSPowerBall5.gameStatus_auto = settings.status;
      state.EOSPowerBall5Bet = settings.status;
    } else if (settings.gameType == "BetEastFootball") {
      state.gameSettings.BetEastFootball.gameStatus_auto = settings.status;
      state.BetEastFootballBet = settings.status;
    } else if (settings.gameType == "NamedFX1") {
      state.gameSettings.NamedFX1.gameStatus_auto = settings.status;
      state.NamedFX1Bet = settings.status;
    } else if (settings.gameType == "NamedFX2") {
      state.gameSettings.NamedFX2.gameStatus_auto = settings.status;
      state.NamedFX2Bet = settings.status;
    } else if (settings.gameType == "NamedFX3") {
      state.gameSettings.NamedFX3.gameStatus_auto = settings.status;
      state.NamedFX3Bet = settings.status;
    } else if (settings.gameType == "NamedFX4") {
      state.gameSettings.NamedFX4.gameStatus_auto = settings.status;
      state.NamedFX4Bet = settings.status;
    } else if (settings.gameType == "NamedFX5") {
      state.gameSettings.NamedFX5.gameStatus_auto = settings.status;
      state.NamedFX5Bet = settings.status;
    } else if (settings.gameType == "NamedRacing") {
      state.gameSettings.NamedRacing.gameStatus_auto = settings.status;
      state.NamedRacingBet = settings.status;
    } else if (settings.gameType == "NamedPowerBall3") {
      state.gameSettings.NamedPowerBall3.gameStatus_auto = settings.status;
      state.NamedPowerBall3Bet = settings.status;
    } else if (settings.gameType == "NamedPowerBall5") {
      state.gameSettings.NamedPowerBall5.gameStatus_auto = settings.status;
      state.NamedPowerBall5Bet = settings.status;
    } else if (settings.gameType == "NamedLadder3") {
      state.gameSettings.NamedLadder3.gameStatus_auto = settings.status;
      state.NamedLadder3Bet = settings.status;
    } else if (settings.gameType == "NamedLadder5") {
      state.gameSettings.NamedLadder5.gameStatus_auto = settings.status;
      state.NamedLadder5Bet = settings.status;
    } else if (settings.gameType == "NamedRedPowerBall") {
      state.gameSettings.NamedRedPowerBall.gameStatus_auto = settings.status;
      state.NamedRedPowerBallBet = settings.status;
    } else if (settings.gameType == "NamedRedLadder") {
      state.gameSettings.NamedRedLadder.gameStatus_auto = settings.status;
      state.NamedRedLadderBet = settings.status;
    } else if (settings.gameType == "SurePowerBall1") {
      state.gameSettings.SurePowerBall1.gameStatus_auto = settings.status;
      state.SurePowerBall1Bet = settings.status;
    } else if (settings.gameType == "SurePowerBall2") {
      state.gameSettings.SurePowerBall2.gameStatus_auto = settings.status;
      state.SurePowerBall2Bet = settings.status;
    } else if (settings.gameType == "SurePowerBall3") {
      state.gameSettings.SurePowerBall3.gameStatus_auto = settings.status;
      state.SurePowerBall3Bet = settings.status;
    } else if (settings.gameType == "SureLadder1") {
      state.gameSettings.SureLadder1.gameStatus_auto = settings.status;
      state.SureLadder1Bet = settings.status;
    } else if (settings.gameType == "SureLadder2") {
      state.gameSettings.SureLadder2.gameStatus_auto = settings.status;
      state.SureLadder2Bet = settings.status;
    } else if (settings.gameType == "SureLadder3") {
      state.gameSettings.SureLadder3.gameStatus_auto = settings.status;
      state.SureLadder3Bet = settings.status;
    } else if (settings.gameType == "SureRacing1") {
      state.gameSettings.SureRacing1.gameStatus_auto = settings.status;
      state.SureRacing1Bet = settings.status;
    } else if (settings.gameType == "SureRacing2") {
      state.gameSettings.SureRacing2.gameStatus_auto = settings.status;
      state.SureRacing2Bet = settings.status;
    } else if (settings.gameType == "SureRacing3") {
      state.gameSettings.SureRacing3.gameStatus_auto = settings.status;
      state.SureRacing3Bet = settings.status;
    } else if (settings.gameType == "CompanionSpeedKeno") {
      state.gameSettings.CompanionSpeedKeno.gameStatus_auto = settings.status;
      state.CompanionSpeedKenoBet = settings.status;
    } else if (settings.gameType == "CompanionKenoLadder") {
      state.gameSettings.CompanionKenoLadder.gameStatus_auto = settings.status;
      state.CompanionKenoLadderBet = settings.status;
    } else if (settings.gameType == "CompanionPowerBall") {
      state.gameSettings.CompanionPowerBall.gameStatus_auto = settings.status;
      state.CompanionPowerBallBet = settings.status;
    } else if (settings.gameType == "CompanionPowerLadder") {
      state.gameSettings.CompanionPowerLadder.gameStatus_auto = settings.status;
      state.CompanionPowerLadderBet = settings.status;
    } else if (settings.gameType == "TokenPowerBall") {
      state.gameSettings.TokenPowerBall.gameStatus_auto = settings.status;
      state.TokenPowerBallBet = settings.status;
    } else if (settings.gameType == "TokenRoullete") {
      state.gameSettings.TokenRoullete.gameStatus_auto = settings.status;
      state.TokenRoulleteBet = settings.status;
    } else if (settings.gameType == "TokenHilo") {
      state.gameSettings.TokenHilo.gameStatus_auto = settings.status;
      state.TokenHiloBet = settings.status;
    } else if (settings.gameType == "TokenHilo5") {
      state.gameSettings.TokenHilo5.gameStatus_auto = settings.status;
      state.TokenHilo5Bet = settings.status;
    } else if (settings.gameType == "TokenGraph") {
      state.gameSettings.TokenGraph.gameStatus_auto = settings.status;
      state.TokenGraphBet = settings.status;
    } else if (settings.gameType == "TokenBaccarat") {
      state.gameSettings.TokenBaccarat.gameStatus_auto = settings.status;
      state.TokenBaccaratBet = settings.status;
    } else if (settings.gameType == "TokenHorse") {
      state.gameSettings.TokenHorse.gameStatus_auto = settings.status;
      state.TokenHorseBet = settings.status;
    } else if (settings.gameType == "TokenWheel") {
      state.gameSettings.TokenWheel.gameStatus_auto = settings.status;
      state.TokenWheelBet = settings.status;
    } else if (settings.gameType == "TokenRacing3") {
      state.gameSettings.TokenRacing3.gameStatus_auto = settings.status;
      state.TokenRacing3Bet = settings.status;
    } else if (settings.gameType == "TokenRacing4") {
      state.gameSettings.TokenRacing4.gameStatus_auto = settings.status;
      state.TokenRacing4Bet = settings.status;
    } else if (settings.gameType == "LivescorePowerFreeKick") {
      state.gameSettings.LivescorePowerFreeKick.gameStatus_auto =
        settings.status;
      state.LivescorePowerFreeKickBet = settings.status;
    } else if (settings.gameType == "LivescoreSpeedHomeRun") {
      state.gameSettings.LivescoreSpeedHomeRun.gameStatus_auto =
        settings.status;
      state.LivescoreSpeedHomeRunBet = settings.status;
    } else if (settings.gameType == "LivescorePowerSpeedDunk") {
      state.gameSettings.LivescorePowerSpeedDunk.gameStatus_auto =
        settings.status;
      state.LivescorePowerSpeedDunkBet = settings.status;
    } else if (settings.gameType == "BubblePowerBall") {
      state.gameSettings.BubblePowerBall.gameStatus_auto = settings.status;
      state.BubblePowerBallBet = settings.status;
    } else if (settings.gameType == "BubbleLadder") {
      state.gameSettings.BubbleLadder.gameStatus_auto = settings.status;
      state.BubbleLadderBet = settings.status;
    } else if (settings.gameType == "BoscoreLadder1") {
      state.gameSettings.BoscoreLadder1.gameStatus_auto = settings.status;
      state.BoscoreLadder1Bet = settings.status;
    } else if (settings.gameType == "BoscoreLadder2") {
      state.gameSettings.BoscoreLadder2.gameStatus_auto = settings.status;
      state.BoscoreLadder2Bet = settings.status;
    } else if (settings.gameType == "BoscoreLadder3") {
      state.gameSettings.BoscoreLadder3.gameStatus_auto = settings.status;
      state.BoscoreLadder3Bet = settings.status;
    } else if (settings.gameType == "BoscorePowerBall") {
      state.gameSettings.BoscorePowerBall.gameStatus_auto = settings.status;
      state.BoscorePowerBallBet = settings.status;
    } else if (settings.gameType == "LotusBaccarat1") {
      state.gameSettings.LotusBaccarat1.gameStatus_auto = settings.status;
      state.LotusBaccarat1Bet = settings.status;
    } else if (settings.gameType == "LotusEvenOdd") {
      state.gameSettings.LotusEvenOdd.gameStatus_auto = settings.status;
      state.LotusEvenOddBet = settings.status;
    } else if (settings.gameType == "MGMBaccarat1") {
      state.gameSettings.MGMBaccarat1.gameStatus_auto = settings.status;
      state.MGMBaccarat1Bet = settings.status;
    } else if (settings.gameType == "MGMBaccarat2") {
      state.gameSettings.MGMBaccarat2.gameStatus_auto = settings.status;
      state.MGMBaccarat2Bet = settings.status;
    } else if (settings.gameType == "MGMBaccarat3") {
      state.gameSettings.MGMBaccarat3.gameStatus_auto = settings.status;
      state.MGMBaccarat3Bet = settings.status;
    } else if (settings.gameType == "MGMEvenOdd") {
      state.gameSettings.MGMEvenOdd.gameStatus_auto = settings.status;
      state.MGMEvenOddBet = settings.status;
    } else if (settings.gameType == "MGMGoStop") {
      state.gameSettings.MGMGoStop.gameStatus_auto = settings.status;
      state.MGMGoStopBet = settings.status;
    } else if (settings.gameType == "BetGameDiceDuel") {
      state.gameSettings.BetGameDiceDuel.gameStatus_auto = settings.status;
      state.BetGameDiceDuelBet = settings.status;
    } else if (settings.gameType == "BetGameWheel") {
      state.gameSettings.BetGameWheel.gameStatus_auto = settings.status;
      state.BetGameWheelBet = settings.status;
    } else if (settings.gameType == "BetGameLucky7") {
      state.gameSettings.BetGameLucky7.gameStatus_auto = settings.status;
      state.BetGameLucky7Bet = settings.status;
    } else if (settings.gameType == "BetGameLucky6") {
      state.gameSettings.BetGameLucky6.gameStatus_auto = settings.status;
      state.BetGameLucky6Bet = settings.status;
    } else if (settings.gameType == "BetGameLucky5") {
      state.gameSettings.BetGameLucky5.gameStatus_auto = settings.status;
      state.BetGameLucky5Bet = settings.status;
    } else if (settings.gameType == "BetGameBaccarat") {
      state.gameSettings.BetGameBaccarat.gameStatus_auto = settings.status;
      state.BetGameBaccaratBet = settings.status;
    } else if (settings.gameType == "BetGamePoker") {
      state.gameSettings.BetGamePoker.gameStatus_auto = settings.status;
      state.BetGamePokerBet = settings.status;
    } else if (settings.gameType == "BetGameBet") {
      state.gameSettings.BetGameBet.gameStatus_auto = settings.status;
      state.BetGameBetBet = settings.status;
    }
  },
  SET_ISSHOWCHATDIALOG(state, val) {
    state.isShowChatDialog = val;
  },
  SET_CUSTOMERDELAY(state, delay) {
    state.customerDelay = delay;
  },
  SET_THEMETYPE(state, settings) {
    state.themeType = settings;
  },
  SET_LAYOUTTYPE(state, settings) {
    state.layoutType = settings;
  },
  SET_ISBLACKMODE(state, settings) {
    state.isBlackMode = settings;
  },
  SET_CANCHAT(state, canChat) {
    state.canChat = canChat;
  },
  SET_SOLUTIONTITLE(state, solutionTitle) {
    state.solutionTitle = solutionTitle;
  },
  SET_SITECHONGPANCODE(state, code) {
    state.client.siteChongpanCode = code;
  },
  SET_LOWODDSSTANDARD(state, standard) {
    state.lowOddsStandard = standard;
  },
  SET_MINIBETTINGENDTEXT(state, val) {
    state.miniBettingEndText = val;
  },
  SET_ISUSESIGNUPPOPUP(state, value) {
    state.isUseSignUpPopup = value;
  },
  SET_ISUSEAUTOANSWER(state, value) {
    state.isUseAutoAnswer = value;
  },
  SET_NOTICESETTINGS(state, settings) {
    state.noticeSettings = settings;
  },
  SET_PAYINSETTINGS(state, settings) {
    state.payInSettings = settings;
  },
  SET_ADMINCODE(state, code) {
    state.adminCode = code;
  },
  SET_PAYOUTSETTINGS(state, settings) {
    state.payOutSettings = settings;
  },
  SET_BLOCKUSERMESSAGE(state, message) {
    state.blockUserMessage = message;
  },
  SET_BETTINGHISTORYSAVETIME(state, time) {
    state.bettingHistorySaveTime = time;
  },
  SET_ISUSEQUICKQUESTION(state, value) {
    state.isUseQuickQuestion = value;
  },
  SET_BONUSROLLING(state, value) {
    state.bonusRolling = value;
  },
  SET_FAMESETTINGS(state, value) {
    state.fameSettings = value;
  },
  SET_ISUSEEVENTSIGNUP(state, value) {
    state.isUseEventSignup = value;
  },
  SET_ISUSENOTEREAD(state, value) {
    state.isUseNoteRead = value;
  },
  SET_ATTENDANCE(state, value) {
    state.attendance = value;
  },
  SET_FRIEND(state, value) {
    state.friend = value;
  },
  SET_MINIGAMETYPE(state, value) {
    state.client.miniGameType = value;
  },
  SET_NEWNOTE(state, value) {
    state.newNote = value;
  },
  SET_ISUSERECAPTCHA(state, value) {
    state.isUseRecaptcha = value;
  },
  SET_ISUSELOGINRECAPTCHA(state, value) {
    state.isUseLoginRecaptcha = value;
  },
  SET_PAYINPLUS(state, value) {
    state.payInPlus = value;
  },
  SET_NEWUSERBONUS(state, value) {
    state.newUserBonus = value;
  },
  SET_ISDIVIDECASINO(state, value) {
    state.isDivideCasino = value;
  },
  SET_CASINOTYPE(state, value) {
    state.casinoType = value;
  },
  SET_ISUSECHANGEPASS(state, value) {
    state.isUseChangePass = value;
  },
  SET_ISUSEAUTH(state, value) {
    state.isUseAuth = value;
  },
  SET_LOGINRESULT(state, value) {
    state.loginResult = value;
  },
  SET_RECAPTCHAVALUE(state) {
    state.recaptchaValue++;
  },
  SET_LOGINDATA(state, value) {
    state.loginData = value;
  },
  SET_SMSDATA(state, value) {
    state.smsData = value;
  },
  SET_SMSUSERID(state, value) {
    state.smsUserId = value;
  },
  SET_ISLOGINCAPTCHA(state, value) {
    state.isLoginCaptcha = value;
  },
  SET_ISSENDSMSVERIFYCODE(state, value) {
    state.isSendSMSVerifyCode = value;
  },
  SET_ISWEEKATTENDANCE(state, value) {
    state.isWeekAttendance = value;
  },
  SET_ATTISUSEAUTOMODE(state, value) {
    state.attIsUseAutoMode = value;
  },
  SET_PAYBACKISUSEAUTOMODE(state, value) {
    state.paybackIsUseAutoMode = value;
  },
  SET_ROLLISUSEAUTOMODE(state, value) {
    state.rollIsUseAutoMode = value;
  },
  SET_LOSTISUSEAUTOMODE(state, value) {
    state.lostIsUseAutoMode = value;
  },
  SET_ISAVAILCASINO(state, value) {
    state.isAvailCasino = value;
  },
  SET_POPUPLIST(state, value) {
    state.popupList.push(value);
  },
  SET_LOGINSIDEVERIFY(state, value) {
    state.loginSideVerify = value;
  },
  SET_LOGINSIDEUSERID(state, value) {
    state.loginSideUserId = value;
  },
  SET_ORANGEDIALOGTYPE(state, value) {
    state.client.orangeDialogType = value;
  },
  FORMAT_POPUPLIST(state) {
    state.popupList.splice(0, state.popupList.length);
    state.popupList = [];
  },
  DELETE_POPUP(state, value) {
    let popupIndex = state.popupList.findIndex((popup) => popup._id == value);
    if (popupIndex > -1) {
      state.popupList.splice(popupIndex, 1);
    }
  },
  SET_SELECTEDPROVIDER(state, id) {
    state.selectedProvider = id;
  },
  SET_ISUSECOUPON(state, value) {
    state.isUseCoupon = value;
  },
  SET_ISUSEROLLING(state, value) {
    state.isUseRolling = value;
  },
  SET_ISUSELOST(state, value) {
    state.isUseLost = value;
  },
  SET_ISUSEPAYBACK(state, value) {
    state.isUsePayback = value;
  },
  SET_ISSHOWROLLINGMONEY(state, value) {
    state.isShowRollingMoney = value;
  },
  SET_ISSHOWLOSTMONEY(state, value) {
    state.isShowLostMoney = value;
  },
  SET_ISSHOWPAYBACKMONEY(state, value) {
    state.isShowPaybackMoney = value;
  },
  SET_ISUSENEWTRACKER(state, value) {
    state.isUseNewTracker = value;
  },
  SET_SPORTSAPI(state, value) {
    state.sportsAPI = value;
  },
  SET_TOPGAMELIST(state, value) {
    state.topGameList = value;
  },
  SET_TOPLEAGUELIST(state, value) {
    state.topLeagueList = value;
  },
};

export const getters = {
  getCurrentPageName(state) {
    return state.currentPageName;
  },
  getBanners(state) {
    return state.banners;
  },
  getMobileMenu(state) {
    return state.mobileMenu;
  },
  getTopMenu(state) {
    return state.topMenu;
  },
  getLeftMenu(state) {
    return state.leftMenu;
  },
  getPokerRedirect(state) {
    return state.pokerRedirect;
  },
  getIsUsePoker(state) {
    return state.isUsePoker;
  },
  getNoticeBoardTitle(state) {
    return state.noticeBoardTitle;
  },
  getNoticeBoardIsUse(state) {
    return state.noticeBoardIsUse;
  },
  getIsRenew(state) {
    return state.isRenew;
  },
  getCouponMsgSuccess(state) {
    return state.couponMsgSuccess;
  },
  getCouponMsgError(state) {
    return state.couponMsgError;
  },
  getRoulleteIndex(state) {
    return state.roulleteIndex;
  },
  getRoulleteId(state) {
    return state.roulleteId;
  },
  getRoulleteMoney(state) {
    return state.roulleteMoney;
  },
  getIsUseAlarm(state) {
    return state.isUseAlarm;
  },
  getEmergencyMax(state) {
    return state.emergencyMax;
  },
  getEmergencyPercentSports(state) {
    return state.emergencyPercentSports;
  },
  getEmergencyPercentCasino(state) {
    return state.emergencyPercentCasino;
  },
  getIsConnectedSocket(state) {
    return state.isConnectedSocket;
  },
  getOrangeDialogTab(state) {
    return state.client.orangeDialogTab;
  },
  getBettingHistoryTab(state) {
    return state.client.bettingHistoryTab;
  },
  getReferrer(state) {
    return state.referrer;
  },
  getPowerBallBet(state) {
    return state.PowerBallBet;
  },
  getNtryPLadderBet(state) {
    return state.NtryPLadderBet;
  },
  getNtryKLadderBet(state) {
    return state.NtryKLadderBet;
  },
  getNtrySpeedKenoBet(state) {
    return state.NtrySpeedKenoBet;
  },
  getEOSPowerBall1Bet(state) {
    return state.EOSPowerBall1Bet;
  },
  getEOSPowerBall2Bet(state) {
    return state.EOSPowerBall2Bet;
  },
  getEOSPowerBall3Bet(state) {
    return state.EOSPowerBall3Bet;
  },
  getEOSPowerBall4Bet(state) {
    return state.EOSPowerBall4Bet;
  },
  getEOSPowerBall5Bet(state) {
    return state.EOSPowerBall5Bet;
  },
  getBetEastFootballBet(state) {
    return state.BetEastFootballBet;
  },
  getNamedFX1Bet(state) {
    return state.NamedFX1Bet;
  },
  getNamedFX2Bet(state) {
    return state.NamedFX2Bet;
  },
  getNamedFX3Bet(state) {
    return state.NamedFX3Bet;
  },
  getNamedFX4Bet(state) {
    return state.NamedFX4Bet;
  },
  getNamedFX5Bet(state) {
    return state.NamedFX5Bet;
  },
  getNamedRacingBet(state) {
    return state.NamedRacingBet;
  },
  getNamedPowerBall3Bet(state) {
    return state.NamedPowerBall3Bet;
  },
  getNamedPowerBall5Bet(state) {
    return state.NamedPowerBall5Bet;
  },
  getNamedLadder3Bet(state) {
    return state.NamedLadder3Bet;
  },
  getNamedLadder5Bet(state) {
    return state.NamedLadder5Bet;
  },
  getNamedRedPowerBallBet(state) {
    return state.NamedRedPowerBallBet;
  },
  getNamedRedLadderBet(state) {
    return state.NamedRedLadderBet;
  },
  getSurePowerBall1Bet(state) {
    return state.SurePowerBall1Bet;
  },
  getSurePowerBall2Bet(state) {
    return state.SurePowerBall2Bet;
  },
  getSurePowerBall3Bet(state) {
    return state.SurePowerBall3Bet;
  },
  getSureLadder1Bet(state) {
    return state.SureLadder1Bet;
  },
  getSureLadder2Bet(state) {
    return state.SureLadder2Bet;
  },
  getSureLadder3Bet(state) {
    return state.SureLadder3Bet;
  },
  getSureRacing1Bet(state) {
    return state.SureRacing1Bet;
  },
  getSureRacing2Bet(state) {
    return state.SureRacing2Bet;
  },
  getSureRacing3Bet(state) {
    return state.SureRacing3Bet;
  },
  getCompanionSpeedKenoBet(state) {
    return state.CompanionSpeedKenoBet;
  },
  getCompanionKenoLadderBet(state) {
    return state.CompanionKenoLadderBet;
  },
  getCompanionPowerBallBet(state) {
    return state.CompanionPowerBallBet;
  },
  getCompanionPowerLadderBet(state) {
    return state.CompanionPowerLadderBet;
  },
  getTokenPowerBallBet(state) {
    return state.TokenPowerBallBet;
  },
  getTokenRoulleteBet(state) {
    return state.TokenRoulleteBet;
  },
  getTokenHiloBet(state) {
    return state.TokenHiloBet;
  },
  getTokenHilo5Bet(state) {
    return state.TokenHilo5Bet;
  },
  getTokenGraphBet(state) {
    return state.TokenGraphBet;
  },
  getTokenBaccaratBet(state) {
    return state.TokenBaccaratBet;
  },
  getTokenHorseBet(state) {
    return state.TokenHorseBet;
  },
  getTokenWheelBet(state) {
    return state.TokenWheelBet;
  },
  getTokenRacing3Bet(state) {
    return state.TokenRacing3Bet;
  },
  getTokenRacing4Bet(state) {
    return state.TokenRacing4Bet;
  },
  getLivescorePowerFreeKickBet(state) {
    return state.LivescorePowerFreeKickBet;
  },
  getLivescoreSpeedHomeRunBet(state) {
    return state.LivescoreSpeedHomeRunBet;
  },
  getLivescorePowerSpeedDunkBet(state) {
    return state.LivescorePowerSpeedDunkBet;
  },
  getBubblePowerBallBet(state) {
    return state.BubblePowerBallBet;
  },
  getBubbleLadderBet(state) {
    return state.BubbleLadderBet;
  },
  getBoscoreLadder1Bet(state) {
    return state.BoscoreLadder1Bet;
  },
  getBoscoreLadder2Bet(state) {
    return state.BoscoreLadder2Bet;
  },
  getBoscoreLadder3Bet(state) {
    return state.BoscoreLadder3Bet;
  },
  getBoscorePowerBallBet(state) {
    return state.BoscorePowerBallBet;
  },
  getLotusBaccarat1Bet(state) {
    return state.LotusBaccarat1Bet;
  },
  getLotusEvenOddBet(state) {
    return state.LotusEvenOddBet;
  },
  getMGMBaccarat1Bet(state) {
    return state.MGMBaccarat1Bet;
  },
  getMGMBaccarat2Bet(state) {
    return state.MGMBaccarat2Bet;
  },
  getMGMBaccarat3Bet(state) {
    return state.MGMBaccarat3Bet;
  },
  getMGMEvenOddBet(state) {
    return state.MGMEvenOddBet;
  },
  getMGMGoStopBet(state) {
    return state.MGMGoStopBet;
  },
  getBetGameDiceDuelBet(state) {
    return state.BetGameDiceDuelBet;
  },
  getBetGameWheelBet(state) {
    return state.BetGameWheelBet;
  },
  getBetGameLucky7Bet(state) {
    return state.BetGameLucky7Bet;
  },
  getBetGameLucky6Bet(state) {
    return state.BetGameLucky6Bet;
  },
  getBetGameLucky5Bet(state) {
    return state.BetGameLucky5Bet;
  },
  getBetGameBaccaratBet(state) {
    return state.BetGameBaccaratBet;
  },
  getBetGamePokerBet(state) {
    return state.BetGamePokerBet;
  },
  getBetGameBetBet(state) {
    return state.BetGameBetBet;
  },

  getSportDomain(state) {
    return state.sportDomain;
  },
  getIsNewUser(state) {
    return state.isNewUser;
  },
  getPopupList(state) {
    return state.popupList;
  },
  getIsShowedPopup(state) {
    return state.isShowedPopup;
  },
  getCasinoButtonDisable(state) {
    return state.casinoButtonDisable;
  },
  getTTL(state) {
    return state.timeLeft;
  },
  checkTTL(state) {
    return state.timeLeft <= 60 ? !false : false;
  }, // 로그아웃창 노출하기전 시간 60초
  getYourIp(state) {
    return state.your_ip;
  },
  getIsBlock(state) {
    return state.isBlock;
  },
  getIsMobile(state) {
    return state.isMobile;
  },
  getIsClientCollapsed(state) {
    return state.client.isCollapsed;
  },
  getIsUseDoor(state) {
    return state.client.isUseDoor;
  },
  getSiteChongpanCode(state) {
    return state.client.siteChongpanCode;
  },
  getSiteTitle(state) {
    return state.client.siteTitle;
  },
  getNoteCount(state) {
    return state.client.noteCount;
  },
  getTurnOnSound(state) {
    return state.client.turnOnSound;
  },
  getLoginDialogVisible(state) {
    return state.client.loginDialogVisible;
  },
  getCoinDialogVisible(state) {
    return state.client.coinDialogVisible;
  },
  getPokerDialogVisible(state) {
    return state.client.pokerDialogVisible;
  },
  getSignupDialogVisible(state) {
    return state.client.signupDialogVisible;
  },
  getOrangeDialogVisible(state) {
    return state.client.orangeDialogVisible;
  },
  getRoulleteDialogVisible(state) {
    return state.client.roulleteDialogVisible;
  },
  getProviderDialogVisible(state) {
    return state.client.proivderDialogVisible;
  },
  getEventDialogVisible(state) {
    return state.client.eventDialogVisible;
  },
  getEvent(state) {
    return state.client.selectedEvent;
  },
  getSignUpPopupVisible(state) {
    return state.client.signUpPopupVisible;
  },
  getCasinoDialogInfo(state) {
    return state.client.casinoDialogInfo;
  },
  getTokenDialogInfo(state) {
    return state.client.tokenDialogInfo;
  },
  getLeftSideMenuType(state) {
    return state.client.leftSideMenuType;
  },
  getScreenWidth(state) {
    return state.client.screenWidth;
  },
  getScreenHeight(state) {
    return state.client.screenHeight;
  },
  getMainMenuHeight(state) {
    return state.client.mainMenuHeight;
  },
  getMiniMenuHeight(state) {
    return state.client.miniMenuHeight;
  },
  getShowLeftPanel(state) {
    return state.client.showLeftPanel;
  },
  getShowMiniTab(state) {
    return state.client.showMiniTab;
  },
  getShowRightPanel(state) {
    return state.client.showRightPanel;
  },
  getShowRightPanelYellow4(state) {
    return state.client.showRightPanelYellow4;
  },
  getIsJustShowRightPanel(state) {
    return state.isJustShowRightPanel;
  },
  getShowSportsRule(state) {
    return state.client.showSportsRule;
  },
  getContentMarginTop(state) {
    return state.client.contentMarginTop;
  },
  getContentMarginLeft(state) {
    return state.client.contentMarginLeft;
  },
  getContentMarginRight(state) {
    return state.client.contentMarginRight;
  },
  getCustmerCount(state) {
    return state.customerCount;
  },
  getGameSettings(state) {
    return state.gameSettings;
  },
  getIsShowChatDialog(state) {
    return state.isShowChatDialog;
  },
  getCustmerDelay(state) {
    return state.customerDelay;
  },
  getThemeType(state) {
    return state.themeType;
  },
  getLayoutType(state) {
    return state.layoutType;
  },
  getIsBlackMode(state) {
    return state.isBlackMode;
  },
  getCanChat(state) {
    return state.canChat;
  },
  getSolutionTitle(state) {
    return state.solutionTitle;
  },
  getLowOddsStandard(state) {
    return state.lowOddsStandard;
  },
  getMiniBettingEndText(state) {
    return state.miniBettingEndText;
  },
  getIsUseSignUpPopup(state) {
    return state.isUseSignUpPopup;
  },
  getIsUseAutoAnswer(state) {
    return state.isUseAutoAnswer;
  },
  getNoticeSettings(state) {
    return state.noticeSettings;
  },
  getPayInSettings(state) {
    return state.payInSettings;
  },
  getAdminCode(state) {
    return state.adminCode;
  },
  getPayOutSettings(state) {
    return state.payOutSettings;
  },
  getBlockUserMessage(state) {
    return state.blockUserMessage;
  },
  getBettingHistorySaveTime(state) {
    return state.bettingHistorySaveTime;
  },
  getIsUseQuickQuestion(state) {
    return state.isUseQuickQuestion;
  },
  getBonusRolling(state) {
    return state.bonusRolling;
  },
  getFameSettings(state) {
    return state.fameSettings;
  },
  getIsUseEventSignup(state) {
    return state.isUseEventSignup;
  },
  getIsUseNoteRead(state) {
    return state.isUseNoteRead;
  },
  getAttendance(state) {
    return state.attendance;
  },
  getFriend(state) {
    return state.friend;
  },
  getMiniGameType(state) {
    return state.client.miniGameType;
  },
  getNewNote(state) {
    return state.newNote;
  },
  getIsUseRecaptcha(state) {
    return state.isUseRecaptcha;
  },
  getIsUseLoginRecaptcha(state) {
    return state.isUseLoginRecaptcha;
  },
  getPayInPlus(state) {
    return state.payInPlus;
  },
  getNewUserBonus(state) {
    return state.newUserBonus;
  },
  getIsDivideCasino(state) {
    return state.isDivideCasino;
  },
  getCasinoType(state) {
    return state.casinoType;
  },
  getIsUseChangePass(state) {
    return state.isUseChangePass;
  },
  getIsUseAuth(state) {
    return state.isUseAuth;
  },
  getLoginResult(state) {
    return state.loginResult;
  },
  getRecaptchaValue(state) {
    return state.recaptchaValue;
  },
  getLoginData(state) {
    return state.loginData;
  },
  getSmsData(state) {
    return state.smsData;
  },
  getSmsUserId(state) {
    return state.smsUserId;
  },
  getIsLoginCaptcha(state) {
    return state.isLoginCaptcha;
  },
  getIsSendSMSVerifyCode(state) {
    return state.isSendSMSVerifyCode;
  },
  getIsWeekAttendance(state) {
    return state.isWeekAttendance;
  },
  getAttIsUseAutoMode(state) {
    return state.attIsUseAutoMode;
  },
  getPaybackIsUseAutoMode(state) {
    return state.paybackIsUseAutoMode;
  },
  getRollIsUseAutoMode(state) {
    return state.rollIsUseAutoMode;
  },
  getLostIsUseAutoMode(state) {
    return state.lostIsUseAutoMode;
  },
  getIsAvailCasino(state) {
    return state.isAvailCasino;
  },
  getLoginSideVerify(state) {
    return state.loginSideVerify;
  },
  getLoginSideUserId(state) {
    return state.loginSideUserId;
  },
  getOrangeDialogType(state) {
    return state.client.orangeDialogType;
  },
  getSelectedProvider(state) {
    return state.selectedProvider;
  },
  getIsUseCoupon(state) {
    return state.isUseCoupon;
  },
  getIsUseRolling(state) {
    return state.isUseRolling;
  },
  getIsUseLost(state) {
    return state.isUseLost;
  },
  getIsUsePayback(state) {
    return state.isUsePayback;
  },
  getIsShowRollingMoney(state) {
    return state.isShowRollingMoney;
  },
  getIsShowLostMoney(state) {
    return state.isShowLostMoney;
  },
  getIsShowPaybackMoney(state) {
    return state.isShowPaybackMoney;
  },
  getIsUseNewTracker(state) {
    return state.isUseNewTracker;
  },
  getSportsAPI(state) {
    return state.sportsAPI;
  },
  getTopGameList(state) {
    return state.topGameList;
  },
  getTopLeagueList(state) {
    return state.topLeagueList;
  },
};

function getTokenFromRequest(req) {
  if (!req || !req.headers || !req.headers.cookie) return;
  const jwtCookie = req.headers.cookie
    .split(";")
    .find((c) => c.trim().startsWith(`${cookieName}=`));
  if (!jwtCookie) return;
  return jwtCookie.split("=")[1];
}

export const actions = {
  async refreshToken({ commit, dispatch }, accessToken) {
    if (!accessToken || accessToken === undefined) return;
    /** @author Shadow
     * 가입한 사용자에 대한 인증을 진행하여 토큰을 초기화하고
     * 새 토큰으로부터 유저정보를 다시 얻어 스토어에 보관한다.
     * 토큰의 초기화가 진행된 후 자동적으로 다시 이 액션에
     * 호출이 들어오므로 인증 직후의 콜에 대해서는 무시한다.
     */

    const authService = feathers.service("authentication");
    authService.timeout = 60000;
    return authService
      .create({ strategy: "jwt", accessToken: accessToken })
      .then((response) => {
        commit("disableInitializableTTL");
        commit("auth/SET_USER", response.user);
        commit("auth/SET_ISLOGINED", true);
      })
      .catch(() => {
        return dispatch("auth/logout");
      });
  },
  async nuxtClientInit({ dispatch }) {
    // 사이트 셋팅정보 얻기
    // await storeMyIp(state, commit);

    // 토큰 리프리쉬
    const accessToken = window.localStorage.getItem(cookieName);
    if (accessToken) await dispatch("refreshToken", accessToken);
  },
  async nuxtServerInit({ dispatch }, { req }) {
    const accessToken = process.server
      ? getTokenFromRequest(req)
      : window.localStorage.getItem(cookieName);
    if (accessToken) await dispatch("refreshToken", accessToken);
  },
  setCashButton({ commit }) {
    commit("SET_CASINO_BUTTON_DISABLE", true);
    setTimeout(() => {
      commit("SET_CASINO_BUTTON_DISABLE", false);
    }, 60000);
  },
};
