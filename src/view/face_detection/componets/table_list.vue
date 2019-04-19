<template>
  <div>
    <!--<Table height="640" :columns="columns" :data="data_list"></Table>-->
    <Table :columns="columns" :data="data_list" height="640">
      <template slot-scope="{ row, index }" slot="name">
        <Input type="text" v-model="editName" v-if="editIndex === index" />
        <span v-else>{{ row.name }}</span>
      </template>
      <template slot-scope="{ row, index }" slot="location">
        <Input type="text" v-model="editLocation" v-if="editIndex === index" />
        <span v-else>{{ row.location }}</span>
      </template>
      <template slot-scope="{ row, index }" slot="area">
        <Input type="text" v-model="editArea" v-if="editIndex === index" />
        <span v-else>{{ row.area }}</span>
      </template>
      <template slot-scope="{ row, index }" slot="remark">
        <Input type="text" v-model="editRemark" v-if="editIndex === index" />
        <span v-else>{{ row.remark }}</span>
      </template>
      <template slot-scope="{ row, index }" slot="action">
        <div v-if="editIndex === index">
          <Button @click="handleSave(row, index)" size="small" type="success">保存</Button>
          <Button @click="editIndex = -1" size="small" type="error">取消</Button>
        </div>
        <div v-else>
          <Button @click="handleEdit(row, index)" type="warning" size="small">操作</Button>
        </div>
      </template>
    </Table>
  </div>
</template>

<script>
  export default {
    name: "table_list",
    props: ['singnal'],
    data(){
      return {
        columns: [
          {
            title: '名称',
            slot: 'name',
            width: 80,
          },
          {
            title: '位置',
            slot: 'location',
          },
          {
            title: '面积',
            slot: 'area',
            sortType: 'desc',
            sortable: true,
            width: 80,
          },
          {
            title: '描述',
            slot: 'remark',
          },
          {
            title: '操作',
            slot: 'action',
            align: 'center',
            width: 80,
            // render: (h, params) => {
            //   return h('div', [
            //     h('Button', {
            //       props: {
            //         type: 'warning',
            //         size: 'small',
            //         shape: 'circle',
            //       },
            //       style: {
            //         marginRight: '2px'
            //       },
            //       on: {
            //         click: () => {
            //           this.show(params);
            //         }
            //       }
            //     }, '编辑'),
            //   ]);
            // }
          },
        ],
        data_list: [],
        editIndex: -1,  // 当前聚焦的输入框的行数
        editName: '',  // 第一列输入框
        editLocation: '',
        editArea: '',
        editRemark: '',
      }
    },
    watch: {
      singnal: function (newval, oldval) {
        if (newval !== oldval) {
          console.log("singnal===",newval);
          // this.getIdData();
        }
      },
    },
    methods:{
      handleEdit (row, index) {
        this.editName = row.name;
        this.editLocation = row.location;
        this.editArea = row.area;
        this.editRemark = row.remark;
        this.editIndex = index;
      },
      handleSave (row, index) {
        console.log("==row1==",row.id);
        console.log("==editArea==",this.editArea);
        this.data_list[index].name = this.editName;
        this.data_list[index].location = this.editLocation;
        this.data_list[index].area = this.editArea;
        this.data_list[index].remark = this.editRemark;
        this.editIndex = -1;
      },
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
      this.getAllRegionMessage();
    },
  };
</script>

<style scoped>

</style>
