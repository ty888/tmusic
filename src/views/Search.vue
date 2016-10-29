<template>
  <div class="search">
    <span class="logo_img"><img src="../assets/logo.png"></span>
    <div class="search_box">
      <input v-model='musickey' placeholder="输入歌曲信息">
      <ul>
        <li>十年</li>
        <li>十年</li>
      </ul>
    </div>
  </div>
</template>

<script>
import api from '../api.js'
export default {
  data () {
    return {
      musickey: '',
      musiclist: {}
    }
  },
  watch: {
    musickey () {
      api.getMusicList(this.$http, this.musickey, 5, (state, data) => {
        console.log(data)
      })
    }
  }
}
</script>

<style lang="less" scoped>
.search{
  padding: 15px;
  .logo_img{
    display: block;
    text-align: center;
    margin: 20px 0;
    img{
      width: 100px;
    }
  }
  .search_box{
    input{
      height: 45px;
      width: 100%;
      padding-left: 10px;
      font-size: 14px;
      background-color: #fff;
      outline: none;
    }
    ul{
      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 11px 50px 0 rgba(0, 0, 0, 0.1);
      margin-top: 3px;
      background-color: #fff;
      li{
        padding: 10px;
        &:not(first-child){
          border-top: 1px solid #e5e5e5;
        }
        &:hover{
          background-color: #e5e5e5;
        }
      }
    }
  }
}
</style>