<template>
  <div class="k-home">
    <!-- 添加随时间变化的天空背景canvas -->
    <sky></sky>
    <h1>nkxrb's collection</h1>

    <div class="myworld">
      <tree class="tree"></tree>
      <people class="people"></people>
    </div>
    <!-- 悬浮3d标签球，展示所掌握的各项技能标签，支持点击下钻 -->
    <!-- <div class="ball-box">
      <d-3-ball class="ball-web"
                text="前端技术"
                href="/fontweb"></d-3-ball>
      <d-3-ball class="ball-clound"
                text="云端技术"></d-3-ball>
      <d-3-ball class="ball-sql"
                text="数据库"></d-3-ball>
      <d-3-ball class="ball-bt"
                text="黑科技"></d-3-ball>
      <d-3-ball class="ball-music"
                text="音乐"></d-3-ball>
      <d-3-ball class="ball-game"
                text="游戏"></d-3-ball>
      <d-3-ball class="ball-movie"
                text="电影"></d-3-ball>
      <d-3-ball class="ball-anime"
                text="动漫"></d-3-ball>
      <d-3-ball class="ball-picture"
                text="相册"></d-3-ball>
    </div> -->

    <!-- 底部追逐奔跑动画 -->
    <!-- 右侧合适位置悬浮音乐播放按钮 -->
  </div>
</template>
<script script lang="ts">
import { defineComponent } from "vue";
import Sky from "@/components/canvas/sky.vue";
import Tree from "@/components/svg/tree.vue";
import People from "@/components/svg/people.vue";
import D3Ball from "@/components/d3Ball/index.vue";
export default defineComponent({
  components: { Sky, D3Ball, Tree, People },
  data() {
    return {};
  },
});
</script>
<style lang="scss">
  .k-home {
    position: absolute;
    text-align: center;
    overflow: hidden;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
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
