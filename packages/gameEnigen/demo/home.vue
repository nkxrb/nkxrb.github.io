<template>
  <canvas ref="homeRef" class="home-canvas"></canvas>
</template>
<script lang="ts" setup>
import {nextTick, onMounted, ref, watch} from 'vue';
import { useKidarGE } from '../src/core';
import { getNumber } from './startScene';
import bg from './tex.png';
import { getCube } from '../src/render/useShape';

const homeRef = ref(); 

const player = [
      100, 0,8, 30.0, 0.1,0.2,0.3,1,
      100, 100,7, 20.0, 0.1,0.9,0.3,1,
      70, 200,9, 20.0, 0.4,0.2,0.3,1,
      355, 200,10, 40.0, 0.1,0.2,0.3,1,
      250, 200,10, 30.0, 0.8,0.2,0.3,1,
      350, 200,10, 20.0, 0.9,0.2,0.3,1,
    ]
const all = [
  100, 500, 10, 0, 0,
  500, 500, 10, 1, 0,
  100, 100, 10, 0, 1,
  500, 100, 10, 1, 1,
]

const dialog = [
  100, 100, 10, 0.01, 0.01,
  100, 100, 10, 0.01, 0.01,
  300, 100, 10, 0.01, 0.01,
  100, 450, 10, 0.01, 0.01,
  300, 450, 10, 0.01, 0.01,
  300, 450, 10, 0.01, 0.01,
  110, 110, 1, 0.02, 0.01,
  290, 110, 1, 0.05, 0.01,
  110, 440, 1, 0.05, 0.01,
  290, 440, 1, 0.05, 0.02,
  290, 440, 1, 0.05, 0.02,
]

const data = getNumber(100, 200, 11023456789);


const init = () => {
  const {onInit, onUpdate, } = useKidarGE(homeRef.value, [], {
    texImgUrl: bg
  })

  const cube = getCube(100, 200, 0, 200)

  // 创建开始游戏界面场景
  // 轻微渐变色背景 + 开始按钮 + 互动动画 + 动画小元素

  // init();
  const bgImg = '';

  let i = 0
  onUpdate((updatePoints)=>{
    // player[24] += Math.cos(i*Math.PI / 180) * 10
    // player[25] += Math.sin(i*Math.PI / 180) * 10
    // const points = getCircle(i, i+30, 50)

    i+=1
    if(i>=36000){
      i=0
    }

    const data = getNumber(120, 200, i);
    
    
    updatePoints([...cube.points], [...data])
  })
}

onMounted(()=>{
  nextTick(()=>{
    init()
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