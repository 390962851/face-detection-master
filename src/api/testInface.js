import axios from "axios";
let mock = 'https://dsn.apizza.net/mock/dc6b68abef69670b5aabd9c580b9eae4';
let url = 'http://localhost:8080/';
export default {
  /*获取用户信息*/
  getUserMessage(){
    // return axios.get('https://dsn.apizza.net/mock/dc6b68abef69670b5aabd9c580b9eae4/getUserMessage');
    return axios.post('http://localhost:9000/student/getAllStudent');
  },
  //班级
  getClassNews(){
    return axios.get('http://localhost:9000/class/getClassNews');
  },
  //admin
  getAdminNews(){
    return axios.get('http://localhost:9000/class/getAdminNews');
  },
  //拄杖图
  getClassPeopleNum(){
    return axios.post('http://localhost:9000/class/getClassPeopleNum');
  },
  //上课认真度
  getRate(){
    return axios.get('http://localhost:9000/class/getRate');
  },

  ////测试接口
  getText(){
    return axios.get('http://10.32.6.138:8090/HumanFlowM/TerrHuman/selectTH.action');
  },

  //起动识别
  getStart(){
    return axios.get('http://localhost:9000/class/start');
  },
  getUserTagMessage(){
    return axios({
      url: '',
      method: 'get',
    });
  },

}
