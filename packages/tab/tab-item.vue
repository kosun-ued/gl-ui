<template>
  <div 
  class="gl-tabs__item"
  :class="klass"
  @click="onTap">
    <slot/>
  </div>
</template>
<script>
  export default {
    name: 'gl-tab-item',
    data () {
      return {
        index: -1,
        activeClass: '',
        width: 0
      }
    },
    mounted () {
      this.width = this.$el.getBoundingClientRect().width
      const info = this.$parent.initItem(this)
      this.index = info.index - 1
      this.activeClass = info.activeClass
    },
    computed: {
      klass () {
        return {
          [this.activeClass]: this.$parent.activeItemIndex === this.index
        }
      }
    },

    methods: {
      onTap () {
        this.$parent.itemOnTap(this.index)
        this.$emit('tap', this.index)
      }
    }
  }
</script>
