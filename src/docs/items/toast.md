## Toast 轻提示

### 引入方法

```javascript
import Vue from 'vue'
import {Toast} from 'ganglie-ui'

Vue.prototype.$alert = Toast
```


### 使用

#### 快捷使用

``` javascript
this.$toast('只有message的时候')
```

#### 配置更多参数

toast自动关闭之后，会返回一个promise

``` javascript
this.$toast({
  message: 'GL-ui 666',
  duration: 1000
}).then(() => {
  console.log('toast 关闭了')
})
```

#### 设置图标

``` javascript
this.$toast({
  message: '干得漂亮',
  type: 'success'
})
```

### 参数说明

| 参数        | 说明    |  类型  | 默认值 | 可选值 |
| --------   | ----   | ---- |---- |---- |
| message  | 显示的文本内容 | `String` |  |  |
| duration | toast显示时间（单位ms）| `Number` | `3000` | |
| mask | 是否显示遮罩 | `Boolean` | `false` | `true` `false` |
| type | 显示icon的类型 | `String` |  | `loading` `success` `warn` |
