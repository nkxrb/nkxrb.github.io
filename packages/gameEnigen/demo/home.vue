<template>
  <canvas ref="homeRef" class="home-canvas"></canvas>
</template>
<script lang="ts" setup>
import {ref, watch} from 'vue';
import { useKidarGE } from '../src/core';
import { getCircle } from './startScene';
import bg from './bg1.jpg';

const homeRef = ref(); 

const player = [
      100, 0,8, 30.0, 0.1,0.2,0.3,1,
      100, 100,7, 20.0, 0.1,0.9,0.3,1,
      70, 200,9, 20.0, 0.4,0.2,0.3,1,
      355, 200,10, 40.0, 0.1,0.2,0.3,1,
      250, 200,10, 30.0, 0.8,0.2,0.3,1,
      350, 200,10, 20.0, 0.9,0.2,0.3,1,
    ]

watch(homeRef, ()=>{
  const {onInit, onUpdate} = useKidarGE(homeRef.value, [], {
    texImgUrl: bg
  })

  // 创建开始游戏界面场景
  // 轻微渐变色背景 + 开始按钮 + 互动动画 + 动画小元素

  // init();
  const bgImg = '';
  const startDialog = {
    menus: [
      {
        name: '开始游戏',
        event: () => {

        }
      },
      {
        name: '游戏设置',
        event: () => {}
      }
    ]
  }

  let i = 0
  onUpdate((updatePoints)=>{
    player[24] += Math.cos(i*Math.PI / 180) * 10
    player[25] += Math.sin(i*Math.PI / 180) * 10
    const points = getCircle(i, i+30, 50)

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