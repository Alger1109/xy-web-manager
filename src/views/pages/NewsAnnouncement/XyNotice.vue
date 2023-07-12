<template>
  <div class="container">
    <el-row :gutter="20">
      <el-col :span="4" class="r-left">
        <div class="l-top"><span>报告公示</span><i>+</i></div>
        <ul>
          <li>安全评价报告公示</li>
          <li>风险评价报告公示</li>
          <li>环境评价报告公示</li>
          <li>职业卫生评价报告公示</li>
          <li>节能评估评价报告公示</li>
        </ul>
      </el-col>
      <el-col :span="20">
        <div class="c-top">
          <div class="t-left">
            首页推荐:
            <el-select v-model="value">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
            搜索：<el-input v-model="ipt" placeholder="请输入关键字"></el-input>
            <el-button type="primary" @click="handleSearch">搜索</el-button>
            <el-button @click="handleReset">重置</el-button>
          </div>
          <div class="t-right">
            <el-button @click="handleOut">导出</el-button>
            <el-button @click="handleDelete">删除</el-button>
            <el-button type="primary" @click="handleAdd">新增</el-button>
          </div>
        </div>
        <div class="c-footer">
          <el-table
            ref="multipleTable"
            :data="tableData"
            tooltip-effect="dark"
            style="width: 100%"
          >
            <!-- height="572" -->
            <el-table-column type="selection" width="80"> </el-table-column>
            <el-table-column prop="title" label="标题"> </el-table-column>
            <el-table-column label="推荐至首页" width="150">
              <template slot-scope="scope">
                <el-switch
                  active-color="#1890FF"
                  inactive-color="#ccc"
                  v-model="scope.row.status"
                  :active-value="true"
                  :inactive-value="false"
                  @change="change(scope.row)"
                ></el-switch>
              </template>
            </el-table-column>
            <el-table-column prop="name" label="操作人" width="150">
            </el-table-column>
            <el-table-column label="更新时间" width="200">
              <template slot-scope="scope">{{ scope.row.date }}</template>
            </el-table-column>
            <el-table-column label="操作" width="150">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  type="text"
                  @click="handleEdit(scope.$index, scope.row)"
                  >编辑</el-button
                >
                <el-button
                  size="mini"
                  type="text"
                  @click="handleLook(scope.$index, scope.row)"
                  >预览</el-button
                >
              </template>
            </el-table-column>
          </el-table>
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :page-sizes="pageSizes"
            :current-page="currentPage"
            :page-size="pageSize"
            layout="total, ->, prev, pager, next, sizes,jumper"
            :total="total"
          >
          </el-pagination></div
      ></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          value: '全部',
          label: '全部',
        },
        {
          value: '推荐',
          label: '推荐',
        },
        {
          value: '未推荐',
          label: '未推荐',
        },
      ],
      value: '全部',
      ipt: '',
      tableData: [
        {
          title: '大苏打空间的哈',
          status: false,
          name: '王小虎',
          date: '2016-05-03',
        },
        {
          title: '大苏打空间的哈',
          status: false,
          name: '王小虎',
          date: '2016-05-03',
        },
        {
          title: '大苏打空间的哈',
          status: false,
          name: '王小虎',
          date: '2016-05-03',
        },
        {
          title: '大苏打空间的哈',
          status: false,
          name: '王小虎',
          date: '2016-05-03',
        },
        {
          title: '大苏打空间的哈',
          status: false,
          name: '王小虎',
          date: '2016-05-03',
        },
        {
          title: '大苏打空间的哈',
          status: false,
          name: '王小虎',
          date: '2016-05-03',
        },
        {
          title: '大苏打空间的哈',
          status: false,
          name: '王小虎',
          date: '2016-05-03',
        },
        {
          title: '大苏打空间的哈',
          status: false,
          name: '王小虎',
          date: '2016-05-03',
        },
        {
          title: '大苏打空间的哈',
          status: false,
          name: '王小虎',
          date: '2016-05-03',
        },
        {
          title: '大苏打空间的哈',
          status: false,
          name: '王小虎',
          date: '2016-05-03',
        },
      ],
      currentPage: 1,
      pageSize: 10,
      pageSizes: [10, 20, 30, 40],
      total: 200,
    };
  },
  methods: {
    // 搜索按钮
    handleSearch() {
      console.log('搜索');
    },
    // 重置按钮
    handleReset() {
      console.log('重置');
    },
    // 导出按钮
    handleOut() {
      console.log('导出');
    },
    // 删除按钮
    handleDelete() {
      console.log('删除');
    },
    // 新增按钮
    handleAdd() {
      console.log('新增');
    },
    // 编辑按钮
    handleEdit(i, row) {
      console.log('编辑');
    },
    // 预览按钮
    handleLook(i, row) {
      console.log('预览');
    },
    // 推荐至首页按钮
    change(row) {
      console.log(row);
    },
    // 内容改变
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    // 当前页面
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
  },
};
</script>
<style lang="scss" scoped>
.container {
  height: 100%;
  padding-left: 1rem;
  .el-row {
    background-color: #fff;
    .r-left {
      height: 100vh;
      margin: 2rem 0;
      border-right: 1px solid #ccc;
      .l-top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 1rem;
        span {
          font-weight: bold;
        }
        i {
          text-align: center;
          width: 3rem;
          height: 3rem;
          line-height: 2.5rem;
          border: 0.2rem solid #1442a0;
          color: #1442a0;
          border-radius: 50%;
          font-size: 2rem;
        }
      }
      ul {
        padding: 0 1rem;
        list-style: none;
        li {
          height: 4rem;
          line-height: 4rem;
          padding-left: 2rem;
          border-bottom: 0.2rem solid #027db4;
          margin-bottom: 1rem;
        }
      }
    }
  }

  .c-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 1.5rem;
    .t-left {
      .el-select {
        width: 15rem;
        margin-right: 4rem;
      }
      .el-input {
        width: 20rem;
        margin-right: 1rem;
      }
    }
    .t-right {
      button {
        width: 9rem;
      }
    }
  }
  .c-footer {
    .el-pagination {
      margin: 2rem 0;
      padding: 0 2rem;
    }
  }
}
</style>
