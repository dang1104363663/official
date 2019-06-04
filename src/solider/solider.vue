<template>
    <div class="solider" @click="add()">

    </div>
</template>

<script>
    export default {
        name: "solider",
      data(){
          return{

          }
      },
      methods: {
        add: function () {
          var myDate=new Date();
          console.log(myDate);
        }
      }
    }
</script>

<style scoped>
  .solider{
    width: 400px;
    height: 1000px;
    border: 1px solid red;
  }

</style>
