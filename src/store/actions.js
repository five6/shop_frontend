'use strict';

import userService from '../api/author';
import goodsService from '../api/goods';
import cartService from '../api/cart';
import * as types from './mutation-types';

export default {
  // author
  async signin({ commit, user }) {
    const data = await userService.signin(user);
    if (data.code === 0) {
      commit(types.SIGNIN, data.data);
    } else {
      commit(types.API_ERROR_500, data.message);
    }
  },
  async signup({ commit, user }) {
    const data = await userService.signup(user);
    if (data.code === 0) {
      commit(types.SIGNUP, data.data);
    } else {
      commit(types.API_ERROR_500, data.message);
    }
  },
  async signout({ commit, user }) {
    const data = await userService.signout(user);
    if (data.code === 0) {
      commit(types.SIGNUP, data.data);
    } else {
      commit(types.API_ERROR_500, data.message);
    }
  },
  // goods
  async addToCart({ commit, author, goods }) {
    const data = await cartService.addToCart(author, goods);
    if (data.code === 0) {
      commit(types.ADD_TO_CART, data.data);
    } else {
      commit(types.API_ERROR_500, data.message);
    }
  },
  async removeFromCart({ commit, author, cart }) {
    const data = await cartService.removeFromCart(author, cart);
    if (data.code === 0) {
      commit(types.REMOVE_FROM_CART, data.data);
    } else {
      commit(types.API_ERROR_500, data.message);
    }
  },
  async fetchProductsByCollectionName({ commit }) {
    const result = await goodsService.fetchProductsByCollectionName();
    if (result.data && result.data.code === 0) {
      commit(types.FETCH_GOODS, result.data.data);
    } else {
      commit(types.API_ERROR_500, result.data && result.data.message);
    }
  },
  async fetchGoods({ commit, id }) {
    const result = await goodsService.goods(id);
    if (result.data && result.data.code === 0) {
      commit(types.FETCH_GOODS, result.data.data);
    } else {
      commit(types.API_ERROR_500, result.data && result.data.message);
    }
  }
};
