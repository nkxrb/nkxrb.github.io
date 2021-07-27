<template>
  <nk-header mini />
  <div style="display: flex;height: calc(100vh - 48px);">
    <aside class="example-list">
      <router-link v-for="(example, i) in exampleList"
                   :key="i"
                   :to="'/examples/' + example.name">
        {{ example.name }}
      </router-link>
    </aside>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import NkHeader from '@/components/layout/NkHeader.vue'
import examples from '@/config/examples.json'
import { defineComponent, ref, nextTick, reactive } from 'vue'
export default defineComponent({
  components: { NkHeader },
  setup () {
    const exampleList = reactive(examples)
    return {
      exampleList
    }
  }
})
</script>
<style lang="scss" scoped>
  .example-list {
    background-color: antiquewhite;
    width: 160px;
    height: 100%;
  }
  main {
    width: 100%;
    height: 100%;
  }
</style>