<template>
  <div style="width:80%;height:100%;" id="carefulness_data"></div>
</template>

<script>
  import echarts from 'echarts';
  export default {
    name: 'carefulness_data',
    data() {
      return {
        serviceRequestCharts: '',
        option: {
          color: ['#5793f3', '#d14a61', '#675bba'],
          title: {
            subtext: '',
            x: 'left'
          },
          tooltip: {
            trigger: 'axis',
          },
          legend: {
            data:['实到人数','上课认真度'],
          },
          grid: {
            top: 60,
            bottom: 40
          },
          toolbox: {
            show: true,
            feature: {
              dataZoom: {
                yAxisIndex: 'none'
              },
              dataView: {readOnly: false},
              magicType: {type: ['line', 'bar']},
              restore: {},
              saveAsImage: {}
            }
          },
          xAxis: [
            {
              type: 'category',
              boundaryGap: false,
              name: '周数',
              axisTick: {
                alignWithLabel: true
              },
              axisLine: {
                onZero: false,
              },
              data: ['1','2','3','4','5','6','7','8','9','10','11',
                '12','13','14','15','16','17','18','19'],
            }
          ],
          yAxis: [
            {
              type: 'value'
            }
          ],
          series: [
            {
              name: '实到人数',
              type: 'line',
              smooth: true,
              data: [],
            },
            {
              name: '认真度',
              type: 'line',
              smooth: true,
              data: [],
              markPoint: {
                data: [
                  {name: '最高人数', type: 'max'},
                  {name: '最低人数', type: 'min'},
                ]
              },
              markLine: {
                data: [
                  {type: 'average', name: '平均值'},
                  [{
                    symbol: 'none',
                    x: '90%',
                    yAxis: 'max'
                  }, {
                    symbol: 'circle',
                    label: {
                      normal: {
                        position: 'start',
                        formatter: '最大值'
                      }
                    },
                    type: 'max',
                    name: '最高点'
                  }]
                ]
              }
            },
          ],
        },
      };
    },
    mounted() {
      this.serviceRequestCharts = echarts.init(document.getElementById('carefulness_data'));
      this.serviceRequestCharts.setOption(this.option);
    },
    methods: {
      getRate(){
        this.$http.getRate()
          .then(res =>{
            // console.log(res.data.list);
            this.option.series[0].data = res.data.list.map(item=>{
              return item.shoudNum
            });
            this.option.series[1].data = res.data.list.map(item=>{
              return item.rate
            });
            this.serviceRequestCharts.setOption(this.option);
          })
          .catch(error =>{
            console.log(error);
          });
      },
    },
    created() {
      this.getRate();
    }
  };
</script>
