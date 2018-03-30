<template>
  <div class="demo-confirm">
    <gl-nav-bar
      title="GL-ui confirm"
      left-icon="back"
      @tapLeft="$router.go(-1)"
    />
    <div class="demo-block">
      <p>{{confirm1Text}}</p>
      <div class="title">confirm</div>
      <button @click='confirm'>有标题</button>
    </div>
    <div class="demo-block">
      <p>{{confirm2Text}}</p>
      <div class="title">confirm</div>
      <button @click='confirm2'>没有标题</button>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      confirm1Text: ' ',
      confirm2Text: ' '
    }
  },

  methods: {
    confirm () {
      this.$confirm({
        title: '紧急通知',
        message: '今天下午放假111',
        okText: '我知道了',
        cancelText: '下次再说'
      }).then((type) => {
        this.confirm1Text = type
      })
    },

    confirm2 () {
      this.$confirm({
        message: '今天下午放假222',
        okText: '你说什么都对'
      }).then((type) => {
        this.confirm2Text = type
      })
    }
  }
}
</script>
