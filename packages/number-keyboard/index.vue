<template>
  <transition name="gl-slide-bottom">
    <div class="gl-number-keyboard" v-show="value">
      <div class="gl-number-keyboard__tool">
        <span class="gl-number-keyboard__tool--done" @touchstart.stop @click="hide">完成</span>
      </div>

      <div class="gl-number-keyboard__keys">
        <key v-for="i in 9" :val="i" @press="press" :key="i">{{i}}</key>
        <key val="." class="gl-number-keyboard__key--gray" @press="press">.</key>
        <key @press="press" val="0">0</key>
        <key :val="DELETE" class="gl-number-keyboard__key--gray gl-icon icon-delete" @press="press"></key>
      </div>
    </div>
  </transition>
</template>
<script>
  import key from './key'

  export default {
    name: 'gl-number-keyboard',

    props: {
      value: Boolean
    },

    data () {
      return {
        DELETE: 'delete'
      }
    },

    components: {
      key
    },

    mounted () {
      this.handler(true)
    },

    destroyed () {
      this.handler(false)
    },

    activated () {
      this.handler(true)
    },

    deactivated () {
      this.handler(false)
    },
    methods: {
      handler (action) {
        if (action !== this.handlerStatus) {
          this.handlerStatus = action
          document.body[(action ? 'add' : 'remove') + 'EventListener']('touchstart', this.hide, {
            passive: true
          })
        }
      },
      press (keyCode) {
        if (keyCode === this.DELETE) {
          this.$emit('delete')
        } else {
          this.$emit('press', keyCode)
        }
      },
      hide () {
        this.$emit('input', false)
      }
    }
  }
</script>
<style lang="scss">
  @import "../styles/var.scss";
  @import "../styles/mixin.scss";
  @import '../styles/transition.scss';

  .gl-number-keyboard {
    position: fixed;
    height: 230px;
    width: 100%;
    left: 0;
    bottom: 0;
    background-color: #fff;
    animation-timing-function: ease-out;

    &__tool {
      height: 30px;
      line-height: 30px;
      width: 100%;
      padding: 0 10px;
      @include border-1px($border-color, top);
      display: -webkit-flex;
      display: flex;
      flex-direction: row-reverse;
      span {
        color: $active-color;
      }
    }

    &__keys {
      display: -webkit-flex;
      display: flex;
      overflow: hidden;
      flex-wrap: wrap;
    }
  }
</style>
