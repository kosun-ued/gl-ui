<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<style lang="scss">
  body{
    background-color: #ECEFF1;
  }
  .demo-block{
    padding: 10px;
    .title{
      font-size: 16px;
      padding: 10px 0;
    }
    button{
      padding: 10px;
      background-color: #fff;
      border: 1px solid #dedede;
      border-radius: 3px;
      &.disable {
        background-color: #e8e8e8;
      }
    }
  }
</style>
