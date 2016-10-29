<template>
  <div class="search">
    <span class="logo_img"><img src="../assets/logo.png"></span>
    <div class="search_box">
      <input v-model.trim='musickey' debounce="5000" placeholder="输入歌曲信息">
      <ul v-if="musickey !== ''">
        <li v-for="item in musiclist">
          <router-link :to="{name: 'player', params: {hash: item.hash, singername: item.singername}}">{{item.filename}}</router-link>
        </li>
        <li v-if="errMsg.length>0">{{errMsg}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import api from '../api.js'
export default {
  data () {
    return {
      errMsg: '',
      musickey: '',
      musiclist: [],
      isWait: false
    }
  },
  watch: {
    musickey () {
      if (this.musickey.length === 0 || this.isWait) {
        return
      }
      this.isWait = true
      setTimeout(() => {
        this.isWait = false
        api.getMusicList(this.$http, this.musickey, 1, (state, data) => {
          if (state) {
            if (data.status === 'success') {
              this.musiclist = data.data.data
              this.errMsg = []
            } else {
              this.musiclist = []
              this.errMsg = data.msg
            }
          } else {
            // 出错了
          }
        })
      }, 300)
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
        a{
          color: #333;
          display: block;
        }
        span{
          font-size: 12px;
          float: right;
        }
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