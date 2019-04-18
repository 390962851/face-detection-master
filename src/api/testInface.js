import axios from "axios";
let mock = 'https://dsn.apizza.net/mock/dc6b68abef69670b5aabd9c580b9eae4';
let url = 'http://10.32.6.138:8090/';
export default {
  /*获取用户信息*/
  getUserMessage(){
    return axios.post('');
  },
  //获取区域下摄像头信息
  getHeadMessage(data){
    return axios.get(url + `HumanFlowM/Camera/findCamByPT.action?pt_id=${data}`)
  },
  //获取所有区域的基本信息
  getAllRegionMessage(){
    return axios.get(url + 'HumanFlowM/PublicTerr/selectPT.action');
  },
  //添加区域信息
  AddRegionMessage(){
    return axios.get(url + 'PublicTerr/addpublicterr.action');
  },
  //获取下拉列表的值
  getSelectData(){
    return axios.get(url + 'HumanFlowM/PublicTerr/selectPtKeySelect.action');
  },
  //根据id获取数据
  getIdData(data){
    return axios.get(url + `HumanFlowM/TerrHuman/selectTH.action?th_ptId=${data}`);
  },
  //获取所有区域的实时的人数
  getAllNumbers(){
    return axios.get(url + 'HumanFlowM//PublicTerr/selectPtNumber.action');
  },

  ////测试接口
  getText(){
    return axios.get('http://10.32.6.138:8090/HumanFlowM/TerrHuman/selectTH.action');
  },
  getUserTagMessage(){
    return axios({
      url: '',
      method: 'get',
    });
  },

}
