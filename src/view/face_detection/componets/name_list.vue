<template>
  <div style="margin-top: 10px">
    <Button @click="value4 = true" type="primary">区域编辑</Button>
    <!--<p>注:区域编辑包括:区域添加,区域编辑</p>-->
    <Drawer :closable="true" width="540" v-model="value4">
      <Tabs>
        <TabPane label="区域信息列表" icon="logo-apple">
          <div class="demo-drawer-profile">
          <Row style="height: 250px">
            <Col>
            <Form ref="formValidate" :model="formValidate" label-position="left"
                  :rules="ruleValidate">
              <Row>
                <Col span="14">
                <FormItem label="区域名称:" prop="name">
                  <Input style="width: 200px" v-model="formValidate.name" placeholder="请输入名称..."></Input>
                </FormItem>
                </Col>
                <Col span="10">
                <FormItem label="区域面积:" prop="area">
                  <Input style="width: 120px" v-model="formValidate.area" placeholder="请输入面积..." number></Input>
                </FormItem>
                </Col>
              </Row>
              <Row>
                <Col>
                <FormItem label="区域位置:" prop="location">
                  <Input style="width: 400px" v-model="formValidate.location" placeholder="请输入位置..."></Input>
                </FormItem>
                </Col>
              </Row>
              <Row>
                <Col>
                <FormItem label="区域描述:" prop="remark">
                  <Input style="width: 410px" type="textarea" v-model="formValidate.remark" placeholder="请输入区域描述..."></Input>
                </FormItem>
                </Col>
              </Row>
              <Row>
                <Col span="16"></Col>
                <Col span="8">
                <FormItem>
                  <Button type="primary" @click="handleSubmit('formValidate')">确认</Button>
                  <Button @click="handleReset('formValidate')" style="margin-left: 8px">取消</Button>
                </FormItem>
                </Col>
              </Row>
            </Form>
            </Col>
          </Row>
        </div>
          <!--<Divider/>-->
          <Tag :style="pStyle">区域列表</Tag>
          <div class="demo-drawer-profile">
            <table-list :signal="singnal"></table-list>
          </div>
        </TabPane>
        <TabPane label="摄像头信息列表" icon="logo-windows">
          <table-head></table-head>
        </TabPane>
      </Tabs>
    </Drawer>
  </div>
</template>
<script>
  import tableList from './table_list';///所有区域列表信息
  import tableHead from './table_head'; ///摄像头信息
  export default {
    name: 'name_list',
    components: {
      tableList,
      tableHead,
    },
    data() {
      const validateAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('区域面积不能为空'));
        } else {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字'));
          }else {
            callback();
          }
        }
      };
      return {
        singnal: false,
        value4: false,
        pStyle: {
          fontSize: '16px',
          color: 'rgba(0,0,0,0.85)',
          lineHeight: '24px',
          display: 'block',
          marginBottom: '16px'
        },
        formValidate: {
          name: '',
          location: '',
          area: '',
          remark: '',
        },
        ruleValidate: {
          name: [
            {required: true, message: '区域名称不能为空', trigger: 'blur'}
          ],
          location: [
            {required: true, message: '区域位置不能为空', trigger: 'blur'},
          ],
          area: [
            // {required: true, message: '区域面积不能为空', trigger: 'blur'},
            {validator: validateAge, trigger: 'blur'},
          ],
          // remark: [
          //   {message: '区域名称不能为空', trigger: 'change'}
          // ],
        },
      };
    },
    methods: {
      ///获取添加区域信息
      handleSubmit (name) {
        this.$refs[name].validate((valid) => {
          console.log("==valid==",valid);
          if (valid) {
            let a = this.formValidate;
            this.AddRegionMessage(a);
            console.log("===formValidate===",a);
            this.$Message.success('添加成功!');
          } else {
            this.$Message.error('添加失败!');
          }
        })
      },
      handleReset (name) {
        this.$refs[name].resetFields();
      },
      AddRegionMessage(data){
        this.$http.AddRegionMessage(data)
          .then(res =>{
            this.singnal = true;
            console.log('===结果===',res.data);
          })
          .catch(error =>{
            console.log(error);
          });
      },
    },
    created(){

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
