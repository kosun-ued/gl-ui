<template>
  <div class="docs">
    <nav class="docs__nav">
      <router-link tag="h1" to="/docs/index">
        <img src="./assets/GL-logo.png" alt="Gl-ui">
        GL-ui
      </router-link>
      <router-link
      :key="link.routerName"
      v-for="link in links"
      :to="{name: link.routerName}">
        {{link.name}}
        <span>{{link.desc}}</span>
      </router-link>
    </nav>
    <div class="docs__content">
      <router-view></router-view>
    </div>
    <div class="docs__demo">
      <iframe :src="iframeSrc" frameborder="0"></iframe>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      links: [
        {
          name: 'ActionSheet',
          desc: '行动按钮',
          routerName: 'docs_actionsheet'
        },
        {
          name: 'Alert',
          desc: '提示弹窗',
          routerName: 'docs_alert'
        },
        {
          name: 'Confirm',
          desc: '确认弹窗',
          routerName: 'docs_confirm'
        },
        {
          name: 'Marquee',
          desc: '走马灯公告',
          routerName: 'docs_marquee'
        },
        {
          name: 'NavBar',
          desc: '头部标题栏',
          routerName: 'docs_nav-bar'
        },
        {
          name: 'Number-keyboard',
          desc: '数字键盘',
          routerName: 'docs_number-keyboard'
        },
        {
          name: 'Popup',
          desc: '自定义弹窗',
          routerName: 'docs_popup'
        },
        {
          name: 'Slider',
          desc: '轮播',
          routerName: 'docs_slider'
        },
        {
          name: 'Tab',
          desc: '标签栏',
          routerName: 'docs_tab'
        },
        {
          name: 'Scroller',
          desc: '滚动容器',
          routerName: 'docs_scroller'
        },
        {
          name: 'Toast',
          desc: '轻提示',
          routerName: 'docs_toast'
        },
        {
          name: 'Picker',
          desc: '选择器',
          routerName: 'docs_picker'
        }
      ]
    }
  },

  computed: {
    iframeSrc () {
      const routerName = this.$route.name.replace('docs_', '')
      return `#/demo/${routerName}`
    }
  }
}
</script>

<style lang="scss">
html{
    user-select: auto;
  }
body{background-color: #fff; overflow: scroll;}
.docs{
  position: relative;
  padding:0 400px 20px 200px;
  background-color: #fff;
  height: 100%;
  width: 100%;
  &__nav{
    position: fixed;
    top: 0;
    left: 0;
    width: 200px;
    height: 100%;
    border-right: 1px solid #eee;
    padding:0 10px;
    h1{
      font-size: 30px;
      font-weight: bold;
      color: #2ebeca;
      border-bottom: 1px solid #eee;
      line-height: 50px;
      padding: 10px 0;
      margin-bottom: 10px;
      img{
        width: 50px;
        height: 50px;
        vertical-align: middle;
      }
    }
    a{
      line-height: 40px;
      font-size: 14px;
      display: block;
      text-indent: 10px;
      color: #333;
      span{
        font-size: 12px;
        color: #999;
      }
      &:hover, &.is-active{
        background-color: #f4f4f4;
        color: #2ebeca;
        span{
          color: #2ebeca;
        }
      }
    }
  }

  &__demo{
    position: fixed;
    right: 20px;
    top: 0;
    bottom: 0;
    margin: auto;
    height: 667px;
    width: 375px;
    box-shadow: 2px 2px 5px 1px rgba(0,0,0,0.3);

    iframe {
      height: 667px;
      width: 375px;
    }
  }
}
.docs__content{-webkit-box-flex:1;-ms-flex:1;flex:1;position:relative;padding:0 0 75px}.docs__content a{color:#3498db}.docs__content section{padding:10px 40px;overflow:hidden}.docs__content section>h1,.docs__content section>h2,.docs__content section>h3,.docs__content section>h4,.docs__content section>h5,.docs__content section>h6{line-height:1.5;font-weight:400;margin:20px 0 10px;color:rgba(51,51,51,.9)}.docs__content section>h1{font-size:36px}.docs__content section>h2{font-size:30px;margin-bottom:25px}.docs__content section>h3{font-size:20px;margin-top:45px}.docs__content section>h2+h3{margin-top:25px}.docs__content section>h4{font-size:16px;margin-bottom:15px}.docs__content section>h5{font-size:14px}.docs__content section>h6{font-size:14px;color:#666}.docs__content section>p{margin:15px 0;font-size:14px;line-height:20px;color:#666}.docs__content section>ol,.docs__content section>ul{padding:15px 0;background-color:#f5f7fa}.docs__content section>ol li,.docs__content section>ul li{color:#666;font-size:14px;line-height:20px;margin:5px 0 5px 20px;padding-left:15px;position:relative}.docs__content section>ol li:before,.docs__content section>ul li:before{content:"";position:absolute;top:0;left:0;width:6px;height:6px;margin-top:8px;border-radius:50%;-webkit-box-sizing:border-box;box-sizing:border-box;border:1px solid #666}.docs__content section>ol li li,.docs__content section>ul li li{margin-left:0}.docs__content section>hr{border:0 none;border-top:1px solid #eee}.docs__content section li>code,.docs__content section p>code,.docs__content section table code{margin:2px;padding:2px 7px;display:inline}.docs__content table{width:100%;font-size:13px;line-height:1.5;margin-bottom:45px;background-color:#fff;border-collapse:collapse;color:#333}.docs__content table th{padding:8px 10px;text-align:left;font-weight:400;background-color:#f5f7fa;border:1px solid #eaeefb}.docs__content table th:first-child{padding-left:10px}.docs__content table td{padding:8px;border:1px solid #eaeefb}.docs__content table code{font-size:13px;padding:0 8px;font-family:inherit;word-break:keep-all}.docs__content--changelog section{padding-bottom:30px}.docs__content--changelog section>h3+p,.docs__content--changelog section>h3+p code{margin:0}.docs__content--changelog section>h3 a{color:inherit;font-size:24px;-webkit-font-smoothing:auto}.docs__content--changelog section>h3:not(:first-of-type){margin-top:50px}

code{display:block;font-size:13px;overflow-x:auto;font-weight:400;line-height:22px;border-radius:3px;margin-bottom:25px;position:relative;word-break:break-all;white-space:pre-wrap;background-color:#f5f7fa;color:#455a64;padding:18px 10px 18px 20px;font-family:Source Code Pro,Monaco,Inconsolata,monospace}code:after{top:5px;right:10px;position:absolute;color:#ccc;font-size:12px}pre{margin:0}pre+pre{margin-top:-10px}code.language-html:after{content:"HTML"}code.language-javascript:after{content:"JS"}code.language-css:after{content:"CSS"}.hljs{display:block;overflow-x:auto;padding:.5em;background:#fff}.hljs-subst{color:#455a64}.hljs-addition,.hljs-meta,.hljs-string,.hljs-symbol,.hljs-template-tag,.hljs-template-variable{color:#756bb1}.hljs-comment,.hljs-quote{color:#999}.hljs-bullet,.hljs-link,.hljs-literal,.hljs-number,.hljs-regexp{color:#32a973}.hljs-deletion,.hljs-variable{color:#88f}.hljs-built_in,.hljs-doctag,.hljs-keyword,.hljs-name,.hljs-section,.hljs-selector-class,.hljs-selector-id,.hljs-selector-tag,.hljs-strong,.hljs-tag,.hljs-title,.hljs-type{color:#1976d2}.hljs-emphasis{font-style:italic}.hljs-attribute{color:#e6550d}
</style>
