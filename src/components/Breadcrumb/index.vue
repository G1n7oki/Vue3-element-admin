<template>
  <el-breadcrumb class="breadcrumb" separator="/">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item
        v-for="(item, index) in breadcrumbData"
        :key="item.path"
      >
        <span v-if="index === breadcrumbData.length - 1" class="no-redirect">{{
          generateTitle(item.meta.title)
        }}</span>
        <span v-else class="redirect" @click="handleLink(item)">{{
          generateTitle(item.meta.title)
        }}</span>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import variables from '@/styles/variables.module.scss'
import { generateTitle } from '@/utils/i18n'

const breadcrumbData = ref([])
function getBreadcrumbData() {
  breadcrumbData.value = route.matched.filter(
    (item) => item.meta && item.meta.title
  )
}

const route = useRoute()
watch(
  route,
  () => {
    getBreadcrumbData()
  },
  {
    immediate: true
  }
)

const router = useRouter()
function handleLink(item) {
  router.push(item.path)
}

const linkHoverColor = ref(variables.menuBg)
</script>

<style lang="scss" scoped>
.breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 8px;
  .redirect {
    color: #666;
    font-weight: 600;
    cursor: pointer;
  }
  .redirect:hover {
    color: v-bind(linkHoverColor);
  }
  :deep(.no-redirect) {
    color: #97a8be;
    cursor: text;
  }
}
</style>
