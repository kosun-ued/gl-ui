![gl-logo](./static/GL-logo-128x128.png)

## 介绍

中文名：刚烈 [gāng liè]，英文名：GoodLuck [ɡud lʌk]

一套基于Vue2.0+的移动端基础组件，提供了一些移动端比较实用和常用的组件

## Install 安装

```bash
npm install ganglie-ui -S
```


## Start 使用

####  全局引入ganglie-ui

```javascript
import Vue from 'vue';
import GL from 'ganglie-ui'
	
Vue.use(GL)
```
#### 按需引入组件

```javascript
import Vue from 'vue';
import {Popup, Marquee} from 'ganglie-ui'

Vue.component(Popup.name, Popup)
Vue.component(Marquee.name, Marquee)
```

#### 全局组件的引入

```javascript
import Vue from 'vue';
import {Toast, Alert, Confirm} from 'ganglie-ui'
	
Vue.prototype.$toast = Toast
Vue.prototype.$alert = Alert
Vue.prototype.$confirm = Confirm
```

## License

MIT
