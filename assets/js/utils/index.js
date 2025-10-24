/**
 * Created by jiachenpan on 16/11/18.
 */

import currencyFormatter from "currency-formatter";
import moment from "moment";
import md5 from "md5";
export function parseTime(time, cFormat) {
  if (arguments.length == 0) {
    return null;
  }
  const format = cFormat || "{y}-{m}-{d} {h}:{i}:{s}";
  let date;
  if (typeof time == "object") {
    date = time;
  } else {
    if (("" + time).length === 10) time = parseInt(time) * 1000;
    date = new Date(time);
  }

  let koreanDate = new Date(
    date.getTime() + date.getTimezoneOffset() * 60000 + 3600000 * 9
  );
  const formatObj = {
    y: koreanDate.getFullYear(),
    m: koreanDate.getMonth() + 1,
    d: koreanDate.getDate(),
    h: koreanDate.getHours(),
    i: koreanDate.getMinutes(),
    s: koreanDate.getSeconds(),
    a: koreanDate.getDay(),
  };
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key];
    if (key === "a")
      return ["一", "二", "三", "四", "五", "六", "日"][value - 1];
    if (result.length > 0 && value < 10) {
      value = "0" + value;
    }
    return value || 0;
  });
  return time_str;
}

export function parseTimeKorean(time, cFormat) {
  if (arguments.length == 0) {
    return null;
  }
  const format = cFormat || "{y}-{m}-{d} {h}:{i}:{s}";
  let date;
  if (typeof time === "object") {
    date = time;
  } else {
    if (("" + time).length == 10) time = parseInt(time) * 1000;
    date = new Date(time);
  }

  let koreanDate = new Date(date.getTime() + date.getTimezoneOffset() * 60000);
  const formatObj = {
    y: koreanDate.getFullYear(),
    m: koreanDate.getMonth() + 1,
    d: koreanDate.getDate(),
    h: koreanDate.getHours(),
    i: koreanDate.getMinutes(),
    s: koreanDate.getSeconds(),
    a: koreanDate.getDay(),
  };

  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key];
    if (key == "a")
      return ["一", "二", "三", "四", "五", "六", "日"][value - 1];
    if (result.length > 0 && value < 10) {
      value = "0" + value;
    }
    return value || 0;
  });
  return time_str;
}

function decimalAdjust(type, value, exp) {
  // If the exp is undefined or zero...
  if (typeof exp == "undefined" || +exp == 0) {
    return Math[type](value);
  }
  value = +value;
  exp = +exp;
  // If the value is not a number or the exp is not an integer...
  if (isNaN(value) || !(typeof exp === "number" && exp % 1 === 0)) {
    return NaN;
  }
  // Shift
  value = value.toString().split("e");
  value = Math[type](+(value[0] + "e" + (value[1] ? +value[1] - exp : -exp)));
  // Shift back
  value = value.toString().split("e");
  return +(value[0] + "e" + (value[1] ? +value[1] + exp : exp));
}

export function round10(value, exp) {
  return decimalAdjust("round", value, exp);
}

export function filterCurrency(src) {
  var strSrc = src + "",
    result = "";
  var strPrefix = strSrc.split(".")[0];
  var strSuffix = strSrc.split(".")[1] || "";
  if (strSuffix !== "") strSuffix = "." + strSuffix;
  for (var i = strPrefix.length - 1; i >= 0; i--) {
    result = strPrefix.charAt(i) + result;
    if (
      i !== strPrefix.length - 1 &&
      (strPrefix.length - i) % 3 === 0 &&
      i !== 0
    )
      result = "," + result;
  }
  return result + strSuffix;
}

export function currencyFormat(
  src,
  symbol = "",
  precision = 0,
  formatType = 0
) {
  if (src == null || src == undefined) return 0;
  let strSrc = src.toString();
  strSrc = String(strSrc).replace(/,/gi, "");

  var formatString = "%v %s";
  if (formatType === 1) formatString = "%s %v";
  return currencyFormatter.format(parseFloat(strSrc.split(".")[0]), {
    symbol: symbol,
    decimal: ".",
    thousand: ",",
    precision: precision,
    format: formatString, // %s is the symbol and %v is the value
  });
}

export function cleanArray(actual) {
  const newArray = [];
  for (let i = 0; i < actual.length; i++) {
    if (actual[i]) {
      newArray.push(actual[i]);
    }
  }
  return newArray;
}

export function param(json) {
  if (!json) return "";
  return cleanArray(
    Object.keys(json).map((key) => {
      if (json[key] === undefined) return "";
      return encodeURIComponent(key) + "=" + encodeURIComponent(json[key]);
    })
  ).join("&");
}

export function param2Obj(url) {
  const search = url.split("?")[1];
  if (!search) {
    return {};
  }
  return JSON.parse(
    '{"' +
      decodeURIComponent(search)
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"') +
      '"}'
  );
}

export function scrollTo(element, to, duration) {
  if (duration <= 0) return;
  const difference = to - element.scrollTop;
  const perTick = (difference / duration) * 10;
  setTimeout(() => {
    element.scrollTop = element.scrollTop + perTick;
    if (element.scrollTop === to) return;
    scrollTo(element, to, duration - 10);
  }, 10);
}

export function getTime(type) {
  if (type === "start") {
    return new Date().getTime() - 3600 * 1000 * 24 * 90;
  } else {
    return new Date(new Date().toDateString());
  }
}

export function processUserOdds(odds, settingOdds) {
  if (settingOdds == 0) return toFixedDown(odds);
  else {
    let fixOdds = toFixedDown(odds);
    fixOdds = toFixedDown(fixOdds + (fixOdds / 100) * settingOdds);
    if (fixOdds < 1) fixOdds = 1;
    return fixOdds;
  }
}

export function filterOdds(odds) {
  let strOdds = String(odds);
  let index = strOdds.indexOf(".");
  if (index > -1) {
    let strLast = strOdds.substring(index + 1, strOdds.length);
    if (strLast.length >= 2) {
      return strOdds.substring(0, index + 3);
    } else {
      return strOdds + "0";
    }
  } else {
    return strOdds + ".00";
  }
}

export function mapOrder(array, order, key) {
  array.sort(function (a, b) {
    var A = a[key],
      B = b[key];

    if (order.indexOf(A) > order.indexOf(B)) {
      return 1;
    } else {
      return -1;
    }
  });

  return array;
}

export function checkBetLogsStatus(bets, marketId) {
  let status = 0;
  if (marketId == 0) {
    //크로스마켓상태 필터

    // 모든 배트상태가 취소이면 취소상태
    if (bets.every((bet) => bet.Settlement == -1)) {
      status = -1;
    }
    //하나라도 베트상태 진행중이면 진행상태.
    if (bets.some((bet) => bet.Settlement == 0)) {
      status = 0;
    }
    //하나라도 베트상태 낙첨이면 낙첨상태.
    if (bets.some((bet) => bet.Settlement == 1)) {
      status = 1;
    }
    //모든 베트상태가 당첨이면 당첨상태.
    if (bets.every((bet) => bet.Settlement == 2)) {
      status = 2;
    }
    //모든 베트상태가 적특이면 적특상태.
    if (bets.every((bet) => bet.Settlement == 3)) {
      status = 3;
    }
    //하나라도배트상태가 절반낙첨이면 절반낙첨
    if (bets.every((bet) => bet.Settlement == 4)) {
      status = 4;
    }
    //모든 베트상태가 절반당첨이면 절반당첨
    if (bets.every((bet) => bet.Settlement == 5)) {
      status = 5;
    }
    if (bets.every((bet) => bet.Settlement == 6)) {
      status = 6;
    }
  } else {
    //일반마켓상태 필터
    status = bets[0].Settlement;
  }
  return status;
}

export function toFixedDown(num) {
  var with2Decimals = num.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0];
  return parseFloat(with2Decimals);
}

export function convertToKorean(leagueName) {
  if (leagueName === "World Cup") {
    return "월드컵";
  } else if (leagueName === "Euro Cup") {
    return "유로컵";
  } else if (leagueName === "Premiership") {
    return "프리미어쉽";
  } else if (leagueName === "Superleague") {
    return "슈퍼리그";
  } else if (leagueName === "Goldenhill Park") {
    return "골든힐 파크";
  } else if (leagueName === "Hillside Park") {
    return "힐사이드";
  } else if (leagueName === "Victoria Park") {
    return "빅토리아 파크";
  } else if (leagueName === "Britannia Way") {
    return "브리타니아 웨이";
  } else if (leagueName === "Festival Downs") {
    return "페스티발 다운그";
  } else if (leagueName === "Baker Gardens") {
    return "베이커 가든스";
  } else if (leagueName === "Waterport Arena") {
    return "워터포트 아레나";
  } else if (leagueName === "Aintree Park") {
    return "아인트리 파크";
  } else if (leagueName === "Brandon Field") {
    return "브랜든 필드";
  } else if (leagueName === "North Stadium") {
    return "노스 스타디움";
  }
}

export function convertToKoreanTime(time) {
  let tempTime = new Date(time);
  let koreanTime = new Date(
    tempTime.getTime() + tempTime.getTimezoneOffset() * 60000 + 3600000 * 9
  );

  return koreanTime;
}

export function getMidnightKoreanTime() {
  const now = new Date();
  let midNightTime = this.convertToKoreanTime(now);
  midNightTime.setHours(0, 0, 0, 0);
  midNightTime.setDate(midNightTime.getDate() + 1);
  return midNightTime;
}

export function getCurrentTime(type) {
  let offset = moment().utcOffset();
  let nowTime = moment()
    .subtract(offset, "minutes")
    .add(540, "minutes")
    .format("HH:mm:ss");
  if (type === 0) {
    nowTime = "GMT+9 " + nowTime;
  }
  return nowTime;
}

export function setSidePanel(screenWidth, path, themeType) {
  if (
    themeType == "yellow17" ||
    themeType == "blue19" ||
    themeType == "blue11"
  ) {
    if (
      path == "Sports" ||
      path == "LiveSports" ||
      path === "Mini-PowerBall" ||
      path === "Mini-BetEast" ||
      path === "Mini-BoscoreLadder1" ||
      path === "Mini-BoscoreLadder2" ||
      path === "Mini-BoscoreLadder3" ||
      path === "Mini-BoscorePowerBall" ||
      path === "Mini-BubbleLadder" ||
      path === "Mini-BubblePowerBall" ||
      path === "Mini-Crash" ||
      path === "Mini-Dice" ||
      path === "Mini-Hillo" ||
      path === "Mini-EOSPowerBall1" ||
      path === "Mini-EOSPowerBall2" ||
      path === "Mini-EOSPowerBall3" ||
      path === "Mini-EOSPowerBall4" ||
      path === "Mini-EOSPowerBall5" ||
      path === "Mini-Fx" ||
      path === "Mini-KenoLadder" ||
      path === "Mini-LivescorePowerFreeKick" ||
      path === "Mini-LivescorePowerSpeedDunk" ||
      path === "Mini-LivescoreSpeedHomeRun" ||
      path === "Mini-NamedFX1" ||
      path === "Mini-NamedFX2" ||
      path === "Mini-NamedFX3" ||
      path === "Mini-NamedFX4" ||
      path === "Mini-NamedFX5" ||
      path === "Mini-NamedRacing" ||
      path === "Mini-NamedPowerBall3" ||
      path === "Mini-NamedPowerBall5" ||
      path === "Mini-NamedLadder3" ||
      path === "Mini-NamedLadder5" ||
      path === "Mini-NamedRedPowerBall" ||
      path === "Mini-NamedRedLadder" ||
      path === "Mini-SurePowerBall1" ||
      path === "Mini-SurePowerBall2" ||
      path === "Mini-SurePowerBall3" ||
      path === "Mini-SureLadder1" ||
      path === "Mini-SureLadder2" ||
      path === "Mini-SureLadder3" ||
      path === "Mini-SureRacing1" ||
      path === "Mini-SureRacing2" ||
      path === "Mini-SureRacing3" ||
      path === "Mini-CompanionSpeedKeno" ||
      path === "Mini-CompanionKenoLadder" ||
      path === "Mini-CompanionPowerBall" ||
      path === "Mini-CompanionPowerLadder" ||
      path === "Mini-TokenPowerBall" ||
      path === "Mini-TokenRoullete" ||
      path === "Mini-TokenHilo" ||
      path === "Mini-TokenHilo5" ||
      path === "Mini-TokenGraph" ||
      path === "Mini-TokenBaccarat" ||
      path === "Mini-TokenHorse" ||
      path === "Mini-TokenWheel" ||
      path === "Mini-TokenRacing3" ||
      path === "Mini-TokenRacing4" ||
      path === "Mini-PowerLadder" ||
      path === "Mini-SpeedKeno" ||
      path === "VirtualSports-Basketball" ||
      path === "VirtualSports-Dog" ||
      path === "VirtualSports-Football" ||
      path === "VirtualSports-Horse" ||
      path === "VirtualSports-Baseball"
    ) {
      if (this.screenWidth < 1080) {
        this.$store.commit("SET_SHOWRIGHTPANEL", false);
        this.$store.commit("SET_SHOWLEFTPANEL", false);
      } else {
        this.$store.commit("SET_SHOWRIGHTPANEL", true);
      }
    } else {
      if (this.screenWidth < 1080) {
        this.$store.commit("SET_SHOWLEFTPANEL", false);
      }
      this.$store.commit("SET_SHOWRIGHTPANEL", false);
    }
    return;
  }
  if (
    screenWidth >= 1860 ||
    (path !== "Sports" &&
      path !== "LiveSports" &&
      screenWidth > 1280 &&
      screenWidth <= 1440) ||
    ((path === "Sports" || path === "LiveSports") &&
      screenWidth > 1280 &&
      screenWidth < 1600)
  ) {
    return;
  }
  if (this.screenWidth < 1080) {
    this.$store.commit("SET_SHOWRIGHTPANEL", false);
    this.$store.commit("SET_SHOWLEFTPANEL", false);
  }
}

export function getHash() {
  let time = new Date().getTime();
  let message = "wjdakfgoqhwksltime=" + time;
  let param = message + process.env.key + "whdrkssktorlemfdk";
  let hash = md5(param);
  return {
    time: time,
    token: hash,
  };
}

export function getImagePath() {
  return process.env.imagePath;
}

export function getMiniAddress(gameSettings, themeType) {
  if (themeType == "purple12") {
    if (gameSettings?.Mini.boscore) {
      if (gameSettings.BoscoreLadder1.isVisible) return "/Mini/BoscoreLadder1";
      if (gameSettings.BoscoreLadder2.isVisible) return "/Mini/BoscoreLadder2";
      if (gameSettings.BoscoreLadder3.isVisible) return "/Mini/BoscoreLadder3";
      if (gameSettings.BoscorePowerBall.isVisible)
        return "/Mini/BoscorePowerBall";
    }
  }
  if (gameSettings?.Mini.ntry) {
    if (gameSettings.PowerBall.isVisible) return "/Mini/PowerBall";
    if (gameSettings.NtryPLadder.isVisible) return "/Mini/PowerLadder";
    if (gameSettings.NtryKLadder.isVisible) return "/Mini/KenoLadder";
    if (gameSettings.NtrySpeedKeno.isVisible) return "/Mini/SpeedKeno";
    if (gameSettings.EOSPowerBall1.isVisible) return "/Mini/EOSPowerBall1";
    if (gameSettings.EOSPowerBall2.isVisible) return "/Mini/EOSPowerBall2";
    if (gameSettings.EOSPowerBall3.isVisible) return "/Mini/EOSPowerBall3";
    if (gameSettings.EOSPowerBall4.isVisible) return "/Mini/EOSPowerBall4";
    if (gameSettings.EOSPowerBall5.isVisible) return "/Mini/EOSPowerBall5";
  }
  if (themeType != "purple12") {
    if (gameSettings?.Mini.boscore) {
      if (gameSettings.BoscoreLadder1.isVisible) return "/Mini/BoscoreLadder1";
      if (gameSettings.BoscoreLadder2.isVisible) return "/Mini/BoscoreLadder2";
      if (gameSettings.BoscoreLadder3.isVisible) return "/Mini/BoscoreLadder3";
      if (gameSettings.BoscorePowerBall.isVisible)
        return "/Mini/BoscorePowerBall";
    }
  }
  if (gameSettings?.Mini.lotus) {
    if (gameSettings.LotusBaccarat1.isVisible) return "/Lotus/Baccarat1";
    if (gameSettings.LotusEvenOdd.isVisible) return "/Lotus/EvenOdd";
  }
  if (gameSettings?.Mini.mgm) {
    if (gameSettings.MGMBaccarat1.isVisible) return "/MGM/MGMBaccarat1";
    if (gameSettings.MGMBaccarat2.isVisible) return "/MGM/MGMBaccarat2";
    if (gameSettings.MGMBaccarat3.isVisible) return "/MGM/MGMBaccarat3";
    if (gameSettings.MGMEvenOdd.isVisible) return "/MGM/MGMEvenOdd";
    if (gameSettings.MGMGoStop.isVisible) return "/MGM/MGMGoStop";
  }
  if (gameSettings?.Mini.livescore) {
    if (gameSettings.LivescorePowerFreeKick.isVisible)
      return "/Mini/LivescorePowerFreeKick";
    if (gameSettings.LivescoreSpeedHomeRun.isVisible)
      return "/Mini/LivescoreSpeedHomeRun";
    if (gameSettings.LivescorePowerSpeedDunk.isVisible)
      return "/Mini/LivescorePowerSpeedDunk";
  }
  if (gameSettings?.Mini.named) {
    if (gameSettings.NamedRacing.isVisible) return "/Mini/NamedRacing";
    if (gameSettings.NamedPowerBall3.isVisible) return "/Mini/NamedPowerBall3";
    if (gameSettings.NamedPowerBall5.isVisible) return "/Mini/NamedPowerBall5";
    if (gameSettings.NamedLadder3.isVisible) return "/Mini/NamedLadder3";
    if (gameSettings.NamedLadder5.isVisible) return "/Mini/NamedLadder5";
    if (gameSettings.NamedRedPowerBall.isVisible)
      return "/Mini/NamedRedPowerBall";
    if (gameSettings.NamedRedLadder.isVisible) return "/Mini/NamedRedLadder";
  }
  if (gameSettings?.Mini.sureman) {
    if (gameSettings.SurePowerBall1.isVisible) return "/Mini/SurePowerBall1";
    if (gameSettings.SurePowerBall2.isVisible) return "/Mini/SurePowerBall2";
    if (gameSettings.SurePowerBall3.isVisible) return "/Mini/SurePowerBall3";
    if (gameSettings.SureLadder1.isVisible) return "/Mini/SureLadder1";
    if (gameSettings.SureLadder2.isVisible) return "/Mini/SureLadder2";
    if (gameSettings.SureLadder3.isVisible) return "/Mini/SureLadder3";
    if (gameSettings.SureRacing1.isVisible) return "/Mini/SureRacing1";
    if (gameSettings.SureRacing2.isVisible) return "/Mini/SureRacing2";
    if (gameSettings.SureRacing3.isVisible) return "/Mini/SureRacing3";
  }
  if (gameSettings?.Mini.companion) {
    if (gameSettings.CompanionSpeedKeno.isVisible)
      return "/Mini/CompanionSpeedKeno";
    if (gameSettings.CompanionKenoLadder.isVisible)
      return "/Mini/CompanionKenoLadder";
    if (gameSettings.CompanionPowerBall.isVisible)
      return "/Mini/CompanionPowerBall";
    if (gameSettings.CompanionPowerLadder.isVisible)
      return "/Mini/CompanionPowerLadder";
  }
  if (gameSettings?.Mini.token) {
    if (gameSettings.TokenPowerBall.isVisible) return "/Mini/TokenPowerBall";
    if (gameSettings.TokenRoullete.isVisible) return "/Mini/TokenRoullete";
    if (gameSettings.TokenHilo.isVisible) return "/Mini/TokenHilo";
    if (gameSettings.TokenHilo5.isVisible) return "/Mini/TokenHilo5";
    if (gameSettings.TokenGraph.isVisible) return "/Mini/TokenGraph";
    if (gameSettings.TokenBaccarat.isVisible) return "/Mini/TokenBaccarat";
    if (gameSettings.TokenHorse.isVisible) return "/Mini/TokenHorse";
    if (gameSettings.TokenWheel.isVisible) return "/Mini/TokenWheel";
    if (gameSettings.TokenRacing3.isVisible) return "/Mini/TokenRacing3";
    if (gameSettings.TokenRacing4.isVisible) return "/Mini/TokenRacing4";
  }
  if (gameSettings?.Mini.sportcore) {
    if (gameSettings.CoreHillo.isVisible) return "/Mini/Hillo";
    if (gameSettings.CoreDice.isVisible) return "/Mini/Dice";
    if (gameSettings.CoreCrash.isVisible) return "/Mini/Crash";
    if (gameSettings.CoreMHillo.isVisible) return "/Mini/MHillo";
    if (gameSettings.CoreMine.isVisible) return "/Mini/Mine";
  }
  if (gameSettings?.Mini.bubble) {
    if (gameSettings.BubblePowerBall.isVisible) return "/Mini/BubblePowerBall";
    if (gameSettings.BubbleLadder.isVisible) return "/Mini/BubbleLadder";
  }
}
