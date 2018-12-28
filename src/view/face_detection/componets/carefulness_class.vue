<template>
  <div style="width:100%;height:100%;" id="carefulness_data"></div>
</template>

<script>
  import echarts from 'echarts';
  export default {
    name: 'carefulness_data',
    data() {
      return {
        serviceRequestCharts: '',
        option: {
          // color: colors,
          tooltip: {
            trigger: 'axis',
          },
          legend: {
            // data:['互动量'],
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
              axisTick: {
                alignWithLabel: true
              },
              axisLine: {
                onZero: false,
                // lineStyle: {
                //   color: colors[1]
                // }
              },
              data: ['1','1','1','1','1','1','1','1','1','1','1',],
            }
          ],
          yAxis: [
            {
              type: 'value'
            }
          ],
          series: [],
        },
      };
    },
    mounted() {
      this.serviceRequestCharts = echarts.init(document.getElementById('carefulness_data'));
      this.serviceRequestCharts.setOption(this.option);
    },
    methods: {
      getFrequencyRank() {
        this.$http.get('')
          .then(res => {
            // console.log("frequence_rank", res);
            this.serviceRequestCharts.setOption(this.option);
          })
          .catch(error => {
            console.log(error);
          });
      },
    },
    created() {
      // this.getFrequencyRank();
    }
  };
</script>
