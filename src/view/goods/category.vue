<template>
    <div class="products">
        <van-swipe :autoplay="3000">
            <van-swipe-item v-for="(item, index) in categories" :key="index">
                <img v-lazy="item.image" />
            </van-swipe-item>
        </van-swipe>
         <van-tabbar v-model="active" @change="change">
            <van-tabbar-item icon="home">首页</van-tabbar-item>
            <van-tabbar-item icon="records">分类</van-tabbar-item>
            <van-tabbar-item icon="cart" dot>购物车</van-tabbar-item>
            <van-tabbar-item icon="contact" info="5">会员中心</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
import {
  Swipe,
  SwipeItem,
  Tabbar,
  TabbarItem
} from 'vant';

export default {
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  },
  data() {
    return {
      active: 1,
      categories: []
    };
  },
  methods: {
    change(index) {
      switch (index) {
        case 0:
          this.$router.push('/');
          break;
        case 1:
          this.$router.push('/category');
          break;
        case 2:
          this.$router.push('/cart');
          break;
        case 3:
          this.$router.push('/profile');
          break;
      }
    }
  }
};
</script>

<style lang="less" scoped>

</style>