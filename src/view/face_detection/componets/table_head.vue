<template>
  <div>
    <Row :gutter="20">
      <Col :gutter="20">
        <Tag type="border" color="red">选择区域：</Tag>
        <i-select size="small" v-model="gid" clearable style="width:130px;">
          <Option v-for="item in selectData" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </i-select>
        <Button @click="modal4 = true" type="warning" size="small" style="margin-left: 200px">+ 添加</Button>
      </Col>
      <!--<Divider/>-->
      <Col style="margin-top: 20px">
        <Table height="640" :columns="columns" :data="data_list"></Table>
      </Col>
    </Row>

    <Modal v-model="modal4" title="编辑摄像头信息" ok-text="确认" cancel-text="取消"
           @on-ok="add_head" @on-cancel="cancel_edit">
      <div style="margin-left: 20px; margin-bottom: 20px">
        <label style="margin-right: 20px">标签类型</label>
        <Input v-model="formHead.name" clearable placeholder="标签类型..." style="width: 350px" />
      </div>
      <div style="margin-left: 20px; margin-bottom: 20px">
        <span style="margin-right: 32px">标签名</span>
        <Input v-model="formHead.area" placeholder="输入标签名..." style="width: 350px" />
      </div>
      <div style="margin-left: 20px; margin-bottom: 20px">
        <span style="margin-right: 32px">权重：</span>
        <Input v-model="formHead.location" placeholder="输入权重..." style="width: 350px" />
      </div>
    </Modal>
  </div>
</template>

<script>
  export default {
    name: "table_list",
    data(){
      return {
        modal4: false,
        formHead: {
          name: '',
          location: '',
          area: '',
        },
        gid: '',
        selectData: [],
        columns: [
          {
            title: '名称',
            key: 'name',
            width: 80,
          },
          {
            title: '位置',
            key: 'location',
          },
          {
            title: '面积',
            key: 'area',
            sortType: 'desc',
            sortable: true,
            width: 80,
          },
          {
            title: '描述',
            key: 'remark',
          },
          {
            title: '操作',
            key: 'action',
            align: 'center',
            width: 80,
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'warning',
                    size: 'small',
                    shape: 'circle',
                  },
                  style: {
                    marginRight: '2px'
                  },
                  on: {
                    click: () => {
                      this.show_head(params.row);
                    }
                  }
                }, '编辑'),
                h('Button', {
                  props: {
                    type: 'error',
                    size: 'small',
                    shape: 'circle',
                  },
                  style: {
                    marginRight: '2px'
                  },
                  on: {
                    click: () => {
                      this.del_head(params.row);
                    }
                  }
                }, '删除'),
              ]);
            }
          },
        ],
        data_list: [{
          id: 110,
          name: 'John Brown',
          area: 18,
          location: 'New York No. 1 Lake Park',
          remark: 'New York No. 1 Lake Park',
        }],
      }
    },
    methods:{
      add_head(){
        this.$Message.info('Clicked ok');
      },
      cancel_edit(){
        this.$Message.error('Clicked cancel');
      },
      show_head(params){
        this.modal4 = true;
        // console.log(params);
      },
      del_head(params){

      },
      //获取下拉列表的值
      getSelectData(){
        this.$http.getSelectData()
          .then(res =>{
            this.selectData = res.data.list ? res.data.list.map(item=>{
              return {
                value: item.pt_id,
                label: item.pt_name,
              }
            }) : [];
            if (this.selectData.length > 0) {
              this.gid = this.selectData[0].value;
            }
            // console.log("======",this.gid);
            // console.log(this.selectData);
          })
          .catch(error =>{
            console.log(error);
          });
      },
      ///更据id获取摄像头信息
      getAllRegionMessage(){
        this.$http.getAllRegionMessage()
          .then(res =>{
            if(res.data.publicterritory.length > 0){
              this.data_list = res.data.publicterritory.map(item =>{
                return {
                  id: item.pt_id,
                  name: item.pt_name,
                  location: item.pt_location,
                  remark: item.pt_remark,
                  area: parseInt(item.pt_area),
                }
              })
            }
            // console.log(this.data_list)
          })
          .catch(error =>{
            console.log(error);
          });
      }
    },
    created(){
      // this.getAllRegionMessage();
    },
  };
</script>

<style scoped>

</style>
