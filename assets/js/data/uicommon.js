// 배팅로그상태로 부터 클래스명 얻기
export function statusClassObject(status, themeType) {
  if (themeType == 'orange12' || themeType == 'yellow20' || themeType == 'blue13' || themeType == 'yellow11' || themeType == 'yellow18' || themeType == 'yellow21' || themeType == 'yellow16' || themeType == 'yellow17' || themeType == 'blue19' || themeType == 'blue11' || themeType == 'blue18' || themeType == 'yellow15') {
    if (status == 0) return 'status-wait-orange12'
    else if (status == 1 || status == -1) return 'status-lose-orange12'
    else if (status == 2) return 'status-win-orange12'
    else return 'status-cancel-orange12'
  } else {
    if (status == 0) return 'status-wait text-white'
    else if (status == 1 || status == -1) return 'status-lose text-white'
    else if (status == 2) return 'status-win text-white'
    else return 'status-cancel text-white'
  }
}

export function statusClassObjectGrey(status) {
  if (status == 0) return 'label-inverse'
  else if (status == 1 || status == -1) return 'label-danger'
  else if (status == 2) return 'label-primary'
  else return 'status-cancel'
}

// 배팅로그상태로 부터 클래스명 얻기
export function statusCustomerClassObject(status, themeType) {
  if (
    themeType == 'orange12' || 
    themeType == 'yellow20' || 
    themeType == 'blue13' || 
    themeType == 'gold13' || 
    themeType == 'yellow11' || 
    themeType == 'yellow14' || 
    themeType == 'yellow18' || 
    themeType == 'yellow21' || 
    themeType == 'yellow16' || 
    themeType == 'yellow17' || 
    themeType == 'blue19' || 
    themeType == 'blue11' || 
    themeType == 'blue18' || 
    themeType == 'yellow15') {
    return status ? 'status-win-orange12' : 'status-wait-orange12'
  } else {
    return status ? 'status-yes' :'status-no'
  }
}

// 배팅타입으로 부터 클래스명 얻기
export function betTypeClassObject(betType) {
  let className = '';
  switch (betType) {
    case 'power-odd': className = 'bet-type-odd'; break;
    case 'power-even': className = 'bet-type-even'; break;
    case 'power-under': className = 'bet-type-under'; break;
    case 'power-over': className = 'bet-type-over'; break;
    case 'normal-odd': className = 'bet-type-odd'; break;
    case 'normal-even': className = 'bet-type-even'; break;
    case 'normal-under': className = 'bet-type-under'; break;
    case 'normal-over': className = 'bet-type-over'; break;
    case 'normal-big': className = 'bet-type-big'; break;
    case 'normal-middle': className = 'bet-type-middle'; break;
    case 'normal-small': className = 'bet-type-small'; break;
    case 'power-num-0': className = 'bet-type-blue'; break;
    case 'power-num-1': className = 'bet-type-blue'; break;
    case 'power-num-2': className = 'bet-type-blue'; break;
    case 'power-num-3': className = 'bet-type-blue'; break;
    case 'power-num-4': className = 'bet-type-blue'; break;
    case 'power-num-5': className = 'bet-type-blue'; break;
    case 'power-num-6': className = 'bet-type-blue'; break;
    case 'power-num-7': className = 'bet-type-blue'; break;
    case 'power-num-8': className = 'bet-type-blue'; break;
    case 'power-num-9': className = 'bet-type-blue'; break;
    case 'power-odd-over': className = 'bet-type-blue'; break;
    case 'power-odd-under': className = 'bet-type-blue'; break;
    case 'power-even-over': className = 'bet-type-red'; break;
    case 'power-even-under': className = 'bet-type-red'; break;
    case 'normal-odd-over': className = 'bet-type-blue'; break;
    case 'normal-odd-under': className = 'bet-type-blue'; break;
    case 'normal-even-over': className = 'bet-type-red'; break;
    case 'normal-even-under': className = 'bet-type-red'; break;
    case 'odd-odd': className = 'bet-type-blue'; break;
    case 'odd-even': className = 'bet-type-blue'; break;
    case 'even-odd': className = 'bet-type-red'; break;
    case 'even-even': className = 'bet-type-red'; break;
    case 'normal-odd-small': className = 'bet-type-blue'; break;
    case 'normal-odd-middle': className = 'bet-type-blue'; break;
    case 'normal-odd-big': className = 'bet-type-blue'; break;
    case 'normal-even-small': className = 'bet-type-red'; break;
    case 'normal-even-middle': className = 'bet-type-red'; break;
    case 'normal-even-big': className = 'bet-type-red'; break;

    case 'under': className += 'bet-type-under'; break;
    case 'over': className += 'bet-type-over'; break;
    case 'left': className += 'bet-type-odd'; break;
    case 'right': className += 'bet-type-even'; break;
    case 'three': className += 'bet-type-three'; break;
    case 'four': className += 'bet-type-four'; break;
    case 'odd': className += 'bet-type-odd'; break;
    case 'even': className += 'bet-type-even'; break;
    
    case 'left-three-even': className += 'bet-type-blue'; break;
    case 'right-three-odd': className += 'bet-type-red'; break;
    case 'left-four-odd': className += 'bet-type-blue'; break;
    case 'right-four-even': className += 'bet-type-red'; break;

    case 'goal': className += 'bet-type-goal'; break;
    case 'nogoal': className += 'bet-type-nogoal'; break;
    case 'kicker-left': className += 'bet-type-odd'; break;
    case 'kicker-right': className += 'bet-type-even'; break;
    case 'goalkeeper-left': className += 'bet-type-odd'; break;
    case 'goalkeeper-right': className += 'bet-type-even'; break;
    case 'mix-left-left': className += 'bet-type-blue'; break;
    case 'mix-left-right': className += 'bet-type-blue'; break;
    case 'mix-right-left': className += 'bet-type-red'; break;
    case 'mix-right-right': className += 'bet-type-red'; break;

    case 'buy': className = 'bet-type-red'; break;
    case 'sell': className = 'bet-type-blue'; break;
    case 'snail1': className = 'bet-type-blue'; break;
    case 'snail2': className = 'bet-type-red'; break;
    case 'snail3': className = 'bet-type-blue'; break;
    case 'snail4': className = 'bet-type-red'; break;
  }
  return className
}

export function betTypeClassObjectGrey(betType) {
  let className = '';
  switch (betType) {
    case 'power-odd':           className = 'lottery-item ball blue p-0 p-t-5'; break;
    case 'power-even':          className = 'lottery-item ball red p-0 p-t-5'; break;
    case 'power-under':         className = 'label label-blue-agero f-w-100'; break;
    case 'power-over':          className = 'label label-red-agero f-w-100'; break;
    case 'normal-odd':          className = 'lottery-item ball blue p-0 p-t-5'; break;
    case 'normal-even':         className = 'lottery-item ball red p-0 p-t-5'; break;
    case 'normal-under':        className = 'label label-blue-agero f-w-100'; break;
    case 'normal-over':         className = 'label label-red-agero f-w-100'; break;
    case 'normal-big':          className = 'lottery-item ball blue p-0 p-t-5'; break;
    case 'normal-middle':       className = 'bet-type-middle'; break;
    case 'normal-small':        className = 'lottery-item ball red p-0 p-t-5'; break;
    case 'power-num-0':         className = 'f-w-100 text-primary'; break;
    case 'power-num-1':         className = 'f-w-100 text-primary'; break;
    case 'power-num-2':         className = 'f-w-100 text-primary'; break;
    case 'power-num-3':         className = 'f-w-100 text-primary'; break;
    case 'power-num-4':         className = 'f-w-100 text-primary'; break;
    case 'power-num-5':         className = 'f-w-100 text-primary'; break;
    case 'power-num-6':         className = 'f-w-100 text-primary'; break;
    case 'power-num-7':         className = 'f-w-100 text-primary'; break;
    case 'power-num-8':         className = 'f-w-100 text-primary'; break;
    case 'power-num-9':         className = 'f-w-100 text-primary'; break;
    case 'power-odd-over':      className = 'f-w-100 text-primary'; break;
    case 'power-odd-under':     className = 'f-w-100 text-primary'; break;
    case 'power-even-over':     className = 'f-w-100 text-primary'; break;
    case 'power-even-under':    className = 'f-w-100 text-primary'; break;
    case 'normal-odd-over':     className = 'f-w-100 text-primary'; break;
    case 'normal-odd-under':    className = 'f-w-100 text-primary'; break;
    case 'normal-even-over':    className = 'f-w-100 text-primary'; break;
    case 'normal-even-under':   className = 'f-w-100 text-primary'; break;
    case 'odd-odd':             className = 'f-w-100 text-primary'; break;
    case 'odd-even':            className = 'f-w-100 text-primary'; break;
    case 'even-odd':            className = 'f-w-100 text-primary'; break;
    case 'even-even':           className = 'f-w-100 text-primary'; break;
    case 'normal-odd-small':    className = 'f-w-100 text-primary'; break;
    case 'normal-odd-middle':   className = 'f-w-100 text-primary'; break;
    case 'normal-odd-big':      className = 'f-w-100 text-primary'; break;
    case 'normal-even-small':   className = 'f-w-100 text-primary'; break;
    case 'normal-even-middle':  className = 'f-w-100 text-primary'; break;
    case 'normal-even-big':     className = 'f-w-100 text-primary'; break;

    case 'under':               className += 'label label-blue-agero f-w-100'; break;
    case 'over':                className += 'label label-red-agero f-w-100'; break;
    case 'left':                className += 'lottery-item ball blue p-0 p-t-5'; break;
    case 'right':               className += 'lottery-item ball red p-0 p-t-5'; break;
    case 'three':               className += 'f-w-100 text-primary'; break;
    case 'four':                className += 'f-w-100 text-primary'; break;
    case 'odd':                 className += 'lottery-item ball blue p-0 p-t-5'; break;
    case 'even':                className += 'lottery-item ball red p-0 p-t-5'; break;
    
    case 'left-three-even':     className += 'bet-type-blue'; break;
    case 'right-three-odd':     className += 'bet-type-red'; break;
    case 'left-four-odd':       className += 'bet-type-blue'; break;
    case 'right-four-even':     className += 'bet-type-red'; break;

    case 'goal':                className += 'bet-type-goal'; break;
    case 'nogoal':              className += 'bet-type-nogoal'; break;
    case 'kicker-left':         className += 'bet-type-odd'; break;
    case 'kicker-right':        className += 'bet-type-even'; break;
    case 'goalkeeper-left':     className += 'bet-type-odd'; break;
    case 'goalkeeper-right':    className += 'bet-type-even'; break;
    case 'mix-left-left':       className += 'bet-type-blue'; break;
    case 'mix-left-right':      className += 'bet-type-blue'; break;
    case 'mix-right-left':      className += 'bet-type-red'; break;
    case 'mix-right-right':     className += 'bet-type-red'; break;

    case 'buy':                 className = 'bet-type-red'; break;
    case 'sell':                className = 'bet-type-blue'; break;
    case 'snail1':              className = 'bet-type-blue'; break;
    case 'snail2':              className = 'bet-type-red'; break;
    case 'snail3':              className = 'bet-type-blue'; break;
    case 'snail4':              className = 'bet-type-red'; break;
  }
  return className
}

export function getTextColor(themeType, type) {
  if (themeType == "orange11"){
    return type == 2 ? 'text-white' : 'text-orange11'
  } else if (themeType == "orange12"){
    return type == 2 ? 'text-white' : 'text-orange12'
  } else if (themeType == "orange13"){
    return type == 2 ? 'text-white' : 'text-orange13'
  } else if (themeType == "purple11"){
    return type == 2 ? 'text-white' : 'text-purple11'
  } else if (themeType == "red13"){
    return type == 2 ? 'text-white' : 'text-red13'
  } else if (themeType == "blue12"){
    return type == 2 ? 'text-white' : 'text-blue12'
  } else if (themeType == "yellow19"){
    return type == 2 ? 'text-black' : 'text-yellow19'
  } else if (themeType == "purple12"){
    return type == 2 ? 'text-white' : 'text-purple12'
  } else if (themeType == "green"){
    return type == 2 ? 'text-black' : 'text-green'
  } else if (themeType == "blue14") {
    return type == 2 ? 'text-black' : 'text-yellow901'
  } else if (themeType == "blue16") {
    return type == 2 ? 'text-white' : 'text-blue16'
  } else if (themeType == "gold12") {
    return type == 2 ? 'text-black' : 'text-gold12'
  } else if (themeType == "blue17") {
    return type == 2 ? 'text-white' : 'text-blue17'
  } else if (themeType == "yellow17") {
    return type == 2 ? 'text-white' : 'text-yellow17'
  } else if (themeType == "blue19") {
    return type == 2 ? 'text-white' : 'text-blue19'
  } else if (themeType == "blue11") {
    return type == 2 ? 'text-white' : 'text-blue11'
  } else if (themeType == "yellow13") {
    if ( type == 2) {
      return 'text-black'
    } else if (type == 1) {
      return 'text-yellow13-1'
    } else {
      return 'text-yellow'
    }
  } else if (themeType == 'red15') {
    return type == 2 ? 'text-white' : 'text-red15'
  } else if (themeType == 'yellow20') {
    return type == 2 ? 'text-black' : 'text-yellow20'
  } else if (themeType == 'blue13') {
    return type == 2 ? 'text-black' : 'text-blue13'
  } else if (themeType == 'gold13') {
    return type == 2 ? 'text-black' : 'text-gold13'
  } else if (themeType == 'yellow11') {
    return type == 2 ? 'text-black' : 'text-yellow11'
  } else if (themeType == 'yellow14') {
    return type == 2 ? 'text-black' : 'text-yellow14'
  } else if (themeType == 'yellow18') {
    return type == 2 ? 'text-black' : 'text-yellow18'
  } else if (themeType == 'yellow21') {
    return type == 2 ? 'text-black' : 'text-yellow21'
  } else if (themeType == 'yellow16') {
    return type == 2 ? 'text-black' : 'text-yellow16'
  } else if (themeType == 'blue18') {
    return type == 2 ? 'text-black' : 'text-blue18'
  } else if (themeType == 'yellow15') {
    return type == 2 ? 'text-black' : 'text-yellow15'
  } else if (themeType == 'white') {
    return 'text-black'
  } else if (themeType == 'red14') {
    return type == 2 ? 'text-white' : 'text-red14'
  } else if (themeType == 'yellow12') {
    return type == 2 ? 'text-black' : 'text-yellow12'
  } else if (themeType == 'red12') {
    return type == 2 ? 'text-white' : 'text-red12'
  } else if (themeType == 'blue15') {
    return type == 2 ? 'text-white' : 'text-blue15'
  } else if (themeType == "red11"){
    return type == 2 ? 'text-white' : 'text-red11'
  } else if (themeType == 'gold11') {
    return type == 2 ? 'text-black' : 'text-gold11'
  } else if (themeType == 'orange14') {
    return type == 2 ? 'text-white' : 'text-orange14'
  }
}

export function getBackColor(themeType, type) {
  if (themeType == "orange11") return 'bg-orange11'
  if (themeType == "orange12") return 'bg-orange12'
  if (themeType == "orange13") return 'bg-orange13'
  if (themeType == "green") return 'bg-green'
  if (themeType == "purple11") return 'bg-purple11'
  if (themeType == "red13") return 'bg-red13'
  if (themeType == "blue12") return 'bg-blue12'
  if (themeType == "yellow19") return 'bg-yellow19'
  if (themeType == "purple12") return 'bg-purple12'
  if (themeType == "blue14") return 'bg-blue14'
  if (themeType == 'blue16') return 'bg-blue16'
  if (themeType == 'gold12') return 'bg-gold12'
  if (themeType == 'blue17') return 'bg-blue17'
  if (themeType == 'yellow17') return 'bg-yellow17'
  if (themeType == 'blue19') return 'bg-blue19'
  if (themeType == 'blue11') return 'bg-blue11'
  if (themeType == "yellow13") return 'bg-yellow13'
  if (themeType == "red15") return 'bg-red15'
  if (themeType == "yellow20") return 'bg-yellow17'
  if (themeType == "blue13") return 'bg-blue13'
  if (themeType == "gold13") return 'bg-gold13'
  if (themeType == "yellow11") return 'bg-yellow11'
  if (themeType == "yellow14") return 'bg-yellow14'
  if (themeType == "yellow18") return 'bg-yellow17'
  if (themeType == "yellow16") return 'bg-yellow17'
  if (themeType == "yellow21") return 'bg-yellow21'
  if (themeType == "blue18") return 'bg-blue18'
  if (themeType == "yellow15") return 'bg-yellow15'
  if (themeType == "white") return 'bg-yellow901'
  if (themeType == "red14") return 'bg-red14'
  if (themeType == "yellow12") return 'bg-yellow12'
  if (themeType == "red12") return 'bg-red12'
  if (themeType == "blue15") return 'bg-blue15'
  if (themeType == "red11") return 'bg-red11'
  if (themeType == 'gold11') return 'bg-gold11'
  if (themeType == 'orange14') return 'bg-orange14'
}

export function getPageBackColor(themeType, type) {
  if (themeType == "orange11" || themeType == "green" || themeType == 'purple11' || themeType == 'yellow13') return 'bg-black1'
  if (themeType == "blue14" || themeType == 'gold11' || themeType == "red14" || themeType == "yellow12" || themeType == "red12" || themeType == 'blue15' || themeType == 'blue17') return 'bg-black-darker6'
  if (themeType == "white") return 'bg-white-darker'
  if (themeType == 'yellow17' || themeType == "yellow18" || themeType == 'red13' || themeType == 'blue12' || themeType == 'yellow19' || themeType == "red15") return 'bg-black15'
  if (themeType == 'blue19') return 'bg-blue901'
  if (themeType == 'blue11') return 'bg-blue111'
  if (themeType == "orange12") return 'bg-black26'
  if (themeType == "yellow20" || themeType == "blue13" || themeType == "yellow21" || themeType == "blue18" || themeType == "yellow15") return 'bg-grey923'
  if (themeType == 'gold13') return 'bg-black50'
  if (themeType == 'yellow14' || themeType == "yellow11") return 'bg-back-yellow14'
  if (themeType == "yellow16") return 'bg-grey925'
  if (themeType == 'blue16') return 'bg-black22'
  if (themeType == 'purple12' || themeType == 'red11' || themeType == 'gold12' || themeType == 'orange14' || themeType == 'orange13') return 'bg-black25'
}