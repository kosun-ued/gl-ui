<template>
  <div
    :style="{'background-color': backgroundColor, color: color}"
    class="gl-nav-bar">
    <slot name="left">
      <div class="gl-nav-bar__left" @touchmove.prevent.stop @click="tapLeft">
        <i v-if="leftIcon" :class="`gl-icon icon-${leftIcon}`"></i>
        <span v-if="leftText" class="gl-nav-bar__text">{{leftText}}</span>
      </div>
    </slot>
    <slot name="center">
      <div class="gl-nav-bar__title">
        <span class="gl-nav-bar__text">{{title}}</span>
      </div>
    </slot>
    <slot name="right">
      <div class="gl-nav-bar__right" @touchmove.prevent.stop @click="tapRight">
        <span v-if="rightText" class="gl-nav-bar__text">{{rightText}}</span>
        <i v-if="rightIcon" :class="`gl-icon icon-${rightIcon}`"></i>
      </div>
    </slot>
  </div>
</template>
<script>
  export default {
    name: 'gl-nav-bar',
    props: {
      leftIcon: String,
      leftText: String,
      rightText: String,
      rightIcon: String,
      title: String,
      backgroundColor: String,
      color: String
    },

    methods: {
      tapLeft () {
        if (this.leftText || this.leftIcon) {
          this.$emit('tapLeft')
        }
      },

      tapRight () {
        if (this.rightText || this.rightIcon) {
          this.$emit('tapRight')
        }
      }
    }
  }
</script>
<style lang="scss">
@import '../styles/var.scss';
@import "../styles/mixin.scss";
.gl-nav-bar {
  height: 45px;
  background-color: $block-bg-color;
  line-height: 45px;
  width: 100%;
  color: $block-text-color;
  position: relative;
  
  .gl-nav-bar__left, .gl-nav-bar__right{
    top: 0;
    width: 60px;
    position: absolute;
    display: -webkit-flex;
    display: flex;
    font-size: 14px;
    align-items: center;
    .gl-icon{
      font-size: 18px;
    }
  }
  .gl-nav-bar__left{
    left: 10px;
  }
  .gl-nav-bar__right{
    justify-content: flex-end;
    text-align: right;
    right: 10px;
  }

  .gl-nav-bar__title{
    text-align: center;
    font-size: 16px;
  }
}
</style>
