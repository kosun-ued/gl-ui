<template>
  <div class="demo-actionSheet">
    <gl-nav-bar
      title="GL-ui actionSheet"
      left-icon="back"
      @tapLeft="$router.go(-1)"
    />
    <div class="demo-block">
      <gl-action-sheet
        v-model="actionSheetVisible"
        :close-by-click-mask="true"
      >
        <gl-action-sheet-item>苹果</gl-action-sheet-item>
        <gl-action-sheet-item>香蕉</gl-action-sheet-item>
        <gl-action-sheet-item>学历</gl-action-sheet-item>
        <gl-action-sheet-item>汽车</gl-action-sheet-item>
        <gl-action-sheet-item>汽车</gl-action-sheet-item>
        <gl-action-sheet-item>汽车</gl-action-sheet-item>
        <gl-action-sheet-item>汽车</gl-action-sheet-item>
      </gl-action-sheet>
      <button @click="actionSheetVisible = !actionSheetVisible">默认</button>
    </div>

    <div class="demo-block">
      <gl-action-sheet
        title="title"
        v-model="actionSheetVisible2"
        :close-by-click-mask="true"
      >
        <gl-action-sheet-item>苹果</gl-action-sheet-item>
        <gl-action-sheet-item>香蕉</gl-action-sheet-item>
        <gl-action-sheet-item>学历</gl-action-sheet-item>
        <gl-action-sheet-item>汽车</gl-action-sheet-item>
        <gl-action-sheet-item>汽车</gl-action-sheet-item>
        <gl-action-sheet-item>汽车</gl-action-sheet-item>
        <gl-action-sheet-item>汽车</gl-action-sheet-item>
      </gl-action-sheet>
      <button @click="actionSheetVisible2 = !actionSheetVisible2">标题</button>
    </div>

  </div>
</template>
<script>
export default {
  data () {
    return {
      actionSheetVisible: false,
      actionSheetVisible2: false
    }
  },

  methods: {
  }
}
</script>
