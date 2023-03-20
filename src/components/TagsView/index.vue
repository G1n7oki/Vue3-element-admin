<template>
  <div class="tags-view-container">
    <router-link
      v-for="(tag, index) in $store.getters.tagsViewList"
      :key="tag.fullPath"
      class="tags-view-item"
      :class="isActive(tag) ? 'active' : ''"
      :to="{ path: tag.fullPath }"
      @contextmenu.prevent="openMenu($event, index)"
    >
      {{ tag.title }}
      <el-icon
        v-show="!isActive(tag)"
        class="el-icon-close"
        @click.prevent.stop="onCloseClick(index)"
      >
        <Close />
      </el-icon>
    </router-link>
    <ContextMenu v-show="visible" :style="menuStyle" :index="selectIndex" />
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { Close } from '@element-plus/icons-vue'
import ContextMenu from './ContextMenu'
import { useStore } from 'vuex'

const route = useRoute()
function isActive(tag) {
  return tag.path === route.path
}

const store = useStore()
function onCloseClick(index) {
  store.commit('app/removeTagsViewList', {
    type: 'index',
    index
  })
}

const visible = ref(false)
const menuStyle = ref({
  left: 0,
  top: 0
})
const selectIndex = ref(0)
function openMenu(e, index) {
  const { x, y } = e
  menuStyle.value.left = x + 'px'
  menuStyle.value.top = y + 'px'
  selectIndex.value = index
  visible.value = true
}

function closeMenu() {
  visible.value = false
}

watch(visible, (value) => {
  value
    ? document.addEventListener('click', closeMenu)
    : document.removeEventListener('click', closeMenu)
})
</script>

<style lang="scss" scoped>
.tags-view-container {
  width: 100%;
  height: 34px;
  background-color: #fff;
  border-bottom: 1px solid #d8dce5;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);
  .tags-view-item {
    display: inline-block;
    position: relative;
    cursor: pointer;
    height: 26px;
    line-height: 26px;
    border: 1px solid #d8dce5;
    color: #495060;
    background-color: #fff;
    padding: 0 8px;
    font-size: 12px;
    margin-left: 5px;
    margin-top: 4px;
    &:first-of-type {
      margin-left: 15px;
    }
    &:last-of-type {
      margin-right: 15px;
    }
    &.active {
      color: #fff;
      background-color: #1f2d3d;
      &::before {
        content: '';
        background-color: #fff;
        display: inline-block;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        position: relative;
        margin-right: 4px;
      }
    }
    .el-icon-close {
      width: 16px;
      height: 16px;
      line-height: 16px;
      vertical-align: -2px;
      border-radius: 50%;
      text-align: center;
      transition: all 0.3s cubic-bezier(0.645, 0.045, 0.335, 1);
      transform-origin: 100% 50%;
      &:before {
        transform: scale(0.6);
        display: inline-block;
        vertical-align: -3px;
      }
      &:hover {
        background-color: #b4bccc;
        color: #fff;
      }
    }
  }
}
</style>
