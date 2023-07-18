<template>
  <span :style="textStyle">
    <slot>{{ text }}</slot>
  </span>
</template>
<script setup>
import { computed } from 'vue'
const props = defineProps({
  text: {type: String, default: ''},
  color: { type: String, default: '#ed7d2f'},
  blob: { type: Boolean, default: false }
})
const textStyle = computed(()=>{
  return `color: ${props.color}; font-weight: ${props.blob ? '600' : '400'};`
})
</script>
