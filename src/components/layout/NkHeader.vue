<template>
  <header :class="{'nk-mini-header':mini,'nk-header':true}">
    <div class="title">
      nkxrb's collection
    </div>
    <nav>
      <a v-for="(item, i) in menus"
         :key="i"
         @click="routeTo(item.path)">
        {{ item.name }}
      </a>
    </nav>
  </header>
</template>
<script lang="ts">
import { routeTo } from '@/utils/index'
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    mini: { type: Boolean, default: false }
  },
  setup() {
    const menus = [
      { name: '首页', path: '#/home' },
      { name: '文档', path: '/docs/#css' },
      { name: '样例', path: '#/example' },
      { name: '画画', path: '#/developing' },
      { name: '联系我', path: '#/developing' }
    ]

    return {
      menus,
      routeTo
    }
  }
})
</script>
<style lang="scss" scoped>
  .nk-header {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-wrap: wrap;
    height: 20vh;
    min-height: 150px;
    background: url("../../assets/imgs/banner1.jpeg");
    background-size: 100% calc(100% - 36px);
    .title {
      font-size: 4rem;
      color: #ffffff;
      width: 100%;
      text-align: center;
    }
    nav {
      text-align: center;
      width: 100%;
      background-color: #7c4809;
      padding: 8px 0;
      a {
        margin: 12px;
        background-color: antiquewhite;
        cursor: pointer;
        padding: 2px 12px;
        border-radius: 8px;
        color: #7c4809;
        &:hover {
          box-shadow: 0px 0px 8px 0px #f1e4e4;
        }
      }
    }
  }
  .nk-header.nk-mini-header {
    height: 48px;
    min-height: 48px;
    justify-content: space-between;
    align-items: center;
    background: #7c4809;
    padding: 0 20px;
    .title {
      font-size: 20px;
      width: 180px;
    }
    nav {
      font-size: 13px;
      width: 800px;
      justify-content: flex-end;
    }
  }
</style>