'use strict';
import axios from 'axios';

export default {
  addToCart(author, cart) {
    axios.put('/api/v1/frontend/goods_cart/' + author._id, cart);
  },
  removeFromCart(author, cart) {
    axios.put('/api/v1/frontend/goods_cart/' + author._id, cart);
  }
};
