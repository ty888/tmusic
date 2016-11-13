<template>
  <div class="app">
    <router-view></router-view>
    <PlayBox :songInfo="songInfo" v-if="isShow"></PlayBox>
  </div>
</template>

<script>
import PlayBox from './components/PlayBox'
export default {
  components: {
    PlayBox
  },
  data () {
    return {
      isShow: true,
      songInfo: {},
      audio: null,
      isPlay: true
    }
  },
  methods: {
    setSongInfo (songInfo) {
      this.songInfo = songInfo
      window.localStorage.songInfo = JSON.stringify(songInfo)
    }
  },
  mounted () {
    if (window.localStorage.songInfo !== undefined) {
      this.songInfo = JSON.parse(window.localStorage.songInfo)
      this.audio = new window.Audio(JSON.parse(window.localStorage.playerInfo).url)
      this.audio.play()
    } else {
      this.isShow = false
    }
  }
}
</script>

<style lang="less">
body,h1,h2,h3,p,div,ol,ul,input,button{margin:0;padding:0}body{font-family:Arial, Helvetica, sans-serif;-webkit-text-size-adjust:none;overflow-x:hidden}ol,ul{list-style:none}a{text-decoration:none}input,button,textarea{border:0;border-radius:0;background:transparent;-webkit-appearance:none;-webkit-box-sizing:border-box;box-sizing:border-box}button{outline:none}
html {
  font-family: sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  height: 100%;
}
body{
  background:#f5f5f5;
  font-size: 0.85rem;
  line-height: 1.5;
  height: 100%;
}
.app{
  position: relative;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
}
*{
  box-sizing: border-box;
}
// 图表字体
@font-face {font-family: "iconfont";
  src: url('assets/fonts/iconfont.eot?t=1477804250542'); /* IE9*/
  src: url('assets/fonts/iconfont.eot?t=1477804250542#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('assets/fonts/iconfont.woff?t=1477804250542') format('woff'), /* chrome, firefox */
  url('assets/fonts/iconfont.ttf?t=1477804250542') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
  url('assets/fonts/iconfont.svg?t=1477804250542#iconfont') format('svg'); /* iOS 4.1- */
}
.iconfont {
  font-family:"iconfont" !important;
  font-size:16px;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
.icon-guanbi:before { content: "\e66b"; }

.icon-caidan:before { content: "\e614"; }

.icon-comiisxiazai:before { content: "\e65e"; }

.icon-iconset0481:before { content: "\e768"; }

.icon-iconset0482:before { content: "\e769"; }

.icon-xiayishou:before { content: "\e64d"; }

.icon-shangyishou:before { content: "\e64f"; }

</style>
