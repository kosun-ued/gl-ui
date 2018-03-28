## Slider 轮播

### 引入组件

```javascript
import {Sliders, SliderItem} from 'ganglie-ui'

export default {
  components: {
    [Sliders.name]: Sliders,
    [SliderItem.name]: SliderItem
  }
}
```

### 使用

```html
<gl-slider
:initialIndex="2"
:duration="1000"
:autoplay="2000">
  <gl-slider-item :key="i" v-for="i in 5">{{i}}</gl-slider-item>
</gl-slider>
```

### 参数说明

| 参数        | 说明    |  类型  | 默认值 | 可选值 |
| --------   | ----   | ---- |---- |---- |
| autoplay  | 自动播放的时间间隔，0表示不会自动播放（ms） | `Number` | 0 |  |
| duration | 切换的动画时间（ms）| `Number` | 500 | |
|initialIndex| 默认显示的item索引 | `Number` | 0 | |
|showIndicators| 是否显示下面的小点点| `Boolean` | `true` ||
|height| slider的高度 | `String` | `150px`||