<template>
   <div class="the_whole_page">
     <div class="the_card">
       <el-card class="box-card_01">
         <div slot="header" class="clearfix_01">
           <span style="font-size: 15px;color: grey"><b>爱情宣言:</b>如我有三个糖。分伱两颗。一颗留着等伱心情不好的时候开给伱吃.</span>
            <!--喜欢并发私信按钮-->
           <el-tooltip content="点击喜欢发私信" placement="top">
           <el-button style="float: right;padding: 3px 0" type="text">
             <a href = "javascript:void(0)" onclick = "document.getElementById('light_01').style.display='block'"><i class="icon iconfont icon-fenzu"></i></a>
           </el-button>
           </el-tooltip>
           <!--悬停显示点赞-->
           <div class="zan">
             <el-tooltip content="点赞" placement="top">
               <div class="likeIcon-wrap">
                 <div class="like-icon" data-key="on"></div>
                 <div class="like-num">0</div>
               </div>
             </el-tooltip>
           </div>
           <!--浏览量-->
           <div class="the_view"><li class="views"><i class="icon iconfont icon-liulanliang-"></i><i class="viewCount"></i> views</li></div>
         </div>

         <div v-for="o in 1" :key="o" class="text item">
           <!--{{'列表内容 '+o}}-->
         </div>
       </el-card>
     </div>
     <div class="the_photo">
       <img src="https://photo.zastatic.com/images/photo/376360/1505438644/5549583712300493.png?scrop=1&crop=1&cpos=north&w=200&h=200">
     </div>
     <div class="the_header">
       <div class="the_name" id="app" style="color: purple">
         <strong>
           Coco
         </strong>
       </div>
       <div class="info_simple" style="color: purple">
         18岁|汉族|东北石油大学|本科|月入3000
       </div>
     </div>
     <div class="the_body">
       <el-card class="box-card_02">
         <div class="self_information">
            个人资料
           <el-tag class="_1">未婚</el-tag>
           <el-tag type="success" class="_2">18岁</el-tag>
           <el-tag type="info" class="_3">天蝎座</el-tag>
           <el-tag type="warning" class="_4">161cm</el-tag>
           <el-tag type="danger" class="_5">工作地:湛江遂溪县</el-tag>
           <el-tag type="info" class="_6">没有小孩</el-tag>
           <el-tag type="warning" class="_7">体型:一般</el-tag>
           <el-tag type="danger" class="_8">籍贯:广东湛江</el-tag>
         </div>
         <div class="like_do clear">
           兴趣爱好
         </div>
           <div style="color: grey" class="_111">喜欢的美食:山竹&nbsp&nbsp</div>
           <div style="color: grey" class="_222">喜欢做的事:和喜欢的人在一起 &nbsp&nbsp</div>
           <div style="color: grey" class="_333">难忘的电影:星际迷航&nbsp&nbsp</div>
           <div style="color: grey" class="_444">喜欢的一首歌:孤单北半球 一次就好&nbsp&nbsp</div>
           <div style="color: grey" class="_555">向往的目的地:北京 &nbsp&nbsp</div>


         <div class="love_who">
           心中的那个Ta
           <el-tag class="_1">未婚</el-tag>
           <el-tag type="success" class="_2">20岁以上</el-tag>
           <el-tag type="info" class="_3">白羊座</el-tag>
           <el-tag type="warning" class="_4">175cm</el-tag>
           <el-tag type="danger" class="_5">不要抽烟</el-tag>
           <el-tag type="info" class="_6">没有小孩</el-tag>
         </div>
       </el-card>
       <div class="color_tip_01" ></div>
       <div class="color_tip_02" ></div>
       <div class="color_tip_03" ></div>
     </div>

     <div class="right_nav">
       <el-card class="box-card_03">
         <div slot="header" class="clearfix_02">
           <div class="icon_right"><i class="icon iconfont icon-cupid"></i></div>
           <div class="font_position"><span>推荐</span></div>
           <div class="the_more"><el-button style="float: right; padding: 3px 0" type="text">更多&raquo</el-button></div>
         </div>
         <div class="nav_photo">
           <div class="pho_01">
               <img src="https://photo.zastatic.com/images/photo/27215/108857647/1510244464192.jpg?scrop=1&crop=1&cpos=north&w=100&h=100">
           </div>
             <div class="pho_02">
               <img src="https://photo.zastatic.com/images/photo/25435/101736896/12797688545935087.png?scrop=1&crop=1&cpos=north&w=100&h=100">
             </div>
             <div class="pho_03">
               <img src="https://photo.zastatic.com/images/photo/27522/110084062/100776277983864424.png?scrop=1&crop=1&cpos=north&w=100&h=100">
             </div>
         </div>
       </el-card>
     </div>

     <div id="light_01" class="white_content_01">
       <div class="the_form_01">
         <el-form ref="form" :model="form" label-width="80px">
           <b style="font-size: 20px;color: rebeccapurple">怎样才能联系到您呢?</b>
           <div class="sank_input">
           <el-form-item label="姓名">
             <el-input v-model="form.name"></el-input>
           </el-form-item>
           <el-form-item label="电话">
             <el-input v-model="form.tel"></el-input>
           </el-form-item>
           <el-form-item label="QQ">
             <el-input v-model="form.QQ"></el-input>
           </el-form-item>
           <el-form-item label="微信">
             <el-input v-model="form.Wchat"></el-input>
           </el-form-item>
           <el-form-item label="单位">
             <el-input v-model="form.job"></el-input>
           </el-form-item>
             <a href = "javascript:void(0)" onclick = "document.getElementById('light_02').style.display='block'"> <el-button type="primary" plain>主要按钮</el-button></a>
           </div>
         </el-form>
       </div>
       <!--表单一的关闭按钮-->
       <div class="the_close_icon">
       <a href = "javascript:void(0)" onclick = "document.getElementById('light_01').style.display='none'"><i class="icon iconfont icon-guanbi"></i></a>
      </div>
     </div>
     <!--表单一结束，表单二开始-->
     <div id="light_02" class="white_content_02">
     <el-card class="box-card">
       <div slot="header" class="clearfix">
        <span>妹子信息</span>
        <el-button style="float: right; padding: 3px 0" type="text"> <a href = "javascript:void(0)" onclick = "document.getElementById('light_02').style.display='none'"><i class="icon iconfont icon-guanbi"></i></a></el-button>
       </div>
       <div class="the_names" v-model="tadename">
         {{'姓名：'+tadename}}
       </div>
       <div class="the_names" v-model="telphones">
         {{'电话：'+telphones}}
       </div>
       <div class="the_names" v-model="penguin">
         {{'QQ：'+penguin}}
       </div>
       <div class="the_names" v-model="wechat">
         {{'微信：'+wechat}}
       </div>
       <div class="the_names" v-model="the_mail">
         {{'邮箱：'+the_mail}}
       </div>
     </el-card>
     </div>
   </div>
</template>
<!--<script src="${pageContext.request.contextPath}/js/jquery.min.js"></script>
<script src="${pageContext.request.contextPath}/js/jquery.cookie.js"></script>-->
<script>
  /*function increaseViewCount() {
    if($.cookie("viewId")!=$){articleCustom.articleId}} {
      $.ajax({
        async: false,
        type:"POST",
        url:"${pageContext.request.contextPath}/article/view",
        data: {articleId:${articleCustom.articleId}},
        dataType:"text",
        success:function (data){
          $(".viewCount").html(data);
          $.cookie(
            "viewId"
            ${articleCustom.articleId},//需要cookie写入的业务
            {
              "path":"/", //cookie的默认属性
            }
          );
        },
        error:function()
        {
          //alert("获取数据出错!");
        },
      });
    };
  increaseViewCount();*/


  $(document).ready(function () {
    // likeClickCount
    $(".like-icon").on('click', function () {
      likeClickCount();
    })
  })
  // likeClickCount
  function likeClickCount() {
//Number函数将对象的值转换成数字
    var like_num = Number($('.like-num').html());
    if ($('.like-icon').attr('data-key') == 'on') {
      $('.like-icon').addClass('on');
      // like-num add
      like_num = like_num + 1;
      $('.like-num').html(like_num);
      $('.like-icon').attr('data-key', '');
    } else {
      $('.like-icon').removeClass('on');
      like_num = like_num - 1;
      $('.like-num').html(like_num);
      $('.like-icon').attr('data-key', 'on');
    }
  }
    export default {
        name: "Date.vue",
      data() {
        return {
          form: {
            name: '',
            tel: '',
            QQ: '',
            Wchat: '',
            job: '',
            //delivery: false,
            //type: [],
            //resource: '',
            //desc: ''
          },
          card:{
              tadename:'',
              telphones:'',
              penguin:'',
              wechat:'',
              the_mail:'',

          }
        }
      },
      // ajax data
     /* var:videoUrl = "接口地址",

  $:ajax({
    type: "get",
    url: videoUrl,
    dataType: "json",
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    success: function (data) {
      var data = data.data;
      $('.like-num').html(data.praiseCnt);
    }
  }),*/
      created() {
        axios.get('http://192.168.1.105:8080')
          .then(response=>{
            console.log(response);
            this.zan=response.data;
          })
          .catch(error=>{
            console.log(error);
            alert('网络错误，不能访问');
          })
      }
    }
</script>

<style>
  * {
    margin: 0px;
    padding: 0px;
  }
  ul{ list-style: none}
  li{list-style: none}
  a{text-decoration: none;text-decoration-color: red}
  .clear{display: block;overflow: hidden}
.the_header{
  border: 1px ;
  margin: -10px;
  height: 120px;
  width: 1280px;
  background: -webkit-linear-gradient(left top,#9966FF,#FFCCCC);

}
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix_02:before,
  .clearfix_02:after {
    display: table;
    content: "";
  }
  .clearfix_02:after {
    clear: both
  }
  .right_nav{
    position: relative;
  }
  .box-card_03 {
    position: relative;
    top: -30px;
    left: 930px;
    width: 320px;
    height: 500px;
    border-radius: 10px;
  }
  .the_photo>img{
    position: absolute;
    left: 50px;
    top: 20px;
    height: 120px;
    width: 120px;
    border-radius: 10px;
  }
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix_01:before,
  .clearfix_01:after {
    display: table;
    content: "";
  }
  .clearfix_01:after {
    clear: both
  }

  .box-card_01 {
    border: 1px ;
    position: absolute;
    left: 22px;
    top: 70px;
    height: 120px;
    width: 880px;
    border-radius: 10px;
  }
  .the_name{
    position: absolute;
    top: 28px;
    left: 170px;
  }
  .info_simple{
    position: absolute;
    top: 40px;
    left: 170px;
  }
  .text {
    font-size: 14px;

  }

  .item {
    padding: 18px 0;
  }

  .box-card_02 {
    position: absolute;
    height: 370px;
    width: 880px;
    top: 200px;
    left: 20px;
    border-radius: 10px;
  }
  .color_tip_01{
    position: absolute;
    left: 50px;
    top: 220px;
    background-color: #9966FF;
    height: 20px;
    width: 5px;
  }
  .color_tip_02{
    position: absolute;
    left: 50px;
    top: 320px;
    background-color: #9966FF;
    height: 20px;
    width: 5px;
  }
  .color_tip_03{
    position: absolute;
    left: 50px;
    top: 450px;
    background-color: #9966FF;
    height: 20px;
    width: 5px;
  }

  .clearfix_01{
    position: absolute;
    top: 5px;
    left: 150px;
  }
  .font_position {

    left: 10px;
    font-size: 20px;
    color: grey;
  }
  .self_information{
    font-size: 20px;
    color: grey;
    position: absolute;
    left: 50px;
    top: 15px;
  }
  .like_do{
    font-size: 20px;
    color: grey;
    position: absolute;
    top: 115px;
    left: 50px;
  }
  .love_who {
    font-size: 20px;
    color: grey;
    top: 245px;
    position: absolute;
    left: 50px;
  }
  ._1{
    position: absolute;
    height: 30px;
    width: 50px;
    left: 30px;
    top: 40px;
    border-radius: 10px;
  }
  ._2{
    position: absolute;
    height: 30px;
    width: 50px;
    left: 100px;
    top: 40px;
    border-radius: 10px;
  }
  ._3{
    position: absolute;
    height: 30px;
    width: 50px;
    left: 160px;
    top: 40px;
    border-radius: 10px;
  }
  ._4{
    position: absolute;
    height: 30px;
    width: 50px;
    left: 230px;
    top: 40px;
    border-radius: 10px;
  }
  ._5{
    position: absolute;
    height: 30px;
    width: 110px;
    left: 300px;
    top: 40px;
    border-radius: 10px;
  }
  ._6{
    position: absolute;
    height: 30px;
    width: 60px;
    left: 420px;
    top: 40px;
    border-radius: 10px;
  }
  ._7{
    position: absolute;
    height: 30px;
    width: 70px;
    left: 500px;
    top: 40px;
    border-radius: 10px;
  }
  ._8{
    position: absolute;
    height: 30px;
    width: 80px;
    left: 600px;
    top: 40px;
    border-radius: 10px;
  }
  ._111{
    position: absolute;
    left: 80px;
    top:150px
  }
  ._222{
    position: absolute;
    left: 80px;
    top:170px
  }
  ._333{
    position: absolute;
    left: 80px;
    top:190px
  }
  ._444{
    position: absolute;
    left: 350px;
    top: 170px;
  }
  ._555{
    position: absolute;
    left: 350px;
    top: 150px;
  }
  .pho_01{
    position: absolute;
    left: 20px;
    top: 100px;
  }
  .pho_02{
  position: absolute;
    left: 20px;
    top: 220px;
  }
  .pho_03{
position: absolute;
    left: 20px;
    top: 350px;
  }
  .icon_right{
    position: absolute;
    top: 20px;
    left: 120px;
  }

  .white_content_01 {
    display: none;
    position: absolute;
    top: 100px;
    left: 250px;
    width: 350px;
    height: 450px;
    padding: 20px;
    border: 10px solid #FFCCCC;
    background-color: white;
    z-index:1002;
    overflow: auto;
    border-radius: 10px;
  }
  .white_content_02 {
    display: none;
    position: absolute;
    top: 100px;
    left: 250px;
    width: 350px;
    height: 450px;
    padding: 20px;
    border: 10px solid #FFCCCC;
    background-color: white;
    z-index:1002;
    overflow: auto;
    border-radius: 10px;
  }
  .sank_input{
    position: absolute;
    top: 70px;
  }
  .the_close_icon{
    position: absolute;
    left: 350px;
    top: 10px;
  }
  .zan{
    margin: auto;
  }
  .likeIcon-wrap {
    position: absolute;
    left: 680px;
    top: 35px;
    z-index: 5;
  }
  .like-icon {
    width: 32px;
    height: 32px;
    z-index: 7;
    background-size: 32px 32px;
    background: url("../assets/zan.png")no-repeat center;
  }

  .on {
    background-size: 32px 32px;
    background: url("../assets/zan_red.png")no-repeat center;
  }

  .like-num{
    position: absolute;
    width: 32px;
    height: 32px;
    margin-top: 10px;
    color: #ebebeb;
    font-size: 30px;
  }
</style>
