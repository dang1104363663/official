<template>
    <div class="artconcent">
      <div class="top_image"></div>
      <div class="top">
        <div class="top_icon01"></div>
        <div class="top_icon02"></div>
        <div class="top_text01"><span>文章</span></div>
        <div class="cutting_line"></div>
      </div>
      <div class="concent">{{tableData}}</div>
    </div>
</template>

<script>
  import axios from 'axios';
    export default {
        name: "artconcent",

      data(){
          return{
              tableData:''
          }
      },  created() {
        let  id=sessionStorage.getItem("id");
         let   baseurl='http://192.168.1.105:8080/';
        function getUserAccount() {

          return axios.get( baseurl+'getTextAndImgById/'+id);
        }

        function getUserPermissions() {
          return axios.get('https://www.easy-mock.com/mock/5cdf840a726bd91d2c119d7b/jcbing');
        }

        let vue = this;
        axios.all([getUserAccount(), getUserPermissions()])
          .then(axios.spread(function (acct, perms) {
            console.log(acct);
            vue.tableData = acct.data.data.ticontent;
          }));
      },

    }
</script>
<style scoped>
  .top_image {
    background: url("./../assets/54_01_01.gif");
    width: 1024px;
    height: 252px;
  }

  .artconcent {
    width: 1024px;
    margin: 0 auto;
  }
  .top{
    height: 55px;
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
  .cutting_line {
    float: left;
    position: relative;
    width: 1000px;
    top: 30px;
    left: 10px;
    border: 1px solid whitesmoke;
  }
  .concent{

    height: 100px;
    width: 100px;
  }
</style>
