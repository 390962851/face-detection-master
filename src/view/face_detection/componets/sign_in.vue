<template>
  <div style="width:85%;height:100%;" id="sign_in_data"></div>
</template>

<script>
  import echarts from 'echarts';
  export default {
    name: "sign_in_data",
    // props:['monthlist'],
    data() {
      return {
        serviceRequestCharts: '',
        option: {
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              crossStyle: {
                color: '#ccc'
              }
            }
          },
          toolbox: {
            right: '10%',
            feature: {
              dataView: {show: true, readOnly: false},
              magicType: {show: true, type: ['line', 'bar']},
              restore: {show: true},
              saveAsImage: {show: true}
            }
          },
          legend: {
            data: ['应到人数','实到人数']
          },
          xAxis: [
            {
              type: 'category',
              // name: '日期',
              // nameRotate: -60,
              // nameGap:-2,
              data: ['周一','周二','周三','周四','周五'],
            }
          ],
          yAxis: [
            {
              type: 'value',
              name: '人数',
              min: 0,
              max: 80,
            },
          ],
          series: [
            {
              name: '应到人数',
              type: 'bar',
              data: [],
              itemStyle: {
                normal: {
                  color: '#c23531',
                }
              },
            },
            {
              name: '实到人数',
              type: 'bar',
              data: [],
              itemStyle: {
                normal: {
                  color: '#3398DB',
                }
              },
            },
          ]
        },
      };
    },
    mounted() {
      this.serviceRequestCharts = echarts.init(document.getElementById('sign_in_data'));
      this.serviceRequestCharts.setOption(this.option);
    },
    methods: {
      getClassPeopleNum(){
        this.$http.getClassPeopleNum()
          .then(res =>{
            // console.log(res.data.list);
            this.option.series[0].data = res.data.list.map(item=>{
              return item.signPeople
            });
            this.option.series[1].data = res.data.list.map(item=>{
              return item.earnestPeople
            });
            this.serviceRequestCharts.setOption(this.option);
          })
          .catch(error =>{
            console.log(error);
          });
      },
    },
    created(){
      // this.getClassPeopleNum();
    }
  };
</script>

<style scoped>

</style>
