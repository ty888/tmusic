<template>
  <div class="player">
    <mt-header :title="playerInfo.fileName" class="header">
      <mt-button icon="back" slot="left"  @click.native="$router.back()">返回</mt-button>
      <router-link to="/index" slot="right">
  		    <mt-button>首页</mt-button>
  	  </router-link>
    </mt-header>
    <div class="player_main">
      <div class="mask"></div>
      <div class="mask_img" :style="{'background-image': 'url('+singer.image+')'}"></div>
      <div class="player_info">
        <div class="player_img img_rotate" :class="{'rotate_pause': !$root.isPlay}">
          <img :src="singer.image">
        </div>
      </div>
      <div class="control_box">
        <div class="time_box">
          <span class="play_time">00:03</span>
          <div class="time_line">
            <div class="line">
              <div class="control"></div>
              <div class="complete_line"></div>
            </div>
          </div>
          <span class="all_time">03:19</span>
        </div>
        <div class="control_main">
          <span class="player_Pattern"><i class="iconfont icon-caidan"></i></span>
          <div class="control_btn">
            <span class="prev"><i class="iconfont icon-shangyishou"></i></span>
            <span class="play" @click="play()"><i class="iconfont" :class="{ 'icon-iconset0482': $root.isPlay, 'icon-iconset0481': !$root.isPlay }"></i></span>
            <span class="next"><i class="iconfont icon-xiayishou"></i></span>
          </div>
          <span class="download_btn"><i class="iconfont icon-comiisxiazai"></i></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from '../api.js'
export default {
  data () {
    return {
      msg: 1,
      playerInfo: {},
      singer: {}
    }
  },
  methods: {
    play () {
      if (this.$root.isPlay) {
        this.$root.audio.pause()
        this.$root.isPlay = false
      } else {
        this.$root.audio.play()
        this.$root.isPlay = true
      }
    }
  },
  beforeDestroy () {
    this.$root.isShow = true
  },
  mounted () {
    this.$root.isShow = false
    let lastSongInfo = JSON.parse(window.localStorage.songInfo)
    if (lastSongInfo.hash === this.$route.params.hash) {
      this.singer.image = lastSongInfo.picUrl
      this.singer.singername = lastSongInfo.singer
      this.playerInfo = JSON.parse(window.localStorage.playerInfo)
      return
    }
    api.getMusicInfo(this.$http, this.$route.params.hash, (state, data) => {
      if (state) {
        if (data.status === 'success') {
          this.playerInfo = data.data
          window.localStorage.playerInfo = JSON.stringify(data.data)
          if (this.$root.audio !== null) {
            this.$root.audio.src = this.playerInfo.url
            this.$root.audio.load()
          } else {
            this.$root.audio = new window.Audio(this.playerInfo.url)
            this.$root.audio.play()
          }
        }
      } else {
      }
    })
    api.getSinger(this.$http, this.$route.params.singername, (state, data) => {
      if (state) {
        if (data.status === 'success') {
          this.singer = data.data
          this.$root.setSongInfo({
            singer: this.singer.singername,
            picUrl: this.singer.image,
            song: this.$route.params.songname,
            hash: this.$route.params.hash
          })
        }
      }
    })
  }
}
</script>
<style lang="less" scoped>
// 图片旋转类
.img_rotate{
  animation: img_rotate 7s linear infinite;
  -moz-animation: img_rotate 7s linear infinite;
  -webkit-animation: img_rotate 7s linear infinite;
  -o-animation: img_rotate 7s linear infinite;
}
.rotate_pause{
  animation-play-state: paused;
}
.player{
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  .header{
    position: fixed;
    width: 100%;
    z-index: 10;
    background-color: #000;
  }
  .player_main{
    padding-top: 40px;
    position: relative;
    height: 100%;
    .mask{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #000;
      opacity: .5;
      z-index: 9;
    }
    .mask_img{
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      -webkit-filter: blur(30px)!important;
      background-position:center;
      background-size: cover;
      background-repeat: no-repeat;
      -moz-filter: blur(60px);
      -o-filter: blur(60px);
      -ms-filter: blur(60px);
      filter: blur(15px);
    }
    .player_info{
      position: relative;
      z-index: 10;
      padding-top: 50px;
      .player_img{
        height: 180px;
        width: 180px;
        overflow: hidden;
        border-radius: 100px;
        border: 30px solid #000;
        margin: 0 auto;
        img{
          height: 100%;
        }
        @keyframes img_rotate {
          0%{
            transform: rotate(0deg);
          }
          100%{
            transform: rotate(360deg);
          }
        }
        @-webkit-keyframes img_rotate {
          0%{
            -webkit-transform: rotate(0deg);
          }
          100%{
            -webkit-transform: rotate(360deg);
          }
        }
        @-moz-keyframes img_rotate {
          0%{
            -moz-transform: rotate(0deg);
          }
          100%{
            -moz-transform: rotate(360deg);
          }
        }
      }
    }
   .control_box{
      position: fixed;
      padding: 0 20px;
      bottom: 0;
      left: 0;
      width: 100%;
      z-index: 10;
      // 时间线
      .time_box{
        overflow: hidden;
        color: #fff;
        position: relative;
        .play_time{
          float: left;
        }
        .time_line{
          position: absolute;
          top: 50%;
          transform: translate(0, -50%);
          width: 100%;
          .line{
            width: 75%;
            background-color: #666;
            height: 2px;
            border-radius: 100px;
            margin: 0 auto;
            position: relative;
            .control{
              position: absolute;
              top: 50%;
              transform: translate(0, -50%);
              border-radius: 100px;
              height: 15px;
              width: 15px;
              background-color: #fff;
            }
            .complete_line{
              height: 2px;
              width: 15px;
              background-color: #FF0000;
            }
          }
        }
        .all_time{
          float: right;
        }
      }
      // 控制按钮
      .control_main{
        position: relative;
        .control_btn{
          width: 60%;
          margin: 0 auto;
          text-align: center;
          span{
            &:nth-child(2){
              margin: 0 30px;
            }
            i{
              font-size: 45px;
              color: #fff;
            }
          }
        }
        .download_btn,{
          position: absolute;
          right: 0;
          top: 10px;
          i{
            font-size: 34px;
            color: #fff;
            text-align: center;

          }
        }
        .player_Pattern{
          position: absolute;
          left: 0;
          top: 15px;
          i{
            font-size: 24px;
            color: #fff;
          }
        }
      }
    }
  }
}
</style>
