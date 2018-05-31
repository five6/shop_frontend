<template>
  <div id="app">
    <router-view />
    <!-- <div>
      <van-tabbar v-model="active" @change="change">
        <van-tabbar-item icon="shop">商品</van-tabbar-item>
        <van-tabbar-item icon="cart" dot>购物车</van-tabbar-item>
        <van-tabbar-item icon="records" info="5">会员中心</van-tabbar-item>
        <van-tabbar-item icon="chat">客服</van-tabbar-item>
      </van-tabbar>
    </div> -->
  </div>
</template>

<script>
import { Cell, CellGroup, Icon, Tabbar, TabbarItem } from 'vant';

export default {
  data() {
    return {
      active: 0
    };
  },
  methods: {
    change(index) {
      switch (index) {
        case 0:
          this.$router.push('/goods');
          break;
        case 1:
          this.$router.push('/cart');
          break;
        case 2:
          this.$router.push('/profile');
          break;
        case 3:
          this.$router.push('/chat');
          break;
      }
    }
  },
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Icon.name]: Icon,
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  }
};
</script>

<style>
body {
  font-size: 16px;
  background-color: #f8f8f8;
  -webkit-font-smoothing: antialiased;
}

.van-cell__title .van-icon {
  font-size: 18px;
}
</style>
