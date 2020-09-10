<template>
<div class="swiper">

<van-swipe :autoplay="3000" indicator-color="red" >
  <van-swipe-item class="van-swipe-item" v-for="(image, index) in banners" :key="index">
    <img :src="image.image" />
  </van-swipe-item>
</van-swipe>
</div>
</template>

<script>

export default {
  name: "Swiper",

    props: {
		  banners: {
		    type: Array,
        default: []
      }
    },
    
    methods: {
		
    }
};
</script>

<style scoped>

.swiper{
    width: 100vw;
}

.van-swipe-item {
    width: 100vw;
    height: 150px;
}
.van-swipe-item img{
    width: 100%;
    height: 100%;
    display: block;
}
</style>