<template>
  <el-dialog
    :title="$t('msg.universal.title')"
    :model-value="modelValue"
    @close="closed"
    width="22%"
  >
    <div class="content">
      <p class="title">{{ $t('msg.theme.themeColorChange') }}</p>
      <el-color-picker v-model="mColor" :predefine="predefineColors" />
    </div>
    <template #footer>
      <el-button @click="closed">{{ $t('msg.universal.cancel') }}</el-button>
      <el-button type="primary" @click="confirm">{{
        $t('msg.universal.confirm')
      }}</el-button>
    </template>
  </el-dialog>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
// import { generateNewStyle, writeNewStyle } from '@/utils/theme'

defineProps({
  modelValue: {
    type: Boolean,
    required: true
  }
})

const store = useStore()
const mColor = ref(store.getters.mainColor)
const predefineColors = []
const emits = defineEmits(['update:modelValue'])

function closed() {
  emits('update:modelValue', false)
}

async function confirm() {
  // const newStyle = await generateNewStyle(mColor.value)
  // writeNewStyle(newStyle)
  // store.commit('theme/setMainColor', mColor.value)
  closed()
}
</script>

<style lang="scss" scoped>
.content {
  text-align: center;
  .title {
    margin-bottom: 12px;
  }
}
</style>
