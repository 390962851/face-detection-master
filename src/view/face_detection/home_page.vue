<style lang="less">
  @import "./home.less";
  @import "../../styles/common.less";
</style>
<template>
  <div class="home-main">
    <Card>
      <Row :gutter="20">
        <i-col :md="24" :lg="8">
          <Row class-name="home-page-row1" :gutter="10">
            <i-col :md="12" :lg="24" :style="{marginBottom: '10px'}">
              <Card>
                <Row type="flex" class="user-infor">
                  <i-col span="8">
                    <Row class-name="made-child-con-middle" type="flex" align="middle">
                      <!--<img class="avator-img" :src="avatorPath"/>-->
                      <Avatar class="avator-img" src="https://i.loli.net/2017/08/21/599a521472424.jpg"/>
                    </Row>
                  </i-col>
                  <i-col span="16" style="padding-left:6px;">
                    <Row class-name="made-child-con-middle" type="flex" align="middle">
                      <div>
                        <b class="card-user-infor-name">{{ welcomeMsg }}</b>
                        <!--<b class="card-user-infor-name">{{ user?user.nickName:'-' }}</b>-->
                        <b class="card-user-infor-name">{{userName}}管理员</b>
                        <p>super admin</p>
                      </div>
                    </Row>
                  </i-col>
                </Row>
                <div class="line-gray"></div>
                <Row class="margin-top-8">
                  <i-col span="8"><p class="notwrap">登录时间:</p></i-col>
                  <i-col span="16" class="padding-left-8">{{ lastLoginDate }}</i-col>
                </Row>
                <Row class="margin-top-8">
                  <i-col span="8"><p class="notwrap">登录IP:</p></i-col>
                  <!--<i-col span="16" class="padding-left-8">{{ user?user.lastLoginIp:'-' }}</i-col>-->
                  <i-col span="16" class="padding-left-8">127.0.0.0</i-col>
                </Row>
              </Card>
            </i-col>
          </Row>
        </i-col>
        <i-col :md="24" :lg="16">
          <Row :gutter="10">
            <i-col :xs="24" :sm="12" :md="12" :style="{marginBottom: '10px'}">
              <infor-card id-name="user_created_count"
                          :end-val="count.current_number"
                          iconType="ios-people"
                          color="#2d8cf0"
                          intro-text="当前人数"/>
            </i-col>

            <i-col :xs="24" :sm="12" :md="12" :style="{marginBottom: '10px'}">
              <infor-card
                id-name="visit_count"
                :end-val="count.current_number2"
                iconType="ios-eye"
                color="#ff9900"
                :iconSize="50"
                intro-text="摄像头数量"/>
            </i-col>
            <i-col :xs="12" :sm="12" :md="12" :style="{marginBottom: '10px'}">
              <p>当前区域：
                <Tag type="dot" color="primary">{{userName}}</Tag>
              </p>
              <p>工作状态：
                <Tag type="dot" v-for="item in counTag" :key="item"
                     :name="item" color="success">{{ item + 1 }}号正常</Tag>
              </p>
              <p>区域位置：
                <Tag type="dot" color="primary">{{userName}}</Tag>
              </p>
            </i-col>

            <!--区域编辑-->
            <i-col :xs="24" :sm="12" :md="12" :style="{marginBottom: '10px'}">
              <name-list></name-list>
            </i-col>
            <!--<i-col :xs="24" :sm="6" :md="6" :style="{marginBottom: '10px'}">-->
              <!--<Button @click="show_modal = true" type="success" ghost>效果展示</Button>-->
              <!--<Modal-->
                <!--v-model="show_modal"-->
                <!--title="识别效果"-->
                <!--ok-text="确定"-->
                <!--cancel-text="取消">-->
                <!--<img class="avator-img" src="showSrc"/>-->
              <!--</Modal>-->
            <!--</i-col>-->
          </Row>
        </i-col>
        </i-col>
      </Row>
    </Card>

    <Card class="margin-top-10">
      <Row :gutter="20">
        <Col :md="36" :lg="13" :style="{marginBottom: '10px'}">
        <Card>
          <p slot="title" class="card-title">
            <Icon type="ios-shuffle-strong"></Icon>
            所有区域
          </p>
          <p class="card-title">时间：{{hourtime}}</p>
          <div class="line-chart-con">
            <sign-in></sign-in>
          </div>
        </Card>
        </Col>
        <Col :md="36" :lg="11" :style="{marginBottom: '10px'}">
        <Card>
          <p slot="title" class="card-title">
            <Icon type="ios-shuffle-strong"></Icon>
            区域人数统计
          </p>
          <p class="card-title">时间：{{hourtime}}</p>
          <div class="ivu-card-extra">
            <Tag type="border" color="red">选择区域：</Tag>
            <i-select size="small" v-model="gid" clearable style="width:130px;">
              <Option v-for="item in selectData" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </i-select>
          </div>
          <div class="line-chart-con">
            <carefulness-class :gid="gid"></carefulness-class>
          </div>
        </Card>
        </Col>
      </Row>
    </Card>
  </div>
</template>

<script>
  import {formatFullDate} from '@/libs/filters';
  import countUp from './componets/countUp.vue';
  import inforCard from './componets/inforCard.vue';////首页tag组件
  import nameList from './componets/name_list.vue';//区域编辑
  import signIn from './componets/sign_in.vue';//所有区域的实时人数
  import carefulnessClass from './componets/carefulness_class.vue';//区域人数统计
  export default {
    name: "home_page",
    components: {
      formatFullDate,
      inforCard,
      countUp,
      nameList,
      signIn,
      carefulnessClass,
    },
    data() {
      return {
        hourtime: '',
        colo: "#ff1919",
        gid: '',
        counTag:[0,1,2],
        selectData: [],
        count: {
          current_number: 4000,
          current_number2: 3,
          current_name: "一号楼:当前人数为",
        },
        userName: '徐硕',
        show_modal:false,
        showSrc: 'https://i.loli.net/2017/08/21/599a521472424.jpg',
      };
    },
    computed: {
      welcomeMsg() {
        let now = new Date(), hour = now.getHours();
        let a = now.getUTCFullYear()+'-0'+(now.getMonth()+1)+'-'+(now.getUTCDay()+14);
        this.hourtime = a;
        if (hour < 6) return "凌晨好，";
        else if (hour < 9) return "早上好，";
        else if (hour < 12) return "上午好，";
        else if (hour < 14) return "中午好，";
        else if (hour < 19) return "下午好，";
        else if (hour < 22) return "晚上好，";
        else return "夜里好，";
      },
      lastLoginDate() {
        return this.user && this.user.lastLoginDate ? formatFullDate(this.user.lastLoginDate) : '-';
      },
    },

    methods:{
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
      //获取当前人数值
      getClassNews(){
        this.$http.getClassNews()
          .then(res =>{
            // console.log(res.data);
            this.className = res.data.clazz.name;
            this.count.current_number = res.data.clazz.peopleNum;
          })
          .catch(error =>{
            console.log(error);
          });
      },
    },
    created(){
      this.getSelectData();
      // this.getClassNews();
    },
  };
</script>

<style scoped>

</style>
