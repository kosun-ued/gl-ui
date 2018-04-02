/*****************************************************
 *        ___           ___       ___
 *       /\  \         /\__\     /\__\          ___
 *      /::\  \       /:/  /    /:/  /         /\  \
 *     /:/\:\  \     /:/  /    /:/  /          \:\  \
 *    /:/  \:\  \   /:/  /    /:/  /  ___      /::\__\
 *   /:/__/_\:\__\ /:/__/    /:/__/  /\__\  __/:/\/__/
 *   \:\  /\ \/__/ \:\  \    \:\  \ /:/  / /\/:/  /
 *    \:\ \:\__\    \:\  \    \:\  /:/  /  \::/__/
 *     \:\/:/  /     \:\  \    \:\/:/  /    \:\__\
 *      \::/  /       \:\__\    \::/  /      \/__/
 *       \/__/         \/__/     \/__/
 *
 *****************************************************/
import viewport from './utils/viewport'
import FastClick from 'fastclick'

import NavBar from './nav-bar'
import Scroller from './scroller'
import Popup from './popup/'
import Marquee from './marquee'
import Sliders from './slider/sliders'
import SliderItem from './slider/slider-item'
import Tabs from './tab/tabs'
import TabItem from './tab/tab-item'
import ActionSheet from './actionSheet/action-sheet'
import ActionSheetItem from './actionSheet/action-sheet-item'
import NumberKeyboard from './number-keyboard'
import Picker from './picker/picker.vue'
import TimePicker from './picker/timePicker.vue'

import Toast from './toast'
import { Alert, Confirm } from './dialog'

const version = '0.0.1'
const components = [
  NavBar,
  Scroller,
  Popup,
  Marquee,
  ActionSheet,
  ActionSheetItem,
  Sliders,
  SliderItem,
  Tabs,
  TabItem,
  NumberKeyboard,
  Picker,
  TimePicker
]

const install = Vue => {
  if (install.installed) {
    return
  }
  install.installed = true
  components.forEach(Component => {
    Vue.component(Component.name, Component)
  })

  Vue.prototype.$toast = Toast
  Vue.prototype.$alert = Alert
  Vue.prototype.$confirm = Confirm
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
  FastClick.attach(document.body)
}

export {
  install,
  viewport,

  NavBar,
  Scroller,
  Popup,
  Marquee,
  ActionSheet,
  ActionSheetItem,
  Sliders,
  SliderItem,
  Tabs,
  TabItem,
  NumberKeyboard,
  Picker,
  TimePicker,

  Toast,
  Alert,
  Confirm
}

export default {
  install,
  version,
  viewport
}
