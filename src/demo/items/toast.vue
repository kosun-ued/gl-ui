<template>
  <div class="demo-toast">
    <gl-nav-bar
      title="GL-ui toast"
      left-icon="back"
      @tapLeft="$router.go(-1)"
    />
    <div class="demo-block">
      <div class="title">普通toast</div>
      <button @click='showToast1'>show toast</button>
    </div>

    <div class="demo-block">
      <div class="title">1秒自动消失</div>
      <button @click='showToast2'>show toast</button>
    </div>

    <div class="demo-block">
      <div class="title">显示遮罩</div>
      <button @click='showToast3'>show toast</button>
    </div>

    <div class="demo-block">
      <div class="title">图标 -- success</div>
      <button @click='showToast4'>show toast</button>
    </div>

    <div class="demo-block">
      <div class="title">图标 -- warn</div>
      <button @click='showToast5'>show toast</button>
    </div>

    <div class="demo-block">
      <div class="title">图标 -- loading</div>
      <button @click='showToast6'>show toast</button>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    showToast1 () {
      this.$toast('GL-ui 就是那么刚烈')
      this.showToast2()
    },

    showToast2 () {
      this.$toast({
        message: '刚烈UI222',
        duration: 1000
      }).then(() => {
        console.log('hide toast 2')
      })
    },

    showToast3 () {
      this.$toast({
        message: '刚烈UI333',
        mask: true
      })
    },

    showToast4 () {
      this.$toast({
        message: '干得漂亮',
        type: 'success'
      })
    },

    showToast5 () {
      this.$toast({
        message: '有点问题',
        type: 'warn'
      })
    },

    showToast6 () {
      this.$toast({
        type: 'loading',
        message: '加载中。。。'
      })
    }
  }
}
</script>
