<template>
  <div class="demo-alert">
    <gl-nav-bar
      title="GL-ui alert"
      left-icon="back"
      @tapLeft="$router.go(-1)"
    />
    <div class="demo-block">
      <div class="title">alert</div>
      <button @click='alert'>有标题</button>
    </div>

    <div class="demo-block">
      <div class="title">alert</div>
      <button @click='alert2'>没有标题</button>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    alert () {
      this.$alert({
        title: '紧急通知',
        message: '今天下午放假111'
      }).then(() => {
        console.log('close1111')
        this.alert2()
      })
    },

    alert2 () {
      this.$alert('今天下午放假222').then(() => {
        console.log('close222')
      })
    }
  }
}
</script>
