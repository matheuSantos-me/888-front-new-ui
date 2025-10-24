export function linkImage (filename) {
  return "https://imagedelivery.net/Xmi6bfqtrR1E1t96InFZoQ/" + filename + "/public";
}

export function filterBetType(gameType, betType){
  if (betType == null) return ''
  let strLabel = ''
  if (gameType == "TokenHilo" || gameType == "TokenHilo5") {
      strLabel = betType
      if (betType == 'hi') return '하이'
      if (betType == 'lo') return '로우'
      if (betType == 'red') return 'RED'
      if (betType == 'black') return 'BLACK'
      if (betType == 'twonine') return '3~8'
      if (betType == 'jqka') return 'J,Q,K,A'
      if (betType == 'joker') return 'JOKER'
      strLabel = strLabel.replace("C", "♣")
      strLabel = strLabel.replace("D", "◆")
      strLabel = strLabel.replace("S", "♠")
      strLabel = strLabel.replace("H", "♥")
      strLabel = strLabel.replace("11", "J")
      strLabel = strLabel.replace("12", "Q")
      strLabel = strLabel.replace("13", "K")
      strLabel = strLabel.replace("1", "A")
      return strLabel
  }
  if (gameType == "TokenHorse") {
      strLabel = betType
      if (betType.indexOf("win") > -1) {
          return betType.replace("win", "") + "번"
        } else if (betType.indexOf("oe") > -1) {
          let temp = betType.replace("oe", "")
          return temp == "1" ? "홀" : "짝"
        } else if (betType.indexOf("quinella") > -1) {
          let temp = betType.replace("quinella", "")
          return `${temp[0]}번, ${temp[1]}번`
        } else if (betType.indexOf("exacta") > -1) {
          let temp = betType.replace("exacta", "")
          return `${temp[0]}번, ${temp[1]}번`
        } else if (betType.indexOf("stb") > -1) {
          let temp = betType.replace("stb", "")
          return temp == "1" ? "소" : temp == "2" ? "중" : "대"
        }
        strLabel = strLabel.replace("O", "홀")
        strLabel = strLabel.replace("E", "짝")
        strLabel = strLabel.replace("S", "소")
        strLabel = strLabel.replace("T", "중")
        strLabel = strLabel.replace("B", "대")
      return strLabel
  }
  switch (betType) {
    case 'power-odd': strLabel = '홀'; break;
    case 'power-even': strLabel = '짝'; break;
    case 'power-under': strLabel = '언더'; break;
    case 'power-over': strLabel = '오버'; break;
    case 'normal-odd': strLabel = '홀'; break;
    case 'normal-even': strLabel = '짝'; break;
    case 'normal-under': strLabel = '언더'; break;
    case 'normal-over': strLabel = '오버'; break;
    case 'normal-big': strLabel = '대'; break;
    case 'normal-middle': strLabel = '중'; break;
    case 'normal-small': strLabel = '소'; break;
    case 'power-num-0': strLabel = '0'; break;
    case 'power-num-1': strLabel = '1'; break;
    case 'power-num-2': strLabel = '2'; break;
    case 'power-num-3': strLabel = '3'; break;
    case 'power-num-4': strLabel = '4'; break;
    case 'power-num-5': strLabel = '5'; break;
    case 'power-num-6': strLabel = '6'; break;
    case 'power-num-7': strLabel = '7'; break;
    case 'power-num-8': strLabel = '8'; break;
    case 'power-num-9': strLabel = '9'; break;
    case 'power-odd-over': strLabel = '홀+오버'; break;
    case 'power-odd-under': strLabel = '홀+언더'; break;
    case 'power-even-over': strLabel = '짝+오버'; break;
    case 'power-even-under': strLabel = '짝+언더'; break;
    case 'normal-odd-over': strLabel = '홀+오버'; break;
    case 'normal-odd-under': strLabel = '홀+언더'; break;
    case 'normal-even-over': strLabel = '짝+오버'; break;
    case 'normal-even-under': strLabel = '짝+언더'; break;
    case 'odd-odd': strLabel = '홀+홀'; break;
    case 'odd-even': strLabel = '홀+짝'; break;
    case 'even-odd': strLabel = '짝+홀'; break;
    case 'even-even': strLabel = '짝+짝'; break;
    case 'normal-odd-small': strLabel = '홀+소'; break;
    case 'normal-odd-middle': strLabel = '홀+중'; break;
    case 'normal-odd-big': strLabel = '홀+대'; break;
    case 'normal-even-small': strLabel = '짝+소'; break;
    case 'normal-even-middle': strLabel = '짝+중'; break;
    case 'normal-even-big': strLabel = '짝+대'; break;

    case 'left': strLabel = '좌'; break;
    case 'right': strLabel = '우'; break;
    case 'three': strLabel = '3'; break;
    case 'four': strLabel = '4'; break;
    case 'under': strLabel += '언더'; break;
    case 'over': strLabel += '오버'; break;
    case 'odd': strLabel += '홀'; break;
    case 'even': strLabel += '짝'; break;

    case 'left-three-even': strLabel += '좌+3+짝'; break;
    case 'right-three-odd': strLabel += '우+3+홀'; break;
    case 'left-four-odd': strLabel += '좌+4+홀'; break;
    case 'right-four-even': strLabel += '우+4+짝'; break;

    case 'goal': strLabel += '골인'; break;
    case 'nogoal': strLabel += '노골'; break;
    case 'kicker-left': strLabel += '좌'; break;
    case 'kicker-right': strLabel += '우'; break;
    case 'goalkeeper-left': strLabel += '좌'; break;
    case 'goalkeeper-right': strLabel += '우'; break;
    case 'mix-left-left': strLabel += '좌+좌'; break;
    case 'mix-left-right': strLabel += '좌+우'; break;
    case 'mix-right-left': strLabel += '우+좌'; break;
    case 'mix-right-right': strLabel += '우+우'; break;
    
    case 'buy': strLabel += '매수'; break;
    case 'sell': strLabel += '매도'; break;
    case 'snail1': strLabel += '1번'; break;
    case 'snail2': strLabel += '2번'; break;
    case 'snail3': strLabel += '3번'; break;
    case 'snail4': strLabel += '4번'; break;
    
    case 'player': strLabel += 'PLAYER'; break;
    case 'player-pair': strLabel += 'PLAYER PAIR'; break;
    case 'tie': strLabel += 'TIE'; break;
    case 'banker': strLabel += 'BANKER'; break;
    case 'banker-pair': strLabel += 'BANKER PAIR'; break;

    case 'red': strLabel += '레드'; break;
    case 'black': strLabel += '블랙'; break;
    case 'spade': strLabel += '♠'; break;
    case 'diamond': strLabel += '◆'; break;
    case 'heart': strLabel += '♥'; break;
    case 'club': strLabel += '♣'; break;

    case 'go': strLabel += 'GO'; break;
    case 'stop': strLabel += 'STOP'; break;

    case 'ppair': strLabel = 'PLAYER PAIR'; break;
    case 'bpair': strLabel = 'BANKER PAIR'; break;
    case '0': strLabel = '홀'; break;
    case '1': strLabel = '짝'; break;
    case '2': strLabel = '언더'; break;
    case '3': strLabel = '오버'; break;
    case '4': strLabel = '홀+언더'; break;
    case '5': strLabel = '홀+오버'; break;
    case '6': strLabel = '짝+언더'; break;
    case '7': strLabel = '짝+오버'; break;
    case '8': strLabel = '1번'; break;
    case '9': strLabel = '2번'; break;
    case '10': strLabel = '3번'; break;
    case '11': strLabel = '4번'; break;
  }
  return strLabel
}

export function filterBetGameBetType(gameType, betType){
  betType = parseInt(betType)
  let strLabel = ''
  if (gameType == 'BetGameDiceDuel') {
    switch (betType) {
      case 0: strLabel = '빨간색 주사위 승리'; break;
      case 1: strLabel = '무승부'; break;
      case 2: strLabel = '파란색 주사위 승리'; break;
      case 3: strLabel = '빨간색 주사위 홀수'; break;
      case 4: strLabel = '빨간색 주사위 짝수'; break;
      case 5: strLabel = '파란색 주사위 홀수'; break;
      case 6: strLabel = '파란색 주사위 짝수'; break;
      case 7: strLabel = '두 주사위 총 합이 홀수'; break;
      case 8: strLabel = '두 주사위 총 합이 짝수'; break;
      case 9: strLabel = '빨간색 주사위 3.5 오버'; break;
      case 10: strLabel = '빨간색 주사위 3.5 언더'; break;
      case 11: strLabel = '파란색 주사위 3.5 오버'; break;
      case 12: strLabel = '파란색 주사위 3.5 언더'; break;
      case 13: strLabel = '두 주사위의 총 합이 4.5 오버'; break;
      case 14: strLabel = '두 주사위의 총 합이 4.5 언더'; break;
      case 15: strLabel = '두 주사위의 총 합이 5.5 오버'; break;
      case 16: strLabel = '두 주사위의 총 합이 5.5 언더'; break;
      case 17: strLabel = '두 주사위의 총 합이 6.5 오버'; break;
      case 18: strLabel = '두 주사위의 총 합이 6.5 언더'; break;
      case 19: strLabel = '두 주사위의 총 합이 7.5 오버'; break;
      case 20: strLabel = '두 주사위의 총 합이 7.5 언더'; break;
      case 21: strLabel = '두 주사위의 총 합이 8.5 오버'; break;
      case 22: strLabel = '두 주사위의 총 합이 8.5 언더'; break;
      case 23: strLabel = '두 주사위의 총 합이 9.5 오버'; break;
      case 24: strLabel = '두 주사위의 총 합이 9.5 언더'; break;
    }
  } else if (gameType == 'BetGameWheel') {
    switch (betType) {
      case 0: strLabel = '당첨번호 홀수'; break;
      case 1: strLabel = '당첨번호 짝수'; break;
      case 2: strLabel = '당첨번호 9.5 오버'; break;
      case 3: strLabel = '당첨번호 9.5 언더'; break;
      case 4: strLabel = '당첨번호 (1~6)'; break;
      case 5: strLabel = '당첨번호 (7~12)'; break;
      case 6: strLabel = '당첨번호 (13~18)'; break;
      case 7: strLabel = '당첨결과 - 회색'; break;
      case 8: strLabel = '당첨결과 - 빨간색'; break;
      case 9: strLabel = '당첨결과 - 검정색'; break;
      case 10: strLabel = '당첨결과 - 트로피'; break;
    }
  } else if (gameType == 'BetGameLucky7') {
    switch (betType) {
      case 0: strLabel = '당첨번호 총 합이 홀수'; break;
      case 1: strLabel = '당첨번호 총 합이 짝수'; break;
      case 2: strLabel = '첫번째 당첨번호 홀수'; break;
      case 3: strLabel = '첫번째 당첨번호 짝수'; break;
      case 4: strLabel = '마지막 당첨번호 홀수'; break;
      case 5: strLabel = '마지막 당첨번호 짝수'; break;
      case 6: strLabel = '첫 번째 공이 노란색'; break;
      case 7: strLabel = '첫 번째 공이 검정색'; break;
      case 8: strLabel = '마지막 공이 노란색'; break;
      case 9: strLabel = '마지막 공이 검정색'; break;
      case 10: strLabel = '노란색 공이 더 많을 경우'; break;
      case 11: strLabel = '검정색 공이 더 많을 경우'; break;
      case 12: strLabel = '처음 두개의 공이 같은 색일 경우'; break;
      case 13: strLabel = '처음 두개의 공이 다른 색일 경우'; break;
      case 14: strLabel = '당첨번호 총 합이 100.5 언더'; break;
      case 15: strLabel = '당첨번호 총 합이 200.5 오버'; break;
      case 16: strLabel = '당첨번호 총 합이 125.5 언더'; break;
      case 17: strLabel = '당첨번호 총 합이 125.5 오버'; break;
      case 18: strLabel = '당첨번호 총 합이 150.5 언더'; break;
      case 19: strLabel = '당첨번호 총 합이 150.5 오버'; break;
      case 20: strLabel = '당첨번호 총 합이 175.5 언더'; break;
      case 21: strLabel = '당첨번호 총 합이 175.5 오버'; break;
    }
  } else if (gameType == 'BetGameLucky6') {
    switch (betType) {
      case 0: strLabel = '당첨번호 총 합이 홀수'; break;
      case 1: strLabel = '당첨번호 총 합이 짝수'; break;
      case 2: strLabel = 'A 영역 공의 합이 홀수'; break;
      case 3: strLabel = 'A 영역 공의 합이 짝수'; break;
      case 4: strLabel = 'B 영역 공의 합이 홀수'; break;
      case 5: strLabel = 'B 영역 공의 합이 짝수'; break;
      case 6: strLabel = 'C 영역 공의 합이 홀수'; break;
      case 7: strLabel = 'C 영역 공의 합이 짝수'; break;
      case 8: strLabel = '당첨번호 총 합이 15.5 오버'; break;
      case 9: strLabel = '당첨번호 총 합이 15.5 언더'; break;
      case 10: strLabel = '당첨번호 총 합이 26.5 오버'; break;
      case 11: strLabel = '당첨번호 총 합이 26.5 언더'; break;
      case 12: strLabel = '당첨번호 총 합이 38.5 오버'; break;
      case 13: strLabel = '당첨번호 총 합이 38.5 언더'; break;
      case 14: strLabel = 'A 영역 공의 총 합이 9.5 오버'; break;
      case 15: strLabel = 'A 영역 공의 총 합이 9.5 언더'; break;
      case 16: strLabel = 'B 영역 공의 총 합이 9.5 오버'; break;
      case 17: strLabel = 'B 영역 공의 총 합이 9.5 언더'; break;
      case 18: strLabel = 'C 영역 공의 총 합이 9.5 오버'; break;
      case 19: strLabel = 'C 영역 공의 총 합이 9.5 언더'; break;
    }
  } else if (gameType == 'BetGameLucky5') {
    switch (betType) {
      case 0: strLabel = '당첨번호 총 합이 홀수'; break;
      case 1: strLabel = '당첨번호 총 합이 짝수'; break;
      case 2: strLabel = '당첨번호 총 합이 92.5 오버'; break;
      case 3: strLabel = '당첨번호 총 합이 92.5 언더'; break;
    }
  } else if (gameType == 'BetGameBaccarat') {
    switch (betType) {
      case 0: strLabel = '플레이어(Player)승리'; break;
      case 1: strLabel = '타이(Tie)'; break;
      case 2: strLabel = '뱅커(Banker)승리'; break;
      case 3: strLabel = '플레이어 페어'; break;
      case 4: strLabel = '뱅커 페어'; break;
    }
  } else if (gameType == 'BetGamePoker') {
    switch (betType) {
      case 0: strLabel = '플레이어 1 승리'; break;
      case 1: strLabel = '플레이어 2 승리'; break;
      case 2: strLabel = '플레이어 3 승리'; break;
      case 3: strLabel = '플레이어 4 승리'; break;
      case 4: strLabel = '플레이어 5 승리'; break;
      case 5: strLabel = '플레이어 6 승리'; break;
      case 6: strLabel = '높은카드'; break;
      case 7: strLabel = '원페어'; break;
      case 8: strLabel = '투페어'; break;
      case 9: strLabel = '트리플'; break;
      case 10: strLabel = '스트레이트'; break;
      case 11: strLabel = '플러쉬'; break;
      case 12: strLabel = '풀하우스'; break;
      case 13: strLabel = '포카드'; break;
      case 14: strLabel = '스트레이트 플러쉬'; break;
      case 15: strLabel = '로얄 스트레이트 플러쉬'; break;
    }
  } else if (gameType == 'BetGameBet') {
    switch (betType) {
      case 0: strLabel = '딜러(Dealer)승리'; break;
      case 1: strLabel = '워(War)'; break;
      case 2: strLabel = '플레이어(Player)승리'; break;
    }
  }
  return strLabel
}

export function getGameNameFromType(gameType){
  let strLabel = ''
  switch (gameType) {
    case 'PowerBall': strLabel = '파워볼'; break;
    case 'NtryPLadder': strLabel = '파워사다리'; break;
    case 'NtryKLadder': strLabel = '키노사다리'; break;
    case 'NtrySpeedKeno': strLabel = '스피드키노'; break;
    case 'EOSPowerBall1': strLabel = 'EOS 파워볼 1분'; break;
    case 'EOSPowerBall2': strLabel = 'EOS 파워볼 2분'; break;
    case 'EOSPowerBall3': strLabel = 'EOS 파워볼 3분'; break;
    case 'EOSPowerBall4': strLabel = 'EOS 파워볼 4분'; break;
    case 'EOSPowerBall5': strLabel = 'EOS 파워볼 5분'; break;
    case 'BetEastFootball': strLabel = '벳이스트 축구'; break;
    case 'NamedFX1': strLabel = 'FX 1분'; break;
    case 'NamedFX2': strLabel = 'FX 2분'; break;
    case 'NamedFX3': strLabel = 'FX 3분'; break;
    case 'NamedFX4': strLabel = 'FX 4분'; break;
    case 'NamedFX5': strLabel = 'FX 5분'; break;
    case 'NamedRacing': strLabel = '달팽이 레이싱'; break;
    case 'NamedPowerBall3': strLabel = '네임드 파워볼 3분'; break;
    case 'NamedPowerBall5': strLabel = '네임드 파워볼 5분'; break;
    case 'NamedLadder3': strLabel = '네임드 사다리 3분'; break;
    case 'NamedLadder5': strLabel = '네임드 사다리 5분'; break;
    case 'NamedRedPowerBall': strLabel = '네임드 레드파워볼'; break;
    case 'NamedRedLadder': strLabel = '네임드 레드사다리'; break;
    case 'SurePowerBall1': strLabel = '슈어파워볼 1분'; break;
    case 'SurePowerBall2': strLabel = '슈어파워볼 2분'; break;
    case 'SurePowerBall3': strLabel = '슈어파워볼 3분'; break;
    case 'SureLadder1': strLabel = '슈어사다리 1분'; break;
    case 'SureLadder2': strLabel = '슈어사다리 2분'; break;
    case 'SureLadder3': strLabel = '슈어사다리 3분'; break;
    case 'SureRacing1': strLabel = '슈어레이싱 1분'; break;
    case 'SureRacing2': strLabel = '슈어레이싱 2분'; break;
    case 'SureRacing3': strLabel = '슈어레이싱 3분'; break;
    case 'CompanionSpeedKeno': strLabel = '동행스피드키노'; break;
    case 'CompanionKenoLadder': strLabel = '동행키노사다리'; break;
    case 'CompanionPowerBall': strLabel = '동행스피드키노'; break;
    case 'CompanionPowerLadder': strLabel = '동행키노사다리'; break;
    case 'TokenPowerBall': strLabel = '토큰파워볼'; break;
    case 'TokenRoullete': strLabel = '토큰룰렛'; break;
    case 'TokenHilo': strLabel = '토큰하이로우'; break;
    case 'TokenHilo5': strLabel = '토큰하이로우5'; break;
    case 'TokenGraph': strLabel = '토큰그래프'; break;
    case 'TokenBaccarat': strLabel = '토큰바카라'; break;
    case 'TokenHorse': strLabel = '토큰가상경마'; break;
    case 'TokenWheel': strLabel = '토큰휠'; break;
    case 'TokenRacing3': strLabel = '토큰레이싱3'; break;
    case 'TokenRacing4': strLabel = '토큰레이싱4'; break;
    case 'LivescorePowerFreeKick': strLabel = '파워프리킥'; break;
    case 'LivescoreSpeedHomeRun': strLabel = '스피드홈런'; break;
    case 'LivescorePowerSpeedDunk': strLabel = '파워스피드덩크'; break;
    case 'BubblePowerBall': strLabel = '보글 파워볼'; break;
    case 'BubbleLadder': strLabel = '보글 사다리'; break;
    case 'BoscoreLadder1': strLabel = '1분 별다리'; break;
    case 'BoscoreLadder2': strLabel = '2분 별다리'; break;
    case 'BoscoreLadder3': strLabel = '3분 별다리'; break;
    case 'BoscorePowerBall': strLabel = '1분 파워볼'; break;
    case 'LotusBaccarat1': strLabel = '로투스 바카라1'; break;
    case 'LotusEvenOdd': strLabel = '로투스 홀짝'; break;
    case 'MGMBaccarat1': strLabel = 'MGM 바카라1'; break;
    case 'MGMBaccarat2': strLabel = 'MGM 바카라2'; break;
    case 'MGMBaccarat3': strLabel = 'MGM 바카라3'; break;
    case 'MGMEvenOdd': strLabel = 'MGM 홀짝'; break;
    case 'MGMGoStop': strLabel = 'MGM 고스톱'; break;
    case 'BetGameDiceDuel': strLabel = '벳게임 주사위결투'; break;
    case 'BetGameWheel': strLabel = '벳게임 행운의바퀴'; break;
    case 'BetGameLucky7': strLabel = '벳게임 럭키7'; break;
    case 'BetGameLucky6': strLabel = '벳게임 럭키6'; break;
    case 'BetGameLucky5': strLabel = '벳게임 럭키5'; break;
    case 'BetGameBaccarat': strLabel = '벳게임 바카라'; break;
    case 'BetGamePoker': strLabel = '벳게임 홀덤포커'; break;
    case 'BetGameBet': strLabel = '벳게임 1:1벳'; break;
    case 'CoreCrash': strLabel = '투더문'; break;
    case 'CoreHillo': strLabel = '하이로우'; break;
    case 'CoreDice': strLabel = '다이스'; break;
    case 'CoreMHillo': strLabel = '멀티하이로우'; break;
    case 'CoreMine': strLabel = '지뢰게임'; break;
  }
  return strLabel
}