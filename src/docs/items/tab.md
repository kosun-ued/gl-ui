## Tab 标签栏

### 引入组件

```javascript
import {Tabs, TabItem} from 'ganglie-ui'

export default {
  components: {
    [Tabs.name]: Tabs,
    [TabItem.name]: TabItem
  }
}
```

### 使用

```html
<gl-tabs active-class="tab-active">
  <gl-tab-item @tap="tapTab" :key="i" v-for="i in 10">
    选项{{i}}
  </gl-tab-item>
</gl-tabs>
```


### 参数说明

| 参数  | 说明    |  类型  | 默认值 | 可选值 |
| --------   | ----   | ---- |---- |---- |
|active-class| 当前选中的tabItem的class | `String` | `gl-tab-active` | |

### tabItem事件说明

| 事件名  | 说明    |  传参 |
| -----| ---|-- |
|tap| tabItem被点击触发 | 返回被点击的tab的index索引