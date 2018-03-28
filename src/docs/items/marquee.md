## Marquee 走马灯公告


### 引入组件

```javascript
import {Marquee} from 'ganglie-ui'

export default {
  components: {
    [Marquee.name]: Marquee
  }
}
```

### 使用

通过 `slot='left'` `slot='right'` 可以配置走马灯左右两边的图标或者文字

```html
<gl-marquee
  color="#900"
  background-color="#ddd"
  text="数字彩中间的title有异常样式。体彩右上角可出现两个icon超出可左右滑动，点击相应tab，把该tab滑动到中间位置"
  >
  <i class="gl-icon icon-back" slot="left"></i>
  <i class="gl-icon icon-error" slot="right"></i>
</gl-marquee>
```

### 参数说明

| 参数        | 说明    |  类型  | 默认值 | 可选值 |
| --------   | ----   | ---- |---- |---- |
| color | 字体颜色 | `String` | `#000` | |
| background-color | 背景颜色 | `String` | `transparent` | |
| text | 公告文字 | `String` | | |
| delay | 文字停留多久才开始滚动 | `Number` | | |
| speed | 文字滚动速度(ms) | `Number` | `50` | 
