<template>
  <div class="demo-scroller">
    <gl-nav-bar
      title="GL-ui scroller"
      left-icon="back"
      @tapLeft="$router.go(-1)"
    />

    <!-- <div class="demo-block">
      <div class="title">无点击事件</div>
      <gl-scroller class="scroller scroller-1">
        <ul>
          <li :key="i" v-for="i in 20">item-{{i}}</li>
        </ul>
      </gl-scroller>
    </div> -->

    <div class="demo-block">
      <div class="title">开启点击事件</div>
      <gl-scroller
      ref="glScroll2"
      @pullingDown="pullingDown"
      @pullingUp="pullingUp"
      :options="options"
      class="scroller scroller-1">
        <p :key="i" @click="tapItem(i)" v-for="i in items">item-{{i}}</p>
      </gl-scroller>
    </div>

  </div>
</template>
<script>
export default {
  data () {
    return {
      items: 20,
      options: {
        click: true,
        // pullDownRefresh: true
        enablePullDown: true,
        enablePullUp: true
      }
    }
  },

  methods: {
    tapItem (i) {
      alert('tap' + i)
    },

    pullingDown () {
      setTimeout(() => {
        this.$refs['glScroll2'].pullDownRefreshDone()
      }, 1500)
    },

    pullingUp () {
      setTimeout(() => {
        this.items = 30
        this.$refs['glScroll2'].pullUpLoadDone(true)
      }, 1000)
    }
  }
}
</script>
<style lang="scss">
.demo-scroller{
  .scroller{
    height: 550px;
    overflow: hidden;
    border: 1px solid #ddd;
  }
  p{
    line-height: 30px;
  }
}
</style>
