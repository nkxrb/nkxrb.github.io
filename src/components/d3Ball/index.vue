<template>
  <div class="bubble-rotate-offset">
    <div class="ball bubble">
      <a>{{text}}</a>
    </div>
  </div>
</template>
<script script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    text: { type: String },
    type: { type: String },
  },
});
</script>
<style lang="scss" scoped>
  .bubble-rotate-offset {
    width: 100%;
    height: 100%;
  }

  .ball {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    position: relative;

    &:before,
    &:after {
      content: "";
      position: absolute;
      border-radius: 100%;
      z-index: 2;
    }
    &:before {
      top: 0;
      left: 0;
    }

    &:after {
      display: none;
      top: 5%;
      left: 10%;
      width: 80%;
      height: 80%;
      transform: rotateZ(-30deg);
    }
  }

  .bubble {
    background: radial-gradient(
      circle at 50% 55%,
      rgba(240, 245, 255, 0.9),
      rgba(240, 245, 255, 0.9) 40%,
      rgba(225, 238, 255, 0.8) 60%,
      rgba(43, 130, 255, 0.4)
    );
    animation: bubble-anim 2s ease-out infinite;

    &:before {
      filter: blur(0);
      height: 80%;
      width: 40%;
      background: radial-gradient(
        circle at 130% 130%,
        rgba(255, 255, 255, 0) 0,
        rgba(255, 255, 255, 0) 46%,
        rgba(255, 255, 255, 0.8) 50%,
        rgba(255, 255, 255, 0.8) 58%,
        rgba(255, 255, 255, 0) 60%,
        rgba(255, 255, 255, 0) 100%
      );
      transform: translateX(131%) translateY(58%) rotateZ(168deg) rotateX(10deg);
    }
    &:after {
      display: block;
      background: radial-gradient(
        circle at 50% 80%,
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 0) 74%,
        white 80%,
        white 84%,
        rgba(255, 255, 255, 0) 100%
      );
    }
  }

  @keyframes bubble-anim {
    0% {
      transform: scale(1);
    }

    20% {
      transform: scaleY(0.95) scaleX(1.05);
    }

    48% {
      transform: scaleY(1.1) scaleX(0.9);
    }

    68% {
      transform: scaleY(0.98) scaleX(1.02);
    }

    80% {
      transform: scaleY(1.02) scaleX(0.98);
    }

    97%,
    100% {
      transform: scale(1);
    }
  }

  @keyframes rotate-bubble-offset {
    0% {
      transform: rotateZ(30deg);
    }

    100% {
      transform: rotateZ(-30deg);
    }
  }
</style>