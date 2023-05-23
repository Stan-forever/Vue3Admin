import { createApp } from 'vue'

//公共样式
import '@/styles/reset.scss'
import '@/styles/common.scss'
import '@/styles/element.scss'

import App from './App.vue'

import MainContent from '@/layouts/components/MainContent/index.vue'
import ProTable from '@/components/ProTable/index.vue'

//路由
import router from './router'

//pinia
import pinia from '@/store/index'

//element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)

//icon
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(router)
app.use(pinia)
app.use(ElementPlus)
// app.use(ElementPlus, {
//     locale: zhCn
// })
app.component('MainContent', MainContent)
app.component('ProTable', ProTable)
app.mount('#app')
