<template>
  <div ref="tagBall"
       class="tag-ball">
    <a v-for="(item, i) in tags"
       :key="i"
       :ref="(el)=>{if(el)tagEls[i]=el}"
       class="tag"
       :href="item.href">{{ item.name }}</a>
  </div>
</template>
<script script lang="ts">
declare interface Tag {
  name: string;
  href: string;
}
import { init } from './D3Tag'
import { defineComponent, ref, onBeforeUpdate, nextTick } from 'vue'
export default defineComponent({
  props: {
    tags: { type: Array, required: true },
  },
  setup(props) {
    const tagBallEl = ref<HTMLElement>()
    const tagEls = ref<Array<HTMLElement>>([])
    // 确保在每次更新之前重置ref
    onBeforeUpdate(() => {
      tagEls.value = []
    })

    nextTick(() => {
      tagBallEl.value && init(tagEls.value, tagBallEl.value)
    })

    return {
      tagBallEl,
      tagEls,
    }
  },
})
</script>
<style scoped>
  .tag-ball {
    width: 500px;
    height: 500px;
    margin: 50px auto;
    position: relative;
  }

  .tag {
    display: block;
    position: absolute;
    left: 50%;
    top: 50%;
    color: #000;
    text-decoration: none;
    font-size: 15px;
    font-weight: bold;
    will-change: transform;
  }

  .tag:hover {
    border: 1px solid #666;
  }
</style>