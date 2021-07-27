<template>
  <div class="home">
    <!-- 跑马灯效果 -->
    <div>每一个不曾起舞的日子，都是对生命的辜负。秋风起兮木叶飞，吴江水兮鲈正肥。</div>

    <div v-for="(article, i) in articles"
         class="article-item" />
  </div>
  <!-- 添加随时间变化的天空背景canvas -->
  <!-- <sky></sky> -->
  <!-- 底部追逐奔跑动画 -->
  <!-- 右侧合适位置悬浮音乐播放按钮 -->
</template>
<script>
import { defineComponent } from 'vue'
export default defineComponent({
  setup () {
    const articles = [
      { name: '技术', path: '', pic: '' },
      { name: '游戏' },
      { name: '影音' },
      { name: '画画' },
      { name: '联系我' }
    ]

    return {
      articles
    }
  }
})
</script>
<style lang="scss">
  .k-home {
    width: 100%;
    min-height: 100vh;
    text-align: center;
    background: url("../../assets/imgs/banner1.jpg") no-repeat;
    background-size: 100% 100%;
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
