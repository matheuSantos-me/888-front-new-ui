import io from 'socket.io-client'
import feathers from '@feathersjs/feathers'
import socketio from '@feathersjs/socketio-client'
import authentication from '@feathersjs/authentication-client'
import storage from '@/assets/js/utils/ssr-storage'
import { getHash } from '~/assets/js/utils'

let winHost = window.location.hostname.replace("www.", "")
winHost = winHost.replace("WWW.", "")
const host = process.env.backendPrefix && process.env.backendPrefix != '' ? `${process.env.backendPrefix}.${winHost}` : process.env.HOST
const port = process.env.PORT || 8080
const socket = io(`https://${host}:${port}?`, {
  query: getHash(),
  transports: ['websocket'],
  upgrade: false
})

var flag = false      // 소켓연결이 끊어졌댔는가?

const app = feathers()
  .configure(socketio(socket))
  .configure(authentication({storage}))

socket.on('connect', () => {
  if (window.$nuxt) {
    window.$nuxt.$loading.finish()
    window.$nuxt.$store.commit("SET_ISCONNECTEDSOCKET", true)
  }
  if(flag) {
    flag = false
    let accessToken = window.localStorage.getItem('feathers-jwt')
    app.authenticate({ strategy: 'jwt', accessToken }).catch((error) =>{
      if (window.$nuxt) {
        window.$nuxt.$store.dispatch("auth/logout")
          .then(res => {
            // let dialogData = {title: '알림메시지', content: "장시간 미 사용으로 보안을 위해 로그아웃됩니다.", buttonValue: '닫기[Close]', type: 2}
            // window.$nuxt.$store.commit("dialog/SET_DIALOG_DATA", dialogData)
            // console.log("logout")
          }).catch(err => {
            console.log(err.message)
          })
      }
      console.log('reauthenticate', error)
    })
  }
})
socket.on('disconnect', () => {
  flag = true
  if (window.$nuxt) {
    window.$nuxt.$loading.start()
    window.$nuxt.$store.commit("SET_ISCONNECTEDSOCKET", false)
  }
  
  setTimeout(() => {
    socket.io.opts.query = getHash()
    socket.connect()
  }, 5000)
})
socket.on('connect_error', () => {
  if (window.$nuxt) {
    window.$nuxt.$store.commit("SET_ISCONNECTEDSOCKET", false)
  }
  socket.io.opts.query = getHash()
  socket.connect()
})

export default app