## Confirm 确认弹窗


### 引入方法

```javascript
import Vue from 'vue'
import {Confirm} from 'ganglie-ui'

Vue.prototype.$confirm = Confirm
```
### 使用

弹窗关闭之后，会返回一个promise

```javascript
this.$confirm({
  title: '紧急通知',
  message: '今天下午放假',
  ok-text: '我知道了',
  cancel-text: '下次再说'
}).then(() => {
  console.log('弹窗关闭')
})
```

快捷使用

```javascript
this.$confirm('今天下午放假咯！').then(() => {
  console.log('弹窗关闭')
})
```

### 参数说明

| 参数        | 说明    |  类型  | 默认值 | 可选值 |
| --------   | ----   | ---- |---- |---- |
| message  | 显示的文本内容 | `String` |  |  |
| title | 显示的标题文本内容 | `String` | | |
| ok-text | 确认按钮的文案 | `String` | | |
| cancel-text | 取消按钮的文案 | `String` | | |
