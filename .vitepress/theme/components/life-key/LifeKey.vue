<template>
  <main class="life-key-page">
    <section class="life-key-panel" aria-labelledby="life-key-title">
      <p>DATA ACCESS</p>
      <h1 id="life-key-title">一生时光数据密钥</h1>
      <form @submit.prevent="saveSecret">
        <label>
          <span>密钥</span>
          <input
            v-model="secret"
            type="password"
            autocomplete="current-password"
            placeholder="输入数据访问密钥"
          >
        </label>
        <button type="submit" :disabled="isSaving">{{ isSaving ? '同步中' : '保存并同步' }}</button>
      </form>
      <div class="life-key-actions">
        <button type="button" @click="clearSecret">清除本机密钥</button>
        <a href="/life/">打开守护板</a>
      </div>
      <span v-if="message" class="life-key-message" :class="{ 'is-error': isError }">{{ message }}</span>
      <small>密钥仅保存在当前浏览器 localStorage 中，用于同步最新数据和修改记录。</small>
    </section>
  </main>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { clearLifeDataSecret, ensureLifeData, hasLifeDataSecret, setLifeDataSecret } from '../life-data'

const secret = ref('')
const message = ref('')
const isError = ref(false)
const isSaving = ref(false)

onMounted(() => {
  if (hasLifeDataSecret()) {
    message.value = '本机已保存数据密钥'
    isError.value = false
  }
})

async function saveSecret() {
  const value = secret.value.trim()
  if (!value) {
    message.value = '请输入数据访问密钥'
    isError.value = true
    return
  }

  isSaving.value = true
  message.value = ''
  try {
    const data = await setLifeDataSecret(value)
    message.value = data ? '密钥已保存，数据同步成功' : '密钥已保存，但数据同步失败'
    isError.value = !data
  } finally {
    isSaving.value = false
  }
}

async function clearSecret() {
  clearLifeDataSecret()
  secret.value = ''
  message.value = '本机密钥已清除'
  isError.value = false
  await ensureLifeData({ force: true })
}
</script>

<style scoped src="./life-key.css"></style>
