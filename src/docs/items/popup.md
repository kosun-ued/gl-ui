## Popup 自定义弹窗


### 引入组件

```javascript
import {Popup} from 'ganglie-ui'

export default {
  components: {
    [Popup.name]: Popup
  }
}
```


### 使用

```html
<gl-popup
  v-model="visible"
  pos="center"
  :close-by-click-mask="true"
  :mask="true"
>
  <p>title</p>
  <p>content</p>
</gl-popup>
```

### 参数说明

| 参数        | 说明    |  类型  | 默认值 | 可选值 |
| --------   | ----   | ---- |---- |---- |
|v-model| 显示隐藏弹窗| `Boolean` | `false` | |
|pos | 弹窗显示位置 | `String` | `center` | `center` `bottom` `top` `full`|
|close-by-click-mask| 是否可点击遮罩关闭弹窗 | `Boolean` | `true` | |
|mask| 是否显示遮罩| `Boolean` | `true` || 
