<template>
  <div class="player">
    <mt-header :title="playerInfo.fileName">
      <mt-button icon="back" slot="left">返回</mt-button>
    </mt-header>
    <div class="player_main" :style="{'background-image': 'url('+singer.image+')'}">
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
  .player_main{
    height: 100%;
    background-position:center;
    background-size: cover;
    background-repeat: no-repeat;
    -webkit-filter: blur(15px);
    -moz-filter: blur(15px);
    -o-filter: blur(15px);
    -ms-filter: blur(15px);
    filter: blur(15px);
    .player_info{
      padding-top: 50px;
      .player_img{
        height: 180px;
        width: 180px;
        overflow: hidden;
        border-radius: 100px;
        border: 30px solid #000;
        margin: 0 auto;
        animation: img_rotate 4s linear infinite;
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
      background-color: red;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
    }
  }
}
</style>
