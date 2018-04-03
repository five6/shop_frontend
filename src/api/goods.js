'use strict';
import axios from 'axios';
const url = 'api/v1/frontend/goods';

export default {
  goods() {
    axios.get(url);
  },
  goodsDetail(id) {
    axios.get(url + '/' + id);
  }
};
