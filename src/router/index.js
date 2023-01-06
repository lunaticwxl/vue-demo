import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import WebView from '@/components/models/WebView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: WebView,
      meta:{
        name :'首页'
      }
    },
    {
      path: '/webView',
      name: 'webView',
      component: WebView,
      children:[{
        name: 'Portal',
        path: '/portal',
        // component: WebView,
        meta:{
          iframe_infos:[{
            link: 'http://161.189.57.196:18099/login',
            name: 'portal_dev_trust'
          },
          {
            link: 'http://161.189.207.206:18099/login',
            name: 'portal_dev_commercial'
          }]
        }
      },
      {
        name: 'Panel',
        path: '/panel',
        // component: WebView,
        meta:{
          iframe_infos:[{
            link: 'http://18.222.12.111:2096',
            name: 'panel_dev'
          },
          {
            link: 'http://52.83.125.166:2096',
            name: 'panel_sit'
          }]
        }
      }],
      
    }
  ]
})
