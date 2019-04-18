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
        // xAxis_name: [],
        // yAxis_number: [],
      };
    },
    mounted() {
      const option =  {
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
            // data: ['应到人数','实到人数'],
            data: [],
          },
          xAxis: [
            {
              type: 'category',
              // name: '日期',
              // nameRotate: -60,
              // nameGap:-2,
              // data: ['周一','周二','周三','周四','周五'],
              data: [],
            }
          ],
          yAxis: [
            {
              type: 'value',
              name: '人数',
            },
          ],
          series: [
          ]
        };
      this.serviceRequestCharts = echarts.init(document.getElementById('sign_in_data'));
      this.serviceRequestCharts.setOption(option);
    },
    methods: {
      getAllNumbers(){
        this.$http.getAllNumbers()
          .then(res =>{
            if (res.data.list.length > 0) {
              let x_data = res.data.list.map(item => {
                return item.v_ptname;
              });
              let series_data = res.data.list.map(item => { ///v_ptnumber v_ptdata  v_ptname
                return item.v_ptnumber;
              });
              let legend_name = res.data.list.map(item => {
                return item.v_ptname;
              });
              // console.log(x_data);
              // console.log(series_data);
              // console.log(legend_name);
              this.serviceRequestCharts.setOption(
                {
                  legend: [{
                    data: legend_name,
                  }],
                  xAxis: [{
                    data: x_data,
                  }],
                  series: [
                    {
                      // name: legend_name[0],
                      data: series_data,
                      type: 'bar',
                    },
                    ],
                });
            }
          })
          .catch(error =>{
            console.log(error);
          });
      },
    },
    created(){
      this.getAllNumbers();
    }
  };
</script>

<style scoped>

</style>
