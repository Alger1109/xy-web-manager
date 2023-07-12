<template>
  <div class="m-header">
    <div class="m-top">
      <div class="h-left">
        <i
          :class="isfold ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
          @click="handleNav"
        ></i>
      </div>
      <div class="h-right">
        <div class="r1">
          <el-badge :value="notice" class="item" type="danger">
            <i class="el-icon-bell"></i>
          </el-badge>
        </div>
        <div class="r2">
          <el-dropdown>
            <span class="el-dropdown-link">
              <el-avatar :size="30" :src="circleUrl"></el-avatar>
              <span>系统管理员</span
              ><i class="el-icon-arrow-down el-icon--right"></i>
            </span>

            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>修改密码</el-dropdown-item>
              <el-dropdown-item>退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isfold: true,
      dateDay: null,
      timer: null,
      circleUrl:
        'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
      notice: 6,
    };
  },
  methods: {
    handleNav() {
      this.isfold = !this.isfold;
      this.$store.commit('collapseMenu');
    },
  },
};
</script>
<style lang="scss" scoped>
.m-header {
  .m-top {
    height: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 0.1rem solid #ccc;
    padding: 0 1rem;
    .h-left {
      i {
        font-size: 3rem;
      }
    }
    .h-right {
      display: flex;
      align-items: center;
      .r1 {
        .item {
          i {
            font-size: 2rem;
            margin-right: 0.5rem;
          }
        }
      }
      .r2 {
        span {
          display: flex;
          align-items: center;
          margin-left: 1rem;
        }
      }
    }
  }
}
</style>
