<template>
  <el-menu
    :default-active="$route.name"
    class="el-menu-vertical-demo"
    background-color="#1442A0"
    text-color="#fff"
    active-text-color="#fff"
    router
    :collapse="$store.state.isCollapse"
    :collapse-transition="false"
  >
    <div class="top">
      <p class="t1">{{ $store.state.isCollapse ? '后台' : '祥源科技' }}</p>
      <!-- <p class="t1">祥源科技</p> -->
      <p class="t2" v-if="!$store.state.isCollapse">官网管理后台</p>
    </div>
    <el-menu-item v-for="item in tabData" :key="item.name" :index="item.name">
      <i :class="`el-icon-${item.icon}`"></i>
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      // 导航栏菜单
      tabData: [],
    };
  },
  mounted() {
    this.tabData = routerData;
  },
};
</script>
<style lang="scss" scoped>
.el-menu {
  width: auto;
  // height: 100%;
  .top {
    // padding: 1rem 4rem;
    margin-bottom: 1rem;
    color: #fff;
    text-align: center;
    border-bottom: 0.1rem solid #ccc;
    .t1 {
      font-size: 2rem;
      font-weight: bold;
      margin: 1rem;
    }
    .t2 {
      padding: 0 3rem;
      font-size: 2.5rem;
      font-weight: bold;
      margin: 0;
    }
  }
  i {
    font-size: 1.6rem;
    margin-right: 1rem;
    color: #fff;
  }
  .is-active {
    background-color: #40c1d7 !important;
  }
  .el-menu-item {
    text-align: center;
    font-size: 1.6rem;
  }
  .el-menu-item:hover {
    background-color: #40c1d7 !important;
    color: #fff !important;
  }
}
</style>
