<template>
  <div class="base-wrapper">
    <Header v-if="!route.meta.isHome"/>
    <router-view />
    <el-backtop :right="16" :bottom="84" />
  </div>
</template>

<script lang="ts" setup>
import Header from '@/Layout/header.vue'

const route = useRoute()

</script>


<style lang="less">
.base-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>