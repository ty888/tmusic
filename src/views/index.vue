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
	    <p>热门搜索</p>
      <ul>
        <li>丑八怪</li>
      </ul>
    </div>
	</div>
</template>

<script>
// export default {
// 	data () {
// 		return {
// 			hotList: [
// 				{content: 丑八怪, }
// 			]
// 		}
// 	}
// }
</script>

<style lang="less" scoped>
	.index{
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
	}
</style>
