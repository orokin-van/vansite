import { createVNode } from 'vue'
import * as Icons from '@element-plus/icons-vue'

import App from '@/App.vue'
import router from '@/router/index'

const app = createApp(App)

// 定义 icon 组件
const Icon = (props: { icon: string }) => {
  const { icon } = props
  return createVNode(Icons[icon as keyof typeof Icons])
}

app.component('Icon', Icon)
app.use(router).use(createPinia()).mount('#app')
