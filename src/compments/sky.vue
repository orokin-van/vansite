<template>
  <label>
    <div class="scene">
      <div class="allstars">
        <div v-for="(item, index) in 30" :key="index" :class="'star' + index"></div>
      </div>
      <svg class="extras" width="100%" height="100%" preserveAspectRatio="none">
        <defs>
          <radialGradient id="comet-gradient" cx="0" cy=".5" r="0.5">
            <stop offset="0%" stop-color="rgba(255,255,255,.8)"></stop>
            <stop offset="100%" stop-color="rgba(255,255,255,0)"></stop>
          </radialGradient>
        </defs>
        <g transform="rotate(-135)">
          <ellipse class="comet comet-a" fill="url(#comet-gradient)" cx="0" cy="0" rx="150" ry="2"></ellipse>
        </g>
        <g transform="rotate(20)">
          <ellipse class="comet comet-b" fill="url(#comet-gradient)" cx="100%" cy="0" rx="150" ry="2"></ellipse>
        </g>
        <g transform="rotate(300)">
          <ellipse class="comet comet-c" fill="url(#comet-gradient)" cx="40%" cy="100%" rx="150" ry="2"></ellipse>
        </g>
      </svg>
    </div>
  </label>
</template>

<style lang="less">
.loopStar(@i) when (@i >= 0) {
    .star@{i} {
      position: absolute;
      top: ~`Math.random() * 80 * -1 + 50 + '%'`;
      left: ~`Math.random() * 100 * 1 + '%'`;
      animation-delay: (@i) * -0.1s !important;
    }

    .loopStar(@i - 1);
}

label {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 0;

  .scene {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background: linear-gradient(#1D2B49, #1A45A0, #91cdff, #fff);
    transition: 2s background;
    background-size: 100% 300%;
    box-shadow: 0px 0px 30px rgba(black, 0.3);

    .allstars {
      width: 100%;
      height: 100%;
      border-radius: 0;
      position: absolute;
      left: 0;
      top: 0;
      transition: 2s;

      div[class^='star'] {
        width: 3px;
        height: 3px;
        border-radius: 50%;
        background-color: #fff;
        animation: falling 2s infinite;
      }
      
      .loopStar(29);
    }

    .comet {
      transform-origin: center center;
      animation: comet 10s linear infinite;
    }

    .comet-b {
      animation-delay: -3.3s
    }

    .comet-c {
      animation-delay: -5s
    }
  }
}

@keyframes falling {
  0%, 100% {
    opacity: 0;
  }
  70% {
    opacity: 1;
  }
  0% {
    transform: translate(100px, 0px);
  }
  100% {
    transform: translate(0px, 200px);
  }
}

@keyframes comet {
  0%, 40% {
    transform: translateX(0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  60%, 100% {
    transform: translateX(-100vmax);
    opacity: 0;
  }
}
</style>