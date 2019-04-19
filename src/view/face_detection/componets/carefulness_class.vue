<template>
  <div style="width:80%;height:100%;" id="carefulness_data"></div>
</template>

<script>
  import echarts from 'echarts';

  export default {
    name: 'carefulness_data',
    props: ['gid'],
    data() {
      return {
        serviceRequestCharts: '',
        notMerge: true,
        lazyUpdate: false,
        timer: '',
      };
    },
    mounted() {
      if(this.timer){
        clearInterval(this.timer);
      }else {
        this.timer = setInterval(() =>{
          this.getIdData();
        },60000);
      }
      this.serviceRequestCharts = echarts.init(document.getElementById('carefulness_data'));
      var option = {
        color: ['#5793f3', '#d14a61', '#675bba'],
        title: {
          subtext: '',
          x: 'left'
        },
        tooltip: {
          trigger: 'axis',
        },
        // legend: {
        //   data: ['实到人数', '上课认真度'],
        // },
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
            name: '时间',
            axisTick: {
              alignWithLabel: true
            },
            axisLine: {
              onZero: false,
            },
            data: [],
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '人数',
          }
        ],
        series: [
          // {
          //   name: '实到人数',
          //   type: 'line',
          //   smooth: true,
          //   data: [],
          // },
          {
            name: '人数',
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
      };
      this.serviceRequestCharts.setOption(option);
    },
    watch: {
      gid: function (newval, oldval) {
        if (newval !== oldval) {
          this.getIdData();
        }
      },
    },
    methods: {
      getIdData() {
        let id = this.gid;
        // console.log("1111111===", this.gid);
        this.$http.getIdData(this.gid)
          .then(res => {
            // console.log(res.data.list);
            if (res.data.list.length > 0) {
              let x_data = res.data.list.map(item => {
                return item.th_datatime;
              });
              let series_data = res.data.list.map(item => {
                return item.th_number;
              });
              // console.log(x_data);
              // console.log(series_data);
              this.serviceRequestCharts.setOption(
                {
                  xAxis: [{
                    data: x_data,
                  }],
                  series: [{
                    data: series_data,
                  }],
                });
            }
          })
          .catch(error => {
            console.log(error);
          });
      },
    },
    created() {
      this.getIdData();
    }
  };
</script>
