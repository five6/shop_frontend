<template>
  <div id="app">
     <router-view />
  </div>
</template>

<script>
import { Cell, CellGroup, Icon } from 'vant';

export default {
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Icon.name]: Icon
  }
};
</script>

<style>
body {
  font-size: 16px;
  background-color: #f8f8f8;
  -webkit-font-smoothing: antialiased;
}

.van-cell__title .van-icon {
  font-size: 18px;
}
</style>
