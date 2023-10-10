import { createApp } from 'vue'
// 全局样式
import '@renderer/common/styles/frame.styl'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import App from '@renderer/views/login/login.vue'
// import App from '@renderer/views/home/home.vue'
import App from '@renderer/App.vue'
import router from './router'

const app = createApp(App)
app.use(ElementPlus, {
  locale: 'zhCn'
})
app.use(router)
app.mount('#app')
