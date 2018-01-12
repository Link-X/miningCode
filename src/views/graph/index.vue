<style lang='less' scoped>
.graph-scroll_child {
  padding-bottom: .9rem;
}

.graph-header {
  background-color: #dee1e2;
  line-height: 0.35rem;
  text-indent: 0.1rem;
  border-bottom: 1px solid #ddd;
  border-top: 1px solid #ddd;
  color: #333;
}

.home-scroll {
  position: fixed;
  top: 40px;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  transition: all .2s;
  overflow: hidden;
}
</style>

<template>
  <div class="graph">
    <Scroll :data='data' class="home-scroll">
      <div class="graph-scroll_child">
        <h3 class="graph-header">算力统计图</h3>
        <div id="myChart" :style="{width: '100%', height: '2.5rem'}">
        </div>
        <h3 class="graph-header">GPU温度图</h3>
        <div id="myChart2" :style="{width: '100%', height: '3.5rem'}"></div>
      </div>
    </Scroll>
  </div>
</template>

<script>
import { hashrate, CpuTemperature } from '@/utils/index'
import Scroll from '@/components/scroll.vue'
export default {
  name: 'hello',
  data () {
    return {
      data: []
    }
  },
  components: {
    Scroll
  },
  mounted () {
    this.drawLine()
  },
  methods: {
    drawLine () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('myChart'))
      let myChart2 = this.$echarts.init(document.getElementById('myChart2'))
      // 绘制图表
      let opt = hashrate()
      let opt2 = CpuTemperature()
      myChart.setOption(opt)
      myChart2.setOption(opt2)
    }
  }
}
</script>
