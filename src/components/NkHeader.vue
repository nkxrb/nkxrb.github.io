<template>
	<header>
		<span class="logo">NKXRB</span>
		<nav class="">
			<router-link to="/">首页</router-link> |
			<router-link to="/leancss/home">CSS</router-link> |
			<router-link to="/leetcode/home">LeetCode</router-link>
		</nav>
	</header>
</template>
<script script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({});
</script>

<style scoped>
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
</style>
