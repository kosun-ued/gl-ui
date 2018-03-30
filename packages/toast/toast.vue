<template>
  <gl-popup
  v-model="visible"
  :mask="mask"
  transition=""
  :close-by-click-mask="false"
  class="gl-toast"
  pos="center">
    <div class="gl-icon" :class="`icon-${type}`" v-if="type"></div>
    {{message}}
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
      duration: 3000,
      timer: null,
      message: '',
      mask: false,
      type: ''
    }
  },

  methods: {
    show (options) {
      this.message = options.message
      this.mask = !!options.mask
      this.type = options.type || ''
      this.visible = true

      let duration

      if (!parseInt(options.duration) || parseInt(options.duration) <= 0) {
        duration = this.duration
      } else {
        duration = options.duration
      }

      clearTimeout(this.timer)
      return new Promise ((resolve, reject) => {
        this.timer = setTimeout(() => {
          this.hide()
          resolve()
        }, duration)
      })
    },

    hide () {
      this.visible = false
      clearTimeout(this.timer)
    }
  }
}
</script>
<style lang="scss">
.gl-toast{
  .gl-popup__content{
    background-color: rgba(0,0,0,0.8);
    color: #fff;
    padding: 10px 20px;
    .gl-icon{
      font-size: 40px;
      text-align: center;
      margin-bottom: 10px;

      &.icon-loading{
        animation: circle 1s infinite;
        -webkit-animation: circle 1s infinite;
        transform-origin: center center;
      }
    }
  }
}

@keyframes circle {
  0% { transform:rotate(0deg); }
  100% { transform:rotate(360deg); }
}

</style>