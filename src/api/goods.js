'use strict';
import axios from 'axios';

export default {
  fetchProductsByCollectionName(cond) {
    cond = cond || {};
    let url = '/api/v1/frontend/fetchProductsByCollectionName';
    if (cond.name) {
      url += '?' + cond.name;
    }
    return axios.get(url);
  },
  goods(id) {
    return axios.get('/api/v1/frontend/products/' + id);
  }
};
