<template>
  <div style="margin-top: 10px">
    <Button @click="value4 = true" type="primary">班级名单</Button>
    <Drawer :closable="true" width="540" v-model="value4">
      <Row style="height: 20px">
        <Col span="12">
        <p :style="pStyle">行政班级：{{className}}</p>
        </Col>
        <Col span="12">
        <p :style="pStyle">应到人数：{{classNumber}}</p>
        </Col>
      </Row>
      <Divider/>
      <p :style="pStyle">未到人员</p>
      <div class="demo-drawer-profile">
        <Row>
          <Col>
          <Tag v-for="item in wordlist" color="red">{{ item.name }}
          </Tag>
          </Col>
        </Row>
      </div>
      <Divider/>

      <p :style="pStyle">名单列表</p>
      <div class="demo-drawer-profile">
        <Table border height="640" @on-selection-change="selection_name" :columns="columns" :data="namelist"></Table>
      </div>
    </Drawer>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        value4: false,
        wordlist: [],
        pStyle: {
          fontSize: '16px',
          color: 'rgba(0,0,0,0.85)',
          lineHeight: '24px',
          display: 'block',
          marginBottom: '16px'
        },
        className: '卓越161',
        classNumber: '40',
        columns: [
          {
            type: 'selection',
            width: 50,
            align: 'center'
          },
          {
            type: 'index',
            title: '序号',
          },
          {
            title: '姓名',
            key: 'name'
          },
          {
            title: '学号',
            key: 'sid'
          },
        ],
        namelist: [
          {
            name: 'John Brown',
            sid: '2016-10-03',
          },
          {
            name: 'Jim Green',
            sid: '2016-10-01',
          },
          {
            name: 'Joe Black',
            sid: '2016-10-02',
            id: 3,
          },
          {
            name: 'Jon Snow',
            sid: '2016-10-04',
            id: 4,
          },
          {
            name: 'John Brown',
            sid: '2016-10-03',
            id: 5,
          },
          {
            name: 'Jim Green',
            sid: '2016-10-01',
            id: 6,
          },
          {
            name: 'Joe Black',
            sid: '2016-10-02'
          },
          {
            name: 'Jon Snow',
            sid: '2016-10-04'
          }
        ],
      };
    },
    methods: {
      selection_name(status) {
        this.wordlist = status;
      },
      getAdminNews(){
        this.$http.getAdminNews()
          .then(res =>{
            // console.log(res.data);
            this.userName = res.data.admin.name;
          })
          .catch(error =>{
            console.log(error);
          });
      },
    },
    created(){
      // this.getAdminNews();
    }
  };
</script>
<style>
  .demo-drawer-profile {
    font-size: 14px;
  }

  .demo-drawer-profile .ivu-col {
    margin-bottom: 12px;
  }
</style>
