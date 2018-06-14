'use strict';

import * as types from './mutation-types';

export default {
  [types.SIGNIN](state) {},
  [types.SIGNUP](state) {},
  [types.SIGNOUT](state) {},
  [types.FETCH_PRODUCTS](state, products) {
    state.products = products;
  },
  [types.FETCH_ONE_PRODUCT](state, product) {
    state.product = product;
  },
  [types.FETCH_CATEGORY](state) {},
  [types.ADD_TO_CART](state) {},
  [types.REMOVE_FROM_CART](state) {},
  [types.ADD_ADDRESS](state) {},
  [types.UPDATE_ADDRESS](state) {},
  [types.REMOVE_ADDRESS](state) {},
  [types.FETCH_ADDRESS](state) {}
};
