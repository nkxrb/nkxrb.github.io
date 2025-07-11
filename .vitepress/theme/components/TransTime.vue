<template>
  <div>
    <div class="input-block">
      <input type="text" :value="time" @change="updateVal" placeholder="请输入时间戳"/>
    </div>
    <div>当前时间：{{ timeStr }}</div>
  </div>
</template>
<script lang="ts" setup>
import dayjs from 'dayjs';
import { computed, ref } from 'vue';

const time = ref('')
const updateVal = (e: any) => {
  time.value = e.target.value
}

const timeStr = computed(() => {
  if(!time.value){
    return '请输入时间'
  }
  
  if(Number(time.value)){
    if(time.value.length === 10){
      return dayjs(Number(time.value) * 1000).format('YYYY-MM-DD HH:mm:ss')
    }else if(time.value.length === 13){
      return dayjs(Number(time.value)).format('YYYY-MM-DD HH:mm:ss')
    }
  }

  return dayjs(time.value).format('YYYY-MM-DD HH:mm:ss')
})
</script>
<style lang="less" scoped>
.input-block {
  border: 1px solid #454545;
  border-radius: 4px;
  max-width: 200px;
  padding: 2px 6px;

  &:focus-within {
    border: 1px solid #13e5d0;
  }
}
</style>