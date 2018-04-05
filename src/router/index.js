import Vue from 'vue'
import Router from 'vue-router'

import demo from './demo'
import docsChildren from './docs'

import Docs from '../docs/main.vue'

Vue.use(Router)

const initRoutes = (routList) => {
  const _list = []
  routList.forEach(item => {
    _list.push({
      path: item.path,
      name: item.name,
      component: (resolve) => {
        const filePath = item.filePath || item.path
        let suffix = item.type || (/demo/.test(filePath) ? '.vue' : '.md')
        const fileName = filePath + suffix

        import('../../src' + fileName).then((module) => {
          resolve(module)
        })
      }
    })
  })
  return _list
}
const routes = initRoutes([...demo])

export default new Router({
  linkActiveClass: 'is-active',
  mode: 'history',
  routes: [
    ...routes,
    {
      path: '/docs',
      name: 'docs',
      component: Docs,
      children: initRoutes([...docsChildren])
    },
    {
      path: '*',
      redirect: '/docs/index'
    }
  ]
})
