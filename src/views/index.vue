<template>
	<div class="index">
		<mt-header title="酷猪" class="header">
		<router-link to="/search" slot="right">
		    <mt-button>搜索</mt-button>
	  </router-link>
		</mt-header>
		<mt-swipe :auto="4000">
		  <mt-swipe-item class="slide1"></mt-swipe-item>
		  <mt-swipe-item class="slide2"></mt-swipe-item>
		  <mt-swipe-item class="slide3"></mt-swipe-item>
		</mt-swipe>
		<div class="hot_search">
	    <p>大家都在搜索</p>
      <ul>
        <li :style="{'background-color': item.bgcolor}" v-for="item in hotList">
          <router-link :to="{name: 'search', params: {songName: item.content}}" >
            {{item.content}}
      	  </router-link>
        </li>
      </ul>
    </div>
	</div>
</template>

<script>
export default {
  data () {
    return {
      hotList: [
        {content: '丑八怪', bgcolor: '#FBF2A5'},
        {content: '十年', bgcolor: '#CEDEF8'},
        {content: '我好像在哪见过你', bgcolor: '#98FB98'},
        {content: '光明', bgcolor: '#C8EAF3'},
        {content: '告白气球', bgcolor: '#FEDCDA'},
        {content: '演员', bgcolor: '#FCA4CE'},
        {content: '初学者', bgcolor: '#BCD3FC'},
        {content: '天空之城', bgcolor: '#CEDEF8'},
        {content: '天使的距离', bgcolor: '#FBF2A5'},
        {content: '南山南', bgcolor: '#98FB98'}
      ]
    }
  }
}
</script>
<style lang="less" scoped>
	.index{
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
		header{
			position: fixed;
	    width: 100%;
	    z-index: 10;
	    background-color: #000;
		}
		.mint-swipe {
			padding-top: 40px;
      height: 200px;
      color: #fff;
      font-size: 30px;
      text-align: center;
    }
    .slide1, .slide2, .slide3 {
			background-size: cover;
			background-position: center;
    }
    .slide1 {
    	background-image: url('../assets/1.jpg');
    }
    .slide2 {
    	background-image: url('../assets/2.jpg');
    }
    .slide3 {
    	background-image: url('../assets/3.jpg');
    }
		// 热门搜索
		>.hot_search{
			padding: 0 20px;
			>p{
				margin: 20px 0;
				color: #666;
			}
			>ul{
        li{
          float: left;
          border: 1px solid #ddd;
          border-radius: 3px;
          margin-right: 10px;
          margin-bottom: 10px;
          cursor: pointer;
          opacity: .8;
          >a{
            display: block;
            color: #333;
            padding: 4px 6px;
          }
          &:hover{
            opacity: 1;
          }
        }
      }
		}
	}
</style>
