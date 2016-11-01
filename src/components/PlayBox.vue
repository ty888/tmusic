<template>
  <div class="play_control_body" @click="toPlay">
    <div class="play_info">
      <span><img :src="songInfo.picUrl"/></span>
      <div class="play_name">
        <h2>{{songInfo.song}}</h2>
        <p>{{songInfo.singer}}</p>
      </div>
    </div>
    <div class="song_control">
      <span class="prev"><i class="iconfont icon-shangyishou"></i></span>
      <span class="play" @click.stop="play()"><i class="iconfont" :class="{ 'icon-iconset0482': $root.isPlay, 'icon-iconset0481': !$root.isPlay }"></i></span>
      <span class="next"><i class="iconfont icon-xiayishou"></i></span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    songInfo: {
      type: Object,
      required: true
    }
  },
  methods: {
    toPlay () {
      this.$router.push({
        name: 'player',
        params: {
          hash: this.songInfo.hash,
          singername: this.songInfo.singer,
          songname: this.songInfo.song
        }
      })
    },
    play () {
      if (this.$root.isPlay) {
        this.$root.audio.pause()
        this.$root.isPlay = false
      } else {
        this.$root.audio.play()
        this.$root.isPlay = true
      }
    }
  }
}
</script>

<style lang="less" scoped>
.play_control_body{
  background-color: #000;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 3px 10px;
  overflow: hidden;
  width: 100%;
  cursor: pointer;
  >.play_info{
    >span{
      display: block;
      float: left;
      border-radius: 100px;
      overflow: hidden;
      height: 50px;
      width: 50px;
      border: 1px solid #888;
      img{
        width: 100%;
      }
    }
    >.play_name{
      padding-left: 65px;
      color: #ccc;
      >h2{
        font-size: 18px;
      }
      >p{
        font-size: 12px;
      }
    }
  }
  >.song_control{
    position: absolute;
    right: 10px;
    top: 7px;
    >span{
      >i{
        font-size: 30px;
        color: #888;
      }
    }
    >.play{
      margin: 0 10px;
    }
  }
}
</style>
