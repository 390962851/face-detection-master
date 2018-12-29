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
                        <b class="card-user-infor-name">徐硕教师</b>
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
                          :end-val="count.history_listen"
                          iconType="ios-people"
                          color="#2d8cf0"
                          intro-text="应到人数"/>
            </i-col>
            <i-col :xs="24" :sm="12" :md="12" :style="{marginBottom: '10px'}">
              <infor-card
                id-name="visit_count"
                :end-val="count.today_listen"
                iconType="ios-eye"
                color="#ff9900"
                :iconSize="50"
                intro-text="实到人数"/>
            </i-col>
            <i-col :xs="24" :sm="12" :md="12" :style="{marginBottom: '10px'}">
              <p>当前班级：
                <Tag type="dot" color="primary">{{className}}</Tag>
              </p>
            </i-col>
            <i-col :xs="24" :sm="12" :md="12" :style="{marginBottom: '10px'}">
              <name-list></name-list>
            </i-col>
            <i-col :xs="24" :sm="12" :md="12" :style="{marginBottom: '10px'}">
              <p>课&nbsp&nbsp程&nbsp名：
                <Tag type="dot" color="primary">{{courseName}}</Tag>
              </p>
            </i-col>
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
            签到情况
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
            上课认真度
            <Icon type="android-star"></Icon>
          </p>
          <div class="line-chart-con">
            <carefulness-class></carefulness-class>
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
  import nameList from './componets/name_list.vue';//学生名单
  import signIn from './componets/sign_in.vue';//签到情况
  import carefulnessClass from './componets/carefulness_class.vue';//听课认真度
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
        hourtime: '2018-12-28',
        count: {
          history_listen: 40, //应到人数
          today_listen: 38,  //实到人数
          total_interaction: 0, //总互动量
          today_interaction: 0, //今日互动量
        },
        className: 'RB软工卓越161',
        courseName: '计算机组成原理',
      };
    },
    computed: {
      welcomeMsg() {
        let now = new Date(), hour = now.getHours();
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
    }
  };
</script>

<style scoped>

</style>
