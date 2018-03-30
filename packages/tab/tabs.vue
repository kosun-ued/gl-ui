<template>
  <div
  ref="gl-tabs"
  class="gl-tabs">
    <div
    class="gl-tabs__wrap"
    :style="wrapStyle">
      <slot></slot>
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
    }
  },

  computed: {
    wrapStyle () {
      return {
        width: this.wrapWidth + 'px'
      }
    }
  },

  mounted () {
    this.scroller = new BScroll(this.$refs['gl-tabs'], this.scrollerOptions)
    this.tabsWidth = this.$refs['gl-tabs'].getBoundingClientRect().width
  },

  methods: {
    initItem (item) {
      const width = item.width
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
.gl-tabs{
  width: 100%;
  overflow: hidden;
  &__wrap{
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flex;
    display: -o-flex;
    display: flex;
    overflow: hidden;
    min-width: 100%;
  }

  &__item {
    flex-shrink: 0;
    flex-grow: 0;
    flex-basis: auto;
  }
}

</style>
