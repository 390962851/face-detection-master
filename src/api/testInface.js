import axios from "axios";
let mock = 'https://dsn.apizza.net/mock/dc6b68abef69670b5aabd9c580b9eae4';
let url = 'http://localhost:8080/';
export default {
  /*获取用户信息*/
  getUserMessage(){
    return axios.get('https://dsn.apizza.net/mock/dc6b68abef69670b5aabd9c580b9eae4/getUserMessage');
  },
  //时间年份分布
  getALlYearDistribution(){
    return axios.get();
  },
  //性别分布
  getAllSexDistribution(){
    return axios.get('');
  },
  getUserTagMessage(){
    return axios({
      url: '',
      method: 'get',
    });
  },

}
