<template>
  <div class="about">
    <!-- <h1>This is an about page</h1>
    <h3>counter: {{counter}}</h3>
    <el-button type="primary" @click="add"><el-icon-plus></el-icon-plus></el-button> -->
    <img class="author" src="./../assets/image/author.jpg" alt="" />

    <div class="abstract-item">
      <div class="title">
        <a href="/blogs/blogs/2.html" class=""
          >手把手教你轻松手写防抖和节流🔥</a
        >
      </div>
      <div class="abstract"></div>
      <div>
        <i class="iconfont reco-account">
          <span>Van</span>
        </i>
        <i class="iconfont reco-date">
          <span>2023/1/1</span>
        </i>
        <i class="tags iconfont reco-tag">
          <span class="tag-item">JavaScript</span>
          <span class="tag-item">手写</span>
        </i>
      </div>
    </div>

    <div class="info-wrapper">
      <div class="personal-info-wrapper">
        <img
          src="./../assets/image/author.jpg"
          alt="author-avatar"
          class="personal-img"
        />
        <h3 class="name">Van</h3>
        <div class="num">
          <div>
            <h3>2</h3>
            <h6>文章</h6>
          </div>
          <div>
            <h3>3</h3>
            <h6>标签</h6>
          </div>
        </div>
        <ul class="social-links"></ul>
      </div>
    </div>
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

.author {
  max-height: 200px;
  display: block;
  border-radius: 33% 33% 77% 77% / 44% 57% 43% 56%;
  box-shadow: rgb(0 0 0 / 20%) 0px 15px 18px;
}

.abstract-item {
  width: 400px;
  position: relative;
  margin: 0 auto 20px;
  padding: 16px 20px;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  transition: all 0.3s;
  background-color: #fff;
  cursor: pointer;

  &:hover {
    box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.2);
  }

  .title {
    position: relative;
    font-size: 19px;
    line-height: 46px;
    display: inline-block;
    pointer-events: auto;

    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: #3178c6;
      visibility: hidden;
      transform: scaleX(0);
      transition: 0.3s ease-in-out;
    }

    a {
      color: #242424;
      text-decoration: none;
    }

    &:hover {
      a {
        color: #3178c6;
      }

      &::after {
        visibility: visible;
        transform: scaleX(1);
      }
    }
  }

  div {
    pointer-events: auto;
  }

  i {
    display: inline-block;
    line-height: 23px;

    &:not(:last-child) {
      margin-right: 15px;

      span {
        margin-left: 12px;
      }
    }
  }
}

.info-wrapper {
  position: sticky;
  width: 400px;
    top: 70px;
    overflow: hidden;
    transition: all 0.3s;
    margin-left: 15px;
    flex: 0 0 300px;
    height: auto;
    box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    box-sizing: border-box;
    padding: 0 15px;
    background: #fff;

    &:hover {
      box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.2);
    }

    .personal-img {
      display: block;
      margin: 30px auto 15px;
      width: 90px;
      height: 90px;
      border-radius: 50%;
    }

    .name {
          font-size: 15px;
      text-align: center;
      color: #242424;
    }

    .num {
      display: flex;
    margin: 0 auto 15px;
    width: 80%;

      >div {
        text-align: center;
        flex: 0 0 50%;

        h3 {
          margin: 0 0 12px;
          color: #242424;
        }

        h6 {
          margin: 0;
          color: #242424
        }
      }

      div:first-child {
        border-right: 1px solid #333;
      }
    }

    .social-links {
      box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    }
}
</style>
