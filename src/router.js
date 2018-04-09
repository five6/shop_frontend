import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
  {
    path: '*',
    component: () => import('./view/goods'),
    meta: {
      title: '商品'
    }
  },
  {
    path: 'goods',
    component: () => import('./view/goods'),
    meta: {
      title: '商品'
    }
  },
  {
    path: '/goods/:id',
    component: () => import('./view/goods/detail'),
    meta: {
      title: '商品详细信息'
    }
  },
  {
    name: 'cart',
    component: () => import('./view/cart'),
    meta: {
      title: '购物车'
    }
  },
  {
    name: 'chat',
    component: () => import('./view/chat'),
    meta: {
      title: '客服'
    }
  },
  {
    name: 'profile',
    component: () => import('./view/user/profile'),
    meta: {
      title: '会员中心'
    }
  },
  {
    name: 'signin',
    component: () => import('./view/user/signin'),
    meta: {
      title: '登录'
    }
  },
  {
    name: 'signup',
    component: () => import('./view/user/signup'),
    meta: {
      title: '注册'
    }
  },
  {
    name: 'address',
    component: () => import('./view/address'),
    meta: {
      title: '收货地址'
    }
  },
  {
    name: 'address_create',
    component: () => import('./view/address/create'),
    meta: {
      title: '收货地址'
    }
  }
];
routes.forEach(route => {
  route.path = route.path || '/' + (route.name || '');
});

const router = new Router({ routes });

router.beforeEach((to, from, next) => {
  const title = to.meta && to.meta.title;
  if (title) {
    document.title = title;
  }
  next();
});
export {
  router
};
