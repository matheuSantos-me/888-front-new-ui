<template>
  <div v-if="loading">
    <div v-if="themeType == 'yellow'" class="Loader">
      <div class="loading-content">
        <div class="loader-icon">
        </div>
        <div class="loading-spinner">
          <div class="bounce1"></div>
          <div class="bounce2"></div>
          <div class="bounce3"></div>
        </div>
      </div>
    </div>
    <div v-if="themeType == 'orange11' || themeType == 'orange12' || themeType == 'green'" class="main-loader">
      <svg class="loaderSelector" :class="themeType == 'orange11' || themeType == 'orange12' ? 'loaderSVG' : 'loaderSVG-green'" viewBox="0 0 300 300" id="loader888">
        <path class="fade ring-1" opacity="0.88" d="M99.67,78.22c0-0.43,0-0.86,0-1.28c-0.31-13.19-5.13-24.49-14.6-33.96c-9.71-9.77-21.41-14.6-35.15-14.6
            s-25.56,4.82-35.33,14.6C4.83,52.75,0,64.42,0,78.22c0,13.74,4.83,25.53,14.6,35.24c9.77,9.71,21.59,14.6,35.33,14.6
            s25.44-4.89,35.15-14.6c9.16-9.1,13.93-20.03,14.54-32.61C99.61,79.93,99.67,79.08,99.67,78.22z M64.13,64.14
            c3.87,3.9,5.81,8.53,5.81,14.02S68,88.4,64.13,92.24C60.25,96.08,55.44,98,49.93,98c-5.51,0-10.02-1.92-13.89-5.76
            c-3.87-3.84-5.81-8.59-5.81-14.08s1.94-10.12,5.81-14.02c3.87-3.9,8.39-5.85,13.89-5.85C55.44,58.29,60.25,60.24,64.13,64.14z"></path>
        <path class="fade ring-2" opacity="0.88" d="M14.6,112.59C4.83,122.37,0,134.04,0,147.85c0,13.81,4.83,25.48,14.6,35.25c9.77,9.71,21.59,14.6,35.33,14.6
            s25.44-4.89,35.15-14.6c9.16-9.16,13.93-19.98,14.54-32.62c0-0.92,0.06-1.77,0.06-2.63c0-0.43,0-0.86,0-1.28
            c-0.31-13.2-5.13-24.5-14.6-33.97c-9.71-9.77-21.41-14.57-35.15-14.57S24.37,102.82,14.6,112.59z M49.93,128.05
            c5.51,0,10.32,1.77,14.2,5.68c3.87,3.91,5.81,8.55,5.81,14.05c0,5.5-1.94,10.2-5.81,14.11c-3.87,3.85-8.69,5.87-14.2,5.87
            c-5.51,0-10.02-2.02-13.89-5.87c-3.87-3.91-5.81-8.61-5.81-14.11c0-5.5,1.94-10.14,5.81-14.05
            C39.91,129.82,44.42,128.05,49.93,128.05z"></path>
        <path class="fade ring-3" opacity="0.88" d="M199.84,78.22c0-0.43,0-0.86,0-1.28c-0.31-13.19-5.13-24.49-14.6-33.96c-9.71-9.77-21.41-14.6-35.15-14.6
            c-13.74,0-25.56,4.82-35.33,14.6c-9.77,9.77-14.6,21.44-14.6,35.24c0,13.74,4.83,25.53,14.6,35.24c9.77,9.71,21.59,14.6,35.33,14.6
            c13.74,0,25.44-4.89,35.15-14.6c9.16-9.1,13.93-20.03,14.54-32.61C199.78,79.93,199.84,79.08,199.84,78.22z M164.29,64.14
            c3.87,3.9,5.81,8.53,5.81,14.02s-1.94,10.24-5.81,14.08c-3.87,3.84-8.69,5.76-14.2,5.76c-5.51,0-10.02-1.92-13.89-5.76
            c-3.87-3.84-5.81-8.59-5.81-14.08s1.94-10.12,5.81-14.02c3.87-3.9,8.39-5.85,13.89-5.85C155.6,58.29,160.42,60.24,164.29,64.14z"></path>
        <path class="fade ring-4" opacity="0.88" d="M114.76,112.59c-9.77,9.78-14.6,21.44-14.6,35.25c0,13.81,4.83,25.48,14.6,35.25
            c9.77,9.71,21.59,14.6,35.33,14.6c13.74,0,25.44-4.89,35.15-14.6c9.16-9.16,13.93-19.98,14.54-32.62c0-0.92,0.06-1.77,0.06-2.63
            c0-0.43,0-0.86,0-1.28c-0.31-13.2-5.13-24.5-14.6-33.97c-9.71-9.77-21.41-14.57-35.15-14.57
            C136.35,98.02,124.53,102.82,114.76,112.59z M150.1,128.05c5.51,0,10.32,1.77,14.2,5.68c3.87,3.91,5.81,8.55,5.81,14.05
            c0,5.5-1.94,10.2-5.81,14.11c-3.87,3.85-8.69,5.87-14.2,5.87c-5.51,0-10.02-2.02-13.89-5.87c-3.87-3.91-5.81-8.61-5.81-14.11
            c0-5.5,1.94-10.14,5.81-14.05C140.08,129.82,144.59,128.05,150.1,128.05z"></path>
        <path class="fade ring-5" opacity="0.88" d="M300,78.22c0-0.43,0-0.86,0-1.28c-0.31-13.19-5.13-24.49-14.6-33.96c-9.71-9.77-21.41-14.6-35.15-14.6
            s-25.56,4.82-35.33,14.6c-9.77,9.77-14.6,21.44-14.6,35.24c0,13.74,4.83,25.53,14.6,35.24c9.77,9.71,21.59,14.6,35.33,14.6
            s25.44-4.89,35.15-14.6c9.16-9.1,13.93-20.03,14.54-32.61C299.94,79.93,300,79.08,300,78.22z M264.45,64.14
            c3.87,3.9,5.81,8.53,5.81,14.02c0,5.49-1.94,10.24-5.81,14.08c-3.87,3.84-8.69,5.76-14.2,5.76c-5.51,0-10.02-1.92-13.89-5.76
            c-3.87-3.84-5.81-8.59-5.81-14.08c0-5.49,1.94-10.12,5.81-14.02c3.87-3.9,8.39-5.85,13.89-5.85
            C255.77,58.29,260.58,60.24,264.45,64.14z"></path>
        <path class="fade ring-6" opacity="0.88" d="M214.92,112.59c-9.77,9.78-14.6,21.44-14.6,35.25c0,13.81,4.83,25.48,14.6,35.25
            c9.77,9.71,21.59,14.6,35.33,14.6s25.44-4.89,35.15-14.6c9.16-9.16,13.93-19.98,14.54-32.62c0-0.92,0.06-1.77,0.06-2.63
            c0-0.43,0-0.86,0-1.28c-0.31-13.2-5.13-24.5-14.6-33.97c-9.71-9.77-21.41-14.57-35.15-14.57S224.7,102.82,214.92,112.59z
            M250.26,128.05c5.51,0,10.32,1.77,14.2,5.68c3.87,3.91,5.81,8.55,5.81,14.05c0,5.5-1.94,10.2-5.81,14.11
            c-3.87,3.85-8.69,5.87-14.2,5.87c-5.51,0-10.02-2.02-13.89-5.87c-3.87-3.91-5.81-8.61-5.81-14.11c0-5.5,1.94-10.14,5.81-14.05
            C240.24,129.82,244.75,128.05,250.26,128.05z"></path>
      </svg>
      <div class="loading-text">Loading</div>
    </div>
    <div v-if="themeType != 'orange11' && themeType != 'orange12' && themeType != 'green'" class="dm__loader-cont dm--fully-centered">
      <div class="dm__loader">
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      layoutType: "getLayoutType",
      themeType: "getThemeType"
    })
  },
  data: () => ({
    loading: false,
    loadingTimer: null
  }),
  methods: {
    // 로딩시작
    start () {
      this.loading = true
      clearTimeout(this.loadingTimer);
      this.loadingTimer = setInterval(() => {
        let loader = document.getElementById("loader888");
        if (loader != undefined) {
          if (!loader.classList.contains("removePath")) {
            loader.classList.add("removePath")
          } else {
            loader.classList.remove("removePath")
          }
        }
      }, 2500)
    },
    // 로딩완료
    finish () {
      this.loading = false
      clearTimeout(this.loadingTimer);
    }
  }
}
</script>

<style scoped>

.Loader:not(.Loader--inline) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}
.Loader {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-align: center;
    align-items: center;
    z-index: 201;
}
.Loader .loading-content {
    position: relative;
    z-index: 2;
}
.Loader .loading-content .loader-icon {
    background-image: url(static/image/bh-fist.svg);
    background-repeat: no-repeat;
    background-size: cover;
    width: 160px;
    height: 128px;
}
.Loader .loading-content .loading-spinner {
    margin: 55px auto 0;
    width: 70px;
    text-align: center;
}
.dm__loader-cont {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 500
}
.Loader .loading-content .loading-spinner .bounce1 {
    -webkit-animation-delay: -.32s;
    animation-delay: -.32s;
}
.Loader .loading-content .loading-spinner .bounce2 {
    -webkit-animation-delay: -.16s;
    animation-delay: -.16s;
}
.Loader .loading-content .loading-spinner>div {
    width: 18px;
    height: 18px;
    background-color: #facf0c;
    border-radius: 100%;
    display: inline-block;
    -webkit-animation: sk-bouncedelay 1.4s ease-in-out infinite both;
    animation: sk-bouncedelay 1.4s ease-in-out infinite both;
}
@-webkit-keyframes sk-bouncedelay{
  0%,80%,to{-webkit-transform:scale(0);transform:scale(0)}40%{-webkit-transform:scale(1);transform:scale(1)}
}
@keyframes sk-bouncedelay{
  0%,80%,to{-webkit-transform:scale(0);transform:scale(0)}40%{-webkit-transform:scale(1);transform:scale(1)}
  }
@keyframes lds-ripple {
    0% {
        transform: scale(0);
        opacity: 1
    }
    60% {
        opacity: 0.6
    }
    100% {
        transform: scale(1);
        opacity: 0
    }
}

@-webkit-keyframes lds-ripple {
    0% {
        transform: scale(0);
        opacity: 1
    }
    60% {
        opacity: 0.6
    }
    100% {
        transform: scale(1);
        opacity: 0
    }
}

.dm__loader {
    position: absolute;
    top: calc(50% - 58px);
    left: calc(50% - 58px);
    width: 116px;
    height: 116px
}

.dm__loader div {
    position: absolute;
    width: 100%;
    height: 100%;
    border-width: 5px;
    border-style: solid;
    opacity: 1;
    border-radius: 50%;
    -webkit-animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
    animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite
}

.dm__loader div:nth-child(2) {
    -webkit-animation-delay: -0.5s;
    animation-delay: -0.5s
}

.dm__loader-cont {
    background-color: rgba(0, 0, 0, 0.6)
}

.dm__loader div:nth-child(1) {
    border-color: #f14100
}

.dm__loader div:nth-child(2) {
    border-color: #ffb700
}
</style>
