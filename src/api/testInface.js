import axios from "axios";
let mock = 'https://dsn.apizza.net/mock/dc6b68abef69670b5aabd9c580b9eae4';
let url = 'http://192.168.43.194:8090/';
export default {

  //获取主页单个区域信息和数据
  getHomeOnlyMessage(data){
    return axios.get(url + `HumanFlowM/TerrHuman/selectlatTPFV.action?th_ptId=${data}`)
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
    AddRegionMessage(data){//?name=ssss&area=123&location=sadasda&remark=asdasdasd
    return axios.get(url + `HumanFlowM/PublicTerr/addpublicterr.action?name=${data.name}&area=${data.area}&location=${data.location}&remark=${data.remark}`);
  },
  //获取下拉列表的值
  getSelectData(){
    return axios.get(url + 'HumanFlowM/PublicTerr/selectPtKeySelect.action');
  },
  //根据id区域获取数据
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
