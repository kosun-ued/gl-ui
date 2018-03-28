## Scroller 滚动容器

本组件基于[better-scroll](https://ustbhuangyi.github.io/better-scroll/doc/zh-hans/#better-scroll%20%E6%98%AF%E4%BB%80%E4%B9%88)插件实现

### 引入组件

```javascript
import {Scroller} from 'ganglie-ui'

export default {
  components: {
    [Scroller.name]: Scroller
  }
}
```

### 使用

`scroller`组件暴露了一些主动调用的方法，所以需要给组件一个ref

```html
<gl-scroller
  ref="gl-scroll"
  @pullingDown="pullingDown"
  @pullingUp="pullingUp"
  :options="options"
  class="scroller scroller-1">
  <p :key="i" @click="tapItem(i)" v-for="i in items">item-{{i}}</p>
</gl-scroller>
```
js

```javascript
export default {
  data () {
    return {
      items: 20,
      options: {
        click: true,
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
        this.$refs['gl-scroll'].pullDownRefreshDone()
      }, 1500)
    },

    pullingUp () {
      setTimeout(() => {
        this.items = 30
        this.$refs['gl-scroll'].pullUpLoadDone(true)
      }, 1000)
    }
  }
}
```

### 参数说明

| 参数        | 说明    |  类型  | 默认值 | 可选值 |
| --------   | ----   | ---- |---- |---- |
|options| 这里可配置项请参考better-scroll | `Object` | |