import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
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
