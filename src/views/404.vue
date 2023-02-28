<template>
  <div id="error-page">
    <div id="container">
      <div id="main">
        <div class="wrapper">
          <div id="code">404</div>
          <div id="message">Page Not Found</div>
          <div id="url">{{ currentURL }}</div>
          <span class="line"></span>
        </div>
        <div class="wrapper">
          <div id="tips">
            <div id="help">
              <ul>
                <li>该内容可能还没有发布</li>
                <li>该内容可能不存在</li>
              </ul>
            </div>
          </div>
          <button id="back" @click="back">返回上一页</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  let currentURL = window.location.href
  const router = useRouter()

  function back() {
    window.location.href = document.referrer
    router.back()
  }
</script>

<style lang="less" scoped>
#error-page {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #F8F9FA;
  font-size: 15px;
  color: #555;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  background-size: cover
}

a, a:visited {
  color: #4285F4;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
}

#container {
  width: 90%;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  #main {
    margin: 20px 0;
    padding: 20px;
    box-sizing: border-box;
    width: 100%;
  }

  #back {
    border: none;
    cursor: pointer;
    border-radius: 5px;
    padding: 10px;
    margin: 15px 0;
    transition: all .3s ease-in-out;
    outline: none;
    background-color: #4285F4;
    color: white;
    float: right;
  }
}

.wrapper {
  max-width: 400px;
  margin: 0 auto;
  padding: 0 20px;
  width: 90%;
  box-sizing: border-box;

  #code {
    text-align: center;
    font-size: 38px;
  }

  #message {
    text-align: center;
    font-size: 18px;
    color: #888888;
  }

  #url {
    color: #b0b0b0;
    text-align: center;
    margin-top: 10px;
    word-break: break-all;
  }

  #tips {
    clear: both;
  }

  #help ul {
    padding: 0;
    margin: 0;
    text-align: left;
    
    li {
      margin: 5px;
    }
  }
}

.line {
  display: block;
  width: 95%;
  height: 1px;
  margin: 10px auto;
  background-color: #c6c6c6;
}
</style>
