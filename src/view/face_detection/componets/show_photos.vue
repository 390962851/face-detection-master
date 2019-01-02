<template>
  <Modal
    v-model="modal4"
    title="Modal Title"
    ok-text="OK"
    cancel-text="Cancel">
    <p>Something...</p>
    <p>Something...</p>
    <p>Something...</p>
  </Modal>
</template>

<script>
  export default {
    name: "",
    props:{
      show_model: Boolean,
    },
    data(){
      return{
        modal4:false,
      }
    },
    computed:{
    },
    watch:{
      show_model: function (newVal, oldVal) {
        if(newVal !==oldVal){
          this.show_model = newVal;
        };
      }
    },
  };
</script>

<style scoped>

</style>
