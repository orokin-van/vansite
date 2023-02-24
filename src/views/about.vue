<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h3>counter: {{counter}}</h3>
    <el-button type="primary" @click="add"><el-icon-plus></el-icon-plus></el-button>
  </div>
</template>

<script lang="ts" setup>
import useDemoStore from '@/store/index'

const demoStore = useDemoStore()
const { counter } = storeToRefs(demoStore)

const add = () => {
  demoStore.increment()
}
</script>

<style lang="less" scoped>
  svg {
    width: 1em;
    height: 1em;
  }
</style>