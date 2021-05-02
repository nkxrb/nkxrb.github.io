<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import NkHeader from "@/components/NkHeader.vue";
import { defineComponent } from "vue";
import HelloWorld from "./components/HelloWorld.vue";

export default defineComponent({
  name: "App",
  components: {
    NkHeader,
  },
});
</script>

<style>
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