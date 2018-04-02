<template>
  <div
    ref="gl-tabs"
    class="gl-tabs">
    <div
      class="gl-tabs__wrap"
      :style="wrapStyle">
      <slot></slot>
      <b class="gl-tabs__wrap-active"
         :style="lineStyle"></b>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'gl-tabs',
  props: {
    activeClass: {
      type: String,
      default: 'gl-tab-active'
    },
    activeStyle: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      activeItemIndex: 0,
      scroller: null,
      items: [],
      scrollerOptions: {
        scrollX: true,
        scrollY: false,
        click: true,
        bounce: false
      },

      tabsWidth: 0,
      wrapWidth: 0,
      distance: 0
    }
  },

  computed: {
    wrapStyle () {
      return {
        width: this.wrapWidth + 'px'
      }
    },
    lineStyle () {
      if (!this.items.length) {
        return {}
      }
      return Object.assign({
        width: this.items[this.activeItemIndex].width + 'px',
        transform: `translate(${this.distance}px, 0)`
      }, this.activeStyle)
    }
  },

  mounted () {
    this.scroller = new BScroll(this.$refs['gl-tabs'], this.scrollerOptions)
    this.tabsWidth = this.$refs['gl-tabs'].getBoundingClientRect().width
  },

  methods: {
    initItem (item) {
      let width = item.width
      this.wrapWidth += width
      this.items.push(item)
      return {
        index: this.items.length,
        activeClass: this.activeClass
      }
    },

    itemOnTap (index) {
      this.activeItemIndex = index

      let distance = 0
      this.items.some((item, i) => {
        if (index > i) {
          distance += item.width
        } else {
          return true
        }
      })
      this.distance = distance

      // 移动到中间
      distance -= this.tabsWidth / 2 - this.items[index].width / 2

      // 滚动容错
      distance = Math.max(0, distance)
      distance = Math.min(this.wrapWidth - this.tabsWidth, distance)

      this.scroller.scrollTo(-distance, 0, 300, 'swipe')
    }
  }
}
</script>
<style lang="scss">
  .gl-tabs {
    position: relative;
    width: 100%;
    overflow: hidden;
    &__wrap {
      display: flex;
      overflow: hidden;
      min-width: 100%;
      &-item {
        flex-shrink: 0;
        flex-grow: 0;
        flex-basis: auto;
      }
      &-active {
        position: absolute;
        left: 0;
        bottom: 0;
        height: 2px;
        width: 10px;
        background-color: red;
        transition: transform .2s;
      }
    }
  }

</style>
