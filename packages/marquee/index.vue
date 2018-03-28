<template>
  <div
    class="gl-marquee"
    :style="marqueeStyle"
  >
    <div class="gl-marquee__left" v-if="$slots.left">
      <slot name="left"></slot>
    </div>
    
    <div class="gl-marquee__content-wrap" ref="contentWrap">
      <p
        ref="content"
        class="gl-marquee__content"
        :class="animationClass"
        :style="contentStyle"
        @animationend="onAnimationEnd"
        @webkitAnimationEnd="onAnimationEnd"
      >
        <slot>{{ text }}</slot>
      </p>
    </div>
    <div class="gl-marquee__right" v-if="$slots.right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'gl-marquee',

  props: {
    text: String,
    color: String,
    backgroundColor: String,
    delay: {
      type: [String, Number],
      default: 1
    },
    speed: {
      type: Number,
      default: 50
    }
  },

  data() {
    return {
      wrapWidth: 0,
      firstRound: true,
      duration: 0,
      offsetWidth: 0,
      showNoticeBar: true,
      animationClass: ''
    };
  },

  computed: {
    marqueeStyle() {
      return {
        color: this.color,
        background: this.backgroundColor
      }
    },
    contentStyle() {
      return {
        paddingLeft: this.firstRound ? 0 : this.wrapWidth + 'px',
        animationDelay: (this.firstRound ? this.delay : 0) + 's',
        animationDuration: this.duration + 's'
      }
    }
  },

  mounted() {
    this.initAnimation()
  },

  watch: {
    text: function() {
      this.$nextTick(this.initAnimation)
    }
  },

  methods: {
    onAnimationEnd() {
      this.firstRound = false
      this.$nextTick(() => {
        this.duration = (this.offsetWidth + this.wrapWidth) / this.speed
        this.animationClass = 'gl-marquee__play--infinite'
      })
    },
    initAnimation() {
      const offsetWidth = this.$refs.content.getBoundingClientRect().width
      const wrapWidth = this.$refs.contentWrap.getBoundingClientRect().width
      if (offsetWidth > wrapWidth) {
        this.wrapWidth = wrapWidth
        this.offsetWidth = offsetWidth
        this.duration = offsetWidth / this.speed
        this.animationClass = 'gl-marquee__play'
      }
    }
  }
}
</script>
<style lang="scss">
.gl-marquee{
  display: -webkit-flex;
  display: flex;
  justify-content: center;
  height: 30px;
  line-height: 30px;
  
  &__left, &__right{
    padding: 0 10px;
  }
  &__content-wrap{
    overflow: hidden;
    width: 100%;
    position: relative;
    flex: 1;
  }

  &__content{
    white-space: nowrap;
    position: absolute;
  }

  &__play {
    animation: gl-marquee-play linear both;
  }

  &__play--infinite {
    animation: gl-marquee-play-infinite linear infinite both;
  }

}

@keyframes gl-marquee-play {
  to { transform: translate3d(-100%, 0, 0) }
}
@keyframes gl-marquee-play-infinite {
  to { transform: translate3d(-100%, 0, 0) }
}
</style>