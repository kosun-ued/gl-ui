<template>
  <div class="demo-nav-bar">
    <gl-nav-bar
      title="GL-ui nav-bar"
      left-icon="back"
      @tapLeft="$router.go(-1)"
    />

    <div class="demo-block">
      <gl-nav-bar
        title="只有标题"
      />
    </div>

    <div class="demo-block">
      <gl-nav-bar
        title="标题 + 返回icon"
        leftIcon="back"
      />
    </div>

    <div class="demo-block">
      <gl-nav-bar
        title="标题 + 右侧icon"
        rightIcon="more-transverse"
      />
    </div>

    <div class="demo-block">
      <gl-nav-bar
        leftText="返回"
        title="标题 + 左文字"
      />
    </div>

    <div class="demo-block">
      <gl-nav-bar
        rightText="更多"
        title="标题 + 右文字"
      />
    </div>
  </div>
</template>
