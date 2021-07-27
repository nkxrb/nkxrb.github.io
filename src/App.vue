<template>
  <nk-header :mini="mini" />
  <main>
    <router-view />
  </main>
</template>

<script lang="ts">
import NkHeader from '@/components/layout/NkHeader.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  components: { NkHeader },
  data() {
    return {
      mini: false
    }
  },
  mounted() {
    this.mini = this.$route.path.includes('detail')
  }
})
</script>

<style>
  #app {
    font-family: "Helvetica Neue", Helvetica, Arial, "PingFang SC",
      "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    padding-top: 1px;
  }
</style>