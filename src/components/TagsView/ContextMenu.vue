<template>
  <ul class="context-menu-container">
    <li @click="handleRefresh">{{ $t('msg.tagsView.refresh') }}</li>
    <li @click="handleCloseRight">{{ $t('msg.tagsView.closeRight') }}</li>
    <li @click="handleCloseOther">{{ $t('msg.tagsView.closeOther') }}</li>
  </ul>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

const props = defineProps({
  index: {
    type: Number,
    required: true
  }
})

const router = useRouter()
function handleRefresh() {
  router.go(0)
}

const store = useStore()
function handleCloseRight() {
  store.commit('app/removeTagsViewList', {
    type: 'right',
    index: props.index
  })
}

function handleCloseOther() {
  store.commit('app/removeTagsViewList', {
    type: 'other',
    index: props.index
  })
}
</script>

<style lang="scss" scoped>
.context-menu-container {
  position: fixed;
  background-color: #fff;
  z-index: 3000;
  list-style-type: none;
  padding: 5px 0;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 400;
  color: #333;
  box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.3);
  li {
    margin: 0;
    padding: 7px 16px;
    cursor: pointer;
    &:hover {
      background-color: #eee;
    }
  }
}
</style>
