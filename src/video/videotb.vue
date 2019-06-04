<template>
  <div class="videotb">
  <div class="top_image"></div>
    <div  class="player">
    <div class="video">
        <video height="370"  width="650" controls preload>
          <source
            src="//vdse.bdstatic.com//7ac0a767d96438dbda03d77d95832cdc?authorization=bce-auth-v1/fb297a5cc0fb434c971b8fa103e8dd7b/2017-05-11T09:02:31Z/-1//5930904fa68c165a44845cdf7a1e25beee554b1497e41765d9937b984f232df7"
            type="video/mp4">
      </video>
    </div>
      <div class="table">
       <el-table :data="tableData3" height="370" border style="width: 100%"  >
         <el-table-column prop="address" label="视频信息" width="260">
         </el-table-column>
          <el-table-column prop="name" label="姓名" width="80">
          </el-table-column>
         <el-table-column prop="date" label="日期" width="100">
         </el-table-column>
        </el-table>
      </div>
  </div>
  </div>
</template>

<script>
    export default {
        name: "videotb",
      data(){
          return{
            tableData3: []
          }
      }
    }
</script>

<style scoped>
  .top_image {
    background: url("./../assets/54_01_01.gif");
    width: 1124px;
    height: 252px;
  }

  .videotb {
    width: 1124px;
    margin: 0 auto;
    height: 900px;
  }
  .video{
    float: left;
  }
  .table{
    float: right;
  }
</style>
