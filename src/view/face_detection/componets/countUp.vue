<template>
    <div>
        <p :class="className" :style="{textAlign: 'center', color: color, fontSize: countSize, fontWeight: countWeight}"><span v-cloak :id="idName">{{ startVal }}</span><span>{{ unit }}</span></p>
        <slot name="intro"></slot>
    </div>
</template>

<script>
import CountUp from 'countup';

// function transformValue (val) {
//     let endVal = 0;
//     let unit = '';
//     let c = '';
//     if (val < 1000) {
//         endVal = val;
//     } else if (val >= 1000 && val < 1000000) {
//         endVal = parseInt(val / 1000);
//         unit = 'K+';
//         c = '#ff1919';
//     } else if (val >= 1000000 && val < 10000000000) {
//         endVal = parseInt(val / 1000000);
//         unit = 'M+';
//     } else {
//         endVal = parseInt(val / 1000000000);
//         unit = 'B+';
//     }
//     if(val == 0){
//       endVal = '--'
//     }
//     return {
//         val: endVal,
//         unit: unit,
//         c: c,
//     };
// }

export default {
    data () {
        return {
            unit: '',
            demo: {}
        };
    },
    name: 'countUp',
    props: {
        idName: String,
        className: String,
        startVal: {
            type: Number,
            default: 0
        },
        endVal: {
            type: Number,
            required: true
        },
        decimals: {
            type: Number,
            default: 0
        },
        duration: {
            type: Number,
            default: 2
        },
        delay: {
            type: Number,
            default: 500
        },
        options: {
            type: Object,
            default: () => {
                return {
                    useEasing: true,
                    useGrouping: true,
                    separator: ',',
                    decimal: '.'
                };
            }
        },
        color: String,
        countSize: {
            type: String,
            default: '30px'
        },
        countWeight: {
            type: Number,
            default: 700
        },
        introText: [String, Number]
    },
    // mounted () {
    //     this.$nextTick(() => {
    //         setTimeout(() => {
    //             let res = this.transformValue(this.endVal);
    //             let endVal = res.val;
    //             this.unit = res.unit;
    //             // this.color = res.c;
    //             let demo = {};
    //             this.demo = demo = new CountUp(this.idName, this.startVal, endVal, this.decimals, this.duration, this.options);
    //             if (!demo.error) {
    //                 demo.start();
    //             }
    //         }, this.delay);
    //     });
    // },
    methods:{
      transformValue (val) {
        let endVal = 0;
        let unit = '';
        let c = this.color;
        if (val < 1000) {
          endVal = val;
        } else if (val >= 1000 && val < 1000000) {
          endVal = parseInt(val / 1000);
          unit = 'K+';
          c = '#ff1919';
        } else if (val >= 1000000 && val < 10000000000) {
          endVal = parseInt(val / 1000000);
          unit = 'M+';
        } else {
          endVal = parseInt(val / 1000000000);
          unit = 'B+';
        }
        if(val == 0){
          endVal = '--'
        }
        return {
          val: endVal,
          unit: unit,
          c: c,
        };
      }
    },
    watch: {
        // endVal (val) {
          // let res = transformValue(val);
          // let endVal = res.val;
          // this.unit = res.unit;
            // this.demo.update(endVal);
        // }
    }
};
</script>
