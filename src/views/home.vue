<template>

  <div class="home">
    <div class="home-main">
      <Avatar />
      <div class="author-name">{{ route.meta.title }}</div>
      <buttonList />
    </div>

    <Sky />
  </div>
</template>

<script lang="ts" setup>
import Sky from '@/compments/sky.vue'
import Avatar from '@/compments/avatar.vue'
import buttonList from '@/compments/buttonList.vue'

const route = useRoute()
</script>

<style lang="less">
.home {
  flex-grow: 1;

  .home-main {
    position: relative;
    z-index: 1;
  }

  .author-name {
    margin-top: 50px;
    font-size: 38px;
    color: white;
  }
}
</style>