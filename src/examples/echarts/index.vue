<template>
  <div class="title">
    Echarts Demo, 此处记录下使用echarts可能会遇到的疑难场景。
  </div>
  <div class="demo-list">
    <div class="demo-item">
      <span>大小自适应</span>
      <div ref="demo1" />
    </div>
    <div class="demo-item">
      <span>X轴悬浮框</span>
      <div ref="demo2" />
    </div>
  </div>
</template>
<script>
import * as echarts from 'echarts'
import { defineComponent, ref, nextTick } from 'vue'
export default defineComponent({
  name: 'EchartsDemo',
  setup () {
    const demo1 = ref(null)
    nextTick(() => {
      echarts.init(demo1.value)
    })
    return {
      demo1
    }
  }
})
</script>
