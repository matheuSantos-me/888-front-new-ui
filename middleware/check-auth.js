export default async function (context) {
  /** @author Shadow
   * 페이지이행시에 매번 실행되는데
   * TokenExpireTime 초기화, admin페이지 검출기능을 수행한다.
   */
  context.store.commit('initTimeLeft', true)
}
