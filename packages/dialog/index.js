import Dialog from './dialog.vue'
import Vue from 'vue'

let dialogPool = []

const showDialog = (params, type) => {
  let options = {}
  if (typeof params === 'string') {
    options.message = params
  } else if (typeof params === 'object') {
    options = params
  }

  let _dialog
  if (!dialogPool.length) {
    const Instance = new Vue({
      render (h) {
        return h(Dialog)
      }
    })

    const component = Instance.$mount()
    document.body.appendChild(component.$el)
    _dialog = Instance.$children[0]
  } else {
    _dialog = dialogPool.pop()
  }

  _dialog.show(options, type)
  return new Promise ((resolve, reject) => {
    _dialog.$once('close', (action) => {
      dialogPool.push(_dialog)
      resolve(action)
    })
  })
}

const Alert = (params) => {
  return showDialog(params, 'alert')
}

const Confirm = (params) => {
  return showDialog(params, 'confirm')
}

export {
  Alert,
  Confirm
}