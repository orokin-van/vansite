import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/home.vue'
import Error404 from '@/views/404.vue'
import About from '@/views/about.vue'
import Tool from '@/views/tool.vue'
import Img from '@/views/img.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'orokin-van'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      title: 'about'
    }
  },
  {
    path: '/tool',
    name: 'Tool',
    component: Tool,
    meta: {
      title: '工具类'
    },
    children: [
      {
        path: 'img',
        name: 'Img',
        component: Img,
        meta: {
          title: '图片'
        },
      }
    ]
  },
  {
    path: '/:catchAll(.*)',
    component: Error404,
    meta: {
      title: '404 NOT FOUND'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.VITE_APP_BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  // 路由发生变化修改页面title
  if (to.meta.title) {
    document.title = to.meta.title as string
  }

  next()
})

export default router