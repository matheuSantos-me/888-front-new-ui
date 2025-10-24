export default function (ctx) {
  const isBlock = ctx.store.getters['getIsBlock']
  ctx.isBlock = isBlock
}
