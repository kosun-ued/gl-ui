## NavBar 头部标题栏

### 引入组件

```javascript
import {NavBar} from 'ganglie-ui'

export default {
  components: {
    [NavBar.name]: NavBar
  }
}
```

### 使用

#### 通过属性定义头部信息

```html
<gl-nav-bar
  title="只有标题"
/>
```

```html
<gl-nav-bar
  title="GL-ui nav-bar"
  left-icon="back"
  background-color="#333"
  color="#fff"
  @tapLeft="$router.go(-1)"
/>
```

```html
<gl-nav-bar
  title="标题 + 右侧icon"
  right-icon="more-transverse"
/>
```

#### 使用slot自定义内容

```html
<gl-nav-bar
  left-text="返回"
  title="标题 + 左文字"
>
  <span slot="right">>></span>
</gl-nav-bar>
```

```html
<gl-nav-bar
  left-text="返回"
  title="标题 + 左文字"
>
  <span slot="left">Back</span>
  <span slot="center">标题</span>
  <span slot="right">>></span>
</gl-nav-bar>
```

### 参数说明

| 参数        | 说明    |  类型  | 默认值 | 可选值 |
| --------   | ----   | ---- |---- |---- |
|background-color|背景颜色| `String`| `#404B50`||
|color|字体颜色|`String`|`#D9DBDC`||
|left-icon|左边的icon| `String`|||
|right-icon|右边的icon| `String`|||
|left-text|左边的文字| `String`|||
|right-text|右边的text| `String`|||
|title|中间标题文字| `String`|||



