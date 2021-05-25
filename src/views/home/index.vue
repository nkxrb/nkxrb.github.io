<template>
  <div class="k-home">
    <!-- 首页主要内容 -->
    <div class="home-content">
      <div class="logo">
        <img src="../../assets/logo.png">
      </div>

      <div>
        <ul>
          <li>
            <a>GITHUB</a>
          </li>
          <li>
            <a>GITEE</a>
          </li>
          <li>
            <a>CSDN</a>
          </li>
        </ul>
      </div>

      <div>
        <ul>
          <li>
            <a>推荐</a>
          </li>
          <li>
            <a>最新</a>
          </li>
          <li>
            <a>技术</a>
          </li>
          <li>
            <a>游戏</a>
          </li>
          <li>
            <a>影音</a>
          </li>
          <li>
            <a>生活</a>
          </li>
          <li>
            <a>其他</a>
          </li>
        </ul>
      </div>
    </div>
    <!-- room -->
    <room />

    <!-- 添加随时间变化的天空背景canvas -->
    <!-- <sky></sky> -->
    <!-- 底部追逐奔跑动画 -->
    <!-- 右侧合适位置悬浮音乐播放按钮 -->
  </div>
</template>
<script script lang="ts">
import { defineComponent } from 'vue'
import Room from '@/components/webgl/room/index.vue'
import Sky from '@/components/canvas/sky.vue'
import Tree from '@/components/svg/tree.vue'
import People from '@/components/svg/people.vue'
import D3Ball from '@/components/d3Ball/index.vue'
export default defineComponent({
  components: { Sky, D3Ball, Tree, People, Room },
  data() {
    return {}
  },
})
</script>
<style lang="scss">
  .k-home {
    width: 100%;
    min-height: 100vh;
    text-align: center;
    background: url("../../assets/imgs/wood4.jpeg");
  }
  .home-content {
    .logo {
      border-radius: 100%;
      overflow: hidden;
      width: 6rem;
      height: 6rem;
      margin: 0 auto;
      &:hover {
        animation: rotate360 1.5s linear;
      }
      img {
        width: 100%;
      }
    }
  }
  .ball-box {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    div[class*="ball-"] {
      width: 150px;
      height: 150px;
    }
  }
  .myworld {
    position: absolute;
    right: 10%;
    bottom: 15%;
    .tree {
      position: relative;
      bottom: 0;
      right: 0;
      font-size: 60px;
    }
    .people {
      position: relative;
      top: -135px;
      right: 72px;
      font-size: 20px;
    }
  }
  .k-home h1 {
    margin-top: 15vh;
    color: lightseagreen;
  }
  @media screen and (max-width: 750px) {
    .myworld {
      position: absolute;
      right: -8rem;
      bottom: -115px;
    }
  }
</style>
