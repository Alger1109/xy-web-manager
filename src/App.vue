<template>
  <el-container>
    <el-aside width="auto"><ManagerAside /></el-aside>
    <el-container>
      <el-header><ManagerHeader /></el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import ManagerHeader from '@/components/ManagerHeader.vue';
import ManagerAside from '@/components/ManagerAside.vue';
export default {
  data() {
    return {};
  },
  components: { ManagerAside, ManagerHeader },
};
</script>
<style lang="scss">
html {
  font-size: 10px;
  height: 100%;
}
.el-container {
  height: 100%;
  .el-aside {
    height: 100vh;
    background-color: #1442a0;
  }
  .el-header {
    height: 4rem !important;
    background-color: #fff;
    padding: 0 !important;
  }
  .el-main {
    height: calc(100vh - 4rem) !important;
    background-color: #f4f4f4;
    color: #333;
    padding: 0;
  }
}
</style>
