<template>
  <gl-popup
  v-model="visible"
  :mask="showMask"
  :close-by-click-mask="false"
  class="gl-dialog"
  pos="center">
    <h3 class="gl-dialog__title" v-show="title">{{title}}</h3>
    <p class="gl-dialog__message">{{message}}</p>
    <footer :class="`gl-dialog__footer--${type}`">
      <button
        v-show="type === 'confirm'" 
        @click="close('cancel')"
        @touchmove.prevent.stop
        class="gl-dialog__button-cancel">
        {{cancelText}}
      </button>
      <button 
        @click="close('ok')"
        @touchmove.prevent.stop
        class="gl-dialog__button-ok">
        {{okText}}
      </button>
    </footer>
  </gl-popup>
</template>
<script>
import Popup from '../popup'
export default{
  components: {
    [Popup.name]: Popup
  },

  data () {
    return {
      visible: false,
      showMask: true,
      type: 'dialog',

      defaultButtonText: {
        ok: '确定',
        cancel: '取消'
      },

      okText: '',
      cancelText: '',

      title: '',
      message: ''
    }
  },

  methods: {
    show (options, type) {
      this.title = options.title
      this.message = options.message
      this.type = type || 'dialog'
      this.okText = options.okText || this.defaultButtonText.ok
      this.cancelText = options.cancelText || this.defaultButtonText.cancel
      this.visible = true
    },

    close (type) {
      this.visible = false
      this.$emit('close', type)
    }
  }
}
</script>
<style lang="scss">
@import '../styles/var.scss';
@import '../styles/mixins/border.scss';
.gl-dialog{
  .gl-popup__content{
    background-color: white;
    width: 80%;
    left: 0;
    right: 0;
    margin: auto;
    transform: translate(0, -50%);
    padding: 0;
  }
  
  &__title{
    font-size: 18px;
    text-align: center;
    margin-top: 10px;
  }

  &__message{
    font-size: 14px;
    padding: 20px 10px;
    color: $text-color;
  }

  footer{
    display: -webkit-flex;
    display: flex;

    button{
      flex: 1;
      height: 40px;
      background-color: white;
      font-size: 14px;
      border-radius: 0 0 5px 5px;
      @include border-1px($border-color, top);
    }
  }

  &__footer--confirm {
    .gl-dialog__button-ok {
      border-radius: 0 0 5px 0;
      @include border-1px($border-color, top left);
    }
    .gl-dialog__button-cancel {
      border-radius: 0 0 0 5px;
    }
  }

  &__button-ok {
    color: $active-color;
  }

}
</style>