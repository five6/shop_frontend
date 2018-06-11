'use strict';
import axios from 'axios';
let url = '/api/v1/frontend/goods';

export default {
  fetchProducts(cond) {
    cond = cond || {};
    if (cond.name) {
      url += '?name=' + cond.name;
    }
    return axios.get(url);
  },
  goods(id) {
    return axios.get(url + '/' + id);
  }
};
