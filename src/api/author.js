'use strict';
import axios from 'axios';

export default {
  signin(user) {
    axios.post('api/v1/frontend/user/signin', user);
  },
  signup(user) {
    axios.post('api/v1/frontend/user/signup', user);
  },
  signout(user) {
    axios.post('api/v1/frontend/user/signout', user);
  }
};
