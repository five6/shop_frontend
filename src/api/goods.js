'use strict';
import axios from 'axios';
const url = 'api/v1/frontend/goods';

export default {
  fetchProducts(cond) {
    let u = '';
    if (cond.name) {
      u += '?name=' + cond.name;
    } else if (cond.page && cond.size) {
      u += '?page=' + cond.page + '&size=' + cond.size;
    }
    axios.get(u);
  },
  goods(id) {
    axios.get(url + '/' + id);
  }
};
