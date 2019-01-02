<template>
  <Upload action="/api/achievement/add_Excel_Achieve" :on-error="error">
    <Button icon="ios-cloud-upload-outline">上传图片</Button>
  </Upload>
</template>

<script>
  export default {
    name: "",
    data(){
      return{

      }
    },
    methods:{
      error(){
        this.$http.getStart()
          .catch(item=>{
          });
        this.$Message.success('上传成功！');
      }
    }
  };
</script>

<style scoped>

</style>
