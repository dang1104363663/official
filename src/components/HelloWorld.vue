<template>
  <div class="hello">
    <div class="top_image"></div>
    <div class="silderShow"></div>
    <div class="LoverShow">
      <div class="Love_01">
        <div class="Lover_img"></div>
        <div class="Lover_name"><span>Lovername</span></div>
        <div class="Lover_age"><span>Loverage</span></div>
        <!--        <div class="Lover_height"><span>Loverheight</span></div>-->
        <!--        <div class="Lover_say"><span>Loversay</span></div>-->
      </div>
      <div class="Love_01">
        <div class="Lover_img"></div>
        <div class="Lover_name"><span>Lovername</span></div>
        <div class="Lover_age"><span>Loverage</span></div>
        <!--        <div class="Lover_height"><span>Loverheight</span></div>-->
        <!--        <div class="Lover_say"><span>Loversay</span></div>-->
      </div>
      <div class="Love_01">
        <div class="Lover_img"></div>
        <div class="Lover_name"><span>Lovername</span></div>
        <div class="Lover_age"><span>Loverage</span></div>
        <!--        <div class="Lover_height"><span>Loverheight</span></div>-->
        <!--        <div class="Lover_say"><span>Loversay</span></div>-->
      </div>
      <div class="Love_01">
        <div class="Lover_img"></div>
        <div class="Lover_name"><span>Lovername</span></div>
        <div class="Lover_age"><span>Loverage</span></div>
        <!--        <div class="Lover_height"><span>Loverheight</span></div>-->
        <!--        <div class="Lover_say"><span>Loversay</span></div>-->
      </div>
    </div>
    <div class="right_main">
      <div class="article">
        <div class="right_top">
          <div class="top_icon01"></div>
          <div class="top_icon02"></div>
          <div class="top_text01"><span>文章</span></div>
          <div class="cutting_line"></div>
          <div class="top_text02"><router-link to="/article">更多</router-link></div>
        </div>
        <div class="main">
          <div class="fixed">
          <el-table
            :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
            class="el-table"
            style=" width: 100%"
            :default-sort="{prop: 'date', order: 'descending'}" border>
            <el-table-column label=文章描述 :formatter="formatter"
                             :show-overflow-tooltip="true"  >
              <template slot-scope="scope">
                <div @click="getMore(scope.row)" >
                <span
                  @click="get(scope.row.tiid)"
                  style="cursor:pointer">{{scope.row.ticontent}}
                </span>
                </div>
              </template>
            </el-table-column>
            <el-table-column prop="tiname" label="姓名" sortable width="80"  :show-overflow-tooltip="true" >
            </el-table-column>
            <el-table-column prop="tidate" label="日期" sortable width="100"  :show-overflow-tooltip="true" >
            </el-table-column>
          </el-table>
        </div>
          <div class="pagination">
            <el-pagination layout="prev, pager, next"
                           :total="25"
                           class="page"
                           :pager-count="5"
                           :page-size="pagesize"
                           :current-page="currentPage"
                           @current-change="handleCurrentChange" @size-change="handleSizeChange">
            </el-pagination>
          </div>
        </div>
      </div>
      <!-- article部分结束 video部分开始-->
      <div class="video">
        <div class="right_top01">
          <div class="top_icon01"></div>
          <div class="top_icon02"></div>
          <div class="top_text01"><span>视频</span></div>
          <div class="top_text02"><router-link to="/video">更多</router-link></div>
          <div class="cutting_line01"></div>
        </div>
        <div class="video_main_top clear">
          <el-row>
            <el-col :span="6" v-for="(o, index) in 3" :key="o" :offset="index > 0 ? 3 : 0">
              <el-card class="el_card" :body-style="{ padding: '5px'}">
                <div class="el_card1">
                <img src="" class="image">
                <div style="padding: 20px;">
                  <span style="font-size: 10px">我是图片</span>
                  <div class="bottom clearfix_01">
                    <time class="time_01">{{ currentDate }}</time>
                    <el-button type="text" class="button" style="padding: 5px">操作按钮</el-button>
                  </div>
                </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </div>
        <!--视频主体上半部分结束，下半部分开始-->
        <div class="video_main_bottom clear">
          <el-row>
            <el-col :span="6" v-for="(o, index) in 3" :key="o" :offset="index > 0 ? 3 : 0">
              <el-card class="el_card" :body-style="{ padding:'5px'}">
                <div class="el_card2">
                  <img src="" class="image">
                  <div style="padding: 20px;">
                    <span style="font-size: 10px">我是图片</span>
                    <div class="bottom clearfix_02">
                      <time class="time_02">{{ currentDate }}</time>
                      <el-button type="text" class="button" style="padding: 5px">操作按钮</el-button>
                    </div>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'HelloWorld',
    data() {
      return {
        tableData: [],
        pagesize: 6,
        currentPage: 1,
        currentDate: "2019.5.26",
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

          vue.tableData = acct.data.data;
        }));
    },
    methods: {
      get:function(id){
        sessionStorage.setItem("id",id);
        window.location.href='http://localhost:8080/#/artconcent';
      },
      formatter(row, column) {
        return row.address;
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        this.currentPage = 1;
        this.pagesize = val;
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.currentPage = val;

      },
      getMore(row){

      }
    }
  }
</script>

<style >
  .top_image {
    background: url("./../assets/54_01_01.gif");
    width: 1024px;
    height: 252px;
  }

  .hello {
    width: 1024px;
    margin: 0 auto;
  }

  .silderShow {
    float: left;
    border: 1px solid red;
    height: 600px;
    width: 220px;
  }

  .LoverShow {
    float: left;
    border: 1px solid red;
    height: 600px;
    width: 260px;
    background-color: whitesmoke;
  }

  .right_main {
    float: left;
    height: 847px;
    width: 538px;
    border: 1px solid red;
  }
  .Love_01 {
    border-radius: 10px;
    margin: 35px auto;
    border: 1px solid red;
    height: 105px;
    width: 200px;
  }

  .Lover_img {
    border-radius: 10px;
    width: 80px;
    height: 80px;
    border: 1px solid red;
    margin: 10px;
  }

  .Lover_name {
    float: right;
    width: 80px;
    height: 20px;
    border: 1px solid red;
    position: relative;
    top: -85px;
    left: -25px;
  }

  .Lover_age {
    border: 1px solid red;
    float: right;
    height: 40px;
    width: 80px;
    position: relative;
    top: -60px;
    left: 58px;
  }

  .top_icon01 {
    float: left;
    height: 15px;
    width: 10px;
    background-color: yellowgreen;
    position: relative;
    left: 10px;
    top: 10px;
  }

  .top_icon02 {
    float: left;
    height: 15px;
    width: 10px;
    background-color: antiquewhite;
    position: relative;
    top: 25px;
  }

  .top_text01 {
    position: relative;
    float: left;
    top: 16px;
    left: 20px;
  }

  .top_text02 {
   position: relative;
    float: left;
    top: 12px;
    left: 400px;
  }

  .main {
    width: 537px;
    height: 255px;
  }
  .right_top{
    height: 55px;
  }
  .fixed{
    height: 220px;
  }
  .pagination{
    margin-top: 5px;
    float: right;
  }
  .cutting_line {
    float: left;
    position: relative;
    width: 460px;
    top: 48px;
    left: -15px;
    border: 1px solid whitesmoke;
  }

  .el-table th {
    padding: 3px 3px;
  }

  .el-table td {
    padding: 3px 0;
  }
  .video{

  height: 535px;
}
  .right_top01 {
    border-top:1px solid blanchedalmond;
   height: 55px;
   width: 537px;
  }
  .cutting_line01{
    margin:45px auto;
    width: 460px;
    border: 1px solid whitesmoke;
  }
  .video_main_top{
    width: 537px;
    height: 230px;
    position: relative;
    top: 0px;
    border: 1px solid black;
  }
  .time_01{
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix_01:before,
  .clearfix_01:after {
    display: table;
    content: "";
  }
  .clear{display: block;overflow: hidden;}
  .el_card1{
    float: left;
    position: relative;
  }
  .el_card{
    position: relative;
    top: 30px;
    margin: 10px;
  }

  .video_main_bottom{
    width: 537px;
    height: 245px;
    position: relative;
    top: 0px;
    border: 1px solid black;
  }
  .time_02 {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix_02:before,
  .clearfix_02:after {
    display: table;
    content: "";
  }
  .clear{display: block;overflow: hidden;}
  .el_card2{
    float: left;
    position: relative;
  }
  .el_card{
    position: relative;
    top: 30px;
    margin: 10px;
  }
</style>
