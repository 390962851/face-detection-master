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
          <div class="line-chart-con">

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

          </div>
        </Card>
        </Col>
      </Row>
    </Card>
  </div>
</template>

<script>
  import {formatFullDate} from '@/libs/filters';

  export default {
    name: "home_page",
    components: {
      formatFullDate
    },
    data() {
      return {
        hourtime: '2018-12-28',
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
