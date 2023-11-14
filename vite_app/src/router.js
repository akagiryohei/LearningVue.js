// Vue Routerにある関数をインポートする文（'vue-router')
import{ createRouter, createWebHistory } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import HelloJSX from './components/helloJSX.jsx'

// 外部ファイルでこのファイルを呼び出したときに、routerオブジェクトが外部から利用できるようにした。
export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/index/taro'
    },
    {
      path: '/index/:name',
      name: 'index',
      component: HelloWorld,
      props: true
    },
    {
      path: '/jsx/:name',
      name: 'jsx',
      component: HelloJSX,
      props: true
    },
  ],
})

