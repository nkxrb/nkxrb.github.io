<template>
  <header class="">
    <span class="title">nkxrb's collection</span>
  </header>
  <nav>
    <a v-for="(item, i) in menus"
       :key="i"
       @click="refreshto(item)">
      {{ item.name }}
    </a>
  </nav>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  setup() {
    const menus = [
      { name: '技术' },
      { name: '游戏' },
      { name: '影音' },
      { name: '画画' },
      { name: '联系我' }
    ]

    return {
      menus
    }
  }
})
</script>
