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
  async fetchProducts({ commit }, cond) {
    const result = await goodsService.fetchProducts(cond);
    if (result.data && result.data.code === 0) {
      commit(types.FETCH_PRODUCTS, result.data.data);
    } else {
      commit(types.API_ERROR_500, result.data && result.data.message);
    }
  },
  async fetchProduct({ commit, id }) {
    const result = await goodsService.fetchProduct(id);
    if (result.data && result.data.code === 0) {
      commit(types.FETCH_ONE_PRODUCT, result.data.data);
    } else {
      commit(types.API_ERROR_500, result.data && result.data.message);
    }
  },
  async fetchCategories({ commit }) {
    const result = await goodsService.fetch_categories();
    if (result.data && result.data.code === 0) {
      commit(types.FETCH_CATEGORIES, result.data.data);
    } else {
      commit(types.API_ERROR_500, result.data && result.data.message);
    }
  }
};
