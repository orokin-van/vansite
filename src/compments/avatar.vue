<template>
  <div class="avatar">
    <img src="./../assets/image/author.jpg" alt="avatar">
  </div>
</template>

<style lang="less">
.avatar {
  margin: 70px auto auto;
  max-width: 200px;
  max-height: 200px;
  border-radius: 50%;
  overflow: hidden;
  border: white 5px solid;
  background-color: white;
  animation: at-ripple 1.5s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
  }
}

@keyframes at-ripple {
  0% {
    box-shadow: 0 4px 10px rgba(white, 0.1), 0 0 0 0 rgba(white, 0), 0 0 0 5px rgba(white, 0), 0 0 0 10px rgba(white, 0);
  }
  50% {
    box-shadow: 0 4px 10px rgba(white, 0.1), 0 0 0 0 rgba(white, 0.2), 0 0 0 10px rgba(white, 0.2), 0 0 0 25px rgba(white, 0.2);
  }
  100% {
    box-shadow: 0 4px 10px rgba(white, 0.0), 0 0 0 0 rgba(white, 0.0), 0 0 0 18px rgba(white, 0.0), 0 0 0 45px rgba(white, 0.0);
  }
}
</style>