<template>
  <a class="nk-label"
     :href="link">
    {{name}}
  </a>
</template>
<script>
export default {
  props: {
    name: String,
    link: String,
  }
}
</script>
<style>
  .nk-label {
    margin: 8px 12px;
    border: 1px solid #00a1a7;
    border-radius: 6px;
    padding: 4px 16px;
    color: #00a1a7;
  }

  .nk-label:hover {
    box-shadow: 2px 2px 6px 0 currentColor;
  }
</style>