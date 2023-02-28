<template>
  <div class="header-banner">
    <router-link to="/" title="返回主页" class="back">
      <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-arrow-left fa-w-14"><path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z" class=""></path></svg>
    </router-link>
    <span>{{ route.meta.title }}</span>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute()

</script>

<style lang="less">
.header-banner {
  color: white;
  font-size: 26px;
  font-family: Roboto, sans-serif;
  background-color: #128ff2;
  width: 100%;
  height: 80px;
  line-height: 80px;
  box-shadow: 0 4px 0 rgba(18, 143, 242, 0.3);
  position: relative;

  .back svg {
    top: 50%;
    transform: translateY(-50%);
    left: 10px;
    width: 25px;
    height: 25px;
    position: absolute;
    display: inline-block;
    vertical-align: middle;
    padding: 10px;
    transition: background-color ease-in-out 0.3s;
    border-radius: 50%;
    background-color: rgba(white, 0.2);
    line-height: 25px;
    fill: white;
    color: white;
    cursor: pointer;
    user-select: none;

    &:hover, &:active {
      background-color: white;
      fill: #128ff2;
      color: #128ff2;
    }
  }
}
</style>