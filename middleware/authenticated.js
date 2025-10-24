export default function (ctx) {
  /** @author Shadow
   * 여기서는 다음의 네가지 기능을 수행한다.
   * 1. 인증되지 않은 유저들을 모두 로그인 페이지로 넘기는 기능
   * 2. 페이지이동에서 제한검색기능
   * 3. 관리자측으로 이동하려는 배드햇 검출기능
   * 4. 승인되지 않은 도메인의 이용의 제한기능
   */
  const isAuthenticated = ctx.store.getters['auth/isAuthenticated']
  const isUseDoor = ctx.store.getters['getIsUseDoor']

  if (!isAuthenticated && isUseDoor) {
    return ctx.redirect('/Auth/Login')
  }
}
