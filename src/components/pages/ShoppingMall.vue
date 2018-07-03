<template>
    <div>
        <div class="search-bar"> 
            <van-row class="test-row">
                <van-col span="3">
                    <img :src="imgIcon" width="50%" />
                </van-col>
                <van-col span="16">
                    <input type="text" class="search-input"/>
                </van-col>
                <van-col span="5">
                    <van-button size="mini">查找</van-button>
                </van-col>
            </van-row>
        </div>
        <div class="swiper-area">
            <van-swipe :autoplay="1000">
                <van-swipe-item v-for="(banner,index) in bannerPicArray" :key="index">
                    <img v-lazy="banner.imageUrl" width="100%"/>
                </van-swipe-item>
            </van-swipe>
        </div>
        <!-- type bar-->
        <div class="type-bar">
            <div v-for="(cate,index) in category" :key="index">
                <img v-lazy="cate.image" width="90%"/>
                <span>{{cate.mallCategoryName}}</span>
            </div>
        </div>
        <!-- banner广告 -->
        <div class="">
            <img v-lazy="adBanner" width="100%"/>
        </div>
        <!-- 商品推荐 -->
        <div class="recommend-area">
            <div class="recommend-title">
                商品推荐
            </div>
            <div class="recommend-body">
                <swiper :options="swiperOption"> 
                    <swiper-slide v-for="(item,index) in recommendGoods" :key="index">
                        <div class="recommend-item">
                            <img v-lazy="item.image" width="80%"/>
                            <div>{{item.goodsName}}</div>
                            <div>￥{{item.price}}元</div>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
        <!-- <swiperH></swiperH> -->
        <flooerComponent :floorData="fooer1" :floorTitle="floorName.fooer1"></flooerComponent>
        <flooerComponent :floorData="fooer2" :floorTitle="floorName.fooer2"></flooerComponent>
        <flooerComponent :floorData="fooer3" :floorTitle="floorName.fooer3"></flooerComponent>
        <!-- 热卖商品 -->
        <div class="hot-area">
            <div class="hot-title">热卖商品</div>
            <div class="hot-goods">
                <van-list gutter="20">
                    <van-col span="12" v-for="(item,index) in hotGoods" :key="index">
                        <goodsInfo :goodsImage="item.image" :goodsName="item.name" :goodsPrice="item.price"></goodsInfo>
                    </van-col>
                </van-list>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import 'swiper/dist/css/swiper.css'
import {swiper,swiperSlide} from 'vue-awesome-swiper'
import flooerComponent from '../component/footer'
import goodsInfo from '../component/goodsInfo'
import url from '@/serviceAPI.config.js'
// import swiperH from './../pages/swiper1'

export default {
  data() {
    return {
        swiperOption:{
            slidesPerView:3
        },
      msg: "商品",
      imgIcon: require("../../assets/img/add.png"),
      bannerPicArray: [
        {
          imageUrl:"http://7xjyw1.com1.z0.glb.clouddn.com/simleVueDemoPic001.jpg"
        },
        {
          imageUrl:"http://7xjyw1.com1.z0.glb.clouddn.com/simleVueDemoPic002.jpg"
        },
        {
          imageUrl:"http://7xjyw1.com1.z0.glb.clouddn.com/simleVueDemoPic003.jpg"
        }
      ],
      category: [],
      adBanner: "", //banner图广告
      recommendGoods:[], //商品推荐
      fooer1:[],
      fooer2:[],
      fooer3:[],
      floorName:{},
      hotGoods:[]
    };
  },
  components:{
      swiper,
      swiperSlide,
      flooerComponent,
      goodsInfo
    //   swiperH
  },
  created() {
    axios({
    //   url:"https://www.easy-mock.com/mock/5ae2eeb23fbbf24d8cd7f0b6/SmileVue/index",
        url:url.getShoppingMallInfo,
      method: "get"
    })
      .then(res => {
        console.log(res);
        this.category = res.data.data.category;
        this.adBanner = res.data.data.advertesPicture.PICTURE_ADDRESS;
        this.recommendGoods = res.data.data.recommend;
        this.fooer1 = res.data.data.floor1;
        this.fooer2 = res.data.data.floor2;
        this.fooer3 = res.data.data.floor3;
        this.floorName = res.data.data.floorName;  
        this.hotGoods = res.data.data.hotGoods    
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style scoped>
.test-row {
  text-align: center;
}
.search-bar {
  height: 2.2rem;
  background: pink;
  line-height: 2.2rem;
}
.search-input {
  width: 100%;
  height: 1.3rem;
  border: 0px solid #fff;
  border-bottom: 1px solid #333;
  border-radius: 10px;
  color: #333;
}
.swiper-area {
  width: 20rem;
  clear: both;
  overflow: hidden;
}
.type-bar {
  background-color: #fff;
  margin: 0 0.3rem 0.3rem 0.3rem;
  border-radius: 0.3rem;
  font-size: 14px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
.type-bar div {
  padding: 0.3rem;
  font-size: 12px;
  text-align: center;
}
.recommend-area {
  background-color: #fff;
  margin-top: 0.3rem;
}
.recommend-title {
  border-bottom: 1px solid #eee;
  font-size: 14px;
  padding: 0.2rem;
  color: #e5017d;
  text-align: left
}
.recommend-body {
  border-bottom: 1px solid #eee;
}
.recommend-item {
  width: 99%;
  border-right: 1px solid #eee;
  font-size: 12px;
  text-align: center;
}
</style>