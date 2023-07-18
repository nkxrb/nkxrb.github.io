<template>
  <canvas ref="homeRef" class="home-canvas"></canvas>
</template>
<script setup>
import {ref, watch} from 'vue';
import { useKidarGE } from '../src/core';

const homeRef = ref(); 

const player = [
      100, 200,8, 30.0, 122,159,230,1,
      94, 200,7, 20.0, 24,12,231,1,
      70, 200,9, 25.0, 14,50,124,1,
      55, 200,10, 40.0, 68,159,229,1,
      50, 200,10, 30.0, 68,159,229,1,
      1250, 200,10, 20.0, 68,159,229,1,
    ]

watch(homeRef, ()=>{
  const {onUpdate} = useKidarGE(homeRef.value)

  // 创建开始游戏界面场景
  // 轻微渐变色背景 + 开始按钮 + 互动动画 + 动画小元素

  let i = 0
  onUpdate((updatePoints)=>{

    player[0] += Math.cos(i*Math.PI / 180) * 10
    player[1] += Math.sin(i*Math.PI / 180) * 10

    i+=10
    if(i>=360){
      i=0
    }
    
    updatePoints(player)
  })
})

</script>
<style>
.home-canvas {
  user-select: none;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 1px solid skyblue;
}
</style>