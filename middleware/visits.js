export default function ( context ) {
    let userAgent = process.server ? context.req.headers['user-agent'] : navigator.userAgent        
    var currentUser = context.store.getters['auth/currentUser'];
    if(currentUser) {
        var devicePixelRatio = 1
        var windowInnerWidth = "1200"
        var windowInnerHeight = "800"
        var screenWindowWidth = "1200"
        var screenWindowHeight = "800"
        
        if (!process.server){
            devicePixelRatio = window.devicePixelRatio;
            windowInnerWidth = window.innerWidth;
            windowInnerHeight = window.innerHeight;
            screenWindowWidth = window.screen.width;
            screenWindowHeight = window.screen.height;
        }
        var data = {
            userId: currentUser._id,
            userLoginId: currentUser.userLoginId,
            site: currentUser.site,
            nickname: currentUser.nickname,
            nation: "",
            position: context.route.path,
            userAgent: userAgent,
            ip: context.store.state.your_ip,
            devicePixelRatio: devicePixelRatio,
            windowSize: windowInnerWidth + "X" + windowInnerHeight,
            resolution: screenWindowWidth + "X" + screenWindowHeight,
            timezone: 'GMT+9'
        }
        if(currentUser)
        {
            context.store.dispatch('auth/addUserLog', data)
        }
    }
}
  