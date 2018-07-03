<template>
    <div class="goods-info">
        <div class="goods-img">
            <img v-lazy="goodsImage" width="90%"/>
        </div>
        <div class="goods-name">{{goodsName}}</div>
        <div class="goods-price">￥{{goodsPrice}}元</div>
    </div>
</template>
<script>

export default {
    props:["goodsName","goodsImage","goodsPrice"]
};
</script>
<style scoped>
.goods-name {
  padding: 0 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
