<template>
  <div class="play_control_body">
    <div class="play_info">
      <span><img src="http://f.hiphotos.baidu.com/baike/w%3D268%3Bg%3D0/sign=69cca5ccc8ef76093c0b9e9916e6c4f1/78310a55b319ebc4d27dd7c88126cffc1e17165d.jpg"/></span>
      <div class="play_name">
        <h2>黄色枫叶</h2>
        <p>薛之谦</p>
      </div>
    </div>
    <div class="song_control">
      <span class="prev"><i class="iconfont icon-shangyishou"></i></span>
      <span class="play" @click="play()"><i class="iconfont icon-iconset0481"></i></span>
      <span class="next"><i class="iconfont icon-xiayishou"></i></span>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
.play_control_body{
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 3px 10px;
  overflow: hidden;
  width: 100%;
  >.play_info{
    >span{
      display: block;
      float: left;
      border-radius: 100px;
      overflow: hidden;
      height: 50px;
      width: 50px;
      img{
        width: 100%;
      }
    }
    >.play_name{
      padding-left: 60px;
    }
  }
  >.song_control{
    position: absolute;
    right: 10px;
    top: 10px;
  }
}
</style>
