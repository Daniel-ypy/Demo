<template>
  <el-card>
     <div slot="header" class="clearfix">
    <span>图表详情</span>
    <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
  </div>
    <div id = "c1"></div>
  </el-card>
</template>
<script>

import { Chart } from "@antv/g2"
const DataSet = require("@antv/data-set")
export default {
  name: "XRChat",

  data() {
    return {
      chartDataDouble: [
        { time: "1", data: 5.6555, ucl: 5.68777, lcl: 5.5682, aver: 5.6280 },
        { time: "2", data: 5.6065, ucl: 5.68777, lcl: 5.5682, aver: 5.6280 },
        { time: "3", data: 5.653, ucl: 5.68777, lcl: 5.5682, aver: 5.6280 },
        { time: "4", data: 5.55725, ucl: 5.68777, lcl: 5.5682, aver: 5.6280 },
        { time: "5", data: 5.64125, ucl: 5.68777, lcl: 5.5682, aver: 5.6280 },
        { time: "6", data: 5.612, ucl: 5.68777, lcl: 5.5682, aver: 5.6280 },
        { time: "7", data: 5.68, ucl: 5.68777, lcl: 5.5682, aver: 5.6280 },
        { time: "8", data: 5.68, ucl: 5.68777, lcl: 5.5682, aver: 5.6280 },
        { time: "9", data: 5.68, ucl: 5.68777, lcl: 5.5682, aver: 5.6280 },
        { time: "10", data: 5.68, ucl: 5.68777, lcl: 5.5682, aver: 5.6280 },
        { time: "11", data: 5.68, ucl: 5.68777, lcl: 5.5682, aver: 5.6280 },
        { time: "12", data: 5.61075, ucl: 5.68777, lcl: 5.5682, aver: 5.6280 },
        { time: "13", data: 5.62799, ucl: 5.68777, lcl: 5.5682, aver: 5.6280 },
        { time: "14", data: 5.60225, ucl: 5.68777, lcl: 5.5682, aver: 5.6280 },
        { time: "15", data: 5.60625, ucl: 5.68777, lcl: 5.5682, aver: 5.6280 },
        { time: "16", data: 5.60675, ucl: 5.68777, lcl: 5.5682, aver: 5.6280 },
        { time: "17", data: 5.60825, ucl: 5.68777, lcl: 5.5682, aver: 5.6280 },
        { time: "18", data: 5.62799, ucl: 5.68777, lcl: 5.5682, aver: 5.6280 },
        { time: "19", data: 5.6235, ucl: 5.68777, lcl: 5.5682, aver: 5.6280 },
        { time: "20", data: 5.64025, ucl: 5.68777, lcl: 5.5682, aver: 5.6280 },
        { time: "21", data: 5.62799, ucl: 5.68777, lcl: 5.5682, aver: 5.6280 },
        { time: "22", data: 5.589, ucl: 5.68777, lcl: 5.5682, aver: 5.6280 },
        { time: "23", data: 5.61875, ucl: 5.68777, lcl: 5.5682, aver: 5.6280 },
        { time: "24", data: 5.5515, ucl: 5.68777, lcl: 5.5682, aver: 5.6280 },
        { time: "25", data: 5.60925, ucl: 5.68777, lcl: 5.5682, aver: 5.6280 }

      ]
    }
  },
  mounted() {
    this.initLineChart()
  },
  methods: {
    initLineChart() {
      var ucl = 5.68777
      const chart = new Chart({ // 创建一个图表
        container: "c1", // 容器是上面那个div
        autoFit: true, // 自适应
        height: 300 // 高度
      })

      const ds = new DataSet() // 声明数据集 附官方文档 https://g2.antv.vision/zh/docs/manual/dataset/dataset
      const dv = ds.createView().source(this.chartDataDouble) // 使用上面的数据chartDataDouble创建数据视图dv
      // fold 方式完成了行列转换，如果不想使用 DataSet 直接手工转换数据即可 --官方注释
      dv.transform({ // 附transform API https://g2.antv.vision/zh/docs/manual/dataset/transform
        type: "fold",
        fields: ["data"], // 展开字段集
        key: "type", // key字段
        value: "count" // value字段
      })
      // 以上的数据转换后一条转为两条，eg：
      // { time: "周一", vs: 1234, vk: 124 }, 转换后=>
      // { "time": "周一", "type": "vs", "count": 1234 },{ "time": "周一", "type": "vk", "count": 124 },

      chart.data(dv.rows) // 现在可以将dv的rows作为数据源
      chart.scale({ // 之前的chart.source()方法已经替换为chart.data()和chart.scale()
        time: {
          range: [0, 1] // 输出数据的范围，默认[ 0, 1 ]，格式为 [ min, max ]，min 和 max 均为 0 至 1 范围的数据 --官方
        }, // 简单来说就是 这个图标的多少用于显示数据[0,1]就是数据占满横坐标宽度,[0,0.5]就是还余下半个空的横坐标
        count: {
          min: 5.45, // 我的纵坐标count的最小值，不设置的话自动取数据中最小数的作为y=0的起始
          nice: true // 默认为 true，用于优化数值范围，使绘制的坐标轴刻度线均匀分布。例如原始数据的范围为 [3, 97]，如果 nice 为 true，那么就会将数值范围调整为 [0, 100] --官方
        }
      })
      chart.tooltip({
        showCrosshairs: true, // 展示 Tooltip 辅助线
        shared: true,
        crosshairs: {
          type: "line"
        }
      })
      chart.legend({
        position: "bottom", // 设置图例的显示位置
        itemGap: 20 // 图例项之间的间距
      })
      chart.axis("count", { // 坐标轴
        label: {
          formatter: function formatter(val) {
            return val // 这里可以改坐标刻度的形式
          }
        }
      })
      chart.annotation().line({
        top: true,
        start: [0, ucl],
        end: [24, ucl],
        style: {
          stroke: "red",
          lineWidth: 1,
          lineDash: [3, 0]
        },
        text: {
          position: "start",
          style: {
            fill: "#8c8c8c",
            fontSize: 12,
            fontWeight: 300
          },
          content: "上控制线 5.68777",
          offsetY: -5
        }
      })
      chart.annotation().line({
        top: true,
        start: [0, 5.5682],
        end: [24, 5.5682],
        style: {
          stroke: "red",
          lineWidth: 1,
          lineDash: [3, 0]
        },
        text: {
          position: "start",
          style: {
            fill: "#8c8c8c",
            fontSize: 12,
            fontWeight: 300
          },
          content: "下控制线 5.5682",
          offsetY: -5
        }
      })
      chart.annotation().line({
        top: true,
        start: [0, 5.6280],
        end: [24, 5.6280],
        style: {
          stroke: "green",
          lineWidth: 1,
          lineDash: [3, 0]
        },
        text: {
          position: "start",
          style: {
            fill: "#8c8c8c",
            fontSize: 12,
            fontWeight: 300
          },
          content: "平均线 5.6280s",
          offsetY: -5
        }
      })
      chart.line().position("time*count").color("type")// 方法都在官方
      chart.point().position("time*count").color("type").size(4).shape("circle").style({
        stroke: "#fff", // 描边
        lineWidth: 1 // 宽度
      })
      chart.render() // 这个图表终于要被渲染展示了...
    }
  }
}
</script>
