import { createApp } from 'vue'
// 全局样式
import '@renderer/common/styles/frame.styl'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from '@renderer/views/login/login.vue'

const app = createApp(App)
app.use(ElementPlus, {
  locale: 'zhCn'
})

app.mount('#app')
