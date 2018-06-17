'use strict';
import axios from 'axios';

export default {
  fetchProducts(cond) {
    cond = cond || {};
    let url = '/api/v1/frontend/products';
    if (cond.name) {
      url += '?name=' + cond.name;
    }
    return axios.get(url);
  },
  fetchProduct(id) {
    return axios.get('/api/v1/frontend/products/' + id);
  },
  fetchCategories() {
    return axios.get('/api/v1/frontend/categories');
  }
};
