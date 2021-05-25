<template>
  <router-view />
</template>

<script lang="ts">
import NkHeader from "@/components/NkHeader.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  components: {
    NkHeader,
  },
});
</script>

<style>
  html,
  body {
    font-size: 16px;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  main {
    padding: 15px 20px;
  }
</style>