## Number-keyboard 数字键盘

### 引入组件

```javascript
import {NumberKeyboard} from 'ganglie-ui'

export default {
  components: {
    [NumberKeyboard.name]: NumberKeyboard
  }
}
```

### 使用

```html
<gl-number-keyboard
  v-model="visible"
  @delete="deleteText"
  @press="keyPress"
/>
```

### 参数说明

| 参数        | 说明    |  类型  | 默认值 | 可选值 |
| --------   | ----   | ---- |---- |---- |
|v-model| 显示隐藏数字键盘 | `Boolean` | `false` | `true` `false`|

### 事件说明

| 事件名        | 说明    |
| ------ |---- |
|delete| 点击删除按钮是触发|
|press| 点击普通按钮触发|