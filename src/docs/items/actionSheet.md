## actionSheet 行动按钮


### 引入组件

```javascript
import {ActionSheet, ActionSheetItem} from 'ganglie-ui'

export default {
  components: {
    [ActionSheet.name]: ActionSheet,
    [ActionSheetItem.name]: ActionSheetItem
  }
}
```

### 使用组件

```html
<gl-action-sheet
  v-model="actionSheetVisible"
  :close-by-click-mask="true"
  title="标题"
>
  <gl-action-sheet-item>苹果</gl-action-sheet-item>
  <gl-action-sheet-item>香蕉</gl-action-sheet-item>
  <gl-action-sheet-item>学历</gl-action-sheet-item>
  <gl-action-sheet-item>汽车</gl-action-sheet-item>
  <gl-action-sheet-item>汽车</gl-action-sheet-item>
  <gl-action-sheet-item>汽车</gl-action-sheet-item>
  <gl-action-sheet-item>汽车</gl-action-sheet-item>
</gl-action-sheet>
```

### 参数说明

| 参数  | 说明    |  类型  | 默认值 | 可选值 |
| --------   | ----   | ---- |---- |---- |
| v-model | 控制弹窗的显示隐藏 | `Boolean` | `false` | `true` `false` |
| close-by-click-mask | 点击遮罩是否关闭弹窗 | `true` | `true` `false` |
| title | 标题内容 | `String` |  | |