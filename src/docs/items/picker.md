## picker 选择器

### 引入组件

```javascript
import { Picker, TimePicker } from 'ganglie-ui'

export default {
  components: {
    [Picker.name]: Picker,
    [TimePicker.name]: TimePicker
  }
}
```

### 普通picker
#### 使用

```html
<gl-picker
  v-model="visible"
  :data="multiData"
  title="多列picker"
  @cancel="pickerCancel"
  @select="pickerSelect"
  @change="pickerChange"
>
</gl-picker>
```
#### 参数说明
| 参数        | 说明    |  类型  | 默认值 |
| --------   | ----   | ---- |---- |
| value | picker的显示及隐藏 | `Boolean` | false |
| data  | 传入的要展示的数据列表 | `Array` |  |
| selectedIndex | 列表中默认的要选中的内容的index数组 | `Array` | [0, 0, 0] |
| title | 显示的标题文本内容 | `String` | 空 |
| cancelText | 取消选项的文字 | `String` | 取消 |
| okText | 确认选项的文字 | `String` | 确认 |
| textKey | 显示的文字的key | `String` | text |
| valueKey | 显示的文字的值的key | `String` | value |

#### 事件说明
| 事件名       | 说明    | 传参 |
| --------   | ----   | ---- |
| cancel | 关闭或取消picker | |
| select | 确认选择器的选项 | 返回三个参数：value数组，index数组，text数组 |
| change | 手动滚动选择器时，触发的事件 | 返回两个参数：滚动的列index，当前列滚动到的index |

### 时间选择器 time-picker

#### 使用
```html
<gl-time-picker
  v-model="visible"
  format="YYYY-MM-DD hh:mm:ss"
  title="time picker"
  :date="timePickerDate"
  @cancel="timePickerCancel"
  @select="timePickerSelect"
>
</gl-time-picker>
```
#### 参数说明
| 参数        | 说明    |  类型  | 默认值 |
| --------   | ----   | ---- |---- |
| value | timePicker的显示及隐藏 | `Boolean` | false |
| date  | 初始化要显示的时间戳 | `Number` | 当前时间戳 |
| format | 格式化时间，Y:年,M:月,D:日,h:时,m:分,s:秒 | `String` | YYYY-MM-DD |
| title | 显示的标题文本内容 | `String` | 空 |

#### 事件说明
| 事件名       | 说明    | 传参 |
| --------   | ----   | ---- |
| cancel | 关闭或取消picker | |
| select | 确认当前选中的时间 | 返回format后的选中时间 |
