<template>
  <div ref="wrapper" class="gl-scroller">
    <div class="gl-scroll__content">
      <slot></slot>
      <p class="gl-scroller__pullUp" v-if="options.enablePullUp">{{pullUpText[pullUpStatus]}}</p>
    </div>
    
    <div class="gl-scroller__pullDown" :style="pullDownStyle" v-if="options.enablePullDown">
      <p>{{pullDownText[pullDownStatus]}}</p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'

  export default {
    name: 'gl-scroller',
    props: {
      options: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data () {
      return {
        pullDownStyle: '',
        isRefreshing: false,
        pullDownStatus: 'pulling',
        pullDownText: {
          pulling: '下拉加载',
          release: '释放更新',
          loading: '正在加载'
        },

        pullUpStyle: '',
        isLoadingMore: false,
        pullUpStatus: 'normal',
        pullUpText: {
          normal: '加载更多',
          loading: '加载中',
          noData: '没有更多数据'
        }
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.initScroll()
      })
    },
    methods: {
      initScroll() {
        if (!this.$refs.wrapper) {
          return
        }

        if (this.options.enablePullDown) {
          this.options.pullDownRefresh = {
            threshold: 60,
            stop: 30
          }
        }

        if (this.options.enablePullUp) {
          this.options.pullUpLoad = {
            threshold: 50
          }
        }

        this.scroll = new BScroll(this.$refs.wrapper, this.options)

        if (this.options.pullDownRefresh) {
          this._initPullDown()
        }

        if (this.options.pullUpLoad) {
          this._initPullUp()
        }
      },

      pullDownRefreshDone () {
        this.scroll.finishPullDown()
        this.pullDownStatus = 'pulling'
        this.isRefreshing = false
      },

      pullUpLoadDone (isAllLoaded) {
        this.pullUpStatus = isAllLoaded ? 'noData': 'normal'
        this.scroll.finishPullUp()
      },

      _initPullDown () {
        this.scroll.on('pullingDown', () => {
          this.isRefreshing = true
          this.pullDownStatus = 'loading'
          this.$emit('pullingDown')
        })

        this.scroll.on('scroll', (pos) => {
          if (!this.isRefreshing && pos.y >= this.options.pullDownRefresh.threshold) {
            this.pullDownStatus = 'release'
          }
          this.pullDownStyle = `top: ${pos.y - 30}px`
        })
      },

      _initPullUp () {
        this.scroll.on('pullingUp', () => {
          this.pullUpStatus = 'loading'
          this.$emit('pullingUp')
        })
      }
    }
  }

</script>
<style lang="scss">
.gl-scroller{
  overflow: hidden;
  position: relative;
  &__pullDown{
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all;
    height: 30px;
    top: -30px;
  }

  &__pullUp{
    height: 30px;
    width: 100%;
    text-align: center;
    line-height: 30px;
  }
}
</style>
