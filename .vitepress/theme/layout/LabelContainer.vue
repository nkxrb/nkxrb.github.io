<template>
  <div class="nk-label-container">
    <div v-show="title"
         class="title">{{title}}</div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  }
}
</script>

<style>
  .nk-label-container {
    display: flex;
    flex-wrap: wrap;
    margin: 12px;
    padding: 12px;
  }
  .nk-label-container .title {
    padding: 4px 12px;
    font-size: 16px;
    width: 100%;
    font-weight: bold;
  }
</style>