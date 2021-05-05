<template>
  <canvas id="skycanvas"
          class="sky">
    您的浏览器不支持canvas技术，若想观看到内容，请升级浏览器或者更换其他浏览器
  </canvas>

  <canvas id="starcanvas"
          class="sky"></canvas>
  <canvas id="mooncanvas"
          class="sky"></canvas>
</template>
<script script lang="ts">
import { defineComponent, nextTick, ref, watchEffect } from "vue";
import Sky from "./sky";
import Moon from "./moon";
import Star from "./star";
export default defineComponent({
  setup() {
    const starcanvas = ref<HTMLCanvasElement>();
    const mooncanvas = ref<HTMLCanvasElement>();
    nextTick(() => {
      const skyEl = document.querySelector<HTMLCanvasElement>("#skycanvas");
      const moonEl = document.querySelector<HTMLCanvasElement>("#mooncanvas");
      const starEl = document.querySelector<HTMLCanvasElement>("#starcanvas");
      if (skyEl && moonEl && starEl) {
        new Sky(skyEl);
        new Moon(moonEl);
        new Star(starEl);
      }
    });
  },
});
</script>
<style scoped>
  .sky {
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
  }
</style>