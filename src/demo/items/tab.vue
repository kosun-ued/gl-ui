<template>
  <div class="demo-tab">
    <gl-nav-bar
      title="GL-ui tab"
      left-icon="back"
      @tapLeft="$router.go(-1)"
    />
    <div class="demo-block block-0">
      <gl-tabs
      active-class="tab-active">
        <gl-tab-item>
          <p>选项1</p>
        </gl-tab-item>
        <gl-tab-item>
          <p>选项2222</p>
        </gl-tab-item>
        <gl-tab-item>
          <p>选项33333</p>
        </gl-tab-item>
        <gl-tab-item>
          <p>4</p>
        </gl-tab-item>
        <gl-tab-item>
          <p>555</p>
        </gl-tab-item>
        <gl-tab-item>
          <p>6666666666</p>
        </gl-tab-item>
        <gl-tab-item>
          <p>777</p>
        </gl-tab-item>
      </gl-tabs>
    </div>

    <div class="demo-block block-1">
      <gl-tabs
      active-class="tab-active">
        <gl-tab-item :key="i" v-for="i in 10">
          <p>选项{{i}}？</p>
        </gl-tab-item>
      </gl-tabs>
    </div>

    <div class="demo-block block-2">
      <gl-tabs
      active-class="tab-active">
        <gl-tab-item @tap="tapItem" :key="i" v-for="i in 4">
          <p>选项{{i}}</p>
        </gl-tab-item>
      </gl-tabs>

      <p>click--->{{curIndex}}</p>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      curIndex: 0
    }
  },
  methods: {
    tapItem (index) {
      this.curIndex = index
    }
  }
}
</script>
<style lang="scss">
.demo-tab{
  .block-0{
    .gl-tabs{
      background-color: #fff;
    }
    .gl-tabs__item{
      display: inline-block;
      padding: 10px;
      min-width: 50px;
      text-align: center;

      &.tab-active{
        background-color: #900;
      }
    }
  }

  .block-1{
    .gl-tabs{
      background-color: #fff;
    }
    .gl-tabs__item{
      display: inline-block;
      padding: 10px;
      text-align: center;
      width: 80px;

      &.tab-active{
        color: #f00;
        border-bottom: 1px solid #f00;
      }
    }
  }

  .block-2{
    .gl-tabs{
      background-color: #fff;
    }
    .gl-tabs__item{
      display: inline-block;
      padding: 10px;
      text-align: center;
      width: 25%;

      &.tab-active{
        color: #f00;
        border-bottom: 1px solid #f00;
      }
    }
  }
}
</style>
