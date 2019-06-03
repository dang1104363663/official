<template>
  <div class="articletb">
    <div class="top_image"></div>
    <div class="table">
      <el-table
        :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)" border style="width: 100%">
        <el-table-column prop="ticontent" label="文章描述" :show-overflow-tooltip="true" >
        </el-table-column>
        <el-table-column prop="tiname" label="姓名" width="180" :show-overflow-tooltip="true" >
        </el-table-column>
        <el-table-column prop="tidate" label="日期" width="180" :show-overflow-tooltip="true" >
        </el-table-column>
      </el-table>
      <div class="pagination">
        <el-pagination layout="prev, pager, next"
                       :total="tableData.length"
                       class="page"
                       :page-size="pagesize"
                       :current-page="currentPage"
                       @current-change="handleCurrentChange"
                       @size-change="handleSizeChange">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from  'axios';
  export default {
    name: "articletb",

    data() {
      return {
        pagesize: 10,
        currentPage:1,
        tableData: []
      }
    },
    created() {
      function getUserAccount() {
        return axios.get('http://192.168.1.105:8080/getAllTextAndImg');
      }

      function getUserPermissions() {
        return axios.get('https://www.easy-mock.com/mock/5cdf840a726bd91d2c119d7b/jcbing');
      }

      let vue = this;
      axios.all([getUserAccount(), getUserPermissions()])
        .then(axios.spread(function (acct, perms) {
          console.log(acct);
          vue.tableData = acct.data.data;
        }));
    },
    methods:{
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        this.currentPage = 1;
        this.pagesize = val;
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.currentPage = val;
      }
    }
  }
</script>

<style scoped>
  .top_image {
    background: url("./../assets/54_01_01.gif");
    width: 1024px;
    height: 252px;
  }

  .articletb {
    width: 1024px;
    margin: 0 auto;

  }
  .pagination{
    float: right;
  }

</style>
