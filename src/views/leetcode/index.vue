<template>
  <div style="display: flex;height: calc(100vh - 48px);">
    <aside class="leetcode-list">
      <router-link v-for="(item, i) in leetcodeList"
                   :key="i"
                   :to="'#/leetcode/' + item.name">
        {{ item.name }}
      </router-link>
    </aside>
    <section>
      <div>
        {{ source }}
      </div>
    </section>
  </div>
</template>

<script>
import examples from '@/config/examples.json'
import files from '@/config/files.json'

import { defineComponent, ref, nextTick, reactive } from 'vue'
export default defineComponent({
  setup () {
    const exampleList = reactive(examples)
    const fileList = reactive(files)
    const leetcodeList = fileList.filter(t => t.category === 'leetcode')
    let source = ref('')
    return {
      exampleList,
      source,
      leetcodeList
    }
  }
})
</script>
<style lang="scss" scoped>
  .leetcode-list {
    background-color: antiquewhite;
    width: 160px;
    height: 100%;
  }
  section {
    width: 100%;
    height: 100%;
  }
</style>