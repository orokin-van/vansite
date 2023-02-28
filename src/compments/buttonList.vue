<template>
  <div class="button-list">
    <ul>
      <li v-for="(value, index) in buttonList" :key="index">
        <a :target="value._blank === false ? '' : '_blank'" :href="value.link">
          <img v-if="value.img" :src="value.img" :alt="value.title" :title="value.title">
          <span :title="value.title" v-else>{{ value.text }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { buttonList } from '@/utils/config'
</script>

<style lang="less">
.button-list {
  display: block;
  min-width: 100%;
  margin: 30px auto;

  ul {
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    flex-wrap: wrap;
    
    li {
      background-color: white;
      border-radius: 50%;
      height: 80px;
      width: 80px;
      line-height: 80px;
      margin: 10px 20px;
      font-weight: bold;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0 0 0 0 rgba(white,0);
      transition: box-shadow .15s linear, transform 0.1s ease 0s;

      &:hover, &:active {
        box-shadow: 0 0 0 10px rgba(white,.3);
        transform: scale(1.2);
      }

      a {
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        width: 100%;
        height: 100%;
        -webkit-tap-highlight-color: rgba(255,0,0,0);
        color: unset;
        text-decoration: none;

        &:visited {
          color: unset;
        }
      }

      span {
        width: 80%;
        word-break: break-all;
        line-height: 15px;
      }

      img {
        width: 60%;
        height: 60%;
      }
    }
  }
}
</style>