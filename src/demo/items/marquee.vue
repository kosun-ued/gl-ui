<template>
  <div class="demo-marquee">
    <gl-nav-bar
      title="GL-ui marquee"
      left-icon="back"
      @tapLeft="$router.go(-1)"
    />

    <div class="demo-block">
      <gl-marquee
        color="#900"
        background-color="#ddd"
        text="数字彩中间的title有异常样式。体彩右上角可出现两个icon超出可左右滑动，点击相应tab，把该tab滑动到中间位置"
        >
        <i class="gl-icon icon-back" slot="left"></i>
        <i class="gl-icon icon-error" slot="right"></i>
      </gl-marquee>
    </div>
    <div class="demo-block">
      <gl-marquee
        color="#900"
        background-color="#ddd"
        text="数字彩中间的title有异常样式。体彩右上角可出现两个icon超出可左右滑动，点击相应tab，把该tab滑动到中间位置"
        >
        <i slot="left">left</i>
      </gl-marquee>
    </div>

    <div class="demo-block">
      <gl-marquee
        color="#900"
        background-color="#ddd"
        text="数字彩中间的title有异常样式。体彩右上角可出现两个icon超出可左右滑动，点击相应tab，把该tab滑动到中间位置"
        >
        <i slot="right">right</i>
      </gl-marquee>
    </div>

  </div>
</template>
