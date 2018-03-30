<template>
  <div class="demo-slider">
    <gl-nav-bar
      leftIcon="back"
      title="GL-ui demo"
      @tapLeft="$router.go(-1)"
    />

    <div class="demo-block">
      <gl-slider
      :duration="1000"
      :autoplay="2000">
        <gl-slider-item :key="i" v-for="i in 5">{{i}}</gl-slider-item>
      </gl-slider>
    </div>

    <div class="demo-block">
      <div class="title">默认是第三个</div>
      <gl-slider
      :initialIndex="2"
      :duration="1000"
      :autoplay="2000">
        <gl-slider-item :key="i" v-for="i in 5">{{i}}</gl-slider-item>
      </gl-slider>
    </div>

  </div>
</template>
<style lang="scss">
.demo-block .gl-slider{
  &-item{
    background-color: #fff;
    font-size: 20px;
  }
}
</style>
