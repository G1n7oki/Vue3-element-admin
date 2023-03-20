<template>
  <div @click="onToggle">
    <svg-icon :icon="isFullscreen ? 'exit-fullscreen' : 'fullscreen'" />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import ScreenFull from 'screenfull'

const isFullscreen = ref(null)

function onToggle() {
  ScreenFull.toggle()
}

function change() {
  isFullscreen.value = ScreenFull.isFullscreen
}

onMounted(() => {
  ScreenFull.on('change', change)
})

onUnmounted(() => {
  ScreenFull.on('change', change)
})
</script>

<style lang="scss" scoped></style>
