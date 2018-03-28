<template>
  <div class="gl-page">
    <gl-nav-bar
      left-icon="back"
      @tapLeft="$router.go(-1)"
      title="GL-ui demo"
    />

    <gl-scroller
    :options="options"
    class="gl-content">
      <ul class="content-wrapper">
        <router-link
        tag="li"
        :key="item"
        :to="{name: `demo_${item}`}"
        class="item"
        v-for="item in demos">
          {{item}}
        </router-link>
      </ul>
    </gl-scroller>
  </div>
</template>

<script>
export default {
  name: 'demo_index',

  data () {
    return {
      options: {
        tap: true,
        click: true
      },
      demos: ['nav-bar', 'marquee', 'scroller', 'slider', 'tab', 'number-keyboard', 'popup', 'toast', 'alert', 'confirm', 'actionSheet']
    }
  },

  methods: {
  }
}
</script>
<style lang="scss">
  .content-wrapper{
    padding: 10px;
    .item{
      padding: 15px;
      font-size: 16px;
      color: #37474F;
      background-color: #fff;
      margin-bottom: 10px;
      box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
    }
  }
</style>
