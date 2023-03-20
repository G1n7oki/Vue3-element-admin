<template>
  <div class="header-search" :class="{ show: isShow }">
    <svg-icon class-name="search-icon" icon="search" @click.stop="click" />
    <el-select
      ref="headerSearchSelect"
      v-model="search"
      class="header-search-select"
      filterable
      default-first-option
      remote
      :remote-method="querySearch"
      :placeholder="$t('msg.navbar.headerSearch')"
      @change="change"
    >
      <el-option
        v-for="option in searchOptions"
        :key="option.item.path"
        :label="option.item.title.join(' > ')"
        :value="option.item"
      />
    </el-select>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { filterRoutes } from '@/utils/route'
import { useRouter } from 'vue-router'
import { generateRoutes } from './FuseData'
import Fuse from 'fuse.js'
import { watchSwitchLang } from '@/utils/i18n'

const router = useRouter()
let searchPool = computed(() => {
  const fRouter = filterRoutes(router.getRoutes())
  return generateRoutes(fRouter)
})

let fuse
function initFuse(searchPool) {
  fuse = new Fuse(searchPool, {
    shouldSort: true,
    minMatchCharLength: 1,
    keys: [
      {
        name: 'title',
        weight: 0.7
      },
      {
        name: 'path',
        weight: 0.3
      }
    ]
  })
}
initFuse(searchPool.value)

const isShow = ref(false)
function click() {
  isShow.value = !isShow.value
}

const headerSearchSelect = ref(null)
function onClose() {
  headerSearchSelect.value.blur()
  isShow.value = false
  searchOptions.value = []
}
watch(isShow, (value) => {
  if (value) {
    headerSearchSelect.value.focus()
    document.body.addEventListener('click', onClose)
  } else {
    document.removeEventListener('click', onClose)
  }
})

const search = ref('') // fixed "search" was accessed during render but is not defined on instance
const searchOptions = ref([])
function querySearch(query) {
  searchOptions.value = query !== '' ? fuse.search(query) : []
}

function change(value) {
  router.push(value.path)
}

watchSwitchLang(() => {
  searchPool = computed(() => {
    const fRouter = filterRoutes(router.getRoutes())
    return generateRoutes(fRouter)
  })
  initFuse(searchPool.value)
})
</script>

<style lang="scss" scoped>
.header-search {
  font-size: 0 !important;
  .search-icon {
    cursor: pointer;
    font-size: 24px;
    vertical-align: middle;
  }
  .header-search-select {
    font-size: 18px;
    transition: width 0.2s;
    width: 0;
    overflow: hidden;
    background-color: transparent;
    border-radius: 0;
    display: inline-block;
    vertical-align: middle;
  }
  &.show {
    .header-search-select {
      width: 210px;
      margin-left: 10px;
    }
  }
}
</style>
