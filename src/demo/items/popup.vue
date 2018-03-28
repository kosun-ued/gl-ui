<template>
  <div class="demo-popup">
    <gl-nav-bar
      title="GL-ui popup"
      left-icon="back"
      @tapLeft="$router.go(-1)"
    />

    <div class="demo-block">
      <div class="title">中间弹窗</div>
      <gl-popup
      v-model="popup.center"
      pos="center"
      :close-by-click-mask="true"
      :mask="true"
      >
        <p>title</p>
        <p>content</p>
      </gl-popup>

      <button @click="popup.center = true">show popup</button>
    </div>

    <div class="demo-block">
      <div class="title">头部弹出</div>
      <gl-popup
      v-model="popup.top"
      pos="top"
      :close-by-click-mask="true"
      :mask="true"
      >
        <p>title</p>
        <p>content</p>
      </gl-popup>

      <button @click="popup.top = true">show popup</button>
    </div>

    <div class="demo-block">
      <div class="title">底部弹出</div>
      <gl-popup
      v-model="popup.bottom"
      pos="bottom"
      :close-by-click-mask="true"
      :mask="true"
      >
        <p>BOTTOM</p>
        <p>content</p>
      </gl-popup>

      <button @click="popup.bottom = true">show popup</button>
    </div>

    <div class="demo-block">
      <div class="title">全屏弹窗</div>
      <gl-popup
      v-model="popup.full"
      pos="full"
      :close-by-click-mask="true"
      :mask="true"
      transition="gl-popup"
      >
        <p>全屏</p>
        <button @click="popup.full = false">关闭弹窗</button>
      </gl-popup>

      <button @click="popup.full = true">show popup</button>
    </div>

  </div>
</template>
<script>
export default {
  data () {
    return {
      popup: {
        center: false,
        top: false,
        bottom: false,
        full: false
      }
    }
  }
}
</script>
