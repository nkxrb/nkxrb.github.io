<template>
  <header>
    <span class="logo">NKXRB</span>
    <nav class="nav">
      <router-link to="/">首页</router-link> |
      <router-link to="/leancss/home">CSS</router-link> |
      <router-link to="/leetcode/home">LeetCode</router-link>
    </nav>
  </header>
  <div class="main-content">
    <aside>
      <ul>
        <li></li>
      </ul>
    </aside>
    <main>
      <router-view />
    </main>
  </div>
</template>
<script script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({});
</script>
<style lang="scss" scoped>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 48px;
    padding: 0 20px;
  }
  .logo {
    color: lightseagreen;
    font-size: 21px;
  }
  .main-content {
    width: 100%;
  }
</style>