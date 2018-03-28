## Alert 提示弹窗

### 引入方法

```javascript
import Vue from 'vue'
import {Alert} from 'ganglie-ui'

Vue.prototype.$alert = Alert
```

### 使用

弹窗关闭之后，会返回一个promise

```javascript
this.$alert({
  title: '紧急通知',
  message: '今天下午放假'
}).then(() => {
  console.log('弹窗关闭')
})
```

快捷使用

```javascript
this.$alert('今天下午放假咯！').then(() => {
  console.log('弹窗关闭')
})
```

### 参数说明

| 参数        | 说明    |  类型  | 默认值 | 可选值 |
| --------   | ----   | ---- |---- |---- |
| message  | 显示的文本内容 | `String` |  |  |
| title | 显示的标题文本内容 | `String` | | |
