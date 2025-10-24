import cookie from 'js-cookie'

const expires = 365

export default {
  getItem (key) {
    if (process.server) return
    window.localStorage.getItem(key)
    cookie.get(key)
  },
  setItem (key, value) {
    if (process.server) return
    window.localStorage.setItem(key, value)
    cookie.set(key, value, {expires})
  },
  removeItem (key) {
    if (process.server) return
    window.localStorage.removeItem(key)
    cookie.remove(key)
  },
  getTokenFromRequest (req, cookieName) {
    if (!req || !req.headers || !req.headers.cookie) return
    const jwtCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith(`${cookieName}=`));
    if (!jwtCookie) return
    return jwtCookie.split('=')[1]
  }
};
