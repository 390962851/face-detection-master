<template>
  <div style="margin-top: 10px">
    <Button @click="value4 = true" type="primary">班级名单</Button>
    <Drawer :closable="true" width="540" v-model="value4">
      <Row>
        <Col span="12">
        <p :style="pStyle">行政班级：{{className}}</p>
        </Col>
        <Col span="12">
        <p :style="pStyle">应到人数：{{classNumber}}</p>
        </Col>
      </Row>
      <Divider/>
      <p :style="pStyle">名单列表</p>
      <div class="demo-drawer-profile">
        <Table height="640" :columns="columns" :data="namelist"></Table>
      </div>
    </Drawer>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        value4: false,
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
            type: 'index',
            title: '序号',
          },
          {
            title: '姓名',
            key: 'name'
          },
          {
            title: '学号',
            key: 'date'
          },
        ],
        namelist: [
          {
            name: 'John Brown',
            date: '2016-10-03'
          },
          {
            name: 'Jim Green',
            date: '2016-10-01'
          },
          {
            name: 'Joe Black',
            date: '2016-10-02'
          },
          {
            name: 'Jon Snow',
            date: '2016-10-04'
          },
          {
            name: 'John Brown',
            date: '2016-10-03'
          },
          {
            name: 'Jim Green',
            date: '2016-10-01'
          },
          {
            name: 'Joe Black',
            date: '2016-10-02'
          },
          {
            name: 'Jon Snow',
            date: '2016-10-04'
          }
        ],
      };
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
