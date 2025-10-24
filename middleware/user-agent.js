export default function (context) {
  let userAgent = context.req ? context.req.headers['user-agent'] : navigator.userAgent
  context.userAgent = userAgent
  context.isMobile = /mobile/i.test(userAgent)
  //context.store.commit('SET_ISMOBILE', context.isMobile)
}