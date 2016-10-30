<template>
  <div class="search">
    <mt-header title="搜索" class="header">
      <mt-button icon="back" slot="left" @click.native="$router.back()">返回</mt-button>
    </mt-header>
    <span class="logo_img"><img src="../assets/logo.png"></span>
    <div class="search_box">
      <input v-model.trim='musickey' placeholder="输入歌曲信息">
      <div class="hot_search">
        <p>热门搜索</p>
        <ul>
          <li v-for="item in hotSearchList" @click="addSong(item.content)">{{item.content}}</li>
        </ul>
      </div>
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
      // 热门搜索
      hotSearchList: [
        {content: '丑八怪'},
        {content: '十年'},
        {content: '我好像在哪见过你'},
        {content: '光明'},
        {content: '告白气球'},
        {content: '演员'},
        {content: '初学者'},
        {content: '天空之城'},
        {content: '天使的距离'},
        {content: '南山南'}
      ],
      musiclist: [],
      isWait: false
    }
  },
  methods: {
    addSong (data) {
      this.musickey = data
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
  .logo_img{
    display: block;
    text-align: center;
    padding-top: 50px;
    padding-bottom: 20px;
    img{
      width: 100px;
    }
  }
  .search_box{
    width: 90%;
    margin: 0 auto;
    position: relative;
    >input{
      height: 45px;
      width: 100%;
      padding-left: 10px;
      font-size: 14px;
      background-color: #fff;
      outline: none;
    }
    >.hot_search{
      float: left;
      z-index: 9;
      position: absolute;
      >p{
        margin: 20px 0;
        color: #666;
      }
      >ul{
        li{
          float: left;
          padding: 4px 6px;
          border: 1px solid #ddd;
          border-radius: 3px;
          margin-right: 10px;
          margin-bottom: 10px;
          cursor: pointer;
          &:hover{
            background-color: #ccc;
          }
        }
      }
    }
    >ul{
      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 11px 50px 0 rgba(0, 0, 0, 0.1);
      margin-top: 3px;
      background-color: #fff;
      position: relative;
      z-index: 10;
      li{
        padding: 10px;
        >a{
          color: #333;
          display: block;
        }
        >span{
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