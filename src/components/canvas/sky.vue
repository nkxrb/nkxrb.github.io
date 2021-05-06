<template>
  <canvas ref="skycanvas">
    您的浏览器不支持canvas技术，若想观看到内容，请升级浏览器或者更换其他浏览器
  </canvas>

  <canvas ref="starcanvas"></canvas>
  <canvas ref="mooncanvas"></canvas>
</template>
<script script lang="ts">
import { defineComponent, nextTick, ref, watchEffect } from "vue";
import Sky from "./sky";
import Moon from "./moon";
import Star from "./star";
export default defineComponent({
  setup() {
    const skycanvas = ref<HTMLCanvasElement>();
    const starcanvas = ref<HTMLCanvasElement>();
    const mooncanvas = ref<HTMLCanvasElement>();
    nextTick(() => {
      const skyEl = skycanvas.value;
      const moonEl = mooncanvas.value;
      const starEl = starcanvas.value;
      if (skyEl && moonEl && starEl) {
        new Sky(skyEl);
        new Moon(moonEl);
        new Star(starEl);
      }
    });

    return {
      skycanvas,
      starcanvas,
      mooncanvas,
    };
  },
});
</script>
<style scoped>
</style>