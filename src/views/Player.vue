<template>
  <div class="player">
    <mt-header :title="playerInfo.fileName" class="header">
      <mt-button icon="back" slot="left">返回</mt-button>
    </mt-header>
    <div class="player_main">
      <div class="mask"></div>
      <div class="mask_img" :style="{'background-image': 'url('+singer.image+')'}"></div>
      <div class="player_info">
        <div class="player_img">
          <img :src="singer.image">
        </div>
      </div>
      <div class="control_box">这是控制</div>
    </div>
  </div>
</template>

<script>
import api from '../api.js'
export default {
  data () {
    return {
      playerInfo: {},
      singer: {}
    }
  },
  mounted () {
    api.getMusicInfo(this.$http, this.$route.params.hash, (state, data) => {
      if (state) {
        if (data.status === 'success') {
          this.playerInfo = data.data
          new window.Audio(this.playerInfo.url).play()
        }
      } else {
      }
    })
    api.getsinger(this.$http, this.$route.params.singername, (state, data) => {
      if (state) {
        if (data.status === 'success') {
          this.singer = data.data
        }
      }
    })
  }
}
</script>
<style lang="less" scoped>
// 图片旋转类
.img_rotate{
  animation: img_rotate 4s linear infinite;
}
.player{
  height: 100%;
  position: relative;
  .header{
    position: fixed;
    width: 100%;
    z-index: 10;
    background-color: #F25D8E;
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
      opacity: .7;
      z-index: 9; 
    }
    .mask_img{
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      -webkit-filter: blur(60px)!important;
      background-position:center;
      background-size: cover;
      background-repeat: no-repeat;
      -moz-filter: blur(60px);
      -o-filter: blur(60px);
      -ms-filter: blur(60px);
      filter: blur(60px);
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
        animation: img_rotate 7s linear infinite;
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
      }
    }
   .control_box{
      padding: 10px;
      height: 70px;
      background-color: #F25D8E;
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      z-index: 10;
    }
  }
}
</style>
