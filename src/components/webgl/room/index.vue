<template>
  <canvas ref="roomcanvas">
    你的浏览器似乎不支持或者禁用了HTML5 <code>&lt;canvas&gt;</code> 元素.
  </canvas>
</template>
<script script lang="ts">
import * as Room from './room'
import { defineComponent, nextTick, ref } from 'vue'
export default defineComponent({
  setup() {
    const roomcanvas = ref<HTMLCanvasElement>()
    nextTick(() => {
      const roomEl = roomcanvas.value
      roomEl && Room.createRoom(roomEl)
    })

    return {
      roomcanvas,
    }
  },
})
</script>
