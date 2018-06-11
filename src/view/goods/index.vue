<template>
    <div class="goods">
        <van-swipe class="goods-swipe" :autoplay="3000">
            <van-swipe-item v-for="(product, index) in hottest" :key="index">
                <img v-lazy="product.image" @click="jumpDetail(product._id)" :src="product.image" />
            </van-swipe-item>
        </van-swipe>
        <div class="goods-hottest">
          <div class="goods-hottest-collections-header">热销产品</div>
          <van-panel v-for="(product, index) of products" :key="index">
            <van-cell-group>
              <van-cell>
                <img class="cell-img" v-lazy="product.image" :src="product.image" />
                <div class="goods-title">{{ product.title }}</div>
                <div class="goods-price">
                  {{ formatPrice(product.price) }}
                </div>
              </van-cell>
            </van-cell-group>
          </van-panel>
        </div>
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
  TabbarItem,
  Lazyload,
  List,
  Cell,
  CellGroup,
  Panel,
  Button,
  NavBar
} from 'vant';
import { mapGetters } from 'vuex';
export default {
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
    [Lazyload.name]: Lazyload,
    [List.name]: List,
    [Cell.name]: Cell,
    [Panel.name]: Panel,
    [Button.name]: Button,
    [CellGroup.name]: CellGroup,
    [NavBar.name]: NavBar
  },
  data() {
    return {
      active: 0,
      loading: false,
      finished: false
    };
  },
  computed: {
    ...mapGetters([
      'hottest',
      'products'
    ])
  },
  mounted() {
    this.$store.dispatch('fetchProducts');
  },
  methods: {
    formatPrice(price) {
      return '¥' + (price).toFixed(2);
    },
    jumpDetail(id) {
      this.$router.push('/goods/' + id);
    },
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

<style lang="less">
  .goods {
  padding-bottom: 50px;

  &-swipe {
    height: 250px;
    img {
      width: 7.5rem;
      height: 7.5rem;
      display: block;
    }
  }

  &-title {
    font-size: 16px;
  }

  &-price {
    color: #f44;
  }

  &-express {
    color: #999;
    font-size: 12px;
    padding: 5px 15px;
  }

  &-cell-group {
    margin: 15px 0;

    .van-cell__value {
      color: #999;
    }
  }
  &-hottest {
    // margin-bottom: 100px;
    padding-top: .22rem;
    .cell-img {
      width: 100%;
    }
    &-collections-header {
      line-height: 0.8rem;
      margin-left: .22rem;
    }
  }
  &-desc {
    font-size: .22rem;
    color: rgba(0,0,0,.54);
  }
 
}
 .van-panel__header{
    display: none !important;
  }
</style>